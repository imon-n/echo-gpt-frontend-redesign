import type { AIModel } from "../types/model";

export const models: AIModel[] = [
  {
    id: "gpt",
    name: "GPT",
    provider: "OpenAI",
    category: "General",
    description: "Great for everyday conversations and problem solving.",
  },
  {
    id: "claude",
    name: "Claude",
    provider: "Anthropic",
    category: "Writing",
    description: "Excellent for writing, analysis and long-form tasks.",
  },
  {
    id: "gemini",
    name: "Gemini",
    provider: "Google",
    category: "Research",
    description: "Useful for research, reasoning and multimodal tasks.",
  },
  {
    id: "deepseek",
    name: "DeepSeek",
    provider: "DeepSeek",
    category: "Reasoning",
    description: "Designed for reasoning and technical workflows.",
  },
];