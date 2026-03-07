import type { Metadata } from "next";
import { getLocation } from "@/data/locations";
import LocationPageComponent from "@/components/LocationPage";
import { notFound } from "next/navigation";

const loc = getLocation("agdal")!;

export const metadata: Metadata = {
  title: `Jardinier Agdal | Entretien de Jardins - El Gardinero`,
  description: loc.description,
  keywords: ["jardinier agdal", "entretien jardin agdal", "jardinage agdal rabat", "taille haie agdal", "jardinier rabat"],
  alternates: { canonical: `https://elgardinero.ma/jardinier-agdal` },
  openGraph: {
    title: `Jardinier Agdal | El Gardinero`,
    description: loc.description,
    url: `https://elgardinero.ma/jardinier-agdal`,
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Jardinier a Agdal, Rabat - El Gardinero" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jardinier Agdal | El Gardinero",
    description: loc.description,
    images: ["/og-image.jpg"],
  },
};

export default function Page() {
  if (!loc) notFound();
  return <LocationPageComponent loc={loc} />;
}
