"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { categories, inr, products, type Category } from "@/data/products";
import { SareeArt } from "./SareeArt";
import { HeartIcon } from "./Hero";
import { useShortlist } from "@/lib/shortlist";
import { enquireUrl } from "./WhatsAppFloat";

const SIZES = [34, 36, 38, 40, 42];

function RackDetail({ code, onClose, onMove }: { code: string; onClose: () => void; onMove: (d: 1 | -1) => void }) {
  const p = products.find((x) => x.code === code)!;
  const [back, setBack] = useState(false);
  const [size, setSize] = useState<number | null>(null);
  const { has, toggle } = useShortlist();
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center bg-white/60 p-4 backdrop-blur-md" role="dialog" aria-modal aria-label={p.name}>
      <button onClick={onClose} className="absolute right-6 top-6 text-sm font-semibold tracking-widest text-ink hover:text-maroon">CLOSE ✕</button>
      <button onClick={() => onMove(-1)} aria-label="Previous piece" className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full border border-line bg-white p-4 shadow-md hover:border-gold sm:left-10">←</button>
      <button onClick={() => onMove(1)} aria-label="Next piece" className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full border border-line bg-white p-4 shadow-md hover:border-gold sm:right-10">→</button>

      <motion.div layoutId={`hanger-${code}`} className="grid w-[min(860px,100%)] gap-8 rounded-3xl border border-line bg-white p-8 shadow-2xl sm:grid-cols-2">
        <motion.div key={String(back)} initial={{ rotateY: 90, opacity: 0 }} animate={{ rotateY: 0, opacity: 1 }} transition={{ duration: 0.3 }}>
          <SareeArt product={p} mirror={back} className="mx-auto w-64 sm:w-80" />
        </motion.div>
        <div className="flex flex-col justify-center">
          <p className="text-[11px] tracking-[0.3em] text-ink-soft">{p.category.toUpperCase()}</p>
          <h3 className="mt-2 text-2xl font-extrabold tracking-[0.12em]">{p.name.toUpperCase()}</h3>
          <p className="mt-1 text-sm text-ink-soft">{p.fabric}</p>
          <p className="mt-4 text-3xl font-extrabold text-maroon">{inr(p.price)}</p>

          <div className="mt-5 flex gap-2 text-sm">
            <button onClick={() => setBack(false)} className={`rounded-full px-4 py-1.5 ${!back ? "bg-ink text-white" : "border border-line"}`}>Front</button>
            <button onClick={() => setBack(true)} className={`rounded-full px-4 py-1.5 ${back ? "bg-ink text-white" : "border border-line"}`}>Back</button>
          </div>

          <div className="mt-5">
            <p className="text-xs tracking-[0.2em] text-ink-soft">SIZE (BLOUSE)</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {SIZES.map((s) => (
                <button key={s} onClick={() => setSize(s)} className={`h-10 w-12 rounded-xl border text-sm font-semibold ${size === s ? "border-maroon bg-maroon text-white" : "border-line hover:border-gold"}`}>
                  {s}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-6 flex items-center gap-3">
            <a
              href={enquireUrl(`Vanakkam! Is "${p.name}" (${p.code})${size ? `, size ${size},` : ""} available?`)}
              data-wa="rack-enquiry"
              target="_blank"
              rel="noopener"
              className="flex-1 rounded-full bg-maroon px-6 py-3 text-center font-semibold text-white hover:bg-maroon-deep"
            >
              {size ? `See availability · ${size}` : "Select a size"}
            </a>
            <button onClick={() => toggle(p.code)} aria-pressed={has(p.code)} data-heart={p.code} aria-label="Shortlist" className={`rounded-full border border-line p-3.5 ${has(p.code) ? "text-maroon" : "text-ink-soft"} hover:border-gold hover:text-maroon`}>
              <HeartIcon className="h-5 w-5" filled={has(p.code)} />
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function TheRack() {
  const [filter, setFilter] = useState<"All pieces" | Category>("All pieces");
  const [open, setOpen] = useState<string | null>(null);
  const shown = useMemo(
    () => (filter === "All pieces" ? products : products.filter((p) => p.category === filter)),
    [filter]
  );
  const move = (d: 1 | -1) => {
    if (!open) return;
    const idx = shown.findIndex((p) => p.code === open);
    setOpen(shown[(idx + d + shown.length) % shown.length].code);
  };

  return (
    <section id="the-rack" className="bg-white py-24">
      <div className="mx-auto w-[min(1200px,94%)]">
        <p className="text-center text-xs tracking-[0.35em] text-ink-soft">— THE COLLECTION —</p>
        <h2 className="mt-4 text-center text-4xl font-extrabold tracking-tight sm:text-6xl">
          Every silk, <span className="grad-text">on the rail.</span>
        </h2>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {(["All pieces", ...categories] as const).map((c) => {
            const n = c === "All pieces" ? products.length : products.filter((p) => p.category === c).length;
            const on = filter === c;
            return (
              <button key={c} onClick={() => setFilter(c)} className={`flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-semibold shadow-sm transition ${on ? "border-gold bg-maroon text-white" : "border-line bg-white hover:border-gold"}`}>
                {c}
                <span className={`flex h-5 w-5 items-center justify-center rounded-full text-[11px] ${on ? "bg-white text-maroon" : "bg-ivory text-ink-soft"}`}>{n}</span>
              </button>
            );
          })}
        </div>

        {/* the rail */}
        <div className="relative mt-14">
          <div className="absolute left-0 right-0 top-6 h-2 rounded-full bg-gradient-to-b from-zinc-200 via-zinc-400 to-zinc-300 shadow-sm" aria-hidden>
            <span className="absolute -left-1 -top-1 h-4 w-4 rounded-full bg-zinc-300" />
            <span className="absolute -right-1 -top-1 h-4 w-4 rounded-full bg-zinc-300" />
          </div>
          <motion.div layout className="flex flex-wrap justify-center gap-1 pt-7">
            <AnimatePresence>
              {shown.map((p) => (
                <motion.button
                  layout
                  layoutId={`hanger-${p.code}`}
                  key={p.code}
                  initial={{ opacity: 0, y: -24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 24 }}
                  whileHover={{ y: -10, scale: 1.08, zIndex: 5 }}
                  onClick={() => setOpen(p.code)}
                  className="group relative w-24 sm:w-32"
                  aria-label={`${p.name} · ${inr(p.price)}`}
                >
                  <SareeArt product={p} className="w-full drop-shadow-md" />
                  <span className="pointer-events-none absolute -bottom-9 left-1/2 w-44 -translate-x-1/2 text-center opacity-0 transition group-hover:opacity-100">
                    <span className="block text-[10px] font-bold tracking-[0.18em] text-ink">{p.name.toUpperCase()}</span>
                    <span className="block text-[11px] text-ink-soft">{inr(p.price)}</span>
                  </span>
                </motion.button>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

        <div className="mt-16 flex justify-between text-[10px] tracking-[0.2em] text-ink-soft">
          <span>EXPLORE THE COLLECTION · {shown.length} PIECES</span>
          <span>PLACEHOLDER STUDIO IMAGERY · DEMO COLLECTION</span>
        </div>
      </div>

      <AnimatePresence>
        {open && <RackDetail code={open} onClose={() => setOpen(null)} onMove={move} />}
      </AnimatePresence>
    </section>
  );
}
