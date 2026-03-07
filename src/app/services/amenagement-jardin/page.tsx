import type { Metadata } from "next";
import { getService } from "@/data/services";
import ServicePageComponent from "@/components/ServicePage";
import { notFound } from "next/navigation";

const service = getService("amenagement-jardin")!;

export const metadata: Metadata = {
  title: `Amenagement Jardin | Services Jardinier Rabat - El Gardinero`,
  description: service.description,
  keywords: ["amenagement jardin rabat", "paysagiste rabat", "creation jardin rabat", "amenagement paysager rabat", "jardinier rabat"],
  alternates: { canonical: `https://elgardinero.ma/services/amenagement-jardin` },
  openGraph: {
    title: `Amenagement Jardin | El Gardinero`,
    description: service.description,
    url: `https://elgardinero.ma/services/amenagement-jardin`,
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Amenagement de jardins a Rabat - El Gardinero" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Amenagement Jardin a Rabat | El Gardinero",
    description: service.description,
    images: ["/og-image.jpg"],
  },
};

export default function Page() {
  if (!service) notFound();
  return <ServicePageComponent service={service} />;
}
