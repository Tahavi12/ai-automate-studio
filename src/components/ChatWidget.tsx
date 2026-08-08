import { useState } from "react";
import { MessageCircle, Send, X } from "lucide-react";
import { site } from "@/data/site";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");

  const send = (message: string) => {
    const msg = message.trim() || site.whatsappMessage;
    window.open(
      `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(msg)}`,
      "_blank",
      "noopener,noreferrer",
    );
    setText("");
  };

  const quick = [
    "I need an AI chatbot for my website",
    "I want to automate my business workflow",
    "Can you build an appointment booking agent?",
  ];

  return (
    <div className="fixed right-5 bottom-5 z-50 flex flex-col items-end gap-3">
      {open && (
        <div className="glass-card w-[min(22rem,calc(100vw-2.5rem))] animate-scale-in overflow-hidden">
          <div className="flex items-center justify-between gap-3 bg-[image:var(--gradient-primary)] px-4 py-3">
            <div>
              <p className="font-display text-sm font-semibold">Chat with Tahavi</p>
              <p className="text-xs opacity-80">Replies on WhatsApp</p>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="rounded-lg p-1 transition-colors hover:bg-background/20"
            >
              <X className="size-4" />
            </button>
          </div>

          <div className="space-y-3 p-4">
            <p className="rounded-xl rounded-tl-sm bg-muted px-3 py-2 text-sm text-muted-foreground">
              Hi 👋 Tell me what you want to automate and I&apos;ll reply on WhatsApp.
            </p>
            <div className="flex flex-wrap gap-2">
              {quick.map((q) => (
                <button
                  key={q}
                  onClick={() => send(q)}
                  className="rounded-full border border-glass-border px-3 py-1.5 text-xs transition-colors hover:border-accent/60 hover:text-accent"
                >
                  {q}
                </button>
              ))}
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                send(text);
              }}
              className="flex items-center gap-2"
            >
              <input
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Type your message…"
                className="min-w-0 flex-1 rounded-xl border border-glass-border bg-glass px-3 py-2 text-sm outline-none placeholder:text-muted-foreground focus:border-primary/60"
              />
              <button
                type="submit"
                aria-label="Send on WhatsApp"
                className="rounded-xl bg-[image:var(--gradient-primary)] p-2.5 transition-transform hover:-translate-y-0.5"
              >
                <Send className="size-4" />
              </button>
            </form>
          </div>
        </div>
      )}

      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Open chat"
        className="flex size-14 items-center justify-center rounded-full bg-[image:var(--gradient-primary)] shadow-[var(--shadow-glow)] transition-transform hover:scale-105"
      >
        {open ? <X className="size-6" /> : <MessageCircle className="size-6" />}
      </button>
    </div>
  );
}
