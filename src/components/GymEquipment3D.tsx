'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function GymEquipment3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;

    const canvas = canvasRef.current;
    const container = containerRef.current;

    // --- SCENE SETUP ---
    const scene = new THREE.Scene();

    // --- CAMERA ---
    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    camera.position.z = 8;

    // --- RENDERER ---
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);

    // --- LIGHTING ---
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    // Studio directional light
    const dirLight1 = new THREE.DirectionalLight(0xffffff, 1.8);
    dirLight1.position.set(5, 5, 5);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0xffffff, 0.5);
    dirLight2.position.set(-5, -5, 2);
    scene.add(dirLight2);

    // Neon accent point lights (gives the gym vibe)
    const neonLight1 = new THREE.PointLight(0xcfff04, 15, 15);
    neonLight1.position.set(3, 2, 2);
    scene.add(neonLight1);

    const neonLight2 = new THREE.PointLight(0x6d28d9, 10, 15);
    neonLight2.position.set(-3, -2, 2);
    scene.add(neonLight2);

    // --- MATERIALS ---
    const chromeMaterial = new THREE.MeshStandardMaterial({
      color: 0xdddddd,
      metalness: 0.95,
      roughness: 0.1,
      name: 'chrome',
    });

    const ironMaterial = new THREE.MeshStandardMaterial({
      color: 0x1c1c1e,
      metalness: 0.8,
      roughness: 0.45,
      name: 'iron',
    });

    const neonGreenMaterial = new THREE.MeshStandardMaterial({
      color: 0xcfff04,
      emissive: 0xcfff04,
      emissiveIntensity: 0.4,
      roughness: 0.2,
      name: 'neon-green',
    });

    // --- PROCEDURAL MODEL GENERATION ---

    // 1. DUMBBELL
    const dumbbell = new THREE.Group();
    
    // Bar/Grip
    const gripGeo = new THREE.CylinderGeometry(0.12, 0.12, 1.6, 32);
    const grip = new THREE.Mesh(gripGeo, chromeMaterial);
    grip.rotation.z = Math.PI / 2;
    dumbbell.add(grip);

    // Weight Plates (nested sizes)
    const createPlateStack = (xOffset: number) => {
      const plateSizes = [
        { r: 0.65, w: 0.15 },
        { r: 0.55, w: 0.12 },
        { r: 0.45, w: 0.1 },
      ];

      let currentX = xOffset;
      plateSizes.forEach((size, idx) => {
        const plateGeo = new THREE.CylinderGeometry(size.r, size.r, size.w, 32);
        const plate = new THREE.Mesh(plateGeo, ironMaterial);
        plate.rotation.z = Math.PI / 2;
        // Shift outward along the bar
        const dir = xOffset > 0 ? 1 : -1;
        plate.position.x = currentX + (size.w / 2) * dir;
        dumbbell.add(plate);

        // Collar/Lock ring at the very end of stack
        if (idx === plateSizes.length - 1) {
          const collarGeo = new THREE.CylinderGeometry(0.18, 0.18, 0.08, 16);
          const collar = new THREE.Mesh(collarGeo, neonGreenMaterial);
          collar.rotation.z = Math.PI / 2;
          collar.position.x = plate.position.x + (size.w / 2 + 0.05) * dir;
          dumbbell.add(collar);
        }

        currentX += (size.w + 0.02) * dir;
      });
    };

    createPlateStack(0.3);  // Right side
    createPlateStack(-0.3); // Left side

    scene.add(dumbbell);

    // 2. BARBELL
    const barbell = new THREE.Group();

    // Long Bar
    const barGeo = new THREE.CylinderGeometry(0.06, 0.06, 5.0, 32);
    const bar = new THREE.Mesh(barGeo, chromeMaterial);
    bar.rotation.z = Math.PI / 2;
    barbell.add(bar);

    // Stacked Plates
    const createBarbellPlates = (xOffset: number) => {
      const dir = xOffset > 0 ? 1 : -1;
      const plateCount = 3;
      const plateThickness = 0.18;
      const plateRadius = 0.85;

      for (let i = 0; i < plateCount; i++) {
        const plateGeo = new THREE.CylinderGeometry(plateRadius, plateRadius, plateThickness, 32);
        const plate = new THREE.Mesh(plateGeo, ironMaterial);
        plate.rotation.z = Math.PI / 2;
        plate.position.x = xOffset + (i * (plateThickness + 0.02)) * dir;
        barbell.add(plate);

        // Add a neon ring on the outer plate for visual flair
        if (i === plateCount - 1) {
          // Neon highlight ring
          const ringGeo = new THREE.TorusGeometry(plateRadius - 0.05, 0.03, 8, 32);
          const ring = new THREE.Mesh(ringGeo, neonGreenMaterial);
          ring.rotation.y = Math.PI / 2;
          ring.position.x = plate.position.x + (plateThickness / 2 + 0.01) * dir;
          barbell.add(ring);
        }
      }

      // Outer Collar
      const collarGeo = new THREE.CylinderGeometry(0.12, 0.12, 0.1, 16);
      const collar = new THREE.Mesh(collarGeo, neonGreenMaterial);
      collar.rotation.z = Math.PI / 2;
      collar.position.x = xOffset + (plateCount * (plateThickness + 0.02) + 0.05) * dir;
      barbell.add(collar);
    };

    createBarbellPlates(1.5);
    createBarbellPlates(-1.5);

    scene.add(barbell);

    // 3. KETTLEBELL
    const kettlebell = new THREE.Group();

    // Body (Sphere)
    const bodyGeo = new THREE.SphereGeometry(0.85, 32, 32);
    // Flatten the bottom slightly by scaling y down a tiny bit, or just standard sphere
    const kettleBody = new THREE.Mesh(bodyGeo, ironMaterial);
    kettlebell.add(kettleBody);

    // Handle (Torus)
    const handleGeo = new THREE.TorusGeometry(0.55, 0.12, 16, 64, Math.PI);
    const handle = new THREE.Mesh(handleGeo, chromeMaterial);
    handle.position.y = 0.65;
    // Rotate to align handle
    kettlebell.add(handle);

    // Horns (vertical tubes connecting handle to body)
    const hornGeo = new THREE.CylinderGeometry(0.12, 0.12, 0.3, 16);
    const leftHorn = new THREE.Mesh(hornGeo, chromeMaterial);
    leftHorn.position.set(-0.55, 0.65, 0);
    const rightHorn = new THREE.Mesh(hornGeo, chromeMaterial);
    rightHorn.position.set(0.55, 0.65, 0);
    kettlebell.add(leftHorn);
    kettlebell.add(rightHorn);

    // Badge/Label "32 KG"
    const badgeGeo = new THREE.CylinderGeometry(0.35, 0.35, 0.05, 32);
    const badge = new THREE.Mesh(badgeGeo, neonGreenMaterial);
    badge.rotation.x = Math.PI / 2;
    badge.position.set(0, 0, 0.78);
    kettlebell.add(badge);

    scene.add(kettlebell);

    // --- BACKGROUND GRID HELPER ---
    const gridHelper = new THREE.GridHelper(32, 32, 0x444444, 0x1d1d1f);
    gridHelper.position.set(0, 0, -4.5);
    gridHelper.rotation.x = Math.PI / 2;
    scene.add(gridHelper);

    // --- BACKGROUND NEON PARTICLE FIELD ---
    const particleCount = 250;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const driftSpeeds = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 18;      // X: wide spread
      positions[i * 3 + 1] = (Math.random() - 0.5) * 14;  // Y: vertical spread
      positions[i * 3 + 2] = (Math.random() - 0.5) * 8 - 2.5; // Z: offset behind assets
      driftSpeeds[i] = 0.15 + Math.random() * 0.45;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.09,
      transparent: true,
      opacity: 0.5,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // Helper to traverse and set opacity
    const setGroupOpacity = (group: THREE.Group, opacity: number) => {
      group.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          child.material.transparent = true;
          child.material.opacity = opacity;
          // Optimisation: disable rendering if completely transparent
          child.visible = opacity > 0.01;
        }
      });
    };

    // Initialize all hidden except Dumbbell
    setGroupOpacity(dumbbell, 1);
    setGroupOpacity(barbell, 0);
    setGroupOpacity(kettlebell, 0);

    // --- INTERACTIVE / STATE VARIABLES ---
    let scrollFraction = 0;
    let targetScrollFraction = 0;

    // Mouse position for parallax
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };

    const handleMouseMove = (e: MouseEvent) => {
      // Normalize mouse between -1 and 1
      mouse.targetX = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.targetY = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // --- RESPONSIVE LAYOUT CONFIGURATION ---
    interface ModelConfig {
      x: number;
      y: number;
      z: number;
      scale: number;
      rx: number;
      ry: number;
      rz: number;
    }

    interface SectionConfigs {
      dumbbell: ModelConfig;
      barbell: ModelConfig;
      kettlebell: ModelConfig;
    }

    let isMobile = false;

    const getLayoutConfigs = (mobile: boolean): SectionConfigs[] => {
      if (mobile) {
        // Mobile Layouts (Centered, scaled down, acting as beautiful ambient background)
        return [
          // Section 1: Hero
          {
            dumbbell: { x: 0, y: -0.6, z: 0, scale: 0.9, rx: 0.2, ry: 0.5, rz: 0.3 },
            barbell: { x: 0, y: -8, z: 0, scale: 0.5, rx: 0, ry: 0, rz: 0 },
            kettlebell: { x: 0, y: -8, z: 0, scale: 0.5, rx: 0, ry: 0, rz: 0 },
          },
          // Section 2: Results
          {
            dumbbell: { x: 0, y: 8, z: 0, scale: 0.5, rx: 0, ry: 0, rz: 0 },
            barbell: { x: 0, y: 0, z: 0, scale: 0.6, rx: 0.1, ry: 0.2, rz: 0.8 },
            kettlebell: { x: 0, y: -8, z: 0, scale: 0.5, rx: 0, ry: 0, rz: 0 },
          },
          // Section 3: Disciplines
          {
            dumbbell: { x: 0, y: 8, z: 0, scale: 0.5, rx: 0, ry: 0, rz: 0 },
            barbell: { x: 0, y: 8, z: 0, scale: 0.5, rx: 0, ry: 0, rz: 0 },
            kettlebell: { x: 0, y: 0, z: 0, scale: 0.8, rx: 0.3, ry: -0.5, rz: 0 },
          },
          // Section 4: CTA / Footer
          {
            dumbbell: { x: 0, y: -1.2, z: 0, scale: 0.7, rx: 0.5, ry: 1.2, rz: 0.5 },
            barbell: { x: 0, y: 8, z: 0, scale: 0.5, rx: 0, ry: 0, rz: 0 },
            kettlebell: { x: 0, y: 8, z: 0, scale: 0.5, rx: 0, ry: 0, rz: 0 },
          },
        ];
      } else {
        // Desktop Layouts (Perfect alignment alongside content blocks)
        return [
          // Section 1: Hero (Right floating, big & detailed)
          {
            dumbbell: { x: 2.2, y: 0.2, z: 0, scale: 1.4, rx: 0.4, ry: 0.6, rz: 0.5 },
            barbell: { x: 4, y: -6, z: 0, scale: 0.6, rx: 0, ry: 0, rz: 0 },
            kettlebell: { x: 4, y: -6, z: 0, scale: 0.6, rx: 0, ry: 0, rz: 0 },
          },
          // Section 2: Engineered for Results (Right floating in empty space)
          {
            dumbbell: { x: -4, y: 6, z: 0, scale: 0.6, rx: 0, ry: 0, rz: 0 },
            barbell: { x: 2.4, y: -0.3, z: 0, scale: 1.0, rx: 0.3, ry: 0.5, rz: 0.7 },
            kettlebell: { x: 4, y: -6, z: 0, scale: 0.6, rx: 0, ry: 0, rz: 0 },
          },
          // Section 3: Dominate Your Discipline (Left side kettlebell)
          {
            dumbbell: { x: 4, y: 6, z: 0, scale: 0.6, rx: 0, ry: 0, rz: 0 },
            barbell: { x: -4, y: 6, z: 0, scale: 0.6, rx: 0, ry: 0, rz: 0 },
            kettlebell: { x: -2.4, y: 0, z: 0, scale: 1.4, rx: 0.2, ry: -0.8, rz: 0.1 },
          },
          // Section 4: Reviews & CTA (Center bottom backdrop)
          {
            dumbbell: { x: 0, y: -1.0, z: -1, scale: 1.3, rx: 0.6, ry: 1.5, rz: 0.8 },
            barbell: { x: -4, y: 6, z: 0, scale: 0.6, rx: 0, ry: 0, rz: 0 },
            kettlebell: { x: 4, y: 6, z: 0, scale: 0.6, rx: 0, ry: 0, rz: 0 },
          },
        ];
      }
    };

    let layoutConfigs = getLayoutConfigs(false);

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      isMobile = window.innerWidth < 768;
      layoutConfigs = getLayoutConfigs(isMobile);
    };

    window.addEventListener('resize', handleResize);
    // Initial size check
    handleResize();

    // --- SCROLL HANDLING ---
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      
      // Prevent division by zero
      if (scrollHeight > 0) {
        targetScrollFraction = scrollTop / scrollHeight;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial scroll check
    handleScroll();

    // --- THEME TRACKING FOR LIGHTS ---
    const updateNeonThemeColors = () => {
      const isDark = document.documentElement.classList.contains('dark');
      if (isDark) {
        // Neon green/yellow & purple combo
        neonLight1.color.setHex(0xcfff04);
        neonLight2.color.setHex(0x6d28d9);
        neonGreenMaterial.color.setHex(0xcfff04);
        neonGreenMaterial.emissive.setHex(0xcfff04);
        particleMat.color.setHex(0xcfff04);
        particleMat.opacity = 0.5;
      } else {
        // Vibrant deep purple & blue accent combo for light mode
        neonLight1.color.setHex(0x6d28d9);
        neonLight2.color.setHex(0x2563eb);
        neonGreenMaterial.color.setHex(0x6d28d9);
        neonGreenMaterial.emissive.setHex(0x6d28d9);
        particleMat.color.setHex(0x6d28d9);
        particleMat.opacity = 0.35;
      }
    };

    // Watch class mutations on <html> for theme changes
    const observer = new MutationObserver(updateNeonThemeColors);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });
    updateNeonThemeColors();

    // --- ANIMATION RENDER LOOP ---
    const clock = new THREE.Clock();
    let reqId: number;

    const tick = () => {
      const elapsedTime = clock.getElapsedTime();

      // Smooth scroll lerp
      scrollFraction = THREE.MathUtils.lerp(scrollFraction, targetScrollFraction, 0.08);

      // Smooth mouse lerp
      mouse.x = THREE.MathUtils.lerp(mouse.x, mouse.targetX, 0.1);
      mouse.y = THREE.MathUtils.lerp(mouse.y, mouse.targetY, 0.1);

      // Determine active section and interpolation factor
      // Map scrollFraction (0 to 1) to sections:
      // Section 0 (0.00 to 0.28)
      // Transition 0 -> 1 (0.28 to 0.35)
      // Section 1 (0.35 to 0.62)
      // Transition 1 -> 2 (0.62 to 0.69)
      // Section 2 (0.69 to 0.90)
      // Transition 2 -> 3 (0.90 to 1.00)
      
      const numSections = layoutConfigs.length;
      const progressScaled = scrollFraction * (numSections - 1);
      const index = Math.floor(progressScaled);
      const localProgress = progressScaled - index;

      const idxA = Math.min(index, numSections - 1);
      const idxB = Math.min(index + 1, numSections - 1);

      const configA = layoutConfigs[idxA];
      const configB = layoutConfigs[idxB];

      // Interpolate configurations between configA and configB
      const lerpConfig = (key: 'dumbbell' | 'barbell' | 'kettlebell'): ModelConfig => {
        const a = configA[key];
        const b = configB[key];
        const t = localProgress;

        return {
          x: THREE.MathUtils.lerp(a.x, b.x, t),
          y: THREE.MathUtils.lerp(a.y, b.y, t),
          z: THREE.MathUtils.lerp(a.z, b.z, t),
          scale: THREE.MathUtils.lerp(a.scale, b.scale, t),
          rx: THREE.MathUtils.lerp(a.rx, b.rx, t),
          ry: THREE.MathUtils.lerp(a.ry, b.ry, t),
          rz: THREE.MathUtils.lerp(a.rz, b.rz, t),
        };
      };

      const dConf = lerpConfig('dumbbell');
      const bConf = lerpConfig('barbell');
      const kConf = lerpConfig('kettlebell');

      // Update positions & scales
      dumbbell.position.set(dConf.x, dConf.y, dConf.z);
      dumbbell.scale.setScalar(dConf.scale);

      barbell.position.set(bConf.x, bConf.y, bConf.z);
      barbell.scale.setScalar(bConf.scale);

      kettlebell.position.set(kConf.x, kConf.y, kConf.z);
      kettlebell.scale.setScalar(kConf.scale);

      // Determine visibility opacities based on current section
      let dOpacity = 0;
      let bOpacity = 0;
      let kOpacity = 0;

      // Smooth opacity transitions
      if (progressScaled < 0.8) {
        // Dumbbell -> Barbell
        dOpacity = Math.max(0, 1 - progressScaled * 1.5);
        bOpacity = Math.max(0, 1 - Math.abs(progressScaled - 1.0) * 1.5);
        kOpacity = Math.max(0, (progressScaled - 0.8) * 1.5);
      } else if (progressScaled < 1.8) {
        // Barbell -> Kettlebell
        dOpacity = 0;
        bOpacity = Math.max(0, 1 - Math.abs(progressScaled - 1.0) * 1.5);
        kOpacity = Math.max(0, 1 - Math.abs(progressScaled - 2.0) * 1.5);
      } else {
        // Kettlebell -> Dumbbell (for CTA section background)
        dOpacity = Math.max(0, (progressScaled - 2.0) * 1.0);
        bOpacity = 0;
        kOpacity = Math.max(0, 1 - (progressScaled - 2.0) * 1.0);
      }

      setGroupOpacity(dumbbell, dOpacity);
      setGroupOpacity(barbell, bOpacity);
      setGroupOpacity(kettlebell, kOpacity);

      // Dynamic rotations: combine section base rotation + time float + mouse parallax
      const floatOffset = Math.sin(elapsedTime * 1.2) * 0.08;
      
      // Dumbbell rotation
      dumbbell.rotation.x = dConf.rx + mouse.y * 0.15;
      dumbbell.rotation.y = dConf.ry + elapsedTime * 0.2 + mouse.x * 0.2;
      dumbbell.rotation.z = dConf.rz + floatOffset * 0.2;

      // Barbell rotation
      barbell.rotation.x = bConf.rx + floatOffset * 0.3 + mouse.y * 0.1;
      barbell.rotation.y = bConf.ry + elapsedTime * 0.15 + mouse.x * 0.15;
      barbell.rotation.z = bConf.rz;

      // Kettlebell rotation
      kettlebell.rotation.x = kConf.rx + floatOffset * 0.5 + mouse.y * 0.2;
      kettlebell.rotation.y = kConf.ry + elapsedTime * 0.3 + mouse.x * 0.25;
      kettlebell.rotation.z = kConf.rz;

      // --- ANIMATE NEON PARTICLES ---
      const posArr = particleGeo.attributes.position.array as Float32Array;
      for (let i = 0; i < particleCount; i++) {
        // Falling speed increases on scroll
        const speedMultiplier = 1 + scrollFraction * 2.5;
        posArr[i * 3 + 1] -= 0.005 * driftSpeeds[i] * speedMultiplier;

        // Horizonal drift wave
        posArr[i * 3] += Math.sin(elapsedTime * 0.4 + i) * 0.0015;

        // Loop points that go below screen back to top
        if (posArr[i * 3 + 1] < -7) {
          posArr[i * 3 + 1] = 7;
          posArr[i * 3] = (Math.random() - 0.5) * 18;
        }
      }
      particleGeo.attributes.position.needsUpdate = true;

      // Gentle point-cloud rotation
      particles.rotation.y = elapsedTime * 0.02;
      particles.rotation.x = mouse.y * 0.05;
      particles.rotation.z = mouse.x * 0.05;

      // --- ANIMATE BACKGROUND GRID ---
      // Rotate grid along scroll and warp tilt with mouse position
      gridHelper.rotation.z = scrollFraction * Math.PI * 0.5;
      gridHelper.rotation.x = (Math.PI / 2) + mouse.y * 0.08;
      gridHelper.rotation.y = mouse.x * 0.08;

      // Sink/fade grid out near CTA section
      if (scrollFraction > 0.8) {
        gridHelper.position.z = -4.5 - (scrollFraction - 0.8) * 5;
      } else {
        gridHelper.position.z = -4.5;
      }

      // Render
      renderer.render(scene, camera);

      reqId = requestAnimationFrame(tick);
    };

    tick();

    // --- CLEANUP ---
    return () => {
      cancelAnimationFrame(reqId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      observer.disconnect();
      renderer.dispose();
      
      // Dispose geometries & materials across meshes, grids, and points
      scene.traverse((object) => {
        if (object instanceof THREE.Mesh || object instanceof THREE.Points || object instanceof THREE.LineSegments || object instanceof THREE.GridHelper) {
          if ('geometry' in object) {
            (object.geometry as THREE.BufferGeometry).dispose();
          }
          if ('material' in object) {
            const material = object.material;
            if (Array.isArray(material)) {
              material.forEach((mat) => mat.dispose());
            } else {
              material.dispose();
            }
          }
        }
      });
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 w-screen h-screen z-10 pointer-events-none overflow-hidden"
      style={{ mixBlendMode: 'normal' }}
    >
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
}
