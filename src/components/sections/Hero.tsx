import { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { ClientOnly } from "@tanstack/react-router";
import { ArrowRight, Zap } from "lucide-react";
import portrait from "@/assets/portrait-cutout.png";
import { whatsappLink } from "@/lib/contact";

const NeuralScene = lazy(() => import("@/components/three/NeuralScene"));
const SplineScene = lazy(() => import("@/components/three/SplineScene"));

const stats = [
  { value: "60+", label: "Automations shipped" },
  { value: "12k+", label: "Hours saved for clients" },
  { value: "5.0", label: "Average client rating" },
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden px-4 pt-32 pb-20"
    >
      {/* Animation 1 — globe / neural network, back layer */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="pointer-events-none absolute top-[30%] right-[4%] z-0 h-[220px] w-[min(28rem,60vw)] sm:h-[280px]"
      >
        <ClientOnly fallback={null}>
          <Suspense fallback={null}>
            <NeuralScene />
          </Suspense>
        </ClientOnly>
      </motion.div>

      {/* Animation 2 — full-screen Spline scene, in front of the globe */}
      <div className="absolute inset-0 z-[1]">
        <ClientOnly fallback={null}>
          <Suspense fallback={null}>
            <SplineScene />
          </Suspense>
        </ClientOnly>
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_70%,var(--color-background)_100%)]" />
      </div>

      <div className="pointer-events-none relative z-[2] mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="pointer-events-none">
          <h1 className="sr-only">
            Md Tahavi Shahriar — AI Automation Developer
          </h1>
          <div className="h-[320px] w-full sm:h-[420px] lg:h-[480px]" />

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="pointer-events-auto mt-9 flex flex-wrap items-center gap-3"
          >
            <a
              href="#portfolio"
              className="group inline-flex items-center gap-2 rounded-xl bg-[image:var(--gradient-primary)] px-6 py-3.5 text-sm font-semibold shadow-[var(--shadow-glow)] transition-all hover:-translate-y-0.5 hover:brightness-110"
            >
              View Portfolio
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-glass-border bg-glass px-6 py-3.5 text-sm font-semibold backdrop-blur-md transition-all hover:-translate-y-0.5 hover:border-accent/50 hover:text-accent"
            >
              <Zap className="size-4" />
              Message Me
            </a>
          </motion.div>

          <motion.dl
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-12 grid max-w-lg grid-cols-3 gap-4"
          >
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="font-display text-2xl font-bold text-primary">
                  {s.value}
                </dt>
                <dd className="mt-1 text-xs text-muted-foreground">{s.label}</dd>
              </div>
            ))}
          </motion.dl>
        </div>

        <div className="pointer-events-none relative">
          <div className="pointer-events-none absolute -inset-10 -z-10 rounded-full bg-primary/15 blur-[100px]" />

          <div className="mx-auto h-[220px] w-full max-w-md sm:h-[280px]" />

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35 }}
            className="group pointer-events-auto relative z-[3] mx-auto mt-2 w-full max-w-[19rem] sm:max-w-xs animate-float lg:translate-x-10 lg:translate-y-6 xl:translate-x-20"
          >
            <div className="absolute -inset-px rounded-[calc(var(--radius)+12px)] bg-[conic-gradient(from_0deg,transparent_0%,var(--color-primary)_25%,transparent_50%,var(--color-secondary)_75%,transparent_100%)] opacity-70 animate-spin-slow" />
            <div className="glass-card relative overflow-hidden rounded-[calc(var(--radius)+12px)] p-2 transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[var(--shadow-glow)]">
              <div className="pointer-events-none absolute inset-2 rounded-[calc(var(--radius)+4px)] bg-[radial-gradient(circle_at_50%_35%,oklch(0.623_0.214_259.8/35%),transparent_70%)]" />
              <img
                src={portrait}
                alt="Md Tahavi Shahriar, AI Automation Developer"
                width={1254}
                height={1254}
                className="relative w-full rounded-[calc(var(--radius)+4px)] object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <div className="pointer-events-none absolute inset-2 rounded-[calc(var(--radius)+4px)] bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
              <div className="pointer-events-none absolute inset-x-2 bottom-2 rounded-b-[calc(var(--radius)+4px)] bg-gradient-to-t from-background/90 to-transparent p-4 pt-14">
                <p className="font-display text-sm font-semibold">
                  Md Tahavi Shahriar
                </p>
                <p className="text-xs text-muted-foreground">
                  AI Automation &amp; Workflow Developer
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}