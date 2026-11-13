"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { inr, products } from "@/data/products";
import { StudioArt } from "./SareeArt";
import { HeartIcon } from "./Hero";
import { useShortlist } from "@/lib/shortlist";

const PICKS = ["TH-0002", "TH-0003", "TH-0001", "TH-0006", "TH-0007"];

function TiltCard({ code, index, count }: { code: string; index: number; count: number }) {
  const p = products.find((x) => x.code === code)!;
  const { has, toggle } = useShortlist();
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [10, -10]), { stiffness: 200, damping: 20 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-10, 10]), { stiffness: 200, damping: 20 });

  const mid = (count - 1) / 2;
  const fan = (index - mid) * 7; // degrees
  const lift = Math.abs(index - mid) * 26; // px — gentle curve

  return (
    <motion.div
      ref={ref}
      onMouseMove={(e) => {
        const r = ref.current!.getBoundingClientRect();
        mx.set((e.clientX - r.left) / r.width - 0.5);
        my.set((e.clientY - r.top) / r.height - 0.5);
      }}
      onMouseLeave={() => { mx.set(0); my.set(0); }}
      whileTap={{ scale: 0.96 }}
      style={{ rotateX: rx, rotateY: ry, rotate: fan, y: lift, transformPerspective: 900 }}
      className="relative w-52 shrink-0 cursor-pointer overflow-hidden rounded-[26px] shadow-xl sm:w-60"
    >
      <div className="relative" style={{ background: p.palette.base }}>
        <span
          className="pointer-events-none absolute inset-x-0 top-6 text-center text-[42px] font-extrabold uppercase leading-none tracking-tight text-white/25"
          style={{ fontStretch: "condensed" }}
        >
          {p.name.split(" ")[0]}
          <br />
          {p.name.split(" ").slice(1).join(" ") || " "}
        </span>
        <StudioArt product={p} className="relative w-full drop-shadow-[0_18px_20px_rgba(0,0,0,0.35)]" />
        <button
          onClick={() => toggle(p.code)}
          aria-pressed={has(p.code)}
          data-heart={p.code}
          aria-label={`Shortlist ${p.name}`}
          className={`absolute right-4 top-4 rounded-full bg-white/85 p-2 ${has(p.code) ? "text-maroon" : "text-ink-soft"} hover:text-maroon`}
        >
          <HeartIcon className="h-4 w-4" filled={has(p.code)} />
        </button>
        <div className="absolute bottom-4 left-4 rounded-full bg-black/35 px-3 py-1.5 text-sm font-bold text-white backdrop-blur-sm">
          {inr(p.price)}
        </div>
        <a
          href="#the-rack"
          aria-label={`Open ${p.name} on the rack`}
          className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-ink text-xl font-bold text-white hover:bg-maroon"
        >
          +
        </a>
      </div>
    </motion.div>
  );
}

export function PickASilk() {
  return (
    <section id="pick-a-silk" className="overflow-hidden bg-white py-24">
      <div className="mx-auto w-[min(1200px,94%)]">
        <p className="text-center text-xs tracking-[0.35em] text-ink-soft">BOLD SOLIDS, HUGE NAMES</p>
        <h2 className="mt-3 text-center text-4xl font-extrabold tracking-tight sm:text-6xl">
          Pick a <span className="grad-text">Silk.</span>
        </h2>
        <div className="mt-16 flex justify-center gap-5 pb-10" style={{ perspective: 1200 }}>
          {PICKS.map((c, i) => (
            <TiltCard key={c} code={c} index={i} count={PICKS.length} />
          ))}
        </div>
        <p className="text-center text-xs tracking-[0.2em] text-ink-soft">TILT A CARD, PRESS IT, POKE THE SILK.</p>
      </div>
    </section>
  );
}
