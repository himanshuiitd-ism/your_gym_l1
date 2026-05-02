import Image from 'next/image';
import Link from 'next/link';

export default function FacilitiesPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex flex-col justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=2070&auto=format&fit=crop" 
            alt="Facilities Hero" 
            fill
            className="object-cover opacity-30 grayscale"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
        </div>
        
        <div className="relative z-10 px-6 max-w-7xl mx-auto w-full text-center">
          <h1 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter text-white mb-6 leading-none">
            BUILT FOR<br />
            <span className="text-primary">VICTORY</span>
          </h1>
          <p className="text-xs md:text-sm text-white/70 max-w-lg mx-auto font-bold uppercase tracking-widest leading-relaxed">
            WORLD-CLASS ARSENAL. PRECISION ENGINEERED FOR THE ELITE 1%.
          </p>
        </div>
      </section>

      {/* The Arsenal Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 border-b border-border-color pb-4 gap-4">
            <h2 className="text-3xl font-black italic uppercase tracking-widest">THE ARSENAL</h2>
            <p className="text-[10px] text-foreground/60 font-bold tracking-widest uppercase max-w-sm text-left md:text-right">
              WE DON'T DO STANDARD. EVERY MACHINE IN THIS FACILITY IS HAND-SELECTED FOR MAXIMUM MUSCLE RECRUITMENT AND BIOMECHANICAL PRECISION.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Cardio Peak */}
            <div className="md:col-span-2 relative h-[400px] md:h-[600px] group overflow-hidden">
              <Image src="https://images.unsplash.com/photo-1576678927484-cc907957088c?q=80&w=1000&auto=format&fit=crop" alt="Cardio Peak" fill className="object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
              <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-black via-black/50 to-transparent">
                <div className="bg-primary text-primary-content text-[10px] font-bold uppercase tracking-widest py-1 px-2 mb-2 self-start">CARDIO PEAK</div>
                <h3 className="text-3xl font-black italic uppercase text-white">ELITE ENDURANCE</h3>
              </div>
            </div>

            {/* Right Column Stack */}
            <div className="flex flex-col gap-6 h-[400px] md:h-[600px]">
              {/* Iron Zone */}
              <div className="relative h-1/2 group overflow-hidden bg-background">
                <Image src="https://images.unsplash.com/photo-1586401700818-192e071727c6?q=80&w=800&auto=format&fit=crop" alt="Iron Zone" fill className="object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                <div className="absolute inset-0 p-6 flex flex-col justify-end bg-gradient-to-t from-black to-transparent">
                  <h3 className="text-2xl font-black italic uppercase text-white">IRON ZONE</h3>
                </div>
              </div>
              
              {/* Precision Rigs */}
              <div className="relative h-1/2 group overflow-hidden bg-background">
                <Image src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=800&auto=format&fit=crop" alt="Precision Rigs" fill className="object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                <div className="absolute inset-0 p-6 flex flex-col justify-end bg-gradient-to-t from-black to-transparent">
                  <h3 className="text-2xl font-black italic uppercase text-white">PRECISION RIGS</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recovery & Refinement */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="text-primary text-[10px] font-bold tracking-widest uppercase mb-2">BEYOND THE FLOORS</div>
            <h2 className="text-4xl font-black italic uppercase mb-12">RECOVERY &<br/>REFINEMENT</h2>
            
            <ul className="space-y-10">
              <li className="flex gap-4">
                <div className="mt-1">
                  <div className="w-8 h-8 bg-background border border-border-color flex items-center justify-center">
                    <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"></path></svg>
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest mb-2">INFRARED SAUNA</h4>
                  <p className="text-xs text-foreground/70 leading-relaxed">Detoxify and accelerate muscle recovery in our custom built 180°F infrared thermal chambers.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="mt-1">
                  <div className="w-8 h-8 bg-background border border-border-color flex items-center justify-center">
                    <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest mb-2">LOCKER SUITES</h4>
                  <p className="text-xs text-foreground/70 leading-relaxed">Private marble showers, premium grooming products, and secure digital biometric lockers.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="mt-1">
                  <div className="w-8 h-8 bg-background border border-border-color flex items-center justify-center">
                    <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest mb-2">CRYOTHERAPY</h4>
                  <p className="text-xs text-foreground/70 leading-relaxed">Sub-zero recovery sessions designed to reduce inflammation and spark CNS rejuvenation.</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="relative h-[500px] border border-primary/30 p-2 transform rotate-1">
            <div className="relative w-full h-full transform -rotate-1 overflow-hidden bg-background">
              <Image src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=800&auto=format&fit=crop" alt="Locker Room" fill className="object-cover opacity-70 grayscale" />
            </div>
          </div>
        </div>
      </section>

      {/* Equipment Manifesto */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-black italic uppercase tracking-widest text-center mb-16">EQUIPMENT MANIFESTO</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-background p-10 border-t-2 border-primary">
              <div className="text-primary text-3xl font-black italic mb-6">01</div>
              <h3 className="text-xl font-black italic uppercase mb-4">PRIME FITNESS</h3>
              <p className="text-[11px] text-foreground/70 leading-relaxed">
                Full line of Smart Strength adjustable cam technology for specific tension tailoring throughout the range of motion.
              </p>
            </div>
            
            <div className="bg-background p-10 border-t-2 border-primary">
              <div className="text-primary text-3xl font-black italic mb-6">02</div>
              <h3 className="text-xl font-black italic uppercase mb-4">ROGUE MONSTER</h3>
              <p className="text-[11px] text-foreground/70 leading-relaxed">
                Military-grade power racks and competition-spec barbells for those who live for the heavy compound movements.
              </p>
            </div>

            <div className="bg-background p-10 border-t-2 border-primary">
              <div className="text-primary text-3xl font-black italic mb-6">03</div>
              <h3 className="text-xl font-black italic uppercase mb-4">ELEIKO PLATES</h3>
              <p className="text-[11px] text-foreground/70 leading-relaxed">
                IWF certified calibrated steel plates. Precision engineered to within +/- 10 grams of accuracy for the serious lifter.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-content py-24 mx-6 mb-24 max-w-7xl md:mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter mb-6 max-w-2xl mx-auto leading-none">
          READY TO TRAIN LIKE AN ATHLETE?
        </h2>
        <p className="text-xs font-bold tracking-widest uppercase mb-10 max-w-md mx-auto">
          BOOK A PRIVATE TOUR OF OUR FACILITY AND EXPERIENCE THE ELITE STANDARD FIRSTHAND.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/contact" className="bg-background hover:bg-background text-foreground text-xs font-bold uppercase tracking-widest py-4 px-10 transition-colors">
            BOOK A TOUR
          </Link>
          <Link href="/contact" className="bg-transparent border-2 border-darker hover:bg-background hover:text-foreground text-darker text-xs font-bold uppercase tracking-widest py-4 px-10 transition-colors">
            VIEW PRICING
          </Link>
        </div>
      </section>
    </div>
  );
}
