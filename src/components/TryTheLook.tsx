"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { byCode, inr, looks } from "@/data/products";
import { StudioArt } from "./SareeArt";
import { HeartIcon } from "./Hero";
import { useShortlist } from "@/lib/shortlist";
import { enquireUrl } from "./WhatsAppFloat";

export function TryTheLook() {
  const [i, setI] = useState(0);
  const { has, toggle } = useShortlist();
  const look = looks[i];
  const saree = byCode(look.saree);
  const total = saree.price + look.items.reduce((s, it) => s + it.price, 0);
  const bundle = Math.round(total * 0.9);

  return (
    <section id="try-the-look" className="bg-ivory py-24">
      <div className="mx-auto w-[min(1200px,94%)]">
        <p className="text-xs tracking-[0.35em] text-ink-soft">STYLED HEAD TO TOE</p>
        <h2 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-6xl">
          Try the <span className="grad-text">Look.</span>
        </h2>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          {/* stage carousel */}
          <div className="relative">
            <div className="flex items-center justify-center gap-4">
              {[-1, 0, 1].map((off) => {
                const idx = (i + off + looks.length) % looks.length;
                const lk = looks[idx];
                const center = off === 0;
                return (
                  <motion.button
                    key={lk.id}
                    onClick={() => !center && setI(idx)}
                    animate={{ scale: center ? 1 : 0.78, opacity: center ? 1 : 0.35, filter: center ? "blur(0px)" : "blur(2px)" }}
                    transition={{ type: "spring", stiffness: 180, damping: 22 }}
                    className={`shrink-0 overflow-hidden rounded-3xl bg-white shadow-xl ${center ? "w-56 sm:w-72" : "hidden w-40 sm:block sm:w-48"}`}
                    aria-label={lk.name}
                  >
                    <StudioArt product={byCode(lk.saree)} title={lk.name} className="w-full" />
                  </motion.button>
                );
              })}
            </div>
            <div className="mt-6 flex items-center justify-center gap-5 text-sm text-ink-soft">
              <button onClick={() => setI((i - 1 + looks.length) % looks.length)} className="rounded-full border border-line bg-white px-4 py-2 hover:border-gold" aria-label="Previous look">←</button>
              <span className="font-semibold text-ink">{i + 1} of {looks.length} · {look.name}</span>
              <button onClick={() => setI((i + 1) % looks.length)} className="rounded-full border border-line bg-white px-4 py-2 hover:border-gold" aria-label="Next look">→</button>
            </div>
            <p className="mt-2 text-center text-xs tracking-[0.2em] text-ink-soft">USE THE ARROWS · EVERY PIECE LISTED ON THE RIGHT</p>
          </div>

          {/* in-this-look panel */}
          <div className="rounded-3xl border border-line bg-white p-6 shadow-sm">
            <h3 className="text-sm font-bold tracking-[0.25em] text-ink">IN THIS LOOK</h3>
            <AnimatePresence mode="wait">
              <motion.ul key={look.id} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="mt-4 divide-y divide-line">
                <li className="flex items-center gap-3 py-3">
                  <span className="h-12 w-12 overflow-hidden rounded-xl border border-line"><StudioArt product={saree} className="h-full w-full" /></span>
                  <span className="flex-1">
                    <span className="block text-sm font-semibold">{saree.name} Saree</span>
                    <span className="block text-xs text-ink-soft">{saree.fabric}</span>
                  </span>
                  <span className="text-sm font-semibold">{inr(saree.price)}</span>
                  <button onClick={() => toggle(saree.code)} aria-pressed={has(saree.code)} data-heart={saree.code} className={`${has(saree.code) ? "text-maroon" : "text-ink-soft"} hover:text-maroon`} aria-label="Shortlist saree">
                    <HeartIcon className="h-4 w-4" filled={has(saree.code)} />
                  </button>
                </li>
                {look.items.map((it) => (
                  <li key={it.name} className="flex items-center gap-3 py-3">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-line bg-ivory text-[9px] font-bold tracking-wider text-gold-deep">{it.kind.toUpperCase().slice(0, 7)}</span>
                    <span className="flex-1">
                      <span className="block text-sm font-semibold">{it.name}</span>
                      <span className="block text-xs text-ink-soft">{it.kind}</span>
                    </span>
                    <span className="text-sm font-semibold">{inr(it.price)}</span>
                  </li>
                ))}
              </motion.ul>
            </AnimatePresence>
            <div className="mt-5 rounded-2xl bg-ivory p-4">
              <div className="flex items-baseline justify-between">
                <span className="text-xs tracking-[0.2em] text-ink-soft">FULL LOOK · 10% OFF</span>
                <span className="text-xs text-ink-soft line-through">{inr(total)}</span>
              </div>
              <div className="mt-1 flex items-center justify-between">
                <span className="text-2xl font-extrabold text-maroon">{inr(bundle)}</span>
                <a
                  href={enquireUrl(`Vanakkam! I love the "${look.name}" full look (${look.saree}). Is the complete set available?`)}
                  data-wa="look-enquiry"
                  target="_blank"
                  rel="noopener"
                  className="rounded-full bg-maroon px-5 py-2.5 text-sm font-semibold text-white hover:bg-maroon-deep"
                >
                  Enquire for full look
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
