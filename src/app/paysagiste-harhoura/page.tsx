import type { Metadata } from "next";
import { getPaysagisteLocation } from "@/data/paysagiste-locations";
import PaysagistePage from "@/components/PaysagistePage";
import { notFound } from "next/navigation";

const loc = getPaysagisteLocation("harhoura")!;

export const metadata: Metadata = {
  title: "Paysagiste Harhoura | Amenagement Paysager - El Gardinero",
  description: loc.description,
  keywords: ["paysagiste harhoura", "amenagement paysager harhoura", "jardinier paysagiste harhoura", "jardin bord de mer harhoura", "paysagiste rabat"],
  alternates: { canonical: "https://elgardinero.ma/paysagiste-harhoura" },
  openGraph: {
    title: "Paysagiste Harhoura | El Gardinero",
    description: loc.description,
    url: "https://elgardinero.ma/paysagiste-harhoura",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Paysagiste a Harhoura - El Gardinero" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Paysagiste Harhoura | El Gardinero",
    description: loc.description,
    images: ["/og-image.jpg"],
  },
};

export default function Page() {
  if (!loc) notFound();
  return <PaysagistePage loc={loc} />;
}
