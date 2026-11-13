"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { products, reels } from "@/data/products";
import { SareeArt } from "./SareeArt";
import { enquireUrl } from "./WhatsAppFloat";

function PhotoColumn({ dir, offset }: { dir: "up" | "down"; offset: number }) {
  const col = [...products.slice(offset, offset + 4), ...products.slice(offset, offset + 4)];
  return (
    <div className="relative h-[420px] w-28 shrink-0 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]">
      <div className={`flex flex-col gap-4 ${dir === "up" ? "col-up" : "col-down"}`}>
        {col.map((p, i) => (
          <div key={i} className="overflow-hidden rounded-2xl border border-line bg-ivory">
            <SareeArt product={p} hanger={false} className="w-full" />
          </div>
        ))}
      </div>
    </div>
  );
}

export function MuseFilm() {
  const [sound, setSound] = useState(false);
  return (
    <section id="the-muse" className="overflow-hidden bg-white py-24">
      <div className="mx-auto w-[min(1200px,94%)]">
        <p className="text-center text-xs tracking-[0.35em] text-ink-soft">THE MUSE FILM</p>
        <h2 className="mt-3 text-center text-4xl font-extrabold tracking-tight sm:text-6xl">
          Feel the <span className="grad-text">drape.</span>
        </h2>

        <div className="mt-14 flex items-center justify-center gap-6">
          <div className="hidden md:flex md:gap-4"><PhotoColumn dir="up" offset={0} /><PhotoColumn dir="down" offset={3} /></div>

          {/* gold-framed 16:9 film */}
          <div className="relative w-[min(640px,100%)]">
            <div className="pointer-events-none absolute -inset-3" aria-hidden>
              {["left-0 top-0 border-l-2 border-t-2", "right-0 top-0 border-r-2 border-t-2", "bottom-0 left-0 border-b-2 border-l-2", "bottom-0 right-0 border-b-2 border-r-2"].map((c) => (
                <span key={c} className={`absolute h-8 w-8 border-gold ${c}`} />
              ))}
              <span className="absolute inset-0 border border-gold/50" />
            </div>
            <div className="relative aspect-video overflow-hidden rounded-sm bg-maroon-deep">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(232,200,122,0.25),transparent_65%)]" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <button aria-label="Play film" className="flex h-16 w-16 items-center justify-center rounded-full border border-gold-bright/70 bg-white/10 backdrop-blur-sm transition hover:scale-105">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className="ml-1 text-gold-bright"><path d="M6 4l14 8-14 8Z" /></svg>
                </button>
                <p className="wordmark mt-5 text-sm tracking-[0.4em] text-gold-bright">THE THARI FILM</p>
                <p className="mt-1 text-[11px] text-white/60">Brand film placeholder · 1:12</p>
              </div>
              <button onClick={() => setSound(!sound)} className="absolute bottom-4 right-4 rounded-full bg-black/40 px-4 py-1.5 text-xs text-white backdrop-blur-sm hover:bg-black/60">
                {sound ? "Sound on" : "Sound off"}
              </button>
            </div>
          </div>

          <div className="hidden md:flex md:gap-4"><PhotoColumn dir="down" offset={6} /><PhotoColumn dir="up" offset={8} /></div>
        </div>

        <div className="mt-12 text-center">
          <a href={enquireUrl("Vanakkam! I would like to purchase from the THARI collection.")} data-wa="muse-cta" target="_blank" rel="noopener" className="inline-flex items-center gap-2 rounded-full bg-maroon px-8 py-3.5 font-semibold text-white hover:bg-maroon-deep">
            Purchase the Collection
          </a>
        </div>
      </div>
    </section>
  );
}

export function MuseReels() {
  const [center, setCenter] = useState(2);
  const [paused, setPaused] = useState(false);
  return (
    <section className="overflow-hidden bg-ivory py-24">
      <div className="mx-auto w-[min(1200px,94%)]">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs tracking-[0.35em] text-ink-soft">FILMED IN REAL PLACES</p>
            <h2 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-6xl">
              Silk, in <span className="grad-text">motion.</span>
            </h2>
          </div>
          <div className="flex gap-2">
            <button onClick={() => setCenter((center - 1 + reels.length) % reels.length)} aria-label="Previous reel" className="rounded-full border border-line bg-white px-4 py-2 hover:border-gold">←</button>
            <button onClick={() => setPaused(!paused)} aria-label="Pause" className="rounded-full border border-line bg-white px-4 py-2 hover:border-gold">{paused ? "▶" : "❚❚"}</button>
            <button onClick={() => setCenter((center + 1) % reels.length)} aria-label="Next reel" className="rounded-full border border-line bg-white px-4 py-2 hover:border-gold">→</button>
          </div>
        </div>

        <div className="relative mt-14 flex h-[430px] items-end justify-center" style={{ perspective: 1100 }}>
          {reels.map((r, i) => {
            const off = ((i - center + reels.length + 2) % reels.length) - 2;
            const p = products[(i * 2 + 1) % products.length];
            return (
              <motion.button
                key={r.id}
                onClick={() => setCenter(i)}
                animate={{
                  x: off * 180,
                  rotateY: off * -28,
                  scale: off === 0 ? 1 : 0.8 - Math.abs(off) * 0.05,
                  opacity: Math.abs(off) > 1 ? 0.45 : 1,
                  zIndex: 10 - Math.abs(off),
                }}
                transition={{ type: "spring", stiffness: 160, damping: 22 }}
                className="absolute bottom-0 h-[400px] w-[220px] overflow-hidden rounded-3xl border border-line bg-white text-left shadow-xl"
                aria-label={r.title}
              >
                <div className="relative h-full" style={{ background: p.palette.base }}>
                  <SareeArt product={p} hanger={false} className="h-full w-full opacity-80" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />
                  <span className="absolute left-4 top-4 text-[11px] font-bold text-white/80">REEL 0{r.id} · {r.duration}</span>
                  <span className="absolute right-4 top-4 rounded-full bg-white/20 px-2.5 py-1 text-[10px] text-white backdrop-blur-sm">{r.fabric}</span>
                  {off === 0 && (
                    <span className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/25 backdrop-blur-sm">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="#fff" className="ml-0.5"><path d="M6 4l14 8-14 8Z" /></svg>
                    </span>
                  )}
                  <span className="absolute inset-x-4 bottom-5 text-white">
                    <span className="block text-sm font-bold">{r.title}</span>
                    <span className="block text-[11px] text-white/70">{r.location}</span>
                    {off === 0 && (
                      <span className="mt-2 block h-1 overflow-hidden rounded-full bg-white/25">
                        <motion.span
                          className="block h-full bg-gold-bright"
                          animate={paused ? {} : { width: ["0%", "100%"] }}
                          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                        />
                      </span>
                    )}
                  </span>
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
