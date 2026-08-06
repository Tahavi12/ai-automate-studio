import { motion } from "framer-motion";
import { processSteps } from "@/data/site";
import { SectionHeading } from "@/components/ui/section-heading";

export function Process() {
  return (
    <section id="process" className="relative px-4 py-28">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="Process"
          title="How a project runs"
          subtitle="A predictable five-step path from first call to a live, monitored automation."
        />

        <div className="relative mt-16 pl-10 sm:pl-16">
          <div className="absolute top-0 bottom-0 left-4 w-px bg-glass-border sm:left-6" />
          <motion.div
            className="absolute top-0 left-4 w-px origin-top bg-[image:var(--gradient-accent)] sm:left-6"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 1.6, ease: "easeInOut" }}
            style={{ bottom: 0 }}
          />

          <ol className="space-y-8">
            {processSteps.map((step, i) => (
              <motion.li
                key={step.step}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="relative"
              >
                <span className="absolute top-6 -left-10 grid size-8 place-items-center rounded-full border border-glass-border bg-background text-[11px] font-semibold text-primary sm:-left-16 sm:size-12 sm:text-xs">
                  {step.step}
                </span>
                <div className="glass-card p-6 transition-shadow duration-500 hover:shadow-[var(--shadow-glow)]">
                  <h3 className="text-lg font-semibold">{step.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}