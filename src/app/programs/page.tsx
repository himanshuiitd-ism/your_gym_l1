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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Adult Sports", desc: "Competitive leagues and recreational play for all skill levels. Build teamwork and stay active through community sports.", img: "https://images.unsplash.com/photo-1544698310-74ea9d1c8258?q=80&w=1000" },
            { title: "Aerobics", desc: "Rhythmic aerobic exercise with stretching and strength training routines to improve all elements of fitness.", img: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1000" },
            { title: "Crossfit", desc: "High-intensity functional movements. Constantly varied, focused on strength, agility, and absolute endurance.", img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1000" },
            { title: "Dance Fitness", desc: "Burn calories through high-energy dance routines. A fun, rhythmic way to improve cardiovascular health.", img: "https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?q=80&w=1000" },
            { title: "HIIT Exercise", desc: "Short bursts of intense exercise alternated with low-intensity recovery periods for maximum fat burn.", img: "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?q=80&w=1000" },
            { title: "Nutrition Consulting", desc: "Personalized dietary protocols designed by experts to fuel your specific training goals and recovery needs.", img: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=1000" },
            { title: "Personal Training", desc: "Dedicated 1-on-1 coaching with customized workout plans and expert guidance for guaranteed results.", img: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1000" },
            { title: "Spa Services", desc: "Premium recovery through massage, saunas, and rejuvenation treatments. Recover like an elite athlete.", img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1000" },
            { title: "Weight Training", desc: "Master the iron. Focused on hypertrophy, absolute strength, and building a foundation of solid muscle.", img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000" },
            { title: "Yoga Classes", desc: "Improve flexibility, mental focus, and core strength through traditional and modern yoga practices.", img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1000" },
            { title: "Zumba", desc: "High-energy Latin-inspired dance fitness program that combines cardio with muscle conditioning.", img: "https://images.unsplash.com/photo-1544216717-3bbf52512659?q=80&w=1000" }
          ].map((program, i) => (
            <div key={i} className="group bg-card border border-border-color overflow-hidden flex flex-col hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"  style={{border:"1px solid #1f2937",borderRadius:"20px"}}>
              <div className="relative h-64 w-full overflow-hidden">
                <Image 
                  src={program.img} 
                  alt={program.title} 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-700" 
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-black italic uppercase text-foreground mb-4">{program.title}</h3>
                <p className="text-sm text-foreground/70 leading-relaxed mb-6 flex-grow">
                  {program.desc}
                </p>
                <Link href="/contact" className="inline-block bg-primary hover:bg-primary-hover text-primary-content text-[10px] font-bold uppercase tracking-widest py-3 px-6 transition-all self-start">
                  ENROLL NOW
                </Link>
              </div>
            </div>
          ))}
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
