import React, { useState, useRef, useEffect } from "react";

const Backdrop = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current as HTMLCanvasElement;
    const ctx = canvas.getContext("2d");
    if (!ctx) {
      return;
    }

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      draw(pos);
    };

    const spacing = 20;
    let dots: { x: number; y: number }[] = [];

    const generateDots = () => {
      const cols = Math.ceil(canvas.width / spacing);
      const rows = Math.ceil(canvas.height / spacing);

      dots = [];

      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          dots.push({
            x: x * spacing,
            y: y * spacing,
          });
        }
      }
    };

    const draw = (pos: { x: number; y: number }) => {
      generateDots();

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      dots.forEach((dot) => {
        const dx = dot.x - pos.x;
        const dy = dot.y - pos.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const strength = Math.max(0, 1 - dist / 350);

        const push = strength * 10;
        const angle = Math.atan2(dy, dx);

        const drawX = dot.x + Math.cos(angle) * push;
        const drawY = dot.y + Math.sin(angle) * push;

        const brightness = 68 + strength;
        ctx.beginPath();
        ctx.arc(drawX, drawY, 1 + strength * 5.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgb(${brightness}, ${brightness}, ${brightness})`;
        ctx.fill();
      });
      const gradient = ctx.createRadialGradient(
        pos.x,
        pos.y,
        0,
        pos.x,
        pos.y,
        150,
      );
      gradient.addColorStop(0, "rgba(255,255,255,0.9)");
      gradient.addColorStop(1, "rgba(255,255,255,0)");

      ctx.save();
      ctx.globalCompositeOperation = "source-atop";
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.restore();
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", (e) => {
      const rect = canvas.getBoundingClientRect();
      setPos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });

      draw({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    });

    return () => window.removeEventListener("resize", resize);
  }, []);

  return <canvas ref={canvasRef} className="absolute z-[-1] h-screen w-full" />;
};

export default Backdrop;
