"use client"

import { useEffect, useRef } from "react"

type WaterRippleProps = {
  // Smaller = higher quality but more CPU; larger = lighter. 3–6 is a good range.
  pixelRatio?: number
  damping?: number
  dropRadius?: number
  dropStrength?: number
  autoDrips?: boolean
  refraction?: boolean
  refractScale?: number
  specular?: boolean
  specularStrength?: number
  specularPower?: number
}

export function WaterRippleBackground({
  pixelRatio = 4,
  damping = 0.995,
  dropRadius = 3,
  dropStrength = 1.0,
  autoDrips = true,
  refraction = true,
  refractScale = 6,
  specular = true,
  specularStrength = 0.5,
  specularPower = 24,
}: WaterRippleProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const rafRef = useRef<number | null>(null)

  // Simulation buffers and offscreen rendering surface
  const gridRef = useRef({
    w: 0,
    h: 0,
    curr: new Float32Array(0),
    prev: new Float32Array(0),
    offscreen: document.createElement("canvas") as HTMLCanvasElement,
    offctx: null as CanvasRenderingContext2D | null,
    imagedata: null as ImageData | null,
    baseTex: null as ImageData | null, // base texture
  })

  const sizeRef = useRef({ width: 0, height: 0 })
  const pointerRef = useRef({ x: -1, y: -1, active: false })
  const lastDropRef = useRef(0)

  // Initialize or resize simulation
  function setup(width: number, height: number) {
    const W = Math.max(32, Math.floor(width / pixelRatio))
    const H = Math.max(24, Math.floor(height / pixelRatio))

    gridRef.current.w = W
    gridRef.current.h = H
    gridRef.current.curr = new Float32Array(W * H)
    gridRef.current.prev = new Float32Array(W * H)

    const off = gridRef.current.offscreen
    off.width = W
    off.height = H
    gridRef.current.offctx = off.getContext("2d", { willReadFrequently: true })
    if (gridRef.current.offctx) {
      gridRef.current.imagedata = gridRef.current.offctx.createImageData(W, H)
      gridRef.current.baseTex = createBaseTexture(W, H) // base texture
    }

    sizeRef.current.width = width
    sizeRef.current.height = height
  }

  function injectDrop(clientX: number, clientY: number, amp = dropStrength) {
    const { w, h, curr } = gridRef.current
    if (!w || !h) return
    const rect = { left: 0, top: 0, width: sizeRef.current.width, height: sizeRef.current.height }
    // Map client coords to grid coords
    const gx = Math.floor(((clientX - rect.left) / rect.width) * w)
    const gy = Math.floor(((clientY - rect.top) / rect.height) * h)

    const r = Math.max(1, Math.floor(dropRadius))
    const r2 = r * r

    for (let dy = -r; dy <= r; dy++) {
      const yy = gy + dy
      if (yy <= 0 || yy >= h - 1) continue
      for (let dx = -r; dx <= r; dx++) {
        const xx = gx + dx
        if (xx <= 0 || xx >= w - 1) continue
        const dist2 = dx * dx + dy * dy
        if (dist2 > r2) continue
        const falloff = Math.exp(-dist2 / (r2 * 0.5))
        curr[yy * w + xx] += amp * falloff
      }
    }
  }

  function step() {
    const { w, h, curr, prev } = gridRef.current
    if (!w || !h) return

    // Wave update: next = (avg neighbors / 2 - prev) * damping
    for (let y = 1; y < h - 1; y++) {
      const yw = y * w
      for (let x = 1; x < w - 1; x++) {
        const i = yw + x
        const val = (curr[i - 1] + curr[i + 1] + curr[i - w] + curr[i + w]) / 2 - prev[i]
        prev[i] = val * damping
      }
    }

    // Swap buffers: prev becomes current height field, curr reused as previous
    const tmp = gridRef.current.curr
    gridRef.current.curr = gridRef.current.prev
    gridRef.current.prev = tmp
  }

  // Generate a diagonal teal-ish gradient base texture with subtle noise
  function createBaseTexture(W: number, H: number) {
    const off = document.createElement("canvas")
    off.width = W
    off.height = H
    const ctx = off.getContext("2d", { willReadFrequently: true })!
    const img = ctx.createImageData(W, H)
    const data = img.data

    // Colors: deep charcoal -> teal blue (kept subtle)
    const c0 = [11, 23, 32] // #0b1720
    const c1 = [14, 122, 166] // #0e7aa6

    for (let y = 0; y < H; y++) {
      for (let x = 0; x < W; x++) {
        const i = (y * W + x) * 4
        const t = Math.min(1, Math.max(0, (x / W) * 0.7 + (y / H) * 0.3))
        const n = (Math.sin(x * 0.15) * Math.cos(y * 0.12) + 1) * 0.5 * 0.06 // subtle texture
        const r = Math.round(c0[0] * (1 - t) + c1[0] * t + 255 * n * 0.08)
        const g = Math.round(c0[1] * (1 - t) + c1[1] * t + 255 * n * 0.1)
        const b = Math.round(c0[2] * (1 - t) + c1[2] * t + 255 * n * 0.12)
        data[i] = r
        data[i + 1] = g
        data[i + 2] = b
        data[i + 3] = 255
      }
    }
    return img
  }

  function renderToCanvas(ctx: CanvasRenderingContext2D) {
    const { w, h, curr, offctx, imagedata, offscreen, baseTex } = gridRef.current
    const { width, height } = sizeRef.current
    if (!w || !h || !offctx || !imagedata) return

    const data = imagedata.data

    if (refraction && baseTex) {
      const base = baseTex.data
      // light direction for highlights
      const Lx = 0.8,
        Ly = 0.6,
        Lz = 1.0
      const Llen = Math.hypot(Lx, Ly, Lz)
      const nLx = Lx / Llen,
        nLy = Ly / Llen,
        nLz = Lz / Llen

      let p = 0
      for (let y = 0; y < h; y++) {
        const yw = y * w
        for (let x = 0; x < w; x++) {
          // Height gradients
          const left = curr[yw + Math.max(0, x - 1)]
          const right = curr[yw + Math.min(w - 1, x + 1)]
          const up = curr[Math.max(0, y - 1) * w + x]
          const down = curr[Math.min(h - 1, y + 1) * w + x]
          const nx = left - right
          const ny = up - down

          // Refract sample coords in base texture
          const sx = Math.max(0, Math.min(w - 1, Math.round(x + nx * refractScale)))
          const sy = Math.max(0, Math.min(h - 1, Math.round(y + ny * refractScale)))
          const bi = (sy * w + sx) * 4

          // Base refracted color
          let r = base[bi]
          let g = base[bi + 1]
          let b = base[bi + 2]

          if (specular) {
            // Approximate normal with Z-up for highlight
            const Nz = 1.0
            const invLen = 1.0 / Math.hypot(nx, ny, Nz)
            const Nxn = nx * invLen,
              Nyn = ny * invLen,
              Nzn = Nz * invLen
            const ndotl = Math.max(0, Nxn * nLx + Nyn * nLy + Nzn * nLz)
            const spec = specularStrength * Math.pow(ndotl, specularPower)
            r = Math.min(255, r + 255 * spec)
            g = Math.min(255, g + 255 * spec)
            b = Math.min(255, b + 255 * spec)
          }

          data[p++] = r
          data[p++] = g
          data[p++] = b
          data[p++] = 255
        }
      }
    } else {
      // Compute simple shading from height-field normals
      const data = imagedata.data
      const lightX = 0.8 // light direction bias
      const lightY = 0.6
      let p = 0
      for (let y = 0; y < h; y++) {
        const yw = y * w
        for (let x = 0; x < w; x++) {
          // Finite differences with clamping at edges
          const cx = curr[yw + x]
          const left = curr[yw + Math.max(0, x - 1)]
          const right = curr[yw + Math.min(w - 1, x + 1)]
          const up = curr[Math.max(0, y - 1) * w + x]
          const down = curr[Math.min(h - 1, y + 1) * w + x]

          const nx = left - right
          const ny = up - down

          // Shade: base 128 mid-gray + normal-dot-light scaled
          const shade = 128 + ((nx * lightX + ny * lightY) * 255) / 4
          const v = Math.max(0, Math.min(255, shade))

          data[p++] = v // R
          data[p++] = v // G
          data[p++] = v // B
          data[p++] = 255 // A
        }
      }
    }

    offctx.putImageData(imagedata, 0, 0)

    // Draw to main canvas
    ctx.save()
    ctx.clearRect(0, 0, width, height)
    ctx.imageSmoothingEnabled = true
    ctx.imageSmoothingQuality = "high"
    ctx.globalCompositeOperation = "source-over"
    ctx.drawImage(offscreen, 0, 0, width, height)
    ctx.restore()
  }

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Resize observer to keep canvas in sync with viewport
    const resize = () => {
      const width = window.innerWidth
      const height = window.innerHeight
      canvas.width = width
      canvas.height = height
      setup(width, height)
    }
    resize()
    const ro = new ResizeObserver(resize)
    ro.observe(document.documentElement)

    const onPointerMove = (e: PointerEvent) => {
      pointerRef.current.x = e.clientX
      pointerRef.current.y = e.clientY
      pointerRef.current.active = true
      injectDrop(e.clientX, e.clientY, dropStrength * 0.6)
    }
    const onPointerDown = (e: PointerEvent) => {
      injectDrop(e.clientX, e.clientY, dropStrength * 1.2)
    }

    window.addEventListener("pointermove", onPointerMove, { passive: true })
    window.addEventListener("pointerdown", onPointerDown, { passive: true })

    const loop = () => {
      // Gentle automatic drips to keep motion alive
      const now = performance.now()
      if (autoDrips && now - lastDropRef.current > 1800) {
        lastDropRef.current = now
        const x = Math.random() * sizeRef.current.width
        const y = Math.random() * sizeRef.current.height
        injectDrop(x, y, dropStrength * 0.4)
      }

      step()
      renderToCanvas(ctx)
      rafRef.current = requestAnimationFrame(loop)
    }
    rafRef.current = requestAnimationFrame(loop)

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      window.removeEventListener("pointermove", onPointerMove)
      window.removeEventListener("pointerdown", onPointerDown)
      ro.disconnect()
    }
  }, [
    pixelRatio,
    damping,
    dropRadius,
    dropStrength,
    autoDrips,
    refraction,
    refractScale,
    specular,
    specularStrength,
    specularPower,
  ])

  return (
    // The canvas is a decorative background; keep it non-interactive and behind content.
    <canvas ref={canvasRef} aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 h-full w-full" />
  )
}

export default WaterRippleBackground
