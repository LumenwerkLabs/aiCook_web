"use client";
import { useEffect, useRef } from 'react';

interface SubtleParticle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  rotation: number;
  rotationSpeed: number;
  opacity: number;
  maxOpacity: number;
  type: 'essence' | 'whisper' | 'gentle';
  color: string;
  points: number[];
  timeOffset: number;
  scale: number;
  life: number;
  maxLife: number;
  depth: number;
}

export default function CookingBackgroundAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | undefined>(undefined);
  const particlesRef = useRef<SubtleParticle[]>([]);
  const timeRef = useRef(0);

  // Tu paleta de colores pero más sutil
  const subtleTypes = [
    { 
      type: 'essence', 
      colors: ['#E8E4D9', '#F1EDE7', '#F8F6F2'], 
      baseSize: 60,
      complexity: 8,
      weight: 0.4
    },
    { 
      type: 'whisper', 
      colors: ['#284139', '#4A6B5F'], 
      baseSize: 45,
      complexity: 6,
      weight: 0.3
    },
    { 
      type: 'gentle', 
      colors: ['#D4C4A8', '#C4B5A0', '#B8A082'], 
      baseSize: 35,
      complexity: 5,
      weight: 0.3
    }
  ];

  const createParticle = (): SubtleParticle => {
    const rand = Math.random();
    let cumulativeWeight = 0;
    let selectedType = subtleTypes[0];
    
    for (const typeData of subtleTypes) {
      cumulativeWeight += typeData.weight;
      if (rand <= cumulativeWeight) {
        selectedType = typeData;
        break;
      }
    }
    
    const color = selectedType.colors[Math.floor(Math.random() * selectedType.colors.length)];
    
    // Puntos más suaves y orgánicos
    const points: number[] = [];
    const numPoints = selectedType.complexity;
    for (let i = 0; i < numPoints; i++) {
      const baseRadius = 0.6 + Math.random() * 0.4;
      const variation = Math.sin(i * 0.3) * 0.1;
      points.push(baseRadius + variation);
    }
    
    const depth = Math.random();
    const maxLife = 15000 + Math.random() * 10000; // Vida más larga
    
    return {
      id: Math.random(),
      x: Math.random() * (window.innerWidth || 1200),
      y: Math.random() * (window.innerHeight || 800),
      vx: (Math.random() - 0.5) * 0.05, // Movimiento muy sutil
      vy: (Math.random() - 0.5) * 0.03,
      size: selectedType.baseSize * (0.5 + Math.random() * 0.5),
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 0.2, // Rotación más lenta
      opacity: 0,
      maxOpacity: Math.random() * 0.15 + 0.05, // Muy sutil
      type: selectedType.type as SubtleParticle['type'],
      color,
      points,
      timeOffset: Math.random() * 1000,
      scale: 0.4 + Math.random() * 0.6,
      life: 0,
      maxLife,
      depth
    };
  };

  const updateParticle = (particle: SubtleParticle, deltaTime: number) => {
    particle.life += deltaTime;
    
    // Fade in/out muy suave
    const lifecycleRatio = particle.life / particle.maxLife;
    if (lifecycleRatio < 0.2) {
      particle.opacity = (lifecycleRatio / 0.2) * particle.maxOpacity;
    } else if (lifecycleRatio > 0.8) {
      particle.opacity = ((1 - lifecycleRatio) / 0.2) * particle.maxOpacity;
    } else {
      // Respiración muy sutil
      const breathe = Math.sin((timeRef.current + particle.timeOffset) * 0.001) * 0.1 + 0.9;
      particle.opacity = particle.maxOpacity * breathe;
    }

    // Movimiento muy suave
    const gentleWave = Math.sin((timeRef.current + particle.timeOffset) * 0.0005) * 0.5;
    particle.x += particle.vx * deltaTime + gentleWave * 0.01;
    particle.y += particle.vy * deltaTime + Math.cos((timeRef.current + particle.timeOffset) * 0.0003) * 0.005;

    // Rotación casi imperceptible
    particle.rotation += particle.rotationSpeed * deltaTime * 0.1;

    // Morphing muy sutil de los puntos
    for (let i = 0; i < particle.points.length; i++) {
      const morphTime = (timeRef.current + particle.timeOffset) * 0.0001;
      const morphWave = Math.sin(morphTime + i * 0.2) * 0.02;
      particle.points[i] = Math.max(0.4, Math.min(1.0, particle.points[i] + morphWave));
    }

    // Wrapping suave
    const margin = particle.size;
    const screenWidth = window.innerWidth || 1200;
    const screenHeight = window.innerHeight || 800;

    if (particle.x > screenWidth + margin) particle.x = -margin;
    if (particle.x < -margin) particle.x = screenWidth + margin;
    if (particle.y > screenHeight + margin) particle.y = -margin;
    if (particle.y < -margin) particle.y = screenHeight + margin;
  };

  const drawParticle = (ctx: CanvasRenderingContext2D, particle: SubtleParticle) => {
    if (particle.opacity <= 0.005) return;

    ctx.save();
    ctx.globalAlpha = particle.opacity;
    ctx.translate(particle.x, particle.y);
    ctx.rotate((particle.rotation * Math.PI) / 180);
    ctx.scale(particle.scale, particle.scale);

    // Gradientes muy suaves
    const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, particle.size);
    
    if (particle.type === 'whisper') {
      gradient.addColorStop(0, particle.color + '20');
      gradient.addColorStop(0.7, particle.color + '10');
      gradient.addColorStop(1, particle.color + '05');
    } else {
      gradient.addColorStop(0, particle.color + '30');
      gradient.addColorStop(0.6, particle.color + '15');
      gradient.addColorStop(1, particle.color + '05');
    }

    ctx.fillStyle = gradient;
    ctx.shadowColor = particle.color + '10';
    ctx.shadowBlur = 8;

    // Forma orgánica simple
    ctx.beginPath();
    const numPoints = particle.points.length;
    
    for (let i = 0; i <= numPoints; i++) {
      const currentIndex = i % numPoints;
      const angle = (currentIndex / numPoints) * Math.PI * 2;
      const radius = particle.size * particle.points[currentIndex] * 0.8; // Más pequeño
      
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;
      
      if (i === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    }
    
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  };

  const animate = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const currentTime = Date.now();
    const deltaTime = currentTime - timeRef.current;
    timeRef.current = currentTime;

    // Clear muy sutil - casi transparente
    ctx.fillStyle = 'rgba(232, 228, 217, 0.002)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Sort por depth
    const sortedParticles = [...particlesRef.current].sort((a, b) => a.depth - b.depth);

    sortedParticles.forEach(particle => {
      updateParticle(particle, deltaTime);
      drawParticle(ctx, particle);
    });

    // Limpieza y spawning muy controlado
    particlesRef.current = particlesRef.current.filter(p => p.life < p.maxLife);
    
    // Solo 8-12 partículas máximo
    const targetCount = 10;
    
    if (particlesRef.current.length < targetCount && Math.random() < 0.008) {
      particlesRef.current.push(createParticle());
    }

    animationRef.current = requestAnimationFrame(animate);
  };

  const resizeCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const width = window.innerWidth;
    const height = window.innerHeight;
    
    canvas.width = width * window.devicePixelRatio;
    canvas.height = height * window.devicePixelRatio;
    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';

    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    }
  };

  useEffect(() => {
    // Spawn inicial gradual
    for (let i = 0; i < 8; i++) {
      setTimeout(() => {
        particlesRef.current.push(createParticle());
      }, i * 500);
    }

    resizeCanvas();
    timeRef.current = Date.now();
    animate();

    const handleResize = () => {
      resizeCanvas();
    };

    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[-1] w-full h-full opacity-60"
      style={{ 
        backgroundColor: '#284139',
        width: '100vw',
        height: '100vh'
      }}
      aria-hidden="true"
    />
  );
}