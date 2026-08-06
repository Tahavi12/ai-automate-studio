import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { site } from "@/data/site";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#services", label: "Services" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#process", label: "Process" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 px-4 pt-4"
    >
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-5 py-3 transition-all duration-500 ${
          scrolled
            ? "glass-card"
            : "border border-transparent bg-transparent"
        }`}
      >
        <a href="#top" className="flex items-center gap-2.5">
          <span className="grid size-8 place-items-center rounded-xl bg-[image:var(--gradient-primary)] text-sm font-bold">
            T
          </span>
          <span className="font-display text-sm font-semibold tracking-tight">
            Tahabi<span className="text-primary">.</span>
          </span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-glass hover:text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={site.socials.fiverr}
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-xl bg-[image:var(--gradient-primary)] px-4 py-2 text-sm font-medium shadow-[var(--shadow-glow)] transition-transform hover:scale-105 sm:inline-flex"
          >
            Hire Me
          </a>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="grid size-9 place-items-center rounded-xl border border-glass-border bg-glass md:hidden"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="glass-card mx-auto mt-2 max-w-6xl p-3 md:hidden"
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-4 py-3 text-sm text-muted-foreground hover:bg-glass hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}