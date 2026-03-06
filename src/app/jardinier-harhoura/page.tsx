import type { Metadata } from "next";
import { getLocation } from "@/data/locations";
import LocationPageComponent from "@/components/LocationPage";
import { notFound } from "next/navigation";

const loc = getLocation("harhoura")!;

export const metadata: Metadata = {
  title: `Jardinier Harhoura | Entretien de Jardins - El Gardinero`,
  description: loc.description,
  alternates: { canonical: `https://elgardinero.ma/jardinier-harhoura` },
  openGraph: {
    title: `Jardinier Harhoura | El Gardinero`,
    description: loc.description,
    url: `https://elgardinero.ma/jardinier-harhoura`,
  },
};

export default function Page() {
  if (!loc) notFound();
  return <LocationPageComponent loc={loc} />;
}
