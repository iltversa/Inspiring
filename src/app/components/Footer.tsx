"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="bottom-0 left-0 w-full z-50 bg-white/30 backdrop-blur-md border-dashed border-b-[1.5px] border-black/20">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-2 border-dashed border-l-[1.5px] border-r-[1.5px] border-black/20">
        <footer className="w-full flex items-center justify-between py-4 text-black">
          {/* Copyright */}
          <p className="text-sm text-gray-600">
            © 2025 InspiringLife All rights reserved
          </p>

          {/* Logo */}
{/* <div style={{ width: "40%" }} className=""> */}
            <img style={{ width: "16%" }} src="img/InspringLogo-Transparent.png" loading="lazy" alt="company-logo" className="image" />
          {/* </div> */}
          {/* Links */}
          <div className="flex items-center gap-6 text-sm text-gray-700">
            <FooterLink href="#">Instagram</FooterLink>
            <FooterLink href="mailto:info@inspiringlife.com">Email</FooterLink>
          </div>
        </footer>
      </div>
    </div>
  );
}

/* Reusable footer link with hover dot + lift effect */
function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="relative group transition-all duration-300 hover:-translate-y-1"
    >
      <span className="relative z-10">{children}</span>
      {/* Animated dot */}
      <span className="absolute left-1/2 -translate-x-1/2 -bottom-[6px] w-1 h-1 bg-black rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-y-[-2px]"></span>
    </Link>
  );
}
