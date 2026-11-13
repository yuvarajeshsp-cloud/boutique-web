import type { Metadata } from "next";
import { Manrope, Marcellus } from "next/font/google";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });
const marcellus = Marcellus({ weight: "400", subsets: ["latin"], variable: "--font-marcellus" });

export const metadata: Metadata = {
  title: "THARI · Kanchipuram Silk",
  description:
    "THARI brings the temple looms of Kanchipuram home: Kanjivaram silk in heritage colours, bordered in real zari and finished by hand.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${marcellus.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
