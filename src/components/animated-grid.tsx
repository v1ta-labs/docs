'use client';

import { useEffect, useRef } from 'react';

export function AnimatedGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    let offset = 0;
    const gridSize = 50;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      offset += 0.2;
      if (offset > gridSize) offset = 0;

      // Draw vertical lines
      for (let x = -gridSize + offset; x < canvas.width; x += gridSize) {
        const opacity = 0.03 + Math.sin(x / 100 + Date.now() / 2000) * 0.02;
        ctx.strokeStyle = `rgba(42, 73, 48, ${opacity})`;
        ctx.lineWidth = 0.5;
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      // Draw horizontal lines
      for (let y = -gridSize + offset; y < canvas.height; y += gridSize) {
        const opacity = 0.03 + Math.sin(y / 100 + Date.now() / 2000) * 0.02;
        ctx.strokeStyle = `rgba(42, 73, 48, ${opacity})`;
        ctx.lineWidth = 0.5;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none opacity-40"
      style={{ zIndex: 1 }}
    />
  );
}
