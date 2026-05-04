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
        
        <div className="relative z-10 px-4 sm:px-6 max-w-7xl mx-auto w-full pt-10">
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
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
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
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black italic uppercase tracking-widest mb-4 text-foreground">DOMINATE YOUR DISCIPLINE</h2>
          <p className="text-base text-foreground/80 max-w-xl mx-auto leading-relaxed font-medium">
            Discover our comprehensive range of elite services designed to push your performance to the next level.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Adult Sports", img: "https://images.unsplash.com/photo-1544698310-74ea9d1c8258?q=80&w=1000" },
            { title: "Aerobics", img: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1000" },
            { title: "Crossfit", img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1000" },
            { title: "Dance Fitness", img: "https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?q=80&w=1000" },
            { title: "HIIT Exercise", img: "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?q=80&w=1000" },
            { title: "Nutrition Consulting", img: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=1000" },
            { title: "Personal Training", img: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1000" },
            { title: "Spa Services", img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1000" },
            { title: "Weight Training", img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000" },
            { title: "Yoga Classes", img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1000" },
            { title: "Zumba", img: "https://images.unsplash.com/photo-1544216717-3bbf52512659?q=80&w=1000" }
          ].map((program, i) => (
            <div key={i} className="group relative h-[400px] overflow-hidden border border-border-color shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2" style={{border:"1px solid #1f2937",borderRadius:"20px"}}>
              <Image 
                src={program.img} 
                alt={program.title} 
                fill 
                className="object-cover group-hover:scale-110 transition-transform duration-700" 
              />
              <div className="absolute inset-x-0 bottom-0 p-6 bg-white dark:bg-black/90 backdrop-blur-sm transform translate-y-2 group-hover:translate-y-0 transition-transform border-t border-primary/20" >
                <h3 className="text-xl font-black italic uppercase text-foreground mb-2 tracking-widest">{program.title}</h3>
                <Link href="/programs" className="text-primary text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
                  VIEW DETAILS <span className="text-lg">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Google Reviews Section */}
      <section className="py-24 bg-background overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6">
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-5xl font-black italic uppercase tracking-tighter mb-4 text-foreground">
                WARRIOR <span className="text-primary">TESTIMONIALS</span>
              </h2>
              <p className="text-foreground/60 font-medium uppercase tracking-widest text-xs">
                VERIFIED GOOGLE REVIEWS FROM THE ELITE
              </p>
            </div>
            <div className="flex items-center gap-4 bg-card p-4 border border-border-color rounded-xl">
              <div className="flex flex-col items-end">
                <div className="flex gap-1 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-primary fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  ))}
                </div>
                <span className="text-xs font-black tracking-widest text-foreground">4.9 / 5.0 RATING</span>
              </div>
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center p-2 shadow-lg">
                <svg viewBox="0 0 24 24" className="w-full h-full"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "MARCUS THORNE", role: "POWERLIFTER", text: "The facility is unmatched. State of the art equipment and a community that pushes you to your absolute limits." },
              { name: "SARAH JENKINS", role: "ATHLETE", text: "Finally a gym that takes performance seriously. The coaching staff is world-class. Transformative experience." },
              { name: "DAVID CHEN", role: "NIGHT WARRIOR", text: "24/7 access is a game changer. Whether it's 2 AM or 2 PM, the energy here is always elite. Worth every penny." },
              { name: "ELENA RODRIGUEZ", role: "CROSSFIT PRO", text: "Best strength facility in the city. The Iron Mastery program helped me break all my previous PRs in 3 months." },
              { name: "JAKE MILLER", role: "HYROX ATHLETE", text: "The best functional training space I've ever used. The attention to detail in the recovery zone is exactly what I needed." },
              { name: "SOPHIA ROSSI", role: "YOGA INSTRUCTOR", text: "Elite Performance isn't just for meatheads. Their Kinetic Flow program is the most challenging and rewarding mobility work I've done." },
              { name: "CHRIS 'TANK' THOMPSON", role: "BODYBUILDER", text: "If you want to grow, you come here. The equipment is pure iron. No gimmicks, just results." },
              { name: "MAYA PATEL", role: "MARATHON RUNNER", text: "The conditioning equipment here is top tier. I've shaved 15 minutes off my marathon time thanks to the HIIT Reckoning classes." },
              { name: "TOM HARRISON", role: "EXECUTIVE", text: "Perfect for a high-intensity morning session. The showers and locker rooms are better than my own home. Premium through and through." },
              { name: "RACHEL KIM", role: "POWERLIFTER", text: "Finally a place where I can drop the bar and push my limits. The atmosphere is contagious. You can't help but work harder here." }
            ].map((review, i) => (
              <div key={i} className="bg-card p-8 border border-primary/20 hover:border-primary transition-all duration-500 group relative overflow-hidden flex flex-col justify-between hover:-translate-y-4 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] dark:hover:shadow-[0_30px_60px_-15px_rgba(207,255,4,0.15)]" style={{borderRadius:"20px"}}>
                <div>
                  <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                    <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C14.9124 8 14.017 7.10457 14.017 6V3L20.017 3C21.1216 3 22.017 3.89543 22.017 5V19C22.017 20.1046 21.1216 21 20.017 21H14.017ZM2.01698 21L2.01698 18C2.01698 16.8954 2.91241 16 4.01698 16H7.01698C7.56927 16 8.01698 15.5523 8.01698 15V9C8.01698 8.44772 7.56927 8 7.01698 8H4.01698C2.91241 8 2.01698 7.10457 2.01698 6V3L8.01698 3C9.12155 3 10.017 3.89543 10.017 5V19C10.017 20.1046 9.12155 21 8.01698 21H2.01698Z" /></svg>
                  </div>
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <svg key={j} className="w-3 h-3 text-primary fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3-.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                    ))}
                  </div>
                  <p className="text-xs font-medium text-foreground/80 italic leading-relaxed mb-6">"{review.text}"</p>
                </div>
                <div>
                  <div className="text-sm font-black tracking-widest text-foreground">{review.name}</div>
                  <div className="text-[10px] font-bold text-primary uppercase tracking-widest">{review.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 md:py-40 overflow-hidden bg-background">
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
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6">
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
