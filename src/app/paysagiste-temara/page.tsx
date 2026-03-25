import type { Metadata } from "next";
import { getPaysagisteLocation } from "@/data/paysagiste-locations";
import PaysagistePage from "@/components/PaysagistePage";
import { notFound } from "next/navigation";

const loc = getPaysagisteLocation("temara")!;

export const metadata: Metadata = {
  title: "Paysagiste Temara | Amenagement Paysager - El Gardinero",
  description: loc.description,
  keywords: ["paysagiste temara", "amenagement paysager temara", "jardinier paysagiste temara", "creation jardin temara", "paysagiste rabat"],
  alternates: { canonical: "https://elgardinero.ma/paysagiste-temara" },
  openGraph: {
    title: "Paysagiste Temara | El Gardinero",
    description: loc.description,
    url: "https://elgardinero.ma/paysagiste-temara",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Paysagiste a Temara - El Gardinero" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Paysagiste Temara | El Gardinero",
    description: loc.description,
    images: ["/og-image.jpg"],
  },
};

export default function Page() {
  if (!loc) notFound();
  return <PaysagistePage loc={loc} />;
}
