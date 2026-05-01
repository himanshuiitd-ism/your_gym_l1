import Image from 'next/image';
import Link from 'next/link';

export default function WhyUsPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex flex-col justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop" 
            alt="Why Fitness Matters" 
            fill
            className="object-cover opacity-80"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-darker via-darker/60 to-transparent" />
        </div>
        
        <div className="relative z-10 px-6 max-w-4xl mx-auto w-full text-center">
          <div className="inline-block bg-primary text-black text-[10px] font-bold uppercase tracking-widest py-1 px-3 mb-6 shadow-[0_0_10px_rgba(207,255,4,0.5)]">
            BEYOND THE BODY
          </div>
          <h1 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter text-white mb-6 leading-none drop-shadow-lg">
            WHY FITNESS<br />
            <span className="text-primary drop-shadow-[0_0_15px_rgba(207,255,4,0.6)]">MATTERS</span>
          </h1>
          <p className="text-sm md:text-base text-white/90 mx-auto font-medium leading-relaxed drop-shadow-md">
            It's not just about looking good. It's about forging a mind and body capable of conquering any challenge life throws your way.
          </p>
        </div>
      </section>

      {/* Pillars of Vitality */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 border-l-4 border-primary pl-6">
            <h2 className="text-3xl font-black italic uppercase tracking-widest text-white">
              THE PILLARS OF<br/><span className="text-primary">VITALITY</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="bg-black p-8 border border-[rgba(0,0,0,0.4)] hover:border-primary/50 transition-colors shadow-lg">
                <h3 className="text-xl font-black italic uppercase text-white mb-3">PHYSICAL DOMINANCE</h3>
                <p className="text-xs text-white/70 leading-relaxed font-medium">
                  Strengthen your heart, lungs, and immune system. Functional fitness ensures you move through life with ease and power.
                </p>
              </div>
              <div className="bg-black p-8 border border-[rgba(0,0,0,0.4)] hover:border-primary/50 transition-colors shadow-lg">
                <h3 className="text-xl font-black italic uppercase text-white mb-3">MENTAL CLARITY</h3>
                <p className="text-xs text-white/70 leading-relaxed font-medium">
                  Exercise is the ultimate neuro-enhancer. Boost focus, reduce anxiety, and sharpen your cognitive edge through intense physical stimulus.
                </p>
              </div>
              <div className="bg-black p-8 border border-[rgba(0,0,0,0.4)] hover:border-primary/50 transition-colors shadow-lg">
                <h3 className="text-xl font-black italic uppercase text-white mb-3">GENETIC LONGEVITY</h3>
                <p className="text-xs text-white/70 leading-relaxed font-medium">
                  Resistance training is the most effective anti-aging tool known to science, preserving bone density and hormonal balance.
                </p>
              </div>
            </div>
            
            <div className="relative h-[600px] rounded-xl overflow-hidden shadow-2xl border border-[rgba(0,0,0,0.4)]">
              <Image src="https://images.unsplash.com/photo-1538805060514-97d9cc17730c?q=80&w=1000&auto=format&fit=crop" alt="Athlete Running" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* The Gym Advantage */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6 text-center mb-16">
          <h2 className="text-3xl font-black italic uppercase tracking-widest mb-4 text-white">THE <span className="text-primary">GYM ADVANTAGE</span></h2>
          <p className="text-sm text-white/70 max-w-xl mx-auto leading-relaxed font-medium">
            We give you the tools, but elite performance requires elite environments.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-black p-10 text-center border border-[rgba(0,0,0,0.4)] hover:border-primary transition-all hover:-translate-y-2 shadow-xl group">
            <svg className="w-12 h-12 mx-auto text-primary mb-6 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"></path></svg>
            <h3 className="text-sm font-bold uppercase tracking-widest text-primary mb-4">ELITE HARDWARE</h3>
            <p className="text-[11px] text-white/70 leading-relaxed">
              Access to industry-standard Rogue racks and Eleiko bars. High-tolerance equipment designed for maximum safety and progressive overload.
            </p>
          </div>
          
          <div className="bg-black p-10 text-center border border-[rgba(0,0,0,0.4)] hover:border-primary transition-all hover:-translate-y-2 shadow-xl group">
            <svg className="w-12 h-12 mx-auto text-primary mb-6 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>
            <h3 className="text-sm font-bold uppercase tracking-widest text-primary mb-4">PSYCHOLOGICAL SHIFT</h3>
            <p className="text-[11px] text-white/70 leading-relaxed">
              Entering a dedicated facility triggers a mental switch. This is where you work. No distractions, just pure focus and intensity.
            </p>
          </div>

          <div className="bg-black p-10 text-center border border-[rgba(0,0,0,0.4)] hover:border-primary transition-all hover:-translate-y-2 shadow-xl group">
            <svg className="w-12 h-12 mx-auto text-primary mb-6 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
            <h3 className="text-sm font-bold uppercase tracking-widest text-primary mb-4">HYPERTROPHY & DATA</h3>
            <p className="text-[11px] text-white/70 leading-relaxed">
              Train alongside high-performers and utilize professional-grade tracking networks to hit your goals safely and precisely.
            </p>
          </div>
        </div>
      </section>

      {/* Fuel for Results */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-[#6b8e23] h-[400px] flex flex-col items-center justify-center text-white shadow-[0_0_30px_rgba(107,142,35,0.4)]">
            <svg className="w-32 h-32 mb-6 opacity-80" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L9.5 5.5 11 9l-3 4h2l-2 5h10l-2-5h2l-3-4 1.5-3.5L12 2zm0 2.8l1.5 2.2L12 9l2.5 3H12l1.5 4h-3l1.5-4h-2.5L12 9l-1.5-2 1.5-2.2z"/></svg>
            <h2 className="text-4xl font-black italic uppercase tracking-widest mb-2">SAFENTION</h2>
            <p className="text-sm uppercase tracking-widest font-bold">SMART MACROS</p>
          </div>

          <div>
            <h2 className="text-3xl font-black italic uppercase tracking-widest mb-6 text-white">FUEL FOR <span className="text-primary">RESULTS</span></h2>
            <p className="text-sm text-white/80 leading-relaxed font-medium mb-10">
              You cannot out-train a poor diet. At Elite Performance, we treat nutrition as the mechanical foundation of your performance.
            </p>
            
            <ul className="space-y-6">
              <li className="flex gap-4">
                <svg className="w-6 h-6 text-primary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                <div>
                  <h4 className="text-[11px] font-bold uppercase tracking-widest text-white mb-1">MACRO TRACKING PRECISION</h4>
                  <p className="text-[10px] text-white/70">Understanding your protein, carbs, and fats is non-negotiable for muscle synthesis and fat loss.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <svg className="w-6 h-6 text-primary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                <div>
                  <h4 className="text-[11px] font-bold uppercase tracking-widest text-white mb-1">MICRO-NUTRIENT MATRIX</h4>
                  <p className="text-[10px] text-white/70">Vitamins and minerals dictate cellular performance and prevent the deficiencies needed for optimal recovery.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <svg className="w-6 h-6 text-primary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                <div>
                  <h4 className="text-[11px] font-bold uppercase tracking-widest text-white mb-1">PERFORMANCE HYDRATION</h4>
                  <p className="text-[10px] text-white/70">Cellular volumization and water intake to sustain power output during the toughest sessions.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Bio Recovery Zone */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-black italic uppercase tracking-widest mb-4 text-white">THE <span className="text-primary">BIO-RECOVERY ZONE</span></h2>
          <p className="text-sm text-white/70 max-w-2xl leading-relaxed font-medium mb-12">
            Growth doesn't happen in the gym; it happens in the recovery. We provide the elite tools to ensure you bounce back stronger.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-black border border-[rgba(0,0,0,0.4)] p-6 hover:border-primary transition-colors text-center">
              <svg className="w-8 h-8 text-primary mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-white mb-2">SLEEP OPTIMIZATION</h4>
              <p className="text-[9px] text-white/60">Theoretical schedules to maximize release and tissue repair of optimal hormones.</p>
            </div>
            <div className="bg-black border border-[rgba(0,0,0,0.4)] p-6 hover:border-primary transition-colors text-center">
              <svg className="w-8 h-8 text-primary mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-white mb-2">THERMAL THERAPY</h4>
              <p className="text-[9px] text-white/60">Sauna and cold plunge integrations to manage inflammation.</p>
            </div>
            <div className="bg-black border border-[rgba(0,0,0,0.4)] p-6 hover:border-primary transition-colors text-center">
              <svg className="w-8 h-8 text-primary mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-white mb-2">STRESS MANAGEMENT</h4>
              <p className="text-[9px] text-white/60">Downshift the nervous system and upgrade your central system architecture.</p>
            </div>
            <div className="bg-black border border-[rgba(0,0,0,0.4)] p-6 hover:border-primary transition-colors text-center">
              <svg className="w-8 h-8 text-primary mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-white mb-2">BIO-DATA ANALYSIS</h4>
              <p className="text-[9px] text-white/60">Heart Rate Variability (HRV) checks to decide when to push and when to rest.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Daily Commitment */}
      <section className="py-24 bg-black">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-black border-t-4 border-primary p-12 md:p-16 flex flex-col md:flex-row items-center gap-12 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
            <div className="md:w-2/3">
              <div className="inline-block bg-primary text-black text-[9px] font-bold uppercase tracking-widest py-1 px-2 mb-6">
                THE ELITE DIRECTIVE
              </div>
              <h2 className="text-4xl font-black italic uppercase tracking-widest mb-6 text-white">DAILY<br/>COMMITMENT</h2>
              <p className="text-sm text-white/80 leading-relaxed font-medium mb-8">
                Motivation is fleeting. Discipline is constant. Showing up every day at Elite Performance isn't just about fitness—it's about building the habit of excellence that spills over into your career, your relationships, and your life.
              </p>
              <Link href="/contact" className="inline-block bg-primary hover:bg-primary-hover text-black text-[10px] font-bold uppercase tracking-widest py-3 px-6 transition-colors shadow-[0_0_15px_rgba(207,255,4,0.4)]">
                I AM READY TO COMMIT ▻
              </Link>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <div className="w-48 h-48 rounded-full border-[8px] border-darker bg-black shadow-[0_0_30px_rgba(255,255,255,0.05)] inset-shadow flex items-center justify-center relative overflow-hidden">
                <div className="w-32 h-32 rounded-full border border-[rgba(0,0,0,0.4)] flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-neutral-800 to-neutral-600 flex items-center justify-center">
                    <div className="w-4 h-4 rounded-full bg-primary shadow-[0_0_10px_rgba(207,255,4,1)] animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-24 bg-black text-center">
        <div className="max-w-4xl mx-auto px-6">
          <svg className="w-12 h-12 text-primary mx-auto mb-8 opacity-80" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
          <h2 className="text-3xl md:text-5xl font-black italic uppercase tracking-widest leading-snug text-primary drop-shadow-[0_0_15px_rgba(207,255,4,0.3)]">
            "DISCIPLINE IS DOING WHAT NEEDS TO BE DONE, EVEN IF YOU DON'T WANT TO DO IT."
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mt-10"></div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-black text-white py-32 mx-0 text-center relative overflow-hidden border-t border-[rgba(0,0,0,0.4)]">
        <div className="absolute inset-0 z-0 opacity-10">
          <Image src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=2000&auto=format&fit=crop" alt="Background Texture" fill className="object-cover" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h2 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter mb-12 leading-none drop-shadow-xl">
            YOUR BETTER LIFE <span className="text-primary drop-shadow-[0_0_20px_rgba(207,255,4,0.6)]">STARTS HERE.</span>
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link href="/contact" className="bg-primary hover:bg-primary-hover text-black text-sm font-bold uppercase tracking-widest py-5 px-12 transition-all shadow-[0_0_30px_rgba(207,255,4,0.5)] hover:scale-105">
              START YOUR JOURNEY
            </Link>
            <Link href="/contact" className="bg-transparent border-2 border-[rgba(0,0,0,0.4)] hover:bg-white hover:text-black text-white text-sm font-bold uppercase tracking-widest py-5 px-12 transition-colors">
              BOOK A FREE TOUR
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
