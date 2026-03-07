import type { Metadata } from "next";
import { getService } from "@/data/services";
import ServicePageComponent from "@/components/ServicePage";
import { notFound } from "next/navigation";

const service = getService("nettoyage-jardin")!;

export const metadata: Metadata = {
  title: `Grand Nettoyage | Services Jardinier Rabat - El Gardinero`,
  description: service.description,
  keywords: ["nettoyage jardin rabat", "debroussaillage rabat", "remise en etat jardin rabat", "dechets verts rabat", "jardinier rabat"],
  alternates: { canonical: `https://elgardinero.ma/services/nettoyage-jardin` },
  openGraph: {
    title: `Grand Nettoyage | El Gardinero`,
    description: service.description,
    url: `https://elgardinero.ma/services/nettoyage-jardin`,
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Nettoyage de jardins a Rabat - El Gardinero" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nettoyage de Jardin a Rabat | El Gardinero",
    description: service.description,
    images: ["/og-image.jpg"],
  },
};

export default function Page() {
  if (!service) notFound();
  return <ServicePageComponent service={service} />;
}
