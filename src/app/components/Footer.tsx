"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bottom-0 left-0 w-full bg-white/30 backdrop-blur-md border-t border-dashed border-black/20 mt-10">
      <div className="max-w-6xl mx-auto px-6 py-6 border-dashed border-l-[1.5px] border-r-[1.5px] border-black/20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <img
            style={{ width: "130px" }}
            src="img/InspringLogo-Transparent.png"
            loading="lazy"
            alt="InspiringLife Technologies logo"
            className="image"
          />

          {/* Nav links */}
          <nav className="flex items-center gap-6 text-sm text-gray-600">
            <FooterLink href="#work">Our Work</FooterLink>
            <FooterLink href="#services">Services</FooterLink>
            <FooterLink href="#comparison">About</FooterLink>
            <FooterLink href="#faqs">Contact</FooterLink>
          </nav>

          {/* Social + contact */}
          <div className="flex items-center gap-6 text-sm text-gray-600">
            <FooterLink href="https://instagram.com" external>
              Instagram
            </FooterLink>
            <FooterLink href="https://linkedin.com" external>
              LinkedIn
            </FooterLink>
            <FooterLink href="mailto:hello@inspiringlife.cc">
              Email
            </FooterLink>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-dashed border-black/10 text-center">
          <p className="text-xs text-gray-500 normal-text">
            &copy; 2025 InspiringLife Technologies Pvt. Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({
  href,
  children,
  external,
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
}) {
  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="relative group transition-all duration-300 hover:-translate-y-1 hover:text-black"
    >
      <span className="relative z-10">{children}</span>
      <span className="absolute left-1/2 -translate-x-1/2 -bottom-[6px] w-1 h-1 bg-black rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-y-[-2px]"></span>
    </Link>
  );
}
