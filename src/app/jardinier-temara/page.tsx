import type { Metadata } from "next";
import { getLocation } from "@/data/locations";
import LocationPageComponent from "@/components/LocationPage";
import { notFound } from "next/navigation";

const loc = getLocation("temara")!;

export const metadata: Metadata = {
  title: `Jardinier Temara | Entretien de Jardins - El Gardinero`,
  description: loc.description,
  alternates: { canonical: `https://elgardinero.ma/jardinier-temara` },
  openGraph: {
    title: `Jardinier Temara | El Gardinero`,
    description: loc.description,
    url: `https://elgardinero.ma/jardinier-temara`,
  },
};

export default function Page() {
  if (!loc) notFound();
  return <LocationPageComponent loc={loc} />;
}
