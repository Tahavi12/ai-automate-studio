import { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { ClientOnly } from "@tanstack/react-router";
import { ArrowRight, Zap } from "lucide-react";
import portrait from "@/assets/portrait-photo.png.asset.json";
import { site } from "@/data/site";

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
      className="relative flex min-h-screen items-center px-4 pt-32 pb-20"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <h1 className="sr-only">
            Md Tahavi Shahriar — AI Automation Developer
          </h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative h-[320px] w-full sm:h-[420px] lg:h-[480px]"
          >
            <ClientOnly fallback={null}>
              <Suspense fallback={null}>
                <SplineScene />
              </Suspense>
            </ClientOnly>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a
              href="#portfolio"
              className="group inline-flex items-center gap-2 rounded-xl bg-[image:var(--gradient-primary)] px-6 py-3.5 text-sm font-semibold shadow-[var(--shadow-glow)] transition-all hover:-translate-y-0.5 hover:brightness-110"
            >
              View Portfolio
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={site.fiverrMessage}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-glass-border bg-glass px-6 py-3.5 text-sm font-semibold backdrop-blur-md transition-all hover:-translate-y-0.5 hover:border-accent/50 hover:text-accent"
            >
              <Zap className="size-4" />
              Message Me on Fiverr
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

        <div className="relative">
          <div className="pointer-events-none absolute -inset-10 -z-10 rounded-full bg-primary/15 blur-[100px]" />

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative mx-auto h-[220px] w-full max-w-md sm:h-[280px]"
          >
            <ClientOnly fallback={null}>
              <Suspense fallback={null}>
                <NeuralScene />
              </Suspense>
            </ClientOnly>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35 }}
            className="group relative mx-auto -mt-10 w-full max-w-sm animate-float"
          >
            <div className="absolute -inset-px rounded-[calc(var(--radius)+12px)] bg-[conic-gradient(from_0deg,transparent_0%,var(--color-primary)_25%,transparent_50%,var(--color-secondary)_75%,transparent_100%)] opacity-70 animate-spin-slow" />
            <div className="glass-card relative overflow-hidden rounded-[calc(var(--radius)+12px)] p-2 transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[var(--shadow-glow)]">
              <img
                src={portrait.url}
                alt="Md Tahavi Shahriar, AI Automation Developer"
                width={896}
                height={1152}
                className="w-full rounded-[calc(var(--radius)+4px)] object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
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