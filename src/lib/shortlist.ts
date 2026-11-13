// Shortlist ("♡") — ported from @rajesh-hub/web-growth scripts/shortlist.ts
// (Astro) to a React hook. Same storage shape and events so the hub's
// tracking/stats can be wired in later (HUB-WEB-04/05/06).
"use client";

import { useEffect, useState } from "react";

const KEY = `${process.env.NEXT_PUBLIC_SITE_KEY || "thari"}-shortlist`;
const MAX = 60;

export function getShortlist(): string[] {
  if (typeof window === "undefined") return [];
  try {
    const v = JSON.parse(localStorage.getItem(KEY) || "[]");
    return Array.isArray(v) ? v.filter((x): x is string => typeof x === "string") : [];
  } catch {
    return [];
  }
}

export function setShortlist(codes: string[]) {
  const list = [...new Set(codes.map((c) => c.toUpperCase()))].slice(-MAX);
  try {
    localStorage.setItem(KEY, JSON.stringify(list));
  } catch {
    /* private mode: the list lasts for this page only */
  }
  window.dispatchEvent(new CustomEvent("shortlist:change", { detail: list }));
}

export function toggleShortlist(code: string) {
  const list = getShortlist();
  if (list.includes(code)) setShortlist(list.filter((c) => c !== code));
  else setShortlist([...list, code]);
  // Hook point for hub tracking: countDesign(code,'shortlist') + AddToWishlist event.
}

export function useShortlist() {
  const [list, setList] = useState<string[]>([]);
  useEffect(() => {
    setList(getShortlist());
    const onChange = () => setList(getShortlist());
    window.addEventListener("shortlist:change", onChange);
    const onStorage = (e: StorageEvent) => e.key === KEY && onChange();
    window.addEventListener("storage", onStorage);
    return () => {
      window.removeEventListener("shortlist:change", onChange);
      window.removeEventListener("storage", onStorage);
    };
  }, []);
  return { list, toggle: toggleShortlist, has: (c: string) => list.includes(c) };
}
