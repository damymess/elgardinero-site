import type { Metadata } from "next";
import { getLocation } from "@/data/locations";
import LocationPageComponent from "@/components/LocationPage";
import { notFound } from "next/navigation";

const loc = getLocation("souissi")!;

export const metadata: Metadata = {
  title: `Jardinier Souissi | Entretien de Jardins - El Gardinero`,
  description: loc.description,
  alternates: { canonical: `https://elgardinero.ma/jardinier-souissi` },
  openGraph: {
    title: `Jardinier Souissi | El Gardinero`,
    description: loc.description,
    url: `https://elgardinero.ma/jardinier-souissi`,
  },
};

export default function Page() {
  if (!loc) notFound();
  return <LocationPageComponent loc={loc} />;
}
