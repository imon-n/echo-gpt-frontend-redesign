import { useState } from "react";
import { Sparkles } from "lucide-react";
import ChatMessage from "../components/chat/ChatMessage";
import ChatInput from "../components/chat/ChatInput";
import type { ChatMessage as ChatMessageType } from "../types/chat";

export default function Chat() {

  const [messages, setMessages] = useState<ChatMessageType[]>([
    {
      id: "1",
      role: "assistant",
      content: "Hello! I'm EchoGPT. How can I help you today?",
      timestamp: Date.now(),
    },
  ]);

  const handleSend = (content: string) => {
    const userMessage: ChatMessageType = {
      id: crypto.randomUUID(),
      role: "user",
      content,
      timestamp: Date.now(),
    };

    setMessages((current) => [...current, userMessage]);

    setTimeout(() => {
      const assistantMessage: ChatMessageType = {
        id: crypto.randomUUID(),
        role: "assistant",
        content:
          "This is a frontend prototype response. Connect your preferred AI API here to enable real model responses.",
        timestamp: Date.now(),
      };

      setMessages((current) => [...current, assistantMessage]);
    }, 700);
  };

  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex flex-1 flex-col">
        <div className="flex-1 overflow-y-auto">
          <div className="mx-auto max-w-3xl space-y-6 px-4 py-8 sm:px-6">
            {messages.length === 1 && (
              <div className="mb-12 text-center">
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center text-white rounded-2xl bg-violet-600">
                  <Sparkles size={24} />
                </div>

                <h2 className="text-2xl font-bold">
                  What can I help you with?
                </h2>

                <p className="mt-2 text-sm text-zinc-500">
                  Ask anything, brainstorm ideas or solve a problem.
                </p>
              </div>
            )}

            {messages.map((message) => (
              <ChatMessage key={message.id} message={message} />
            ))}
          </div>
        </div>

        <div className="">
          <div className="mx-auto max-w-3xl">
            <ChatInput onSend={handleSend} />
            <p className="mt-3 text-center text-xs text-zinc-600">
              EchoGPT can make mistakes. Verify important information.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
