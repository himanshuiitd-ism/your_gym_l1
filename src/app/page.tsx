import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/hero.jpg" 
            alt="Hero Man Barbell Squat" 
            fill
            className="object-cover opacity-90"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />
        </div>
        
        <div className="relative z-10 px-6 max-w-7xl mx-auto w-full pt-10">
          <div className="inline-block bg-primary text-primary-content text-xs font-bold uppercase tracking-widest py-1 px-3 mb-6 shadow-[0_0_10px_rgba(207,255,4,0.5)]">
            ESTABLISHED 2024
          </div>
          <h1 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter text-white mb-6 leading-none max-w-2xl drop-shadow-xl">
            PUSH BEYOND<br />
            <span className="text-primary drop-shadow-[0_0_15px_rgba(207,255,4,0.6)]">YOUR LIMITS</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-md font-medium leading-relaxed drop-shadow-md">
            Elite training for those who refuse to settle. Join the most advanced facility in the city and unlock your true potential with professional coaching.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="bg-primary hover:bg-primary-hover text-primary-content text-sm font-bold uppercase tracking-widest py-4 px-8 transition-all hover:scale-105 shadow-[0_0_20px_rgba(207,255,4,0.6)]">
              JOIN THE ELITE
            </Link>
            <Link href="/programs" className="bg-card backdrop-blur-sm border border-border-color text-foreground hover:bg-foreground hover:text-background text-sm font-bold uppercase tracking-widest py-4 px-8 transition-colors">
              VIEW PROGRAMS
            </Link>
          </div>
        </div>

        {/* Large background text at bottom */}
        <div className="absolute bottom-[-5%] right-0 z-0 pointer-events-none overflow-hidden">
          <h2 className="text-[8rem] md:text-[14rem] font-black italic uppercase text-foreground/10 whitespace-nowrap leading-none tracking-tighter drop-shadow-2xl">
            ZERO EXCUSES
          </h2>
        </div>
      </section>

      {/* Engineered for Results */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-12 border-b border-border-color pb-4">
            <h2 className="text-3xl font-black italic uppercase tracking-widest text-foreground drop-shadow-lg">ENGINEERED FOR RESULTS</h2>
            <span className="text-xs text-primary font-bold tracking-widest uppercase hidden md:inline-block">/ PERFORMANCE ARCHITECTURE</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 01 - Spans 2 cols */}
            <div className="md:col-span-2 relative h-[400px] md:h-[500px] bg-background overflow-hidden shadow-2xl border border-border-color hover:border-primary/50 transition-colors">
              <Image src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1000&auto=format&fit=crop" alt="Equipment" fill className="object-cover transition-transform duration-700 hover:scale-105" />
              <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-black via-black/80 to-transparent">
                <div className="text-primary text-5xl font-black italic mb-2 drop-shadow-md">01</div>
                <h3 className="text-2xl font-bold uppercase tracking-widest mb-2 text-white">ELITE EQUIPMENT</h3>
                <p className="text-sm text-white/80 max-w-md leading-relaxed font-medium">Precision-engineered machinery and high-grade free weights designed for professional competition and peak performance. Unleash your max output safely.</p>
              </div>
            </div>

            {/* Card 02 */}
            <div className="bg-primary p-8 flex flex-col justify-end h-[400px] md:h-[500px] text-black shadow-[0_0_30px_rgba(207,255,4,0.15)] hover:shadow-[0_0_40px_rgba(207,255,4,0.3)] transition-shadow">
              <div className="mb-auto">
                <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4v16M20 4v16"></path></svg>
              </div>
              <div className="text-darker text-5xl font-black italic mb-2">02</div>
              <h3 className="text-2xl font-bold uppercase tracking-widest mb-2 text-darker">BIOMETRIC TRACKING</h3>
              <p className="text-sm font-bold max-w-sm leading-relaxed text-dark">Real-time data visualization of your heart rate, metabolic output, and recovery metrics ensuring optimal progressive overload.</p>
            </div>

            {/* Card 03 */}
            <div className="relative h-[400px] md:h-[500px] bg-background overflow-hidden shadow-2xl border border-border-color hover:border-primary/50 transition-colors">
              <Image src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1000&auto=format&fit=crop" alt="Coach" fill className="object-cover transition-transform duration-700 hover:scale-105" />
              <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-black via-black/80 to-transparent">
                <div className="text-primary text-5xl font-black italic mb-2 drop-shadow-md">03</div>
                <h3 className="text-2xl font-bold uppercase tracking-widest mb-2 text-white">PRO COACHING</h3>
                <p className="text-sm text-white/80 max-w-sm leading-relaxed font-medium">Work with former Olympians and certified strength specialists to refine your technique and mindset. Never hit a plateau again.</p>
              </div>
            </div>

            {/* Card 04 */}
            <div className="md:col-span-2 bg-background border border-border-color hover:border-primary/50 transition-colors p-12 flex flex-col justify-center items-center text-center h-[400px] md:h-[500px] shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-darker to-dark opacity-90 z-0"></div>
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary rounded-full mix-blend-overlay filter blur-[100px] opacity-20"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary rounded-full mix-blend-overlay filter blur-[100px] opacity-20"></div>
              
              <div className="relative z-10">
                <div className="text-primary text-5xl font-black italic mb-6 drop-shadow-[0_0_10px_rgba(207,255,4,0.5)]">04</div>
                <h3 className="text-3xl font-bold uppercase tracking-widest mb-6 text-white">24/7 UNRESTRICTED ACCESS</h3>
                <p className="text-lg text-white/80 max-w-xl mx-auto leading-relaxed mb-10 font-medium">Discipline doesn't follow a schedule. Our facility is open around the clock for members who live by the grind. Train when your body is ready.</p>
                <Link href="/facilities" className="bg-primary hover:bg-primary-hover text-primary-content text-sm font-bold uppercase tracking-widest py-4 px-10 transition-colors shadow-[0_0_15px_rgba(207,255,4,0.5)] inline-block">
                  LEARN MORE
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full Width Visual Break */}
      <section className="relative h-[400px] flex items-center justify-center">
        <Image src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2000&auto=format&fit=crop" alt="Gym action" fill className="object-cover" />
        <div className="absolute inset-0 bg-primary mix-blend-overlay opacity-30"></div>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-black italic uppercase text-white drop-shadow-[0_0_20px_rgba(207,255,4,0.8)]">
            ELEVATE YOUR <span className="text-primary">STANDARD</span>
          </h2>
        </div>
      </section>

      {/* Dominate Your Discipline */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 text-center mb-16">
          <h2 className="text-3xl font-black italic uppercase tracking-widest mb-4 text-foreground">DOMINATE YOUR DISCIPLINE</h2>
          <p className="text-base text-foreground/80 max-w-xl mx-auto leading-relaxed font-medium">
            Selected high-intensity programs designed to destroy plateaus and forge an unbreakable physique.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Program 1 */}
          <div className="relative h-[600px] group overflow-hidden rounded-xl shadow-2xl border border-border-color hover:border-primary/50 transition-all">
            <Image src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=1000&auto=format&fit=crop" alt="HIIT" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-black via-black/60 to-transparent">
              <div className="bg-primary text-primary-content text-xs font-bold uppercase tracking-widest py-1 px-3 mb-4 self-start shadow-[0_0_10px_rgba(207,255,4,0.5)]">INTENSITY EXTREME</div>
              <h3 className="text-4xl font-black italic uppercase mb-6 text-white drop-shadow-md">HIIT<br/>RECKONING</h3>
              <p className="text-white/80 text-sm mb-6 max-h-0 opacity-0 group-hover:max-h-40 group-hover:opacity-100 transition-all duration-500 font-medium">Cardiovascular conditioning pushed to its absolute limits. Burn fat, build resilience.</p>
              <Link href="/programs" className="text-primary text-sm font-bold uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all">
                EXPLORE PROGRAM <span className="text-xl">→</span>
              </Link>
            </div>
          </div>

          {/* Program 2 */}
          <div className="relative h-[600px] group overflow-hidden rounded-xl shadow-2xl border border-border-color hover:border-primary/50 transition-all">
            <Image src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=1000&auto=format&fit=crop" alt="Iron Mastery" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-black via-black/60 to-transparent">
              <div className="bg-white text-black text-xs font-bold uppercase tracking-widest py-1 px-3 mb-4 self-start">STRENGTH HEAVY</div>
              <h3 className="text-4xl font-black italic uppercase mb-6 text-white drop-shadow-md">IRON<br/>MASTERY</h3>
              <p className="text-white/80 text-sm mb-6 max-h-0 opacity-0 group-hover:max-h-40 group-hover:opacity-100 transition-all duration-500 font-medium">Progressive overload applied through heavy compound lifts. Master the barbell, master yourself.</p>
              <Link href="/programs" className="text-primary text-sm font-bold uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all">
                EXPLORE PROGRAM <span className="text-xl">→</span>
              </Link>
            </div>
          </div>

          {/* Program 3 */}
          <div className="relative h-[600px] group overflow-hidden rounded-xl shadow-2xl border border-border-color hover:border-primary/50 transition-all">
            <Image src="https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1000&auto=format&fit=crop" alt="Kinetic Flow" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-black via-black/60 to-transparent">
              <div className="bg-background text-foreground text-xs font-bold uppercase tracking-widest py-1 px-3 mb-4 self-start border border-border-color">RECOVERY FOCUSED</div>
              <h3 className="text-4xl font-black italic uppercase mb-6 text-white drop-shadow-md">KINETIC<br/>FLOW</h3>
              <p className="text-white/80 text-sm mb-6 max-h-0 opacity-0 group-hover:max-h-40 group-hover:opacity-100 transition-all duration-500 font-medium">Active recovery, mobility work, and dynamic stretching to keep you injury-free and primed.</p>
              <Link href="/programs" className="text-primary text-sm font-bold uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all">
                EXPLORE PROGRAM <span className="text-xl">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-20 bg-background border-y border-border-color relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
          <svg className="w-full h-full text-primary" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0,50 Q25,0 50,50 T100,50 L100,100 L0,100 Z" />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center relative z-10">
          <div className="p-6 bg-card backdrop-blur-md rounded-lg border border-border-color hover:border-primary/30 transition-colors">
            <div className="text-primary text-4xl font-black italic mb-2 drop-shadow-[0_0_10px_rgba(207,255,4,0.4)]">800+</div>
            <div className="text-xs font-bold tracking-widest uppercase text-foreground">ELITE MEMBERS</div>
          </div>
          <div className="p-6 bg-card backdrop-blur-md rounded-lg border border-border-color hover:border-primary/30 transition-colors">
            <div className="text-primary text-4xl font-black italic mb-2 drop-shadow-[0_0_10px_rgba(207,255,4,0.4)]">35+</div>
            <div className="text-xs font-bold tracking-widest uppercase text-foreground">PRO COACHES</div>
          </div>
          <div className="p-6 bg-card backdrop-blur-md rounded-lg border border-border-color hover:border-primary/30 transition-colors">
            <div className="text-primary text-4xl font-black italic mb-2 drop-shadow-[0_0_10px_rgba(207,255,4,0.4)]">15k</div>
            <div className="text-xs font-bold tracking-widest uppercase text-foreground">SQ FT FACILITY</div>
          </div>
          <div className="p-6 bg-card backdrop-blur-md rounded-lg border border-border-color hover:border-primary/30 transition-colors">
            <div className="text-primary text-4xl font-black italic mb-2 drop-shadow-[0_0_10px_rgba(207,255,4,0.4)]">24/7</div>
            <div className="text-xs font-bold tracking-widest uppercase text-foreground">ACCESS GRANTED</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-40 overflow-hidden bg-background">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2070&auto=format&fit=crop" 
            alt="Gym CTA" 
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <h2 className="text-5xl md:text-7xl font-black italic uppercase tracking-widest mb-6 text-white drop-shadow-2xl">
            NO MORE <span className="text-primary">EXCUSES.</span>
          </h2>
          <p className="text-lg md:text-xl text-white/80 mb-12 leading-relaxed font-medium max-w-2xl mx-auto">
            The difference between who you are and who you want to be is what you do today. Start your elite transformation now and join a community of absolute winners.
          </p>
          <Link href="/contact" className="inline-block bg-primary hover:bg-primary-hover text-primary-content text-lg font-bold uppercase tracking-widest py-5 px-14 transition-all shadow-[0_0_40px_rgba(207,255,4,0.5)] hover:scale-105 hover:shadow-[0_0_60px_rgba(207,255,4,0.8)]">
            CLAIM YOUR PASS
          </Link>
        </div>
      </section>
    </div>
  );
}
