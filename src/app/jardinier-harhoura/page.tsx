import type { Metadata } from "next";
import { getLocation } from "@/data/locations";
import LocationPageComponent from "@/components/LocationPage";
import { notFound } from "next/navigation";

const loc = getLocation("harhoura")!;

export const metadata: Metadata = {
  title: `Jardinier Harhoura | Entretien de Jardins - El Gardinero`,
  description: loc.description,
  keywords: ["jardinier harhoura", "entretien jardin harhoura", "jardinage plage des nations", "paysagiste harhoura", "jardinier temara harhoura"],
  alternates: { canonical: `https://elgardinero.ma/jardinier-harhoura` },
  openGraph: {
    title: `Jardinier Harhoura | El Gardinero`,
    description: loc.description,
    url: `https://elgardinero.ma/jardinier-harhoura`,
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Jardinier a Harhoura - El Gardinero" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jardinier Harhoura | El Gardinero",
    description: loc.description,
    images: ["/og-image.jpg"],
  },
};

export default function Page() {
  if (!loc) notFound();
  return <LocationPageComponent loc={loc} />;
}
