import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X, CheckCircle2 } from "lucide-react";
import { projects, type Project } from "@/data/projects";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

export function Portfolio() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section id="portfolio" className="relative px-4 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Portfolio"
          title="Selected automation builds"
          subtitle="Real systems running in production for clients across support, sales and operations."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.id} delay={(i % 2) * 0.1}>
              <motion.article
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 250, damping: 22 }}
                className="glass-card group flex h-full flex-col overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    loading="lazy"
                    width={1200}
                    height={800}
                    className="aspect-[3/2] w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent opacity-80" />
                </div>

                <div className="flex flex-1 flex-col p-7">
                  <h3 className="font-display text-xl font-semibold">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>

                  <ul className="mt-4 flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <li
                        key={t}
                        className="rounded-full border border-glass-border bg-glass px-3 py-1 text-xs text-muted-foreground"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-3 pt-1">
                    <button
                      onClick={() => setActive(project)}
                      className="inline-flex items-center gap-2 rounded-xl border border-glass-border bg-glass px-4 py-2.5 text-xs font-semibold transition-colors hover:border-accent/50 hover:text-accent"
                    >
                      View Details <ArrowUpRight className="size-3.5" />
                    </button>
                  </div>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[60] grid place-items-center overflow-y-auto bg-background/80 p-4 backdrop-blur-md"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 10 }}
              transition={{ type: "spring", stiffness: 260, damping: 26 }}
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-label={active.title}
              className="glass-card relative my-8 w-full max-w-3xl overflow-hidden"
            >
              <button
                onClick={() => setActive(null)}
                aria-label="Close details"
                className="absolute top-4 right-4 z-10 grid size-9 place-items-center rounded-xl border border-glass-border bg-background/70 backdrop-blur transition-colors hover:text-accent"
              >
                <X className="size-4" />
              </button>

              <img
                src={active.image}
                alt={`${active.title} screenshot`}
                className="aspect-[3/2] w-full object-cover object-top"
              />

              <div className="p-8">
                <h3 className="font-display text-2xl font-bold">
                  {active.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {active.details}
                </p>

                <div className="mt-6 grid gap-6 sm:grid-cols-2">
                  <div>
                    <h4 className="text-xs tracking-widest text-muted-foreground uppercase">
                      Technologies
                    </h4>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {active.tech.map((t) => (
                        <li
                          key={t}
                          className="rounded-full border border-glass-border bg-glass px-3 py-1 text-xs"
                        >
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xs tracking-widest text-muted-foreground uppercase">
                      Results
                    </h4>
                    <ul className="mt-3 space-y-2">
                      {active.results.map((r) => (
                        <li key={r} className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-accent" />
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}