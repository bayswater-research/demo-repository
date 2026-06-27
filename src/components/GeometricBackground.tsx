'use client';

import { useEffect, useRef } from 'react';

export default function GeometricBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Geometric elements
    const triangles: { x: number; y: number; size: number; rotation: number; speed: number; opacity: number }[] = [];
    const circles: { x: number; y: number; radius: number; speed: number; phase: number; opacity: number }[] = [];
    const lines: { x1: number; y1: number; x2: number; y2: number; speed: number; opacity: number }[] = [];

    // Init triangles
    for (let i = 0; i < 8; i++) {
      triangles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: 20 + Math.random() * 60,
        rotation: Math.random() * Math.PI * 2,
        speed: 0.002 + Math.random() * 0.005,
        opacity: 0.03 + Math.random() * 0.06,
      });
    }

    // Init circles
    for (let i = 0; i < 6; i++) {
      circles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: 40 + Math.random() * 80,
        speed: 0.001 + Math.random() * 0.003,
        phase: Math.random() * Math.PI * 2,
        opacity: 0.02 + Math.random() * 0.04,
      });
    }

    // Init grid lines
    const gridSpacing = 80;
    const gridOpacity = 0.03;
    for (let x = 0; x < canvas.width; x += gridSpacing) {
      lines.push({
        x1: x, y1: 0, x2: x, y2: canvas.height,
        speed: 0, opacity: gridOpacity,
      });
    }
    for (let y = 0; y < canvas.height; y += gridSpacing) {
      lines.push({
        x1: 0, y1: y, x2: canvas.width, y2: y,
        speed: 0, opacity: gridOpacity,
      });
    }

    let time = 0;

    const draw = () => {
      time++;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw grid lines
      ctx.strokeStyle = 'rgba(79, 195, 247, 0.04)';
      ctx.lineWidth = 0.5;
      for (let x = 0; x < canvas.width; x += gridSpacing) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += gridSpacing) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Draw triangles
      triangles.forEach((t) => {
        t.rotation += t.speed;
        t.x += Math.sin(time * 0.001 + t.rotation) * 0.1;
        t.y += Math.cos(time * 0.001 + t.rotation) * 0.1;

        ctx.save();
        ctx.translate(t.x, t.y);
        ctx.rotate(t.rotation);
        ctx.beginPath();
        const h = t.size * (Math.sqrt(3) / 2);
        ctx.moveTo(0, -h * 0.6);
        ctx.lineTo(-t.size / 2, h * 0.4);
        ctx.lineTo(t.size / 2, h * 0.4);
        ctx.closePath();
        ctx.strokeStyle = `rgba(79, 195, 247, ${t.opacity})`;
        ctx.lineWidth = 1;
        ctx.stroke();
        ctx.restore();
      });

      // Draw circles
      circles.forEach((c) => {
        const pulse = Math.sin(time * c.speed + c.phase);
        const r = c.radius + pulse * 10;
        ctx.beginPath();
        ctx.arc(c.x, c.y, r, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(0, 229, 255, ${c.opacity + Math.abs(pulse) * 0.02})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      });

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="bg-canvas"
      aria-hidden="true"
    />
  );
}
