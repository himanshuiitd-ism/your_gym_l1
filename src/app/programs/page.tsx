import Image from 'next/image';
import Link from 'next/link';

export default function ProgramsPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex flex-col justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2070&auto=format&fit=crop" 
            alt="Programs Hero" 
            fill
            className="object-cover opacity-40 mix-blend-overlay grayscale"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-darker via-darker/80 to-transparent" />
        </div>
        
        <div className="relative z-10 px-4 sm:px-6 max-w-7xl mx-auto w-full">
          <h1 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter text-white mb-6 leading-none max-w-2xl">
            PRECISION<br />
            <span className="text-primary">PERFORMANCE</span>
          </h1>
          <p className="text-sm md:text-base text-white/70 max-w-md font-medium leading-relaxed">
            Forged in intensity. Driven by data. Our programs are designed for those who refuse to settle for average.
          </p>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Personal Training (spans 2 cols) */}
          <div className="md:col-span-2 relative h-[500px] bg-background group overflow-hidden">
            <Image src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1000&auto=format&fit=crop" alt="Personal Training" fill className="object-cover opacity-50 group-hover:opacity-70 transition-opacity duration-500" />
            <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-darker via-darker/80 to-transparent">
              <div className="bg-primary text-primary-content text-[10px] font-bold uppercase tracking-widest py-1 px-2 mb-4 self-start">ELITE LEVEL</div>
              <h3 className="text-3xl md:text-4xl font-black italic uppercase text-white mb-4">PERSONAL TRAINING</h3>
              <p className="text-xs text-white/80 max-w-md leading-relaxed mb-6">
                Custom biomechanical assessments and 1-on-1 coaching protocols tailored to your specific genetic ceiling.
              </p>
              <div className="flex gap-4 mb-8">
                <span className="text-primary text-[10px] font-bold uppercase tracking-widest flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
                  BIO-DATA TRACKING
                </span>
                <span className="text-primary text-[10px] font-bold uppercase tracking-widest flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                  PRO-EQUIPMENT
                </span>
              </div>
              <Link href="/contact" className="bg-white hover:bg-neutral-200 text-black text-xs font-bold uppercase tracking-widest py-3 px-8 transition-colors self-start">
                BOOK ASSESSMENT
              </Link>
            </div>
          </div>

          {/* Card 2: Nutrition Coaching */}
          <div className="bg-background border border-border-color flex flex-col h-[500px]">
            <div className="relative h-1/2 w-full overflow-hidden">
              <Image src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=800&auto=format&fit=crop" alt="Nutrition" fill className="object-cover opacity-70" />
            </div>
            <div className="p-8 flex flex-col flex-grow bg-background">
              <h3 className="text-2xl font-black italic uppercase mb-4">NUTRITION<br/>COACHING</h3>
              <p className="text-xs text-foreground/70 leading-relaxed mb-6 flex-grow">
                Macro-nutrient precision and recovery protocols to fuel elite performance and rapid hypertrophy.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-[10px] text-foreground/80 font-bold uppercase tracking-widest">
                  <svg className="w-4 h-4 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  WEEKLY MEAL AUDITS
                </li>
                <li className="flex items-center text-[10px] text-foreground/80 font-bold uppercase tracking-widest">
                  <svg className="w-4 h-4 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  HORMONE OPTIMIZATION
                </li>
              </ul>
            </div>
          </div>

          {/* Card 3: Command Classes */}
          <div className="md:col-span-2 md:col-start-1 bg-background border border-border-color flex flex-col md:flex-row h-auto md:h-[300px]">
             <div className="relative h-[250px] md:h-full md:w-1/2 overflow-hidden">
               <Image src="https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=1000&auto=format&fit=crop" alt="Classes" fill className="object-cover opacity-60" />
             </div>
             <div className="p-8 flex flex-col justify-center md:w-1/2">
               <h3 className="text-2xl font-black italic uppercase mb-4">COMMAND CLASSES</h3>
               <p className="text-xs text-foreground/70 leading-relaxed mb-8">
                 High-intensity group sessions designed to break plateaus through competitive atmosphere and professional programming.
               </p>
               <Link href="/facilities" className="border border-border-color hover:bg-background-border text-foreground text-xs font-bold uppercase tracking-widest py-3 px-4 sm:px-6 text-center transition-colors">
                 VIEW SCHEDULE
               </Link>
             </div>
          </div>

          {/* Card 4: Bio-Recovery */}
          <div className="bg-background border border-border-color flex flex-col h-auto md:h-[300px]">
            <div className="relative h-[150px] w-full overflow-hidden">
              <Image src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1000&auto=format&fit=crop" alt="Recovery" fill className="object-cover opacity-60" />
            </div>
            <div className="p-6 flex flex-col flex-grow justify-between">
               <div>
                 <h3 className="text-xl font-black italic uppercase mb-2">BIO-RECOVERY ZONE</h3>
                 <p className="text-[10px] text-foreground/70 leading-relaxed mb-4">
                   Cold plunge, infrared saunas, and compression therapy. Because the win is earned in the recovery phase.
                 </p>
               </div>
               <Link href="/facilities" className="border border-border-color hover:bg-background-border text-foreground text-[10px] font-bold uppercase tracking-widest py-3 px-4 sm:px-6 text-center transition-colors mt-auto">
                 EXPLORE SPA
               </Link>
            </div>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-content">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-20 flex flex-col md:flex-row items-center justify-between">
          <div className="mb-8 md:mb-0 max-w-xl">
            <h2 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter leading-none mb-4 relative z-10">
              READY TO<br/>
              <span className="text-darker">TRANSFORM?</span>
            </h2>
            <p className="text-xs font-bold tracking-widest uppercase">
              LIMITED PERFORMANCE SLOTS AVAILABLE FOR THE CURRENT SEASON.
            </p>
            {/* Large background "ELITE" watermark text */}
            <div className="absolute top-1/2 -translate-y-1/2 right-[10%] text-[10rem] md:text-[16rem] font-black italic uppercase text-black/5 pointer-events-none tracking-tighter leading-none">
              ELITE
            </div>
          </div>
          <Link href="/contact" className="bg-background hover:bg-background text-foreground text-sm font-bold uppercase tracking-widest py-4 px-10 transition-colors z-10 relative">
            BOOK A SESSION
          </Link>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-background py-16 border-b border-border-color">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-primary text-3xl font-black italic mb-2">150+</div>
            <div className="text-[10px] text-foreground/60 font-bold tracking-widest uppercase">ELITE ATHLETES</div>
          </div>
          <div>
            <div className="text-primary text-3xl font-black italic mb-2">12</div>
            <div className="text-[10px] text-foreground/60 font-bold tracking-widest uppercase">PRO COACHES</div>
          </div>
          <div>
            <div className="text-primary text-3xl font-black italic mb-2">24/7</div>
            <div className="text-[10px] text-foreground/60 font-bold tracking-widest uppercase">DATA MONITORING</div>
          </div>
          <div>
            <div className="text-primary text-3xl font-black italic mb-2">0%</div>
            <div className="text-[10px] text-foreground/60 font-bold tracking-widest uppercase">EXCUSE TOLERANCE</div>
          </div>
        </div>
      </section>
    </div>
  );
}
