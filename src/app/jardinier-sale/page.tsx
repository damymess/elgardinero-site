import type { Metadata } from "next";
import { getLocation } from "@/data/locations";
import LocationPageComponent from "@/components/LocationPage";
import { notFound } from "next/navigation";

const loc = getLocation("sale")!;

export const metadata: Metadata = {
  title: `Jardinier Sale | Entretien de Jardins - El Gardinero`,
  description: loc.description,
  alternates: { canonical: `https://elgardinero.ma/jardinier-sale` },
  openGraph: {
    title: `Jardinier Sale | El Gardinero`,
    description: loc.description,
    url: `https://elgardinero.ma/jardinier-sale`,
  },
};

export default function Page() {
  if (!loc) notFound();
  return <LocationPageComponent loc={loc} />;
}
