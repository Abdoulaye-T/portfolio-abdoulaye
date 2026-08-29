import { Globe, Smartphone, Layout } from 'lucide-react';

const icons = { Web: Globe, Mobile: Smartphone, WordPress: Layout };

export default function ProjectCover({ title, category, className = '' }) {
  const Icon = icons[category] || Globe;

  return (
    <div className={`relative flex flex-col bg-surface2 overflow-hidden ${className}`}>
      <div className="flex items-center gap-1.5 px-4 py-3 border-b border-line shrink-0">
        <span className="w-2 h-2 rounded-full bg-line" />
        <span className="w-2 h-2 rounded-full bg-line" />
        <span className="w-2 h-2 rounded-full bg-line" />
      </div>

      <div
        aria-hidden="true"
        className="absolute inset-0 top-9 opacity-[0.06] text-ink"
        style={{
          backgroundImage:
            'repeating-linear-gradient(45deg, currentColor 0, currentColor 1px, transparent 1px, transparent 14px)',
        }}
      />

      <div className="relative flex-1 flex flex-col items-center justify-center gap-3 px-8 text-center">
        <Icon className="text-gold" size={26} strokeWidth={1.25} />
        <p className="font-serif text-lg sm:text-xl text-ink leading-snug">{title}</p>
      </div>
    </div>
  );
}
