import type { Metadata } from "next";
import { getPaysagisteLocation } from "@/data/paysagiste-locations";
import PaysagistePage from "@/components/PaysagistePage";
import { notFound } from "next/navigation";

const loc = getPaysagisteLocation("hay-riad")!;

export const metadata: Metadata = {
  title: "Paysagiste Hay Riad | Amenagement Paysager - El Gardinero",
  description: loc.description,
  keywords: ["paysagiste hay riad", "amenagement paysager hay riad", "jardinier paysagiste hay riad", "creation jardin hay riad", "paysagiste rabat"],
  alternates: { canonical: "https://elgardinero.ma/paysagiste-hay-riad" },
  openGraph: {
    title: "Paysagiste Hay Riad | El Gardinero",
    description: loc.description,
    url: "https://elgardinero.ma/paysagiste-hay-riad",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Paysagiste a Hay Riad, Rabat - El Gardinero" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Paysagiste Hay Riad | El Gardinero",
    description: loc.description,
    images: ["/og-image.jpg"],
  },
};

export default function Page() {
  if (!loc) notFound();
  return <PaysagistePage loc={loc} />;
}
