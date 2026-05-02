import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import BottomNav from "@/components/BottomNav";
import WhatsAppButton from "@/components/WhatsAppButton";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "Elite Performance",
  description: "Elite training facility for peak physical and mental performance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex flex-col min-h-screen pt-16 md:pt-20 pb-24 md:pb-0">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <Navbar />
          <BottomNav />
          <WhatsAppButton />

        {/* Main Content */}
        <main className="flex-grow">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-background border-t border-border-color py-12 text-xs font-bold uppercase tracking-widest text-foreground/60">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-col gap-2">
              <span className="text-foreground text-lg font-black italic tracking-wider">ELITE PERFORMANCE</span>
              <span>&copy; {new Date().getFullYear()} ELITE PERFORMANCE GYM. ALL RIGHTS RESERVED.</span>
            </div>
            <div className="flex space-x-6">
              <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
              <Link href="#" className="hover:text-primary transition-colors">Member Portal</Link>
              <Link href="#" className="hover:text-primary transition-colors">Careers</Link>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary transition-colors">Instagram</a>
              <a href="#" className="hover:text-primary transition-colors">Youtube</a>
              <a href="#" className="hover:text-primary transition-colors">X</a>
            </div>
          </div>
        </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
