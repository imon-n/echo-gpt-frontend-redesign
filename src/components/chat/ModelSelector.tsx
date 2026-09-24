import { ChevronDown } from "lucide-react";
import { models } from "../../data/models";

interface Props {
  selected: string;
  onChange: (id: string) => void;
}

export default function ModelSelector({
  selected,
  onChange,
}: Props) {
  return (
    <div className="relative">
      <select
        value={selected}
        onChange={(e) => onChange(e.target.value)}
        aria-label="Select AI model"
        className="appearance-none rounded-xl border border-zinc-200 bg-white px-4 py-2 pr-9 text-sm font-medium text-zinc-700 shadow-sm outline-none transition-all duration-200 hover:border-zinc-300 focus:border-violet-400 focus:ring-2 focus:ring-violet-100"
      >
        {models.map((model) => (
          <option key={model.id} value={model.id}>
            {model.name}
          </option>
        ))}
      </select>

      <ChevronDown
        size={15}
        className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400"
      />
    </div>
  );
}