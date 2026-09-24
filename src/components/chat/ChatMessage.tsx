import { Bot, User } from "lucide-react";
import type { ChatMessage as ChatMessageType } from "../../types/chat";

interface Props {
  message: ChatMessageType;
}

export default function ChatMessage({ message }: Props) {
  const isUser = message.role === "user";

  return (
    <div
      className={`flex gap-3 sm:gap-4 ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >
      {/* AI Avatar */}
      {!isUser && (
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-violet-100 text-violet-600">
          <Bot size={16} />
        </div>
      )}

      {/* Message */}
      <div
        className={`max-w-2xl rounded-2xl px-4 py-3.5 text-sm leading-7 sm:px-5 sm:py-4 ${
          isUser
            ? "rounded-br-md bg-violet-600 text-white shadow-sm shadow-violet-600/10"
            : "rounded-bl-md border border-zinc-200 bg-zinc-50 text-zinc-700"
        }`}
      >
        {message.content}
      </div>

      {/* User Avatar */}
      {isUser && (
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-zinc-100 text-zinc-600">
          <User size={16} />
        </div>
      )}
    </div>
  );
}