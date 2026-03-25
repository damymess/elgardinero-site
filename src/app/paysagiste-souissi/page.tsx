import type { Metadata } from "next";
import { getPaysagisteLocation } from "@/data/paysagiste-locations";
import PaysagistePage from "@/components/PaysagistePage";
import { notFound } from "next/navigation";

const loc = getPaysagisteLocation("souissi")!;

export const metadata: Metadata = {
  title: "Paysagiste Souissi | Amenagement Paysager - El Gardinero",
  description: loc.description,
  keywords: ["paysagiste souissi", "amenagement paysager souissi", "jardinier paysagiste souissi", "conception jardin souissi", "paysagiste rabat"],
  alternates: { canonical: "https://elgardinero.ma/paysagiste-souissi" },
  openGraph: {
    title: "Paysagiste Souissi | El Gardinero",
    description: loc.description,
    url: "https://elgardinero.ma/paysagiste-souissi",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Paysagiste a Souissi, Rabat - El Gardinero" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Paysagiste Souissi | El Gardinero",
    description: loc.description,
    images: ["/og-image.jpg"],
  },
};

export default function Page() {
  if (!loc) notFound();
  return <PaysagistePage loc={loc} />;
}
