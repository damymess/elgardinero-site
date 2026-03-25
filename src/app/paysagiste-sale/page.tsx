import type { Metadata } from "next";
import { getPaysagisteLocation } from "@/data/paysagiste-locations";
import PaysagistePage from "@/components/PaysagistePage";
import { notFound } from "next/navigation";

const loc = getPaysagisteLocation("sale")!;

export const metadata: Metadata = {
  title: "Paysagiste Sale | Amenagement Paysager - El Gardinero",
  description: loc.description,
  keywords: ["paysagiste sale", "amenagement paysager sale", "jardinier paysagiste sale", "creation jardin sale", "paysagiste rabat"],
  alternates: { canonical: "https://elgardinero.ma/paysagiste-sale" },
  openGraph: {
    title: "Paysagiste Sale | El Gardinero",
    description: loc.description,
    url: "https://elgardinero.ma/paysagiste-sale",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Paysagiste a Sale - El Gardinero" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Paysagiste Sale | El Gardinero",
    description: loc.description,
    images: ["/og-image.jpg"],
  },
};

export default function Page() {
  if (!loc) notFound();
  return <PaysagistePage loc={loc} />;
}
