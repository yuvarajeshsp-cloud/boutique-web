"use client";

import { useShortlist } from "@/lib/shortlist";

const TICKER = [
  "TRY THE LOOK — Six Kanjivaram looks, styled head to toe",
  "PURE ZARI — Silver-core zari woven into every temple border",
  "THE RACK — Browse the full rail of silks",
  "BRIDAL — Heirloom sarees for the muhurtham",
  "HANDWOVEN — One loom, one saree at a time",
];

const NAV = ["Try the Look", "Pick a Silk", "The Rack", "The Muse", "Bridal"];

function ShowroomBackdrop() {
  // Placeholder for the full-bleed showroom photograph (AI studio image later).
  return (
    <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1440 760" preserveAspectRatio="xMidYMid slice" aria-hidden>
      <defs>
        <linearGradient id="hall" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="var(--brand-maroon-deep)" />
          <stop offset="0.55" stopColor="var(--brand-maroon)" />
          <stop offset="1" stopColor="#2a0508" />
        </linearGradient>
        <radialGradient id="glow" cx="0.5" cy="0.35" r="0.6">
          <stop offset="0" stopColor="var(--brand-gold-bright)" stopOpacity="0.5" />
          <stop offset="1" stopColor="var(--brand-gold-bright)" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="1440" height="760" fill="url(#hall)" />
      <rect width="1440" height="760" fill="url(#glow)" />
      {/* receding gopuram arches */}
      {[0, 1, 2, 3].map((i) => {
        const inset = i * 130;
        const o = 0.5 - i * 0.1;
        return (
          <path
            key={i}
            d={`M${180 + inset} 760 V ${300 + i * 40} Q 720 ${80 + i * 70} ${1260 - inset} ${300 + i * 40} V 760`}
            fill="none"
            stroke="var(--brand-gold)"
            strokeOpacity={o}
            strokeWidth={2.5}
          />
        );
      })}
      {/* silk shelves left + right */}
      {[0, 1, 2, 3, 4, 5].map((r) =>
        [0, 1].map((side) => (
          <g key={`${r}-${side}`} transform={side ? `translate(${1150}, ${180 + r * 90})` : `translate(60, ${180 + r * 90})`}>
            {[0, 1, 2, 3].map((c) => (
              <rect key={c} x={c * 60} y="0" width="48" height="56" rx="4"
                fill={["#b3812f", "#7a1626", "#14494a", "#c2426f", "#283593", "#c9a24b"][(r + c + side) % 6]}
                opacity="0.55" />
            ))}
          </g>
        ))
      )}
      <ellipse cx="720" cy="740" rx="520" ry="60" fill="#000" opacity="0.35" />
    </svg>
  );
}

export function Hero() {
  const { list } = useShortlist();
  return (
    <header className="relative overflow-hidden text-white">
      <ShowroomBackdrop />

      {/* glass pill navbar */}
      <div className="relative z-10 mx-auto mt-6 flex w-[min(1200px,94%)] items-center gap-6 rounded-full border border-white/20 bg-white/10 px-6 py-3 backdrop-blur-md">
        <a href="#top" className="flex flex-col leading-none">
          <span className="wordmark text-xl">THARI</span>
          <span className="mt-1 text-[9px] tracking-[0.4em] text-gold-bright">KANCHIPURAM SILK</span>
        </a>
        <nav className="ml-auto hidden items-center gap-5 text-sm text-white/85 lg:flex">
          {NAV.map((n) => (
            <a key={n} href={`#${n.toLowerCase().replace(/ /g, "-")}`} className="hover:text-gold-bright">
              {n}
            </a>
          ))}
        </nav>
        <a href="#shortlist" aria-label="Shortlist" className="relative ml-auto lg:ml-2">
          <HeartIcon className="h-5 w-5" />
          {list.length > 0 && (
            <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-gold text-[10px] font-bold text-maroon-deep" data-shortlist-count>
              {list.length}
            </span>
          )}
        </a>
        <a
          href="#the-rack"
          className="hidden rounded-full border border-gold/60 bg-maroon px-5 py-2 text-sm font-semibold text-gold-bright hover:bg-maroon-deep sm:flex sm:items-center sm:gap-2"
        >
          Visit the Store <Arrow />
        </a>
      </div>

      {/* headline */}
      <div className="relative z-10 mx-auto w-[min(1200px,94%)] pb-24 pt-20 lg:pt-28">
        <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/25 bg-black/25 px-4 py-2 text-[11px] tracking-[0.28em] backdrop-blur-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-gold-bright" /> KANCHIPURAM · PURE ZARI · HANDWOVEN SILK
        </p>
        <h1 className="max-w-3xl text-5xl font-extrabold leading-[1.02] tracking-tight sm:text-7xl">
          Woven on the Temple Loom.
        </h1>
        <p className="mt-6 max-w-xl text-lg text-white/85">
          THARI brings the temple looms of Kanchipuram home: Kanjivaram silk in heritage colours,
          bordered in real zari and finished by hand.
        </p>
        <div className="mt-9 flex flex-wrap gap-4">
          <a href="#try-the-look" className="inline-flex items-center gap-2 rounded-full bg-maroon px-7 py-3.5 font-semibold text-white ring-1 ring-gold/50 hover:bg-maroon-deep">
            Try the Look <Arrow />
          </a>
          <a href="#the-rack" className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 font-semibold text-maroon hover:bg-ivory">
            Browse the Rack <Arrow />
          </a>
        </div>
      </div>

      {/* gold ticker */}
      <div className="relative z-10 border-t border-gold/30 bg-maroon-deep/90 py-2.5">
        <div className="flex overflow-hidden whitespace-nowrap">
          <div className="ticker-track flex shrink-0 items-center">
            {[...TICKER, ...TICKER].map((t, i) => (
              <span key={i} className="mx-6 text-[12px] tracking-[0.22em] text-gold-bright">
                ◆ <span className="font-bold">{t.split(" — ")[0]}</span>
                <span className="ml-2 normal-case tracking-normal text-white/70">{t.split(" — ")[1]}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}

export function Arrow() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M7 17 17 7M9 7h8v8" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function HeartIcon({ className, filled = false }: { className?: string; filled?: boolean }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M12 21s-7.5-4.8-9.8-9.1C.7 8.9 2.3 5.4 5.6 4.6c2-.5 4.1.3 5.4 2 1.3-1.7 3.4-2.5 5.4-2 3.3.8 4.9 4.3 3.4 7.3C19.5 16.2 12 21 12 21Z" />
    </svg>
  );
}
