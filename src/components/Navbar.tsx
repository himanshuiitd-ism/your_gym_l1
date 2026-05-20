"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const links = [
    { name: "Home", href: "/" },
    { name: "Programs", href: "/programs" },
    { name: "Facilities", href: "/facilities" },
    { name: "Why Us", href: "/why-us" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/70 backdrop-blur-lg border-b border-border-color/40 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="text-2xl font-black italic uppercase tracking-wider text-foreground flex items-center gap-3">
          <div className="w-9 h-9 bg-primary flex items-center justify-center text-black font-black italic text-sm leading-none relative shadow-[0_0_15px_rgba(207,255,4,0.3)]">
            <span className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-black"></span>
            EP
          </div>
          <span className="font-display tracking-[0.15em] text-base md:text-lg">ELITE PERFORMANCE</span>
        </Link>
        <nav className="hidden md:flex space-x-8 text-[11px] font-black uppercase tracking-widest items-center h-full">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`transition-all duration-300 h-full flex items-center border-b-2 px-1 ${
                  isActive 
                    ? "text-primary border-primary font-black" 
                    : "text-foreground/75 border-transparent hover:text-primary hover:border-primary/50 font-medium"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-4">
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 border border-border-color/60 hover:border-primary/50 bg-card/50 hover:bg-card text-foreground transition-all flex items-center justify-center w-10 h-10 rounded-[4px]"
              aria-label="Toggle Dark Mode"
            >
              {theme === "dark" ? (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
              ) : (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>
              )}
            </button>
          )}
          <Link href="/contact" className="hidden md:flex bg-primary hover:bg-primary-hover text-primary-content text-[11px] font-black uppercase tracking-widest py-3 px-6 transition-all shadow-[0_0_15px_rgba(207,255,4,0.4)] hover:shadow-[0_0_25px_rgba(207,255,4,0.7)] hover:scale-[1.03] rounded-[4px]">
            JOIN NOW
          </Link>
        </div>
      </div>
    </header>
  );
}
