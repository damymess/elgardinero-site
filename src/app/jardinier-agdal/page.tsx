import type { Metadata } from "next";
import { getLocation } from "@/data/locations";
import LocationPageComponent from "@/components/LocationPage";
import { notFound } from "next/navigation";

const loc = getLocation("agdal")!;

export const metadata: Metadata = {
  title: `Jardinier Agdal | Entretien de Jardins - El Gardinero`,
  description: loc.description,
  alternates: { canonical: `https://elgardinero.ma/jardinier-agdal` },
  openGraph: {
    title: `Jardinier Agdal | El Gardinero`,
    description: loc.description,
    url: `https://elgardinero.ma/jardinier-agdal`,
  },
};

export default function Page() {
  if (!loc) notFound();
  return <LocationPageComponent loc={loc} />;
}
