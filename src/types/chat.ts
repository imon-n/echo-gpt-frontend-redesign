export type MessageRole = "user" | "assistant";

export interface ChatMessage {
  id: string;
  role: MessageRole;
  content: string;
  timestamp: number;
}

export interface Conversation {
  id: string;
  title: string;
  lastMessage: string;
  updatedAt: number;
}