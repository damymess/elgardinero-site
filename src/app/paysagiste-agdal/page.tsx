import type { Metadata } from "next";
import { getPaysagisteLocation } from "@/data/paysagiste-locations";
import PaysagistePage from "@/components/PaysagistePage";
import { notFound } from "next/navigation";

const loc = getPaysagisteLocation("agdal")!;

export const metadata: Metadata = {
  title: "Paysagiste Agdal | Amenagement Paysager - El Gardinero",
  description: loc.description,
  keywords: ["paysagiste agdal", "amenagement paysager agdal", "jardinier paysagiste agdal", "terrasse vegetalisee agdal", "paysagiste rabat"],
  alternates: { canonical: "https://elgardinero.ma/paysagiste-agdal" },
  openGraph: {
    title: "Paysagiste Agdal | El Gardinero",
    description: loc.description,
    url: "https://elgardinero.ma/paysagiste-agdal",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Paysagiste a Agdal, Rabat - El Gardinero" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Paysagiste Agdal | El Gardinero",
    description: loc.description,
    images: ["/og-image.jpg"],
  },
};

export default function Page() {
  if (!loc) notFound();
  return <PaysagistePage loc={loc} />;
}
