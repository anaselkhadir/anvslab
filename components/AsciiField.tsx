"use client";

import { useEffect, useRef } from "react";

/**
 * Champ ASCII organique : un bruit lisse multi-octaves est ombré en glyphes
 * par paliers de densité (· : + * #), formant des vagues qui dérivent
 * lentement. Le curseur fait fleurir et éclaire la matière alentour.
 * En pause hors écran, statique en mouvement réduit.
 */
export function AsciiField({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const CELL = 14;
    const RADIUS = 260;
    /* Trame d'ombrage, du plus léger au plus dense */
    const RAMP = ["·", ":", "+", "*", "#"];
    const THRESHOLD = 0.6;

    let raf = 0;
    let timer: ReturnType<typeof setInterval> | null = null;
    let visible = true;
    let t = 0;
    let redrawQueued = false;
    const mouse = { x: -9999, y: -9999 };

    /* Hachage déterministe : la matière dérive, elle ne clignote pas */
    const hash = (x: number, y: number) => {
      const n = Math.sin(x * 127.1 + y * 311.7) * 43758.5453;
      return n - Math.floor(n);
    };

    const smooth = (v: number) => v * v * (3 - 2 * v);

    /* Bruit de valeur interpolé sur grille entière */
    const noise = (x: number, y: number) => {
      const xi = Math.floor(x);
      const yi = Math.floor(y);
      const xf = smooth(x - xi);
      const yf = smooth(y - yi);
      const a = hash(xi, yi);
      const b = hash(xi + 1, yi);
      const c = hash(xi, yi + 1);
      const d = hash(xi + 1, yi + 1);
      return a + (b - a) * xf + (c - a) * yf + (a - b - c + d) * xf * yf;
    };

    /* Deux octaves décalées dans le temps : grandes dunes + détail */
    const field = (cx: number, cy: number, time: number) => {
      const o1 = noise(cx * 0.075 + time * 0.06, cy * 0.11 - time * 0.03);
      const o2 = noise(cx * 0.21 - time * 0.045, cy * 0.27 + time * 0.05);
      return o1 * 0.68 + o2 * 0.32;
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      const { width, height } = canvas.getBoundingClientRect();
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.font = "11px monospace";
      ctx.textBaseline = "top";
      draw();
    };

    const draw = () => {
      const { width, height } = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, width, height);
      const cols = Math.ceil(width / CELL);
      const rows = Math.ceil(height / CELL);

      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          const px = x * CELL;
          const py = y * CELL;
          const dx = px - mouse.x;
          const dy = py - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const glow = dist < RADIUS ? smooth(1 - dist / RADIUS) : 0;

          /* Le curseur fait légèrement fleurir la matière */
          const n = field(x, y, t) + glow * 0.14;
          if (n < THRESHOLD) continue;

          const level = Math.min((n - THRESHOLD) / (1 - THRESHOLD), 1);
          const glyph =
            RAMP[Math.min(Math.floor(level * RAMP.length), RAMP.length - 1)];
          const alpha = 0.05 + level * 0.26 + glow * 0.3;
          ctx.fillStyle = `rgba(255,255,255,${Math.min(alpha, 0.6).toFixed(3)})`;
          ctx.fillText(glyph, px, py);
        }
      }
    };

    const queueRedraw = () => {
      if (redrawQueued || !visible) return;
      redrawQueued = true;
      raf = requestAnimationFrame(() => {
        redrawQueued = false;
        draw();
      });
    };

    resize();

    const onMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      queueRedraw();
    };

    if (!reduce) {
      timer = setInterval(() => {
        if (!visible) return;
        t += 0.055;
        draw();
      }, 90);
      window.addEventListener("pointermove", onMove, { passive: true });
    }

    const io = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting;
    });
    io.observe(canvas);

    window.addEventListener("resize", resize);
    return () => {
      if (timer) clearInterval(timer);
      cancelAnimationFrame(raf);
      io.disconnect();
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
      aria-hidden
    />
  );
}
