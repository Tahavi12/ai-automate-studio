import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const dots = Array.from({ length: 22 }, (_, i) => ({
  left: (i * 37) % 100,
  top: (i * 61) % 100,
  delay: (i % 7) * 0.8,
  duration: 9 + (i % 5) * 2.5,
  size: i % 3 === 0 ? 3 : 2,
}));

export function AmbientBackground() {
  const [pointer, setPointer] = useState({ x: 0.5, y: 0.3 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setPointer({ x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-background" />
      <div className="grid-bg absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_at_50%_0%,black,transparent_75%)]" />

      <motion.div
        className="absolute -top-40 left-1/4 size-[42rem] rounded-full bg-primary/20 blur-[140px]"
        animate={{ x: [0, 60, -30, 0], y: [0, 40, 10, 0], opacity: [0.5, 0.8, 0.45, 0.5] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 -right-32 size-[36rem] rounded-full bg-secondary/20 blur-[150px]"
        animate={{ x: [0, -50, 20, 0], y: [0, -40, 30, 0], opacity: [0.4, 0.7, 0.4, 0.4] }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-0 size-[30rem] rounded-full bg-accent/10 blur-[150px]"
        animate={{ x: [0, 70, 0], opacity: [0.3, 0.55, 0.3] }}
        transition={{ duration: 32, repeat: Infinity, ease: "easeInOut" }}
      />

      {dots.map((d, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full bg-primary/60 shadow-[0_0_12px_2px_var(--color-primary)]"
          style={{ left: `${d.left}%`, top: `${d.top}%`, width: d.size, height: d.size }}
          animate={{ y: [0, -40, 0], opacity: [0, 0.9, 0] }}
          transition={{ duration: d.duration, delay: d.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      <div
        className="absolute inset-0 transition-none"
        style={{
          background: `radial-gradient(600px circle at ${pointer.x * 100}% ${pointer.y * 100}%, oklch(0.623 0.214 259.8 / 12%), transparent 65%)`,
        }}
      />
    </div>
  );
}