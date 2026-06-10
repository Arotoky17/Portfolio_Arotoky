import React, { useEffect, useRef } from "react";

const PARTICLE_COUNT = 80;
const CONNECTION_DISTANCE = 120;
const PARTICLE_SPEED = 0.35;
const PARTICLE_RADIUS = 1.8;

function randomBetween(min, max) {
  return Math.random() * (max - min) + min;
}

function createParticle(w, h) {
  return {
    x: randomBetween(0, w),
    y: randomBetween(0, h),
    vx: randomBetween(-PARTICLE_SPEED, PARTICLE_SPEED),
    vy: randomBetween(-PARTICLE_SPEED, PARTICLE_SPEED),
    opacity: randomBetween(0.4, 1),
  };
}

const ParticlesBackground = ({ className = "" }) => {
  const canvasRef = useRef(null);
  const rafRef = useRef(null);
  const particlesRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      particlesRef.current = Array.from({ length: PARTICLE_COUNT }, () =>
        createParticle(canvas.width, canvas.height)
      );
    };

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const draw = () => {
      const { width: w, height: h } = canvas;
      ctx.clearRect(0, 0, w, h);
      const pts = particlesRef.current;

      pts.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
      });

      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x;
          const dy = pts[i].y - pts[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < CONNECTION_DISTANCE) {
            const alpha = (1 - dist / CONNECTION_DISTANCE) * 0.55;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(160, 130, 255, ${alpha})`;
            ctx.lineWidth = 0.6;
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.stroke();
          }
        }
      }

      pts.forEach((p) => {
        // Particle core
        ctx.beginPath();
        ctx.arc(p.x, p.y, PARTICLE_RADIUS, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(180, 150, 255, ${p.opacity})`;
        ctx.fill();

        // Particle glow
        ctx.beginPath();
        ctx.arc(p.x, p.y, PARTICLE_RADIUS + 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(160, 100, 255, 0.12)`;
        ctx.fill();
      });

      rafRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      ro.disconnect();
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{
        position: "fixed", // Changed to fixed to cover the whole background
        inset: 0,
        width: "100%",
        height: "100%",
        display: "block",
        pointerEvents: "none",
        zIndex: 0,
      }}
      aria-hidden="true"
    />
  );
};

export default ParticlesBackground;
