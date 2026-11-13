"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { inr, products } from "@/data/products";
import { StudioArt } from "./SareeArt";
import { HeartIcon } from "./Hero";
import { useShortlist } from "@/lib/shortlist";
import { enquireUrl } from "./WhatsAppFloat";

const BRIDAL = products.filter((p) => p.bridal);

export function Bridal() {
  const [i, setI] = useState(0);
  const { has, toggle } = useShortlist();
  const p = BRIDAL[i];
  return (
    <section id="bridal" className="overflow-hidden bg-white py-24">
      <div className="mx-auto w-[min(1200px,94%)]">
        <p className="text-center text-xs italic text-ink-soft">For the muhurtham and every vow after</p>
        <h2 className="mt-3 text-center text-4xl font-extrabold tracking-tight sm:text-6xl">
          The Bridal <span className="grad-text">Collection.</span>
        </h2>

        <div className="relative mt-16 flex items-end justify-center" style={{ perspective: 1100 }}>
          {BRIDAL.map((b, idx) => {
            const off = ((idx - i + BRIDAL.length + 1) % BRIDAL.length) - 1;
            const discount = idx % 2 === 1;
            return (
              <motion.button
                key={b.code}
                onClick={() => setI(idx)}
                animate={{ x: off * 230, rotateY: off * -18, rotate: off * 4, scale: off === 0 ? 1 : 0.82, opacity: Math.abs(off) > 1 ? 0 : off === 0 ? 1 : 0.55, zIndex: 5 - Math.abs(off) }}
                transition={{ type: "spring", stiffness: 150, damping: 20 }}
                className={`absolute bottom-0 w-60 overflow-hidden bg-ivory text-left shadow-xl ${off === 0 ? "border-2 border-gold" : "border border-line"}`}
                style={{ borderRadius: "140px 140px 22px 22px" }}
                aria-label={b.name}
              >
                <StudioArt product={b} className="w-full" />
                {discount && (
                  <span className="absolute left-4 top-6 rounded-full bg-maroon px-3 py-1 text-[10px] font-bold text-gold-bright">10% OFF</span>
                )}
              </motion.button>
            );
          })}
          <div className="h-[380px]" />
          <button onClick={() => setI((i - 1 + BRIDAL.length) % BRIDAL.length)} aria-label="Previous bridal saree" className="absolute left-2 top-1/2 rounded-full border border-line bg-white p-4 shadow-md hover:border-gold sm:left-16">←</button>
          <button onClick={() => setI((i + 1) % BRIDAL.length)} aria-label="Next bridal saree" className="absolute right-2 top-1/2 rounded-full border border-line bg-white p-4 shadow-md hover:border-gold sm:right-16">→</button>
        </div>

        <div className="mt-10 text-center">
          <h3 className="text-xl font-extrabold tracking-[0.15em]">{p.name.toUpperCase()}</h3>
          <p className="mt-1 text-sm text-ink-soft">{p.fabric}{p.note ? ` · ${p.note}` : ""}</p>
          <p className="mt-2 text-2xl font-extrabold text-gold-deep">{inr(p.price)}</p>
          <div className="mt-5 flex items-center justify-center gap-3">
            <a href={enquireUrl(`Vanakkam! I am interested in the bridal saree "${p.name}" (${p.code}).`)} data-wa="bridal-enquiry" target="_blank" rel="noopener" className="rounded-full bg-maroon px-7 py-3 font-semibold text-white hover:bg-maroon-deep">
              Enquire on WhatsApp
            </a>
            <button onClick={() => toggle(p.code)} aria-pressed={has(p.code)} data-heart={p.code} aria-label="Shortlist" className={`rounded-full border border-line p-3.5 ${has(p.code) ? "text-maroon" : "text-ink-soft"} hover:border-gold hover:text-maroon`}>
              <HeartIcon className="h-5 w-5" filled={has(p.code)} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
