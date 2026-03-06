import type { Metadata } from "next";
import { getLocation } from "@/data/locations";
import LocationPageComponent from "@/components/LocationPage";
import { notFound } from "next/navigation";

const loc = getLocation("hay-riad")!;

export const metadata: Metadata = {
  title: `Jardinier Hay Riad | Entretien de Jardins - El Gardinero`,
  description: loc.description,
  alternates: { canonical: `https://elgardinero.ma/jardinier-hay-riad` },
  openGraph: {
    title: `Jardinier Hay Riad | El Gardinero`,
    description: loc.description,
    url: `https://elgardinero.ma/jardinier-hay-riad`,
  },
};

export default function Page() {
  if (!loc) notFound();
  return <LocationPageComponent loc={loc} />;
}
