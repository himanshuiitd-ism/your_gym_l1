"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function ContactPage() {
  const [result, setResult] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");
    setResult("Sending Intel...");

    const formData = new FormData(event.currentTarget);
    formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        setResult("Intel Received. We will contact you soon.");
        (event.target as HTMLFormElement).reset();
      } else {
        console.log("Error", data);
        setStatus("error");
        setResult(data.message);
      }
    } catch (error) {
      console.log("Error", error);
      setStatus("error");
      setResult("Submission failed. Try again.");
    }
  };

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex flex-col justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop" 
            alt="Contact Hero" 
            fill
            className="object-cover opacity-30 grayscale"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-darker to-transparent" />
        </div>
        
        <div className="relative z-10 px-4 sm:px-6 max-w-7xl mx-auto w-full text-center">
          <h1 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter text-foreground mb-4 leading-none">
            GET IN <span className="text-foreground">TOUCH</span>
          </h1>
          <p className="text-primary font-bold uppercase tracking-widest text-lg">
            NO EXCUSES. JUST RESULTS.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-12 bg-background -mt-24 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-8">
          
          {/* Left Form */}
          <div className="bg-background p-8 md:p-12 border-l-4 border-primary shadow-2xl">
            <h2 className="text-3xl font-black italic uppercase tracking-widest mb-8">MESSAGE HQ</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-[10px] font-bold uppercase tracking-widest text-foreground/70">SOLDIER NAME</label>
                  <input name="name" type="text" id="name" required className="w-full bg-background border border-border-color px-4 py-3 text-xs text-foreground focus:outline-none focus:border-primary transition-colors" placeholder="ENTER FULL NAME" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-[10px] font-bold uppercase tracking-widest text-foreground/70">PHONE NUMBER</label>
                  <input name="phone" type="tel" id="phone" required className="w-full bg-background border border-border-color px-4 py-3 text-xs text-foreground focus:outline-none focus:border-primary transition-colors" placeholder="+1 (555) 000-0000" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="program" className="text-[10px] font-bold uppercase tracking-widest text-foreground/70">INTERESTED PROGRAM</label>
                <select name="program" id="program" className="w-full bg-background border border-border-color px-4 py-3 text-xs text-foreground/70 focus:outline-none focus:border-primary transition-colors appearance-none">
                  <option>ELITE STRENGTH & CONDITIONING</option>
                  <option>HIIT RECKONING</option>
                  <option>IRON MASTERY</option>
                  <option>KINETIC FLOW</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="mission" className="text-[10px] font-bold uppercase tracking-widest text-foreground/70">YOUR MISSION</label>
                <textarea name="message" id="mission" rows={4} required className="w-full bg-background border border-border-color px-4 py-3 text-xs text-foreground focus:outline-none focus:border-primary transition-colors resize-none" placeholder="DESCRIBE YOUR FITNESS GOALS..."></textarea>
              </div>

              <button 
                type="submit" 
                disabled={status === "loading"}
                className={`w-full bg-primary hover:bg-primary-hover text-primary-content text-sm font-bold uppercase tracking-widest py-4 transition-all flex items-center justify-center gap-2 ${status === "loading" ? "opacity-50 cursor-not-allowed" : "hover:scale-[1.02]"}`}
              >
                {status === "loading" ? "TRANSMITTING..." : "SEND INTEL"} <span className="text-lg">▻</span>
              </button>

              {result && (
                <div className={`text-center text-[10px] font-black uppercase tracking-widest p-3 border ${
                  status === "success" ? "bg-primary/10 border-primary text-primary" : 
                  status === "error" ? "bg-red-500/10 border-red-500 text-red-500" : 
                  "bg-foreground/5 border-border-color text-foreground/50"
                }`}>
                  {result}
                </div>
              )}
            </form>
          </div>

          {/* Right Info */}
          <div className="flex flex-col gap-8">
            {/* Location */}
            <div className="bg-background p-8 border border-border-color flex items-start gap-4">
              <svg className="w-6 h-6 text-primary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              <div>
                <h3 className="text-lg font-black italic uppercase tracking-widest mb-2">HQ LOCATION</h3>
                <p className="text-xs text-foreground/70 leading-relaxed uppercase">
                  888 IRON STREET<br/>
                  INDUSTRIAL DISTRICT<br/>
                  LOS ANGELES, CA 90021
                </p>
              </div>
            </div>

            {/* Operating Hours */}
            <div className="bg-background p-8 border border-border-color relative overflow-hidden">
              <svg className="absolute -right-10 -bottom-10 w-48 h-48 text-foreground/5 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              <h3 className="text-lg font-black italic uppercase tracking-widest mb-6 relative z-10">OPERATING HOURS</h3>
              <ul className="space-y-4 relative z-10 text-[10px] font-bold tracking-widest uppercase">
                <li className="flex justify-between border-b border-border-color pb-2">
                  <span className="text-foreground/70">MON - FRI</span>
                  <span className="text-primary">04:00 - 23:00</span>
                </li>
                <li className="flex justify-between border-b border-border-color pb-2">
                  <span className="text-foreground/70">SATURDAY</span>
                  <span className="text-primary">06:00 - 21:00</span>
                </li>
                <li className="flex justify-between border-b border-border-color pb-2">
                  <span className="text-foreground/70">SUNDAY</span>
                  <span className="text-primary">08:00 - 18:00</span>
                </li>
              </ul>
            </div>

            {/* Socials */}
            <div className="grid grid-cols-3 gap-4 h-full">
              <a href="#" className="bg-background border border-border-color hover:bg-background-border transition-colors flex flex-col items-center justify-center p-4 gap-2">
                <svg className="w-6 h-6 text-foreground/70" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                <span className="text-[8px] font-bold tracking-widest uppercase text-foreground/60">INSTAGRAM</span>
              </a>
              <a href="#" className="bg-background border border-border-color hover:bg-background-border transition-colors flex flex-col items-center justify-center p-4 gap-2">
                <svg className="w-6 h-6 text-foreground/70" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                <span className="text-[8px] font-bold tracking-widest uppercase text-foreground/60">YOUTUBE</span>
              </a>
              <a href="#" className="bg-background border border-border-color hover:bg-background-border transition-colors flex flex-col items-center justify-center p-4 gap-2">
                 <svg className="w-5 h-5 text-foreground/70" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                <span className="text-[8px] font-bold tracking-widest uppercase text-foreground/60">X-PLATFORM</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="relative z-30 h-[400px] bg-background border-y border-border-color">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.6262100808544!2d-118.23467652391062!3d34.053428173156694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c648834c4423%3A0xc3160a28f43eb7ea!2sIndustrial%20District%2C%20Los%20Angeles%2C%20CA!5e0!3m2!1sen!2sus!4v1709123456789!5m2!1sen!2sus" 
          className="absolute inset-0 w-full h-full border-0 grayscale invert contrast-125" 
          allowFullScreen={false} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        />
        <div className="absolute bottom-8 left-8 bg-background p-6 border-l-4 border-border-color max-w-xs pointer-events-none">
          <h4 className="text-xs font-bold uppercase tracking-widest text-foreground mb-1">FIND US</h4>
          <p className="text-[10px] uppercase text-foreground/70">ESTABLISHED MMXXIV</p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-content py-16 md:py-24 mx-0 text-center relative overflow-hidden">
        {/* Large background "NO MERCY" watermark text */}
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
           <div className="text-[12rem] md:text-[20rem] font-black italic uppercase text-black/5 whitespace-nowrap leading-none tracking-tighter">
             NO MERCY
           </div>
        </div>
        
        <div className="relative z-10">
          <h2 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter mb-10 max-w-3xl mx-auto leading-none">
            READY TO EVOLVE?
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="bg-background hover:bg-background text-foreground text-xs font-bold uppercase tracking-widest py-4 px-10 transition-colors border border-darker">
              BOOK A TOUR
            </Link>
            <Link href="/contact" className="bg-transparent border border-darker hover:bg-background hover:text-foreground text-darker text-xs font-bold uppercase tracking-widest py-4 px-10 transition-colors">
              CALL US NOW
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
