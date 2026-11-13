# Boutique Web — Project Memory

E-commerce saree boutique website, rebuilt from the design spec in
`alagappan567/noolam-saree-showcase` (that repo has **no code** — only
`PROMPTS.md`, `HOW-WE-MADE.md` and 10 screenshots; treat it as the design
reference).

## Confirmed decisions (2025-11-13, chosen by Rajesh)

| Decision | Choice |
|---|---|
| Brand | **New brand, same style** — invent a fresh brand name, keep the heritage design language (deep maroon, temple gold, ivory white; divine heritage-showroom feel). Do not reuse the NOOLAM name. |
| Selling model (first release) | **Enquiry/WhatsApp-led** — shortlist ♡ + WhatsApp enquiry per saree, no online payment. Cart + Razorpay checkout is Phase 2. |
| Tech stack | **Next.js** (same as the original showcase build), not the hub Astro site template. |
| Imagery | **AI-generated studio placeholders** first, swap in real photos later. |

## Rules

- Reuse from `yuvarajeshsp-cloud/rajesh-hub` before building anything new
  (see its `CATALOGUE.md`): web-growth (WhatsApp float + tracking, shortlist,
  enquiry form, consent + Meta Pixel/CAPI, Instagram feed, image CDN, item
  stats), supabase-kit, ui, tokens. Hub parts are built for Astro where noted —
  adapt to Next.js, don't rebuild from scratch.
- Brand colours/fonts go into `@rajesh-hub/tokens` as a new brand theme;
  never hard-code brand colours in components.
- Product catalogue content lives in Supabase (CMS pattern from
  paavai-embroidery-web, HUB-WEB-01/03).

## Design reference (from the showcase)

9 sections to rebuild: hero (glass pill navbar, full-bleed showroom image,
gold ticker strip) · Six Moods (gopuram-arch framed categories) · Try the Look
(drag carousel + "In this look" bundle panel) · Pick a Silk (fanned tilting
cards) · The Rack (clothes-rail browser with hangers + filter chips) · Rack
detail (lift-off product view, sizes 34–42) · Muse Film (framed brand film +
scrolling photo columns) · Muse Reels (3D arc of vertical reels) · Bridal
Collection (arch-topped curved carousel).

## Open items

- Pick the new brand name (candidates to propose: Thari, Izhai, Pattam —
  Tamil loom/thread words in the NOOLAM spirit; confirm with Rajesh before
  locking logo/domain).
- Phase 2: cart + Razorpay (HUB-PAY-01), orders, WhatsApp order-status
  (HUB-MSG-01). Phase 3: admin + Publish (HUB-WEB-02), product feed, SEO.
