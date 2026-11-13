import { moods } from "@/data/products";

function ArchFrame({ palette, i }: { palette: { base: string; accent: string; zari: string }; i: number }) {
  return (
    <svg viewBox="0 0 200 250" className="w-full" aria-hidden>
      <defs>
        <clipPath id={`arch-${i}`}>
          <path d="M20 240 V110 Q20 34 100 30 Q180 34 180 110 V240 Z" />
        </clipPath>
        <linearGradient id={`mood-${i}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={palette.base} />
          <stop offset="1" stopColor={palette.accent} stopOpacity="0.75" />
        </linearGradient>
      </defs>
      <g clipPath={`url(#arch-${i})`}>
        <rect width="200" height="250" fill={`url(#mood-${i})`} />
        <path d="M60 250 C55 170 60 110 70 60" stroke={palette.zari} strokeWidth="9" fill="none" opacity="0.8" />
        <path d="M100 250 C96 170 100 110 108 55" stroke={palette.zari} strokeWidth="6" fill="none" opacity="0.55" />
        <path d="M140 250 C138 175 142 115 150 65" stroke={palette.accent} strokeWidth="8" fill="none" opacity="0.6" />
        <rect x="20" y="214" width="160" height="12" fill={palette.zari} opacity="0.9" />
      </g>
      {/* gold gopuram arch + finial */}
      <path d="M20 240 V110 Q20 34 100 30 Q180 34 180 110 V240" fill="none" stroke="var(--brand-gold)" strokeWidth="5" />
      <path d="M92 30 Q100 8 108 30" fill="none" stroke="var(--brand-gold)" strokeWidth="5" />
      <circle cx="100" cy="8" r="4" fill="var(--brand-gold)" />
    </svg>
  );
}

export function SixMoods() {
  return (
    <section id="archive" className="bg-white py-24">
      <div className="mx-auto w-[min(1200px,94%)]">
        <p className="text-center text-xs tracking-[0.35em] text-ink-soft">— THE THARI ARCHIVE —</p>
        <h2 className="mt-4 text-center text-4xl font-extrabold tracking-tight sm:text-6xl">
          Six Moods. <span className="grad-text">Timeless Drapes.</span>
        </h2>
        <div className="mt-14 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
          {moods.map((m, i) => (
            <figure key={m.name} className="group text-center transition-transform duration-300 hover:-translate-y-2">
              <div className="drop-shadow-sm transition group-hover:drop-shadow-[0_10px_24px_rgba(201,162,75,0.45)]">
                <ArchFrame palette={m.palette} i={i} />
              </div>
              <figcaption className="mt-4 text-[11px] font-semibold tracking-[0.25em] text-ink">
                {m.name.toUpperCase()}
              </figcaption>
            </figure>
          ))}
        </div>
        <p className="mt-10 text-right text-sm italic text-ink-soft">Woven by hand, worn for a lifetime.</p>
      </div>
    </section>
  );
}
