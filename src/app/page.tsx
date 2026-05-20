'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// --- INTERACTIVE SUB-COMPONENTS FOR SPEC CARDS ---

function DumbbellSelector() {
  const [weight, setWeight] = useState(25); // 5 to 50 kg

  const inertia = (0.5 * weight * 0.08 * 0.08).toFixed(4); // I = 0.5 * m * r^2
  const gripLoad = (weight * 9.81 / 4.5).toFixed(1); // N/cm²
  const safetyIndex = weight > 40 ? "CALIBRATION RE-CHECK" : "OPTIMAL";

  return (
    <div className="space-y-4">
      {/* Weight Selector Slider */}
      <div>
        <div className="flex justify-between items-center text-[9px] font-black tracking-widest mb-1.5">
          <span className="text-foreground/50">SELECT CALIBRATION</span>
          <span className="text-primary font-mono font-bold">{weight} KG</span>
        </div>
        <input 
          type="range" 
          min="5" 
          max="50" 
          step="5" 
          value={weight} 
          onChange={(e) => setWeight(parseInt(e.target.value))}
          className="w-full accent-primary bg-border-color/30 h-1 rounded-lg appearance-none cursor-pointer"
        />
        <div className="flex justify-between text-[7px] text-foreground/40 font-mono mt-1">
          <span>5KG</span>
          <span>25KG</span>
          <span>50KG</span>
        </div>
      </div>

      {/* Specs Readout */}
      <div className="space-y-2.5 border-t border-border-color/60 pt-3">
        <div>
          <div className="flex justify-between items-center text-[9px] font-black tracking-widest mb-1">
            <span className="text-foreground/50">ROTATIONAL INERTIA</span>
            <span className="text-primary font-mono">{inertia} kg·m²</span>
          </div>
          <div className="w-full bg-border-color/30 h-[3px] rounded-full overflow-hidden">
            <div 
              style={{ width: `${(weight / 50) * 100}%` }}
              className="bg-primary h-full transition-all duration-300 shadow-[0_0_6px_rgba(207,255,4,0.5)]"
            ></div>
          </div>
        </div>

        <div>
          <div className="flex justify-between items-center text-[9px] font-black tracking-widest mb-1">
            <span className="text-foreground/50">GRIP LOAD RATING</span>
            <span className="text-primary font-mono">{gripLoad} N/cm²</span>
          </div>
          <div className="w-full bg-border-color/30 h-[3px] rounded-full overflow-hidden">
            <div 
              style={{ width: `${(parseFloat(gripLoad) / 110) * 100}%` }}
              className="bg-primary h-full transition-all duration-300 shadow-[0_0_6px_rgba(207,255,4,0.5)]"
            ></div>
          </div>
        </div>

        <div className="flex justify-between text-[9px] font-mono border-t border-border-color/20 pt-2">
          <span className="text-foreground/40 uppercase tracking-widest">SAFETY STATUS</span>
          <span className="text-primary font-black uppercase tracking-wider">{safetyIndex}</span>
        </div>
      </div>
    </div>
  );
}

function BarbellCalculator() {
  const [weight, setWeight] = useState(100); // kg
  
  // Bar is 20kg. Sleeve weight is (weight - 20) / 2
  const sideWeight = Math.max(0, (weight - 20) / 2);
  
  // Calculate plates
  const platesConfig = [
    { name: '25', weight: 25, color: '#ef4444', height: 'h-32', width: 'w-[16px]', labelColor: 'text-white' }, // Red
    { name: '20', weight: 20, color: '#3b82f6', height: 'h-28', width: 'w-[15px]', labelColor: 'text-white' }, // Blue
    { name: '15', weight: 15, color: '#eab308', height: 'h-24', width: 'w-[14px]', labelColor: 'text-black' }, // Yellow
    { name: '10', weight: 10, color: '#22c55e', height: 'h-20', width: 'w-[13px]', labelColor: 'text-white' }, // Green
    { name: '5', weight: 5, color: '#f3f4f6', height: 'h-16', width: 'w-[12px]', labelColor: 'text-black' },   // White
    { name: '2.5', weight: 2.5, color: '#111827', height: 'h-12', width: 'w-[10px]', labelColor: 'text-gray-400', border: 'border border-gray-700' }, // Black
    { name: '1.25', weight: 1.25, color: '#9ca3af', height: 'h-9', width: 'w-[8px]', labelColor: 'text-black' } // Silver
  ];
  
  let remaining = sideWeight;
  const activePlates: typeof platesConfig = [];
  
  platesConfig.forEach(plate => {
    const count = Math.floor(remaining / plate.weight);
    for (let i = 0; i < count; i++) {
      activePlates.push(plate);
      remaining -= plate.weight;
    }
  });

  const deflection = (sideWeight * 0.045).toFixed(2);
  const newtons = (weight * 9.81).toFixed(0);
  const safetyFactor = (215000 / (weight * 3.5)).toFixed(1);

  return (
    <div className="flex flex-col gap-4 mt-6">
      <div>
        <div className="flex justify-between items-center text-[10px] font-black tracking-widest mb-1.5">
          <span className="text-foreground/50">TARGET LOAD</span>
          <span className="text-primary">{weight.toFixed(1)} KG</span>
        </div>
        <input 
          type="range" 
          min="20" 
          max="280" 
          step="2.5" 
          value={weight} 
          onChange={(e) => setWeight(parseFloat(e.target.value))}
          className="w-full accent-primary bg-border-color/30 h-1 rounded-lg appearance-none cursor-pointer"
        />
        <div className="flex justify-between text-[8px] text-foreground/40 font-mono mt-1">
          <span>20KG (EMPTY BAR)</span>
          <span>150KG</span>
          <span>280KG (MAX LOAD)</span>
        </div>
      </div>

      {/* Barbell Technical Diagram SVG */}
      <div className="relative h-20 bg-black/30 border border-border-color/30 rounded-[6px] p-2 overflow-hidden flex flex-col justify-between font-mono">
        <div className="absolute top-1 left-2 text-[7px] text-foreground/40 uppercase">SHAFT GEOMETRY & GRIP MAP</div>
        <svg viewBox="0 0 200 40" className="w-full h-10 text-foreground stroke-current fill-none mt-2">
          <line x1="20" y1="20" x2="180" y2="20" strokeWidth="2.2" className="text-gray-400" />
          <line x1="35" y1="20" x2="70" y2="20" strokeWidth="2.4" strokeDasharray="1,1" className="text-primary/70" />
          <line x1="130" y1="20" x2="165" y2="20" strokeWidth="2.4" strokeDasharray="1,1" className="text-primary/70" />
          <rect x="25" y="11" width="3" height="18" fill="#6b7280" stroke="#374151" strokeWidth="0.5" />
          <rect x="172" y="11" width="3" height="18" fill="#6b7280" stroke="#374151" strokeWidth="0.5" />
          <rect x="5" y="14" width="20" height="12" fill="#9ca3af" stroke="#4b5563" strokeWidth="0.5" />
          <rect x="175" y="14" width="20" height="12" fill="#9ca3af" stroke="#4b5563" strokeWidth="0.5" />
        </svg>
        <div className="flex justify-between text-[7px] text-foreground/40 leading-none">
          <span>50MM SLEEVE // NEEDLE BEARINGS</span>
          <span className="text-primary">28MM SHAFT // VOLCANO KNURL</span>
        </div>
      </div>

      {/* SVG Plate Visualizer */}
      <div className="relative bg-black/40 border border-border-color/40 rounded-[6px] p-4 flex items-center justify-center h-36 overflow-hidden">
        {/* Sleeve center rod line */}
        <div className="absolute left-0 right-0 h-1.5 bg-gray-800 border-y border-gray-700"></div>
        {/* Sleeve collar stopper */}
        <div className="absolute left-6 w-3 h-14 bg-gray-500 border border-gray-400 rounded-[2px] z-10 shadow-md">
          <div className="w-full h-full bg-gradient-to-r from-transparent to-black/20"></div>
        </div>
        
        {/* Loaded plates container */}
        <div className="flex items-center gap-[2px] pl-10 z-10 select-none">
          {activePlates.map((plate, idx) => (
            <div 
              key={idx} 
              style={{ backgroundColor: plate.color }} 
              className={`${plate.height} ${plate.width} rounded-[3px] flex items-center justify-center shadow-md relative border border-black/40 ${plate.border || ''}`}
              title={`${plate.name} kg Plate`}
            >
              {/* Inner ring core detail */}
              <div className="absolute w-1 h-1 rounded-full bg-gray-300 border border-gray-600"></div>
              {/* Weight text vertically rotated */}
              <span className={`text-[6px] font-black tracking-tighter ${plate.labelColor} select-none transform rotate-90 scale-75 md:scale-90`}>
                {plate.name}
              </span>
            </div>
          ))}
          {/* Collar clamp at the end */}
          {activePlates.length > 0 && (
            <div className="w-3.5 h-8 bg-yellow-500 border border-yellow-600 rounded-[2px] flex items-center justify-center shadow-lg animate-pulse">
              <div className="w-1 h-1 rounded-full bg-black"></div>
            </div>
          )}
        </div>

        {/* Dynamic Deflection Grid */}
        <div className="absolute bottom-2 left-4 text-[8px] font-mono text-foreground/40">
          GRID RES: 100hz // DEFLECTION: {deflection}mm
        </div>
      </div>

      {/* Numerical readouts grid */}
      <div className="grid grid-cols-2 gap-4 border-t border-border-color/40 pt-4 text-[10px]">
        <div>
          <span className="text-foreground/40 block uppercase tracking-widest text-[8px]">GRAVITATIONAL FORCE</span>
          <span className="text-foreground font-bold font-mono">{newtons} N</span>
        </div>
        <div>
          <span className="text-foreground/40 block uppercase tracking-widest text-[8px]">TENSILE SAFETY FACTOR</span>
          <span className="text-primary font-bold font-mono">{safetyFactor}x</span>
        </div>
      </div>

      {/* Structural specifications sub-grid */}
      <div className="grid grid-cols-2 gap-2 text-[8px] font-mono border-t border-border-color/20 pt-2.5">
        <div className="flex justify-between">
          <span className="text-foreground/40">SHAFT ALLOY:</span>
          <span className="text-foreground font-bold">215K PSI ALLOY</span>
        </div>
        <div className="flex justify-between">
          <span className="text-foreground/40">BEARING SYSTEM:</span>
          <span className="text-foreground font-bold">8 NEEDLE BRGS</span>
        </div>
        <div className="flex justify-between">
          <span className="text-foreground/40">GRIP DIAMETER:</span>
          <span className="text-foreground font-bold">28.0 MM</span>
        </div>
        <div className="flex justify-between">
          <span className="text-foreground/40">KNURLING:</span>
          <span className="text-primary font-bold">1.2MM VOLCANO</span>
        </div>
      </div>
    </div>
  );
}

function KettlebellCalculator() {
  const [weight, setWeight] = useState(24); // 8 to 48
  const [velocity, setVelocity] = useState(3.5); // 1.5 to 7.5

  const r = 0.75; 
  const ke = (0.5 * weight * velocity * velocity).toFixed(1);
  const centripetal = (weight * velocity * velocity / r).toFixed(1);
  const effWeight = (parseFloat(centripetal) / 9.81).toFixed(1);
  const gForce = (parseFloat(centripetal) / (weight * 9.81) + 1).toFixed(2);

  let zoneName = "AEROBIC COND";
  let zoneColor = "text-cyan-400";
  let barColor = "bg-cyan-400";
  let glowColor = "shadow-[0_0_8px_rgba(34,211,238,0.5)]";

  if (velocity >= 3.0 && velocity < 5.0) {
    zoneName = "HYPERTROPHY & DENSITY";
    zoneColor = "text-primary";
    barColor = "bg-primary";
    glowColor = "shadow-[0_0_8px_rgba(207,255,4,0.6)]";
  } else if (velocity >= 5.0) {
    zoneName = "EXPLOSIVE STRENGTH";
    zoneColor = "text-amber-500";
    barColor = "bg-amber-500";
    glowColor = "shadow-[0_0_8px_rgba(245,158,11,0.6)]";
  }

  return (
    <div className="flex flex-col gap-4 mt-6">
      {/* Weight Selector */}
      <div>
        <div className="flex justify-between items-center text-[10px] font-black tracking-widest mb-1.5">
          <span className="text-foreground/50">WEIGHT SELECTION</span>
          <span className="text-foreground font-mono">{weight} KG</span>
        </div>
        <div className="grid grid-cols-6 gap-1">
          {[8, 16, 24, 32, 40, 48].map((w) => (
            <button
              key={w}
              onClick={() => setWeight(w)}
              className={`py-1 text-[9px] font-bold font-mono border rounded-[4px] transition-colors ${
                weight === w 
                  ? 'bg-primary text-black border-primary' 
                  : 'bg-transparent text-foreground/60 border-border-color/60 hover:text-foreground hover:border-foreground/50'
              }`}
            >
              {w}K
            </button>
          ))}
        </div>
      </div>

      {/* Velocity Slider */}
      <div>
        <div className="flex justify-between items-center text-[10px] font-black tracking-widest mb-1.5">
          <span className="text-foreground/50">SWING VELOCITY</span>
          <span className="text-foreground font-mono">{velocity.toFixed(1)} M/S</span>
        </div>
        <input 
          type="range" 
          min="1.5" 
          max="7.5" 
          step="0.1" 
          value={velocity} 
          onChange={(e) => setVelocity(parseFloat(e.target.value))}
          className="w-full accent-primary bg-border-color/30 h-1 rounded-lg appearance-none cursor-pointer"
        />
      </div>

      {/* Telemetry Output HUD */}
      <div className="bg-black/40 border border-border-color/40 rounded-[6px] p-4 flex flex-col gap-3">
        {/* Kinetic Energy Progress Bar */}
        <div>
          <div className="flex justify-between items-center text-[8px] font-black tracking-widest mb-1">
            <span className="text-foreground/40">KINETIC ENERGY OUTPUT</span>
            <span className="text-foreground font-mono font-bold">{ke} J</span>
          </div>
          <div className="w-full bg-border-color/30 h-[4px] rounded-full overflow-hidden">
            <div 
              style={{ width: `${Math.min(100, (parseFloat(ke) / 1350) * 100)}%` }} 
              className={`h-full transition-all duration-300 ${barColor} ${glowColor}`}
            ></div>
          </div>
        </div>

        {/* centripetal force and equivalent weight */}
        <div className="grid grid-cols-2 gap-2 border-t border-border-color/20 pt-2 text-[10px] font-mono">
          <div>
            <span className="text-foreground/40 text-[7px] block uppercase tracking-widest">FORCE LOAD</span>
            <span className="text-foreground font-bold">{centripetal} N</span>
          </div>
          <div>
            <span className="text-foreground/40 text-[7px] block uppercase tracking-widest">EFFECTIVE MASS</span>
            <span className="text-foreground font-bold">{effWeight} KG ({gForce}G)</span>
          </div>
        </div>
        
        {/* Power Zone Readout */}
        <div className="border-t border-border-color/20 pt-2 flex justify-between items-center text-[10px]">
          <span className="text-foreground/40 font-black tracking-widest uppercase text-[8px]">PERFORMANCE ZONE</span>
          <span className={`font-black tracking-wide uppercase text-[9px] ${zoneColor}`}>{zoneName}</span>
        </div>
      </div>
    </div>
  );
}

function CageSafetyAdjuster() {
  const [pinHeight, setPinHeight] = useState(12);

  const holes = Array.from({ length: 20 }, (_, i) => 20 - i);
  const currentHeightInches = pinHeight * 3 + 12; // pin 12 = 48 inches

  return (
    <div className="flex flex-col gap-4 mt-6">
      {/* Slider */}
      <div>
        <div className="flex justify-between items-center text-[10px] font-black tracking-widest mb-1.5">
          <span className="text-foreground/50">SPOTTER PIN HEIGHT</span>
          <span className="text-primary font-mono">{currentHeightInches} INCHES</span>
        </div>
        <input 
          type="range" 
          min="1" 
          max="20" 
          step="1" 
          value={pinHeight} 
          onChange={(e) => setPinHeight(parseInt(e.target.value))}
          className="w-full accent-primary bg-border-color/30 h-1 rounded-lg appearance-none cursor-pointer"
        />
        <div className="flex justify-between text-[7px] text-foreground/40 font-mono mt-1">
          <span>15"</span>
          <span>42"</span>
          <span>72"</span>
        </div>
      </div>

      {/* SVG Upright Column */}
      <div className="relative bg-black/40 border border-border-color/40 rounded-[6px] p-4 flex items-center justify-center h-40 overflow-hidden">
        {/* The steel upright profile */}
        <div className="relative w-12 h-32 bg-gray-800 border-x-2 border-gray-600 flex flex-col justify-around py-2">
          {holes.map((h) => {
            const isPin = h === pinHeight;
            return (
              <div key={h} className="relative flex items-center justify-center h-1.5">
                {/* Hole */}
                <div className="w-1.5 h-1.5 rounded-full bg-black border border-gray-700"></div>
                {/* Safety Spotter Pin overlay */}
                {isPin && (
                  <div className="absolute -left-4 w-20 h-3 bg-yellow-500 border border-yellow-600 rounded-[2px] shadow-lg flex items-center justify-end pr-1 z-10 animate-pulse">
                    <span className="text-[5px] font-black text-black font-mono tracking-tighter">SPOTTER PIN</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
        
        {/* Guidelines / Target labels */}
        <div className="absolute right-4 top-4 text-right flex flex-col gap-1 text-[8px] font-mono text-foreground/40 leading-none">
          <div>UPRIGHT: 3"X3" 11-GAUGE</div>
          <div>HOLE SPACING: WESTSIDE 2"</div>
          <div>MAX PIN CAPACITY: 2000 LBS</div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 border-t border-border-color/40 pt-4 text-[10px] font-mono">
        <div>
          <span className="text-foreground/40 block uppercase tracking-widest text-[8px]">TARGET EXERCISE</span>
          <span className="text-foreground font-bold">{pinHeight > 14 ? 'SQUAT / OVERHEAD' : pinHeight > 7 ? 'BENCH PRESS' : 'DEFICIT PULLS'}</span>
        </div>
        <div>
          <span className="text-foreground/40 block uppercase tracking-widest text-[8px]">RACK STABILITY</span>
          <span className="text-primary font-bold">100% NOMINAL</span>
        </div>
      </div>
    </div>
  );
}

function PlateBounceTester() {
  const [dropHeight, setDropHeight] = useState(2.0); // meters
  
  const shoreHardness = 88; // Shore A
  const coefficientOfRestitution = 0.35; // 35% rebound
  const reboundHeight = (dropHeight * coefficientOfRestitution).toFixed(2);
  const velocity = Math.sqrt(2 * 9.81 * dropHeight).toFixed(1);
  const impactTime = (parseFloat(velocity) / (9.81 * 10)).toFixed(3); // simulated seconds

  return (
    <div className="flex flex-col gap-4 mt-6">
      {/* Drop Height Slider */}
      <div>
        <div className="flex justify-between items-center text-[10px] font-black tracking-widest mb-1.5">
          <span className="text-foreground/50">PLATE DROP HEIGHT</span>
          <span className="text-primary font-mono">{dropHeight.toFixed(1)} METERS</span>
        </div>
        <input 
          type="range" 
          min="1.0" 
          max="4.0" 
          step="0.5" 
          value={dropHeight} 
          onChange={(e) => setDropHeight(parseFloat(e.target.value))}
          className="w-full accent-primary bg-border-color/30 h-1 rounded-lg appearance-none cursor-pointer"
        />
        <div className="flex justify-between text-[7px] text-foreground/40 font-mono mt-1">
          <span>1.0M</span>
          <span>2.5M</span>
          <span>4.0M</span>
        </div>
      </div>

      {/* SVG Bounce Animation Area */}
      <div className="relative bg-black/40 border border-border-color/40 rounded-[6px] p-4 flex items-center justify-center h-36 overflow-hidden">
        {/* Floor Line */}
        <div className="absolute bottom-6 left-0 right-0 h-[2px] bg-gray-600"></div>
        
        {/* Bouncing SVG Bumper Plate */}
        <div 
          className="absolute bottom-[24px] flex flex-col items-center justify-center"
          style={{
            animation: `plate-bounce ${1.5 / dropHeight}s infinite ease-in-out`
          }}
        >
          {/* Plate SVG */}
          <svg viewBox="0 0 40 40" className="w-12 h-12 text-red-500 fill-current">
            <circle cx="20" cy="20" r="18" className="text-red-600" />
            <circle cx="20" cy="20" r="10" className="text-black" />
            <circle cx="20" cy="20" r="4" className="text-gray-300" />
            <circle cx="20" cy="20" r="2.5" className="text-black" />
          </svg>
          <span className="text-[6px] font-black font-mono text-foreground/50 absolute top-[18px]">25KG</span>
        </div>

        {/* Real-time stats */}
        <div className="absolute right-3 top-3 text-right flex flex-col gap-0.5 text-[8px] font-mono text-foreground/40 leading-none">
          <div>SHORE HARDNESS: {shoreHardness}A</div>
          <div>IMPACT VELOCITY: {velocity} M/S</div>
          <div>EST. REBOUND: {reboundHeight}M</div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 border-t border-border-color/40 pt-4 text-[10px] font-mono">
        <div>
          <span className="text-foreground/40 block uppercase tracking-widest text-[8px]">REBOUND COEFFICIENT</span>
          <span className="text-foreground font-bold">0.35 COR</span>
        </div>
        <div>
          <span className="text-foreground/40 block uppercase tracking-widest text-[8px]">IMPACT PULSE TIME</span>
          <span className="text-primary font-bold">{impactTime} SEC</span>
        </div>
      </div>
    </div>
  );
}

function BiometricsWidget() {
  const [pulse, setPulse] = useState(132);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setPulse(p => p + (Math.random() > 0.5 ? 1 : -1) * Math.floor(Math.random() * 3));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="my-4">
      {/* SVG looping pulse line */}
      <div className="relative h-20 w-full bg-black/40 border border-border-color/40 rounded-[6px] p-2 overflow-hidden flex items-center">
        <svg viewBox="0 0 100 20" preserveAspectRatio="none" className="w-full h-full text-primary fill-none stroke-current stroke-1">
          <path 
            d="M0,10 L25,10 L30,10 L33,3 L37,17 L40,10 L43,10 L47,10 L50,2 L53,18 L56,10 L100,10"
            className="animate-ecg"
            style={{
              strokeDasharray: '200',
            }}
          />
        </svg>
        
        {/* BPM Overlay */}
        <div className="absolute top-2 left-3 flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping"></span>
          <span className="text-[8px] font-black tracking-widest text-primary">LIVE MONITOR</span>
        </div>
        <div className="absolute bottom-2 right-3 text-right">
          <span className="text-xl font-bold font-mono text-foreground leading-none">{pulse}</span>
          <span className="text-[8px] font-black font-mono text-primary ml-1 uppercase">BPM</span>
        </div>
      </div>

      {/* Grid status */}
      <div className="grid grid-cols-2 gap-2 text-[9px] font-mono border-t border-border-color/30 pt-3">
        <div className="flex justify-between border-b border-border-color/10 pb-1">
          <span className="text-foreground/40">HRV INDEX:</span>
          <span className="text-foreground font-bold">84 ms</span>
        </div>
        <div className="flex justify-between border-b border-border-color/10 pb-1">
          <span className="text-foreground/40">METABOLIC:</span>
          <span className="text-foreground font-bold">ZONE 4</span>
        </div>
      </div>
    </div>
  );
}

function CoachingHudWidget() {
  return (
    <div className="my-4 relative h-28 bg-black/40 border border-border-color/40 rounded-[6px] p-3 flex flex-col justify-between overflow-hidden">
      {/* Corner crosshairs */}
      <div className="absolute top-1.5 left-1.5 w-1.5 h-1.5 border-t border-l border-primary/50"></div>
      <div className="absolute top-1.5 right-1.5 w-1.5 h-1.5 border-t border-r border-primary/50"></div>
      <div className="absolute bottom-1.5 left-1.5 w-1.5 h-1.5 border-b border-l border-primary/50"></div>
      <div className="absolute bottom-1.5 right-1.5 w-1.5 h-1.5 border-b border-r border-primary/50"></div>
      
      {/* Animated target line */}
      <div className="absolute left-0 right-0 top-1/2 h-[1px] bg-primary/10 border-t border-dashed border-primary/20 z-0"></div>
      <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-primary/10 border-l border-dashed border-primary/20 z-0"></div>

      {/* Diagnostic telemetry lines */}
      <div className="flex justify-between items-start z-10">
        <span className="text-[7px] font-black tracking-widest text-primary bg-primary/10 border border-primary/20 px-1 rounded-[2px] uppercase">HUD.ACTIVE</span>
        <span className="text-[7px] font-mono text-foreground/40">[CAM.REF_521]</span>
      </div>

      <div className="flex flex-col gap-0.5 z-10 text-[9px] font-mono">
        <div className="flex justify-between">
          <span className="text-foreground/50">SQUAT DEPTH ANGLE:</span>
          <span className="text-primary font-bold">114° [PASS]</span>
        </div>
        <div className="flex justify-between">
          <span className="text-foreground/50">BAR PATH DEVIATION:</span>
          <span className="text-foreground font-bold">1.2% (OPTIMAL)</span>
        </div>
        <div className="flex justify-between">
          <span className="text-foreground/50">VELOCITY LOSS:</span>
          <span className="text-foreground font-bold">4.8% [RECOVERY]</span>
        </div>
      </div>
      
      {/* HUD scanner sweeping bar */}
      <div className="absolute left-0 w-full h-[1.5px] bg-gradient-to-r from-transparent via-primary/30 to-transparent top-0 animate-hud-sweep"></div>
    </div>
  );
}

function AccessScannerWidget() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const d = new Date();
      const hrs = String(d.getHours()).padStart(2, '0');
      const mins = String(d.getMinutes()).padStart(2, '0');
      const secs = String(d.getSeconds()).padStart(2, '0');
      setTime(`${hrs}:${mins}:${secs}`);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col sm:flex-row gap-3 mt-4 items-stretch">
      <div className="flex-1 bg-black/40 border border-border-color/40 rounded-[6px] p-3 flex flex-col justify-between font-mono h-20">
        <div className="flex justify-between text-[7px] text-foreground/40">
          <span>CONSOLE MASTER CLOCK</span>
          <span className="text-primary font-bold">LIVE SYNC</span>
        </div>
        <div className="text-lg font-bold tracking-wider text-foreground select-none my-0.5">
          {time || '00:00:00'}
        </div>
        <div className="text-[7px] text-foreground/30">
          UTC OFFSET // LOCAL TIME STAMP
        </div>
      </div>

      <div className="flex-1 bg-black/40 border border-border-color/40 rounded-[6px] p-3 flex flex-col justify-between font-mono h-20">
        <div className="flex justify-between text-[7px] text-foreground/40">
          <span>FACILITY LOADING</span>
          <span className="text-primary font-bold">28% (LOW)</span>
        </div>
        <div className="flex items-center gap-0.5 my-1">
          {[...Array(10)].map((_, i) => (
            <div 
              key={i} 
              className={`h-3 flex-1 rounded-[1px] ${
                i < 3 ? 'bg-primary shadow-[0_0_4px_rgba(207,255,4,0.4)]' : 'bg-border-color/20'
              }`}
            ></div>
          ))}
        </div>
        <div className="text-[7px] text-foreground/30 flex justify-between">
          <span>PEAK: 18:00</span>
          <span>EST. WAIT: 0 MIN</span>
        </div>
      </div>
    </div>
  );
}

// --- MAIN PAGE COMPONENT ---

export default function Home() {
  return (
    <div className="flex flex-col w-full bg-transparent">
      {/* Hero Section */}
      <section className="relative min-h-[95vh] flex flex-col justify-center overflow-hidden border-b border-border-color/40 bg-transparent">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/hero.jpg" 
            alt="Hero Man Barbell Squat" 
            fill
            className="object-cover opacity-85 dark:opacity-75 grayscale hover:grayscale-0 transition-all duration-1000"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/20 to-transparent" />
          
          {/* Neon Technical Overlay grids */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(207,255,4,0.06),rgba(0,0,0,0))]" />
        </div>

        {/* Decorative corner lines in hero */}
        <div className="absolute top-8 left-8 w-24 h-24 border-t-2 border-l-2 border-primary/30 pointer-events-none hidden md:block"></div>
        <div className="absolute top-8 right-8 w-24 h-24 border-t-2 border-r-2 border-primary/30 pointer-events-none hidden md:block"></div>
        <div className="absolute bottom-8 left-8 w-24 h-24 border-b-2 border-l-2 border-primary/30 pointer-events-none hidden md:block"></div>
        <div className="absolute bottom-8 right-8 w-24 h-24 border-b-2 border-r-2 border-primary/30 pointer-events-none hidden md:block"></div>
        
        <div className="relative z-20 px-4 sm:px-6 max-w-7xl mx-auto w-full pt-16 flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Main Title Group */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-card backdrop-blur-md border border-primary/20 px-3 py-1.5 mb-8 rounded-[4px] shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
              <span className="text-[10px] text-foreground font-black tracking-[0.2em] uppercase font-mono">SYSTEM.INIT // CORE_PERFORMANCE_STAGE</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black uppercase italic tracking-tighter text-foreground mb-8 leading-none max-w-xl">
              PUSH BEYOND<br />
              <span className="text-primary drop-shadow-[0_0_15px_rgba(207,255,4,0.4)]">YOUR LIMITS</span>
            </h1>
            
            <p className="text-base md:text-lg text-foreground/80 mb-12 max-w-md font-medium leading-relaxed">
              Elite training for those who refuse to settle. Join the most advanced strength facility in the city and unlock your peak physical output with professional biomechanics coaching.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="bg-primary hover:bg-primary-hover text-primary-content text-xs font-black uppercase tracking-widest py-4 px-10 rounded-[4px] transition-all hover:scale-[1.03] shadow-[0_0_30px_rgba(207,255,4,0.35)] duration-300">
                JOIN THE ELITE
              </Link>
              <Link href="/programs" className="bg-card hover:bg-foreground hover:text-background text-foreground text-xs font-black uppercase tracking-widest py-4 px-10 rounded-[4px] border border-border-color backdrop-blur-md transition-all duration-300">
                VIEW PROGRAMS
              </Link>
            </div>
          </div>

          {/* Right Floating Console Specs Card (Syncs visually with Dumbbell) */}
          <div className="w-full md:w-80 tech-panel p-6 shadow-xl relative overflow-hidden shrink-0 group hover:border-primary/50 transition-all duration-300 bg-card/60 backdrop-blur-md" style={{borderRadius:"12px"}}>
            <div className="absolute top-0 right-0 w-24 h-24 bg-primary rounded-full mix-blend-overlay filter blur-[40px] opacity-10"></div>
            
            <div className="flex justify-between items-start border-b border-border-color pb-4 mb-4">
              <div>
                <span className="text-[9px] text-primary font-black tracking-widest uppercase">/ CALIBRATION</span>
                <h3 className="text-md font-bold uppercase tracking-wider text-foreground mt-0.5">ELITE DUMBBELL</h3>
              </div>
              <span className="text-[10px] text-foreground/40 font-mono">[SYS.01]</span>
            </div>

            <p className="text-xs text-foreground/60 leading-relaxed font-medium mb-6">
              Vibration-dampened cast iron core coated with premium urethane. Diamond knurl steel grip optimized for heavy volume press and row patterns.
            </p>

            <DumbbellSelector />
          </div>
        </div>

        {/* Large technical coordinates at bottom */}
        <div className="absolute bottom-4 right-8 z-0 pointer-events-none overflow-hidden select-none opacity-20 dark:opacity-10 hidden md:block">
          <span className="font-mono text-sm tracking-widest text-foreground font-bold">
            LAT. 40° 42' 46" N // LON. 74° 00' 21" W
          </span>
        </div>
      </section>

      {/* Engineered for Results */}
      <section className="py-24 bg-transparent relative overflow-hidden border-b border-border-color/40">
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 border-b border-border-color/60 pb-6 gap-4">
            <div>
              <div className="text-[10px] text-primary font-black tracking-[0.2em] uppercase mb-2">/ PERFORMANCE HARDWARE</div>
              <h2 className="text-4xl md:text-5xl font-black italic uppercase tracking-widest text-foreground drop-shadow-sm">ENGINEERED FOR RESULTS</h2>
            </div>
            <span className="text-xs text-foreground/40 font-mono tracking-widest uppercase">[STAGE.02 // PHYSICAL_SPECS]</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch relative">
            {/* Cards Grid Column */}
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 01 - Spans 2 cols */}
              <div className="md:col-span-2 relative h-[480px] md:h-[520px] bg-background/30 overflow-hidden border border-border-color/60 hover:border-primary/50 transition-all duration-500 rounded-[12px] group shadow-lg glow-hover">
                <Image src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1000&auto=format&fit=crop" alt="Equipment" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-background via-background/70 to-transparent">
                  <div className="text-primary text-5xl font-black italic mb-2 drop-shadow-md">01</div>
                  <h3 className="text-2xl font-bold uppercase tracking-widest mb-2 text-foreground">ELITE EQUIPMENT</h3>
                  <p className="text-xs text-foreground/80 max-w-md leading-relaxed font-medium">Precision-engineered machinery and high-grade free weights designed for professional competition and peak performance. Unleash your max output safely.</p>
                </div>
              </div>

              {/* Card 02 */}
              <div className="tech-panel p-8 flex flex-col justify-between h-[480px] md:h-[520px] rounded-[12px] hover:border-primary/50 transition-all duration-500 group shadow-lg glow-hover bg-card/60 backdrop-blur-md">
                <div className="flex justify-between items-center text-primary">
                  <svg className="w-8 h-8 stroke-current" fill="none" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v16.5M21 19.5H3.75M18 6.25 12 12.25 8.25 8.5 3.75 13"></path></svg>
                  <span className="text-[9px] text-foreground/40 font-mono">[SYS.METRICS // 02]</span>
                </div>
                
                <BiometricsWidget />
                
                <div>
                  <div className="text-primary text-4xl font-black italic mb-1">02</div>
                  <h3 className="text-lg font-bold uppercase tracking-widest mb-1 text-foreground">BIOMETRICS</h3>
                  <p className="text-[11px] font-medium leading-relaxed text-foreground/70">Real-time data tracking of your heart rate variance, metabolic output, and recovery metrics ensuring optimal progressive overload.</p>
                </div>
              </div>

              {/* Card 03 */}
              <div className="relative h-[480px] md:h-[520px] overflow-hidden border border-border-color/60 hover:border-primary/50 transition-all duration-500 rounded-[12px] group shadow-lg glow-hover">
                <Image src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1000&auto=format&fit=crop" alt="Coach" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 p-8 flex flex-col justify-between bg-gradient-to-t from-background via-background/80 to-background/20">
                  <div className="flex justify-between items-center text-primary">
                    <svg className="w-8 h-8 stroke-current" fill="none" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" /></svg>
                    <span className="text-[9px] text-foreground/40 font-mono">[SYS.COACHING // 03]</span>
                  </div>
                  
                  <CoachingHudWidget />
                  
                  <div>
                    <div className="text-primary text-4xl font-black italic mb-1 drop-shadow-md">03</div>
                    <h3 className="text-lg font-bold uppercase tracking-widest mb-1 text-foreground">PRO COACHING</h3>
                    <p className="text-[11px] text-foreground/80 max-w-sm leading-relaxed font-medium">Work with former Olympians and certified strength specialists to refine your technique and mindset. Never hit a plateau again.</p>
                  </div>
                </div>
              </div>

              {/* Card 04 - Spans 2 cols */}
              <div className="md:col-span-2 tech-panel hover:border-primary/50 transition-all duration-500 p-8 flex flex-col justify-between h-[480px] md:h-[520px] relative overflow-hidden rounded-[12px] group shadow-lg glow-hover bg-card/60 backdrop-blur-md">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary rounded-full mix-blend-overlay filter blur-[100px] opacity-15"></div>
                
                <div className="flex justify-between items-center text-primary z-10">
                  <svg className="w-8 h-8 stroke-current" fill="none" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
                  <span className="text-[9px] text-foreground/40 font-mono">[SYS.ACCESS // 04]</span>
                </div>

                <div className="w-full z-10">
                  <AccessScannerWidget />
                </div>

                <div className="z-10 mt-4">
                  <div className="text-primary text-4xl font-black italic mb-1 drop-shadow-[0_0_10px_rgba(207,255,4,0.4)]">04</div>
                  <h3 className="text-lg font-bold uppercase tracking-widest mb-1 text-foreground">24/7 UNRESTRICTED ACCESS</h3>
                  <p className="text-[11px] text-foreground/70 leading-relaxed font-medium">Discipline doesn't follow a schedule. Our facility is open around the clock for members who live by the grind. Train when your body is ready.</p>
                </div>
              </div>
            </div>

            {/* Right column containing Olympic Barbell & Bumper Plate Specs */}
            <div className="hidden lg:flex lg:col-span-4 flex-col gap-8">
              {/* Olympic Barbell Specs Box */}
              <div className="flex flex-col justify-between p-8 border border-border-color bg-card/60 backdrop-blur-md rounded-[12px] relative overflow-hidden group shadow-lg">
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
                
                <div>
                  <div className="text-xs text-primary font-black tracking-widest uppercase mb-1">/ HARDWARE SPECS</div>
                  <h3 className="text-xl font-bold uppercase tracking-wider text-foreground">OLYMPIC BARBELL</h3>
                  <p className="text-[11px] text-foreground/60 leading-relaxed font-medium mt-1">
                    Precision-calibrated 20kg steel bar with dual knurl marks, high-speed needle bearings for butter-smooth sleeve rotation, and a tensile strength of 215,000 PSI to handle extreme loads.
                  </p>
                </div>

                <BarbellCalculator />
              </div>

              {/* Competition Bumper Plates Specs Box */}
              <div className="flex flex-col justify-between p-8 border border-border-color bg-card/60 backdrop-blur-md rounded-[12px] relative overflow-hidden group shadow-lg">
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
                
                <div>
                  <div className="text-xs text-primary font-black tracking-widest uppercase mb-1">/ HARDWARE SPECS</div>
                  <h3 className="text-xl font-bold uppercase tracking-wider text-foreground">COMPETITION BUMPER PLATES</h3>
                  <p className="text-[11px] text-foreground/60 leading-relaxed font-medium mt-1">
                    Vulcanized rubber construction with stainless steel inserts. Calibrated to within +/- 10 grams of target weight. Designed to withstand 30,000+ drops without deformation.
                  </p>
                </div>

                <PlateBounceTester />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Decorative mid-row border banner */}
      <section className="relative h-20 md:h-28 border-b border-border-color/40 flex items-center justify-center bg-card/5 backdrop-blur-sm overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 mix-blend-overlay opacity-30"></div>
        <div className="relative z-20 text-center">
          <h2 className="text-2xl md:text-4xl font-black italic uppercase text-foreground tracking-[0.2em] opacity-80">
            ELEVATE YOUR <span className="text-primary">STANDARD</span>
          </h2>
        </div>
      </section>

      {/* Dominate Your Discipline */}
      <section className="py-24 bg-transparent relative overflow-hidden border-b border-border-color/40">
        <div className="relative z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center mb-16">
            <div className="text-[10px] text-primary font-black tracking-[0.2em] uppercase mb-2">/ PROGRAM DIRECTORY</div>
            <h2 className="text-4xl md:text-5xl font-black italic uppercase tracking-widest text-foreground font-display">DOMINATE YOUR DISCIPLINE</h2>
            <div className="w-16 h-[2px] bg-primary mx-auto mt-4 mb-4"></div>
            <p className="text-sm text-foreground/70 max-w-xl mx-auto leading-relaxed font-medium">
              Discover our comprehensive range of elite programs designed by biomechanical coaches to push physical recovery and strength thresholds.
            </p>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative">
            {/* Left column containing Kettlebell Specs & Power Cage Specs */}
            <div className="hidden lg:flex lg:col-span-4 flex-col gap-8">
              {/* Competition Kettlebell Specs Box */}
              <div className="flex flex-col justify-between p-8 border border-border-color bg-card/60 backdrop-blur-md rounded-[12px] relative overflow-hidden group shadow-lg">
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
                
                <div>
                  <div className="text-xs text-primary font-black tracking-widest uppercase mb-1">/ HARDWARE SPECS</div>
                  <h3 className="text-xl font-bold uppercase tracking-wider text-foreground">COMPETITION KETTLEBELL</h3>
                  <p className="text-[11px] text-foreground/60 leading-relaxed font-medium mt-1">
                    Flat-base, single-piece cast iron design with a smooth powder-coated finish for optimal grip retention. Calibration bands indicate weight meets international competition limits.
                  </p>
                </div>

                <KettlebellCalculator />
              </div>

              {/* Power Cage Safety Specs Box */}
              <div className="flex flex-col justify-between p-8 border border-border-color bg-card/60 backdrop-blur-md rounded-[12px] relative overflow-hidden group shadow-lg">
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
                
                <div>
                  <div className="text-xs text-primary font-black tracking-widest uppercase mb-1">/ HARDWARE SPECS</div>
                  <h3 className="text-xl font-bold uppercase tracking-wider text-foreground">HEAVY DUTY POWER CAGE</h3>
                  <p className="text-[11px] text-foreground/60 leading-relaxed font-medium mt-1">
                    Industrial-grade 3"x3" 11-gauge steel uprights with 2" Westside hole spacing. Magnetic spotter pin adjusts smoothly to match safety clearance limits for benching or squatting.
                  </p>
                </div>

                <CageSafetyAdjuster />
              </div>
            </div>

            {/* Programs Grid Column on Right */}
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
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
                <div key={i} className="group relative h-[360px] overflow-hidden border border-border-color bg-background/25 hover:border-primary/50 transition-all duration-500 rounded-[12px] shadow-md glow-hover backdrop-blur-[2px]">
                  <Image 
                    src={program.img} 
                    alt={program.title} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80" />
                  
                  <div className="absolute inset-x-0 bottom-0 p-6 bg-card/90 backdrop-blur-md transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300 border-t border-primary/20 flex justify-between items-center">
                    <div>
                      <h3 className="text-lg font-black italic uppercase text-foreground tracking-wider">{program.title}</h3>
                      <Link href="/programs" className="text-primary text-[9px] font-black uppercase tracking-widest flex items-center gap-1.5 mt-0.5">
                        VIEW DETAILS <span className="text-xs">→</span>
                      </Link>
                    </div>
                    <span className="text-[10px] text-foreground/30 font-mono">[0{i+1}]</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Google Reviews Section */}
      <section className="py-24 bg-transparent relative overflow-hidden border-b border-border-color/40">
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6 border-b border-border-color/60 pb-6">
            <div className="text-center md:text-left">
              <div className="text-[10px] text-primary font-black tracking-[0.2em] uppercase mb-2">/ PROVEN FEEDBACK</div>
              <h2 className="text-3xl md:text-5xl font-black italic uppercase tracking-tighter text-foreground">
                WARRIOR <span className="text-primary">TESTIMONIALS</span>
              </h2>
            </div>
            
            <div className="flex items-center gap-4 bg-card/60 backdrop-blur-md p-4 border border-border-color rounded-[8px] shadow-md">
              <div className="flex flex-col items-end">
                <div className="flex gap-1 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-primary fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  ))}
                </div>
                <span className="text-[10px] font-black tracking-widest text-foreground">4.9 / 5.0 RATING</span>
              </div>
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center p-2 shadow-lg shrink-0">
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
              <div key={i} className="tech-panel p-8 border border-border-color bg-card/60 backdrop-blur-sm hover:border-primary/40 transition-all duration-500 group relative overflow-hidden flex flex-col justify-between hover:-translate-y-2 hover:shadow-xl rounded-[12px] glow-hover">
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
                <div className="flex justify-between items-end">
                  <div>
                    <div className="text-xs font-black tracking-widest text-foreground">{review.name}</div>
                    <div className="text-[9px] font-bold text-primary uppercase tracking-widest mt-0.5">{review.role}</div>
                  </div>
                  <span className="text-[10px] text-foreground/30 font-mono">/ VERIFIED</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 md:py-36 overflow-hidden bg-transparent">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2070&auto=format&fit=crop" 
            alt="Gym CTA" 
            fill
            className="object-cover opacity-35 dark:opacity-25 grayscale"
          />
          <div className="absolute inset-0 bg-background/90" />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
        </div>
        
        <div className="relative z-20 text-center max-w-4xl mx-auto px-4 sm:px-6">
          <div className="w-1.5 h-1.5 rounded-full bg-primary mx-auto mb-4 animate-ping"></div>
          <h2 className="text-5xl md:text-7xl font-black italic uppercase tracking-widest mb-6 text-foreground leading-none">
            NO MORE <span className="text-primary drop-shadow-[0_0_15px_rgba(207,255,4,0.4)]">EXCUSES.</span>
          </h2>
          <p className="text-sm md:text-base text-foreground/80 mb-12 leading-relaxed font-medium max-w-xl mx-auto">
            The difference between who you are and who you want to be is what you do today. Start your elite transformation now and join a community of absolute winners.
          </p>
          <Link href="/contact" className="inline-block bg-primary hover:bg-primary-hover text-primary-content text-xs font-black uppercase tracking-[0.2em] py-5 px-14 transition-all shadow-[0_0_35px_rgba(207,255,4,0.45)] hover:scale-[1.03] hover:shadow-[0_0_55px_rgba(207,255,4,0.7)] duration-300 rounded-[4px]">
            CLAIM YOUR PASS
          </Link>
        </div>
      </section>
    </div>
  );
}
