import type { Metadata } from "next";
import { getService } from "@/data/services";
import ServicePageComponent from "@/components/ServicePage";
import { notFound } from "next/navigation";

const service = getService("entretien-pelouse")!;

export const metadata: Metadata = {
  title: `Entretien Pelouse | Services Jardinier Rabat - El Gardinero`,
  description: service.description,
  keywords: ["entretien pelouse rabat", "tonte gazon rabat", "entretien gazon rabat", "desherbage rabat", "jardinier rabat"],
  alternates: { canonical: `https://elgardinero.ma/services/entretien-pelouse` },
  openGraph: {
    title: `Entretien Pelouse | El Gardinero`,
    description: service.description,
    url: `https://elgardinero.ma/services/entretien-pelouse`,
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Entretien de pelouse a Rabat - El Gardinero" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Entretien Pelouse a Rabat | El Gardinero",
    description: service.description,
    images: ["/og-image.jpg"],
  },
};

export default function Page() {
  if (!service) notFound();
  return <ServicePageComponent service={service} />;
}
