import type { Metadata } from "next";
import { getLocation } from "@/data/locations";
import LocationPageComponent from "@/components/LocationPage";
import { notFound } from "next/navigation";

const loc = getLocation("sale")!;

export const metadata: Metadata = {
  title: `Jardinier Sale | Entretien de Jardins - El Gardinero`,
  description: loc.description,
  keywords: ["jardinier sale", "entretien jardin sale", "jardinage sale maroc", "tonte pelouse sale", "jardinier rabat sale"],
  alternates: { canonical: `https://elgardinero.ma/jardinier-sale` },
  openGraph: {
    title: `Jardinier Sale | El Gardinero`,
    description: loc.description,
    url: `https://elgardinero.ma/jardinier-sale`,
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Jardinier a Sale - El Gardinero" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jardinier Sale | El Gardinero",
    description: loc.description,
    images: ["/og-image.jpg"],
  },
};

export default function Page() {
  if (!loc) notFound();
  return <LocationPageComponent loc={loc} />;
}
