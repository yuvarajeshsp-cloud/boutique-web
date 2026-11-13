// Product catalogue stub. In production this comes from Supabase
// (CMS pattern HUB-WEB-01/03); the shapes here mirror that schema so the
// swap is a data-layer change only. Imagery is generated placeholder art
// (see SareeArt) until real/AI studio photos are added.

export type Category =
  | "Silk Sarees"
  | "Half Sarees"
  | "Blouses"
  | "Checked Sarees"
  | "Zari & Brocade";

export type Product = {
  code: string;
  name: string;
  category: Category;
  price: number;
  fabric: string;
  palette: { base: string; accent: string; zari: string };
  pattern: "plain" | "checked" | "brocade" | "temple" | "stripe";
  bridal?: boolean;
  note?: string;
};

export const products: Product[] = [
  { code: "TH-0001", name: "Kanchi Rani", category: "Silk Sarees", price: 24500, fabric: "Pure Kanjivaram silk · silver-core zari", palette: { base: "#7a1626", accent: "#f2b33d", zari: "#e8c87a" }, pattern: "temple", bridal: true, note: "Temple border, peacock pallu" },
  { code: "TH-0002", name: "Palace Check", category: "Checked Sarees", price: 18900, fabric: "Kanjivaram silk · palum-pazhamum checks", palette: { base: "#b3812f", accent: "#7a1626", zari: "#f0d290" }, pattern: "checked" },
  { code: "TH-0003", name: "Bengal Garden", category: "Silk Sarees", price: 21800, fabric: "Banarasi silk · floral jaal", palette: { base: "#14494a", accent: "#e3b74e", zari: "#efd9a0" }, pattern: "brocade" },
  { code: "TH-0004", name: "Temple Gold Brocade", category: "Zari & Brocade", price: 32000, fabric: "Pure zari brocade · muhurtham weight", palette: { base: "#c9a24b", accent: "#8a5a18", zari: "#f5e3af" }, pattern: "brocade", bridal: true, note: "Full-body gold brocade" },
  { code: "TH-0005", name: "Ivory Elephant", category: "Silk Sarees", price: 19600, fabric: "Kanjivaram silk · yaanai border", palette: { base: "#f4ead6", accent: "#7a1626", zari: "#cfa24e" }, pattern: "temple" },
  { code: "TH-0006", name: "Indigo Court", category: "Silk Sarees", price: 23400, fabric: "Kanjivaram silk · korvai border", palette: { base: "#283593", accent: "#d9a738", zari: "#ecd08e" }, pattern: "stripe" },
  { code: "TH-0007", name: "Madras Rose", category: "Checked Sarees", price: 15200, fabric: "Silk cotton · kattam checks", palette: { base: "#c2426f", accent: "#2d7a4f", zari: "#e9c97d" }, pattern: "checked" },
  { code: "TH-0008", name: "Vermilion Vow", category: "Silk Sarees", price: 28900, fabric: "Kanjivaram silk · arakku red", palette: { base: "#9c1320", accent: "#f0c04a", zari: "#f3dc9e" }, pattern: "temple", bridal: true, note: "Arakku red, muhurtham pallu" },
  { code: "TH-0009", name: "Paalum Pazhamum", category: "Half Sarees", price: 12800, fabric: "Half saree set · silk cotton", palette: { base: "#f1e3c8", accent: "#b23a48", zari: "#d8b05e" }, pattern: "checked" },
  { code: "TH-0010", name: "Mayil Green Blouse", category: "Blouses", price: 3200, fabric: "Raw silk · elbow sleeve", palette: { base: "#1d6b50", accent: "#e3b74e", zari: "#efd9a0" }, pattern: "plain" },
  { code: "TH-0011", name: "Zari Lattice Blouse", category: "Blouses", price: 4100, fabric: "Brocade · full sleeve", palette: { base: "#7a1626", accent: "#c9a24b", zari: "#f0d290" }, pattern: "brocade" },
  { code: "TH-0012", name: "Kumkum Stripe", category: "Zari & Brocade", price: 26700, fabric: "Banarasi · vertical zari stripes", palette: { base: "#5e1016", accent: "#e8c87a", zari: "#f5e3af" }, pattern: "stripe", bridal: true },
];

export const categories: Category[] = ["Silk Sarees", "Half Sarees", "Blouses", "Checked Sarees", "Zari & Brocade"];

export const moods = [
  { name: "Wedding Edit", palette: { base: "#9c1320", accent: "#f0c04a", zari: "#f3dc9e" } },
  { name: "Kanchipuram Icons", palette: { base: "#7a1626", accent: "#e8c87a", zari: "#f0d290" } },
  { name: "Banarasi Heirlooms", palette: { base: "#14494a", accent: "#e3b74e", zari: "#efd9a0" } },
  { name: "Festive Checks", palette: { base: "#b3812f", accent: "#7a1626", zari: "#f0d290" } },
  { name: "Office Drapes", palette: { base: "#283593", accent: "#d9a738", zari: "#ecd08e" } },
  { name: "Everyday Silks", palette: { base: "#c2426f", accent: "#2d7a4f", zari: "#e9c97d" } },
] as const;

export type Look = {
  id: string;
  name: string;
  saree: string; // product code
  items: { name: string; kind: string; price: number }[];
};

export const looks: Look[] = [
  { id: "look-1", name: "Kanchi Rani", saree: "TH-0001", items: [{ name: "Zari Lattice Blouse", kind: "Blouse", price: 4100 }, { name: "Temple Choker", kind: "Choker", price: 5400 }, { name: "Peacock Jhumkas", kind: "Jhumkas", price: 2600 }, { name: "Ottiyanam", kind: "Waist belt", price: 7800 }, { name: "Gold Glass Bangles", kind: "Bangles", price: 1200 }] },
  { id: "look-2", name: "Ivory Elephant", saree: "TH-0005", items: [{ name: "Mayil Green Blouse", kind: "Blouse", price: 3200 }, { name: "Pearl Choker", kind: "Choker", price: 4200 }, { name: "Kemp Jhumkas", kind: "Jhumkas", price: 2100 }, { name: "Gold Glass Bangles", kind: "Bangles", price: 1200 }] },
  { id: "look-3", name: "Bengal Garden", saree: "TH-0003", items: [{ name: "Zari Lattice Blouse", kind: "Blouse", price: 4100 }, { name: "Emerald Choker", kind: "Choker", price: 6100 }, { name: "Chandbali Jhumkas", kind: "Jhumkas", price: 2900 }] },
  { id: "look-4", name: "Vermilion Vow", saree: "TH-0008", items: [{ name: "Kumkum Blouse", kind: "Blouse", price: 3800 }, { name: "Temple Choker", kind: "Choker", price: 5400 }, { name: "Ottiyanam", kind: "Waist belt", price: 7800 }, { name: "Kemp Jhumkas", kind: "Jhumkas", price: 2100 }] },
  { id: "look-5", name: "Indigo Court", saree: "TH-0006", items: [{ name: "Gold Raw-Silk Blouse", kind: "Blouse", price: 3500 }, { name: "Pearl Choker", kind: "Choker", price: 4200 }, { name: "Gold Glass Bangles", kind: "Bangles", price: 1200 }] },
  { id: "look-6", name: "Palace Check", saree: "TH-0002", items: [{ name: "Maroon Raw-Silk Blouse", kind: "Blouse", price: 3300 }, { name: "Kemp Jhumkas", kind: "Jhumkas", price: 2100 }, { name: "Ottiyanam", kind: "Waist belt", price: 7800 }] },
];

export const reels = [
  { id: 1, title: "Morning at the Loom", location: "Kanchipuram", fabric: "Pure zari", duration: "0:42" },
  { id: 2, title: "Temple Steps", location: "Madurai", fabric: "Arakku silk", duration: "0:38" },
  { id: 3, title: "The Muhurtham Drape", location: "Chettinad", fabric: "Brocade", duration: "0:55" },
  { id: 4, title: "Monsoon Checks", location: "Mylapore", fabric: "Silk cotton", duration: "0:31" },
  { id: 5, title: "Evening Aarati", location: "Thanjavur", fabric: "Banarasi", duration: "0:47" },
];

export const inr = (n: number) =>
  "₹" + n.toLocaleString("en-IN", { maximumFractionDigits: 0 });

export const byCode = (code: string) => products.find((p) => p.code === code)!;
