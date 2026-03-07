import type { Metadata } from "next";
import { getLocation } from "@/data/locations";
import LocationPageComponent from "@/components/LocationPage";
import { notFound } from "next/navigation";

const loc = getLocation("temara")!;

export const metadata: Metadata = {
  title: `Jardinier Temara | Entretien de Jardins - El Gardinero`,
  description: loc.description,
  keywords: ["jardinier temara", "entretien jardin temara", "taille haie temara", "paysagiste temara", "jardinier rabat temara"],
  alternates: { canonical: `https://elgardinero.ma/jardinier-temara` },
  openGraph: {
    title: `Jardinier Temara | El Gardinero`,
    description: loc.description,
    url: `https://elgardinero.ma/jardinier-temara`,
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Jardinier a Temara - El Gardinero" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jardinier Temara | El Gardinero",
    description: loc.description,
    images: ["/og-image.jpg"],
  },
};

export default function Page() {
  if (!loc) notFound();
  return <LocationPageComponent loc={loc} />;
}
