import { motion } from "framer-motion";
import { ArrowUp, Github, Linkedin, Facebook, Briefcase } from "lucide-react";
import { site } from "@/data/site";

const socials = [
  { label: "GitHub", href: site.socials.github, icon: Github },
  { label: "LinkedIn", href: site.socials.linkedin, icon: Linkedin },
  { label: "Fiverr", href: site.socials.fiverr, icon: Briefcase },
  { label: "Facebook", href: site.socials.facebook, icon: Facebook },
];

export function Footer() {
  return (
    <footer className="relative border-t border-glass-border px-4 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>

        <div className="flex items-center gap-2">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              aria-label={s.label}
              className="grid size-9 place-items-center rounded-lg border border-glass-border bg-glass text-muted-foreground transition-colors hover:text-primary"
            >
              <s.icon className="size-4" />
            </a>
          ))}
        </div>

        <motion.a
          href="#top"
          whileHover={{ y: -3 }}
          className="inline-flex items-center gap-2 rounded-xl border border-glass-border bg-glass px-4 py-2 text-xs text-muted-foreground transition-colors hover:text-accent"
        >
          Back to top <ArrowUp className="size-3.5" />
        </motion.a>
      </div>
    </footer>
  );
}