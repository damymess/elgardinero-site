import type { Metadata } from "next";
import { getLocation } from "@/data/locations";
import LocationPageComponent from "@/components/LocationPage";
import { notFound } from "next/navigation";

const loc = getLocation("hay-riad")!;

export const metadata: Metadata = {
  title: `Jardinier Hay Riad | Entretien de Jardins - El Gardinero`,
  description: loc.description,
  keywords: ["jardinier hay riad", "paysagiste hay riad", "entretien jardin hay riad", "jardinage hay riad rabat", "tonte pelouse hay riad", "jardinier rabat"],
  alternates: { canonical: `https://elgardinero.ma/jardinier-hay-riad` },
  openGraph: {
    title: `Jardinier Hay Riad | El Gardinero`,
    description: loc.description,
    url: `https://elgardinero.ma/jardinier-hay-riad`,
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Jardinier a Hay Riad, Rabat - El Gardinero" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jardinier Hay Riad | El Gardinero",
    description: loc.description,
    images: ["/og-image.jpg"],
  },
};

export default function Page() {
  if (!loc) notFound();
  return <LocationPageComponent loc={loc} />;
}
