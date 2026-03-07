import type { Metadata } from "next";
import { getLocation } from "@/data/locations";
import LocationPageComponent from "@/components/LocationPage";
import { notFound } from "next/navigation";

const loc = getLocation("souissi")!;

export const metadata: Metadata = {
  title: `Jardinier Souissi | Entretien de Jardins - El Gardinero`,
  description: loc.description,
  keywords: ["jardinier souissi", "entretien jardin souissi", "elagage souissi rabat", "paysagiste souissi", "jardinier rabat"],
  alternates: { canonical: `https://elgardinero.ma/jardinier-souissi` },
  openGraph: {
    title: `Jardinier Souissi | El Gardinero`,
    description: loc.description,
    url: `https://elgardinero.ma/jardinier-souissi`,
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Jardinier a Souissi, Rabat - El Gardinero" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jardinier Souissi | El Gardinero",
    description: loc.description,
    images: ["/og-image.jpg"],
  },
};

export default function Page() {
  if (!loc) notFound();
  return <LocationPageComponent loc={loc} />;
}
