import type { Metadata } from "next";
import { getPaysagisteLocation } from "@/data/paysagiste-locations";
import PaysagistePage from "@/components/PaysagistePage";
import { notFound } from "next/navigation";

const loc = getPaysagisteLocation("rabat")!;

export const metadata: Metadata = {
  title: "Paysagiste Rabat | Amenagement & Conception Paysagere - El Gardinero",
  description: loc.description,
  keywords: [
    "paysagiste rabat",
    "amenagement paysager rabat",
    "conception paysagere rabat",
    "jardinier paysagiste rabat",
    "architecte paysagiste rabat",
    "prix paysagiste rabat",
    "design jardin rabat",
    "creation jardin rabat",
  ],
  alternates: { canonical: "https://elgardinero.ma/paysagiste-rabat" },
  openGraph: {
    title: "Paysagiste Rabat | El Gardinero",
    description: loc.description,
    url: "https://elgardinero.ma/paysagiste-rabat",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Paysagiste a Rabat - El Gardinero" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Paysagiste Rabat | El Gardinero",
    description: loc.description,
    images: ["/og-image.jpg"],
  },
};

export default function Page() {
  if (!loc) notFound();
  return <PaysagistePage loc={loc} />;
}
