"use client";

import { inr, products } from "@/data/products";
import { SareeArt } from "./SareeArt";
import { useShortlist } from "@/lib/shortlist";
import { enquireUrl } from "./WhatsAppFloat";

export function ShortlistSection() {
  const { list, toggle } = useShortlist();
  const saved = products.filter((p) => list.includes(p.code));
  return (
    <section id="shortlist" className="bg-ivory py-20">
      <div className="mx-auto w-[min(1200px,94%)]">
        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
          Your shortlist <span className="text-maroon">♡</span>
          <span className="ml-3 align-middle text-base font-semibold text-ink-soft" data-shortlist-count>{saved.length}</span>
        </h2>
        {saved.length === 0 ? (
          <p className="mt-4 text-ink-soft">
            Tap the ♡ on any saree to keep it here — the list stays in this browser.
          </p>
        ) : (
          <>
            <div className="mt-8 grid grid-cols-2 gap-5 sm:grid-cols-4 lg:grid-cols-6">
              {saved.map((p) => (
                <figure key={p.code} className="rounded-2xl border border-line bg-white p-3 text-center shadow-sm">
                  <SareeArt product={p} className="mx-auto w-24" />
                  <figcaption className="mt-2 text-xs font-bold tracking-wider">{p.name.toUpperCase()}</figcaption>
                  <p className="text-xs text-ink-soft">{inr(p.price)}</p>
                  <button onClick={() => toggle(p.code)} className="mt-2 text-[11px] font-semibold text-maroon hover:underline">
                    Remove
                  </button>
                </figure>
              ))}
            </div>
            <a
              href={enquireUrl(`Vanakkam! I shortlisted these sarees: ${saved.map((p) => `${p.name} (${p.code})`).join(", ")}. Are they available?`)}
              data-wa="shortlist-enquiry"
              target="_blank"
              rel="noopener"
              className="mt-8 inline-flex rounded-full bg-maroon px-7 py-3 font-semibold text-white hover:bg-maroon-deep"
            >
              Enquire about {saved.length} piece{saved.length > 1 ? "s" : ""} on WhatsApp
            </a>
          </>
        )}
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-maroon-deep py-14 text-white">
      <div className="mx-auto flex w-[min(1200px,94%)] flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
        <div>
          <p className="wordmark text-2xl">THARI</p>
          <p className="mt-1 text-[10px] tracking-[0.4em] text-gold-bright">KANCHIPURAM SILK</p>
        </div>
        <p className="max-w-sm text-sm text-white/70">
          Handwoven Kanjivaram silk from the temple looms of Kanchipuram.
          Placeholder studio imagery · demo collection.
        </p>
        <p className="text-xs text-white/50">© {new Date().getFullYear()} THARI (working name)</p>
      </div>
    </footer>
  );
}
