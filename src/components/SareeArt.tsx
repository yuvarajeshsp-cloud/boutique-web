// Generated placeholder "studio imagery": a stylised draped silk rendered as
// SVG from each product's palette. Swapped for real / AI studio photos later —
// every usage goes through this one component, so the swap is localised.
import type { Product } from "@/data/products";

type Palette = Product["palette"];

function Folds({ palette, pattern, mirror }: { palette: Palette; pattern: Product["pattern"]; mirror?: boolean }) {
  const id = `${palette.base.slice(1)}-${pattern}${mirror ? "-m" : ""}`;
  return (
    <g transform={mirror ? "scale(-1,1) translate(-200,0)" : undefined}>
      <defs>
        <linearGradient id={`silk-${id}`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor={palette.base} />
          <stop offset="0.5" stopColor={palette.base} stopOpacity="0.82" />
          <stop offset="1" stopColor={palette.base} />
        </linearGradient>
        <pattern id={`chk-${id}`} width="26" height="26" patternUnits="userSpaceOnUse">
          <rect width="26" height="26" fill={palette.base} />
          <path d="M0 0H26" stroke={palette.accent} strokeWidth="5" opacity="0.65" />
          <path d="M0 0V26" stroke={palette.accent} strokeWidth="5" opacity="0.65" />
        </pattern>
        <pattern id={`brk-${id}`} width="22" height="22" patternUnits="userSpaceOnUse">
          <rect width="22" height="22" fill={palette.base} />
          <circle cx="11" cy="11" r="3.2" fill={palette.zari} opacity="0.9" />
          <circle cx="0" cy="0" r="2" fill={palette.accent} opacity="0.7" />
          <circle cx="22" cy="22" r="2" fill={palette.accent} opacity="0.7" />
        </pattern>
        <pattern id={`str-${id}`} width="18" height="18" patternUnits="userSpaceOnUse">
          <rect width="18" height="18" fill={palette.base} />
          <path d="M6 0V18" stroke={palette.zari} strokeWidth="2.4" opacity="0.85" />
          <path d="M13 0V18" stroke={palette.accent} strokeWidth="1.4" opacity="0.6" />
        </pattern>
      </defs>
      {(() => {
        const fill =
          pattern === "checked" ? `url(#chk-${id})` :
          pattern === "brocade" ? `url(#brk-${id})` :
          pattern === "stripe" ? `url(#str-${id})` :
          `url(#silk-${id})`;
        return (
          <>
            {/* main drape */}
            <path d="M48 36 C40 120 36 190 44 252 L156 252 C166 190 162 120 152 36 Z" fill={fill} />
            {/* folds */}
            {[68, 92, 116, 140].map((x, i) => (
              <path key={x} d={`M${x} 40 C${x - 5} 120 ${x - 7} 190 ${x - 2} 248`} stroke={palette.accent} strokeOpacity={0.28 + (i % 2) * 0.1} strokeWidth="7" fill="none" />
            ))}
            {/* zari border */}
            <rect x="42" y="226" width="118" height="14" fill={palette.zari} />
            <rect x="42" y="242" width="118" height="6" fill={palette.accent} opacity="0.8" />
            {pattern === "temple" && (
              <g fill={palette.accent}>
                {[52, 72, 92, 112, 132].map((x) => (
                  <path key={x} d={`M${x} 226 l8 -12 l8 12 Z`} />
                ))}
              </g>
            )}
          </>
        );
      })()}
    </g>
  );
}

export function SareeArt({ product, hanger = true, mirror = false, className }: { product: Product; hanger?: boolean; mirror?: boolean; className?: string }) {
  const { palette, pattern } = product;
  return (
    <svg viewBox="0 0 200 260" className={className} role="img" aria-label={product.name}>
      {hanger && (
        <g>
          <path d="M100 6 a7 7 0 1 1 0.1 0 M100 6 v10" fill="none" stroke="#8d6b4a" strokeWidth="4" />
          <path d="M100 16 L44 42 H156 Z" fill="#a97c50" />
          <path d="M100 16 L44 42 H156 Z" fill="none" stroke="#7d5a38" strokeWidth="2" />
        </g>
      )}
      <Folds palette={palette} pattern={pattern} mirror={mirror} />
    </svg>
  );
}

// Tall "studio" card used for looks / bridal: drape in front of a soft stage.
export function StudioArt({ product, title, className }: { product: Product; title?: string; className?: string }) {
  const { palette } = product;
  return (
    <svg viewBox="0 0 200 300" className={className} role="img" aria-label={title || product.name}>
      <defs>
        <linearGradient id={`stage-${product.code}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={palette.base} stopOpacity="0.14" />
          <stop offset="1" stopColor={palette.base} stopOpacity="0.03" />
        </linearGradient>
      </defs>
      <rect width="200" height="300" fill={`url(#stage-${product.code})`} />
      <ellipse cx="100" cy="282" rx="64" ry="10" fill={palette.base} opacity="0.18" />
      {/* figure: neutral mannequin silhouette draped in the silk */}
      <circle cx="100" cy="48" r="16" fill="#caa184" />
      <path d="M100 64 C84 70 76 86 76 108 L76 180 C76 224 84 262 92 278 L108 278 C116 262 124 224 124 180 L124 108 C124 86 116 70 100 64 Z" fill={palette.base} />
      <path d="M78 92 C110 120 120 170 96 276" stroke={palette.zari} strokeWidth="7" fill="none" opacity="0.9" />
      <path d="M124 110 L124 180 C124 214 120 246 114 270" stroke={palette.accent} strokeWidth="5" fill="none" opacity="0.5" />
      <rect x="78" y="258" width="46" height="12" rx="3" fill={palette.zari} />
    </svg>
  );
}
