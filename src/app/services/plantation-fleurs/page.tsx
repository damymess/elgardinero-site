import type { Metadata } from "next";
import { getService } from "@/data/services";
import ServicePageComponent from "@/components/ServicePage";
import { notFound } from "next/navigation";

const service = getService("plantation-fleurs")!;

export const metadata: Metadata = {
  title: `Plantation & Massifs | Services Jardinier Rabat - El Gardinero`,
  description: service.description,
  keywords: ["plantation fleurs rabat", "massifs fleuris rabat", "paysagiste rabat", "bougainvillier rabat", "jardinier rabat"],
  alternates: { canonical: `https://elgardinero.ma/services/plantation-fleurs` },
  openGraph: {
    title: `Plantation & Massifs | El Gardinero`,
    description: service.description,
    url: `https://elgardinero.ma/services/plantation-fleurs`,
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Plantation de fleurs et massifs a Rabat - El Gardinero" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Plantation & Massifs a Rabat | El Gardinero",
    description: service.description,
    images: ["/og-image.jpg"],
  },
};

export default function Page() {
  if (!service) notFound();
  return <ServicePageComponent service={service} />;
}
