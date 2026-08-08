import { useEffect } from "react";
import { site } from "@/data/site";

export default function ChatWidget() {
  useEffect(() => {
    let mounted = true;
    (async () => {
      const [{ createChat }] = await Promise.all([
        import("@n8n/chat"),
        import("@n8n/chat/style.css"),
      ]);
      if (!mounted) return;
      createChat({
        webhookUrl: site.n8nChatWebhook,
        initialMessages: [
          "Hi 👋, I'm Tahavi's AI assistant.",
          "How can I help you with automation today?",
        ],
        i18n: {
          en: {
            title: "Chat with Tahavi",
            subtitle: "Ask anything about AI automation.",
            footer: "",
            getStarted: "New Conversation",
            inputPlaceholder: "Type your question…",
            closeButtonTooltip: "Close chat",
          },
        },
      });
    })();
    return () => {
      mounted = false;
    };
  }, []);

  return null;
}