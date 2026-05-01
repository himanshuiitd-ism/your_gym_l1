"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { name: "Home", href: "/" },
    { name: "Programs", href: "/programs" },
    { name: "Facilities", href: "/facilities" },
    { name: "Why Us", href: "/why-us" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-md border-b border-[rgba(0,0,0,0.4)] shadow-lg">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="text-2xl font-black italic uppercase tracking-wider text-white flex items-center gap-2">
          <div className="w-8 h-8 bg-primary flex items-center justify-center text-black leading-none">EP</div>
          ELITE PERFORMANCE
        </Link>
        <nav className="hidden md:flex space-x-8 text-xs font-bold uppercase tracking-widest items-center h-full">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`transition-colors h-full flex items-center border-b-4 ${
                  isActive 
                    ? "text-primary border-primary" 
                    : "text-white border-transparent hover:text-primary hover:border-primary/50"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
        <Link href="/contact" className="bg-primary hover:bg-primary-hover text-black text-xs font-bold uppercase tracking-widest py-3 px-6 transition-all shadow-[0_0_20px_rgba(207,255,4,0.6)] hover:shadow-[0_0_30px_rgba(207,255,4,0.8)] hover:scale-105">
          Join Now
        </Link>
      </div>
    </header>
  );
}
