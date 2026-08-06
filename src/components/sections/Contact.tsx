import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, Github, Linkedin, Facebook, Briefcase, Mail } from "lucide-react";
import { toast } from "sonner";
import { site } from "@/data/site";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

const socials = [
  { label: "GitHub", href: site.socials.github, icon: Github },
  { label: "LinkedIn", href: site.socials.linkedin, icon: Linkedin },
  { label: "Fiverr", href: site.socials.fiverr, icon: Briefcase },
  { label: "Facebook", href: site.socials.facebook, icon: Facebook },
];

const fieldClass =
  "w-full rounded-xl border border-glass-border bg-glass px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary/60";

export function Contact() {
  const [sending, setSending] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setSending(true);

    const subject = `New project enquiry from ${data.get("name")}`;
    const body = [
      `Name: ${data.get("name")}`,
      `Email: ${data.get("email")}`,
      `Company: ${data.get("company")}`,
      "",
      String(data.get("message") ?? ""),
    ].join("\n");

    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;

    toast.success("Opening your email client — your message is ready to send.");
    form.reset();
    setSending(false);
  };

  return (
    <section id="contact" className="relative px-4 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Contact"
          title="Let's automate something"
          subtitle="Tell me what's eating your team's time. I'll reply with how it can be automated."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_0.8fr]">
          <Reveal>
            <form onSubmit={onSubmit} className="glass-card space-y-4 p-7 sm:p-9">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-xs text-muted-foreground">
                    Name
                  </label>
                  <input id="name" name="name" required placeholder="Your name" className={fieldClass} />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-xs text-muted-foreground">
                    Email
                  </label>
                  <input id="email" name="email" type="email" required placeholder="you@company.com" className={fieldClass} />
                </div>
              </div>
              <div>
                <label htmlFor="company" className="mb-2 block text-xs text-muted-foreground">
                  Company
                </label>
                <input id="company" name="company" placeholder="Company name" className={fieldClass} />
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block text-xs text-muted-foreground">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="What process would you like to automate?"
                  className={`${fieldClass} resize-none`}
                />
              </div>
              <motion.button
                type="submit"
                disabled={sending}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[image:var(--gradient-primary)] px-6 py-3.5 text-sm font-semibold shadow-[var(--shadow-glow)] disabled:opacity-60"
              >
                Send Message <Send className="size-4" />
              </motion.button>
            </form>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="glass-card flex h-full flex-col justify-between gap-8 p-7 sm:p-9">
              <div>
                <h3 className="font-display text-xl font-semibold">
                  Prefer a direct line?
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Most projects start with a short call where we map your
                  current workflow. Typical response time is under 12 hours.
                </p>
                <a
                  href={`mailto:${site.email}`}
                  className="mt-6 inline-flex items-center gap-2 text-sm text-primary transition-colors hover:text-accent"
                >
                  <Mail className="size-4" />
                  {site.email}
                </a>
              </div>

              <div>
                <p className="text-xs tracking-widest text-muted-foreground uppercase">
                  Find me on
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  {socials.map((s) => (
                    <motion.a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={s.label}
                      whileHover={{ y: -4 }}
                      className="grid size-11 place-items-center rounded-xl border border-glass-border bg-glass text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
                    >
                      <s.icon className="size-5" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}