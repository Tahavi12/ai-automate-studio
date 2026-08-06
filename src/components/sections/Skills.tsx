import { motion } from "framer-motion";
import { skills } from "@/data/site";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

export function Skills() {
  return (
    <section id="skills" className="relative px-4 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Stack"
          title="Tools I build production systems with"
          subtitle="Every automation is built on tooling I use daily — chosen for reliability, not novelty."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill, i) => (
            <Reveal key={skill.name} delay={i * 0.05}>
              <motion.div
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="glass-card group relative h-full overflow-hidden p-6"
              >
                <div className="pointer-events-none absolute -top-16 -right-16 size-40 rounded-full bg-primary/25 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
                <div className="flex items-baseline justify-between">
                  <h3 className="font-display text-lg font-semibold">
                    {skill.name}
                  </h3>
                  <span className="text-xs font-medium text-primary">
                    {skill.level}%
                  </span>
                </div>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  {skill.blurb}
                </p>
                <div className="mt-5 h-1.5 w-full overflow-hidden rounded-full bg-muted">
                  <motion.div
                    className="h-full rounded-full bg-[image:var(--gradient-accent)]"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.1, delay: 0.15, ease: "easeOut" }}
                  />
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}