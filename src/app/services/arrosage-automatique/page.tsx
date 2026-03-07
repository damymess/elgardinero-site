import type { Metadata } from "next";
import { getService } from "@/data/services";
import ServicePageComponent from "@/components/ServicePage";
import { notFound } from "next/navigation";

const service = getService("arrosage-automatique")!;

export const metadata: Metadata = {
  title: `Arrosage Automatique | Services Jardinier Rabat - El Gardinero`,
  description: service.description,
  keywords: ["arrosage automatique rabat", "installation irrigation rabat", "systeme arrosage jardin maroc", "goutte a goutte rabat", "jardinier arrosage rabat"],
  alternates: { canonical: `https://elgardinero.ma/services/arrosage-automatique` },
  openGraph: {
    title: `Arrosage Automatique | El Gardinero`,
    description: service.description,
    url: `https://elgardinero.ma/services/arrosage-automatique`,
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Installation arrosage automatique a Rabat - El Gardinero" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arrosage Automatique a Rabat | El Gardinero",
    description: service.description,
    images: ["/og-image.jpg"],
  },
};

export default function Page() {
  if (!service) notFound();
  return <ServicePageComponent service={service} />;
}
