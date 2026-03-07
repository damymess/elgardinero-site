import type { Metadata } from "next";
import { getService } from "@/data/services";
import ServicePageComponent from "@/components/ServicePage";
import { notFound } from "next/navigation";

const service = getService("taille-elagage")!;

export const metadata: Metadata = {
  title: `Taille & Elagage | Services Jardinier Rabat - El Gardinero`,
  description: service.description,
  keywords: ["taille haie rabat", "elagage rabat", "elagage olivier rabat", "taille arbres rabat", "jardinier rabat"],
  alternates: { canonical: `https://elgardinero.ma/services/taille-elagage` },
  openGraph: {
    title: `Taille & Elagage | El Gardinero`,
    description: service.description,
    url: `https://elgardinero.ma/services/taille-elagage`,
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Taille et elagage de jardins a Rabat - El Gardinero" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Taille & Elagage a Rabat | El Gardinero",
    description: service.description,
    images: ["/og-image.jpg"],
  },
};

export default function Page() {
  if (!service) notFound();
  return <ServicePageComponent service={service} />;
}
