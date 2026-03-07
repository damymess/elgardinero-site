import type { Metadata } from "next";
import { getService } from "@/data/services";
import ServicePageComponent from "@/components/ServicePage";
import { notFound } from "next/navigation";

const service = getService("elagage-palmiers")!;

export const metadata: Metadata = {
  title: `Elagage Palmiers | Services Jardinier Rabat - El Gardinero`,
  description: service.description,
  keywords: ["elagage palmier rabat", "taille palmier rabat", "entretien palmier maroc", "elagage washingtonia rabat", "jardinier palmier rabat"],
  alternates: { canonical: `https://elgardinero.ma/services/elagage-palmiers` },
  openGraph: {
    title: `Elagage Palmiers | El Gardinero`,
    description: service.description,
    url: `https://elgardinero.ma/services/elagage-palmiers`,
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Elagage de palmiers a Rabat - El Gardinero" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Elagage Palmiers a Rabat | El Gardinero",
    description: service.description,
    images: ["/og-image.jpg"],
  },
};

export default function Page() {
  if (!service) notFound();
  return <ServicePageComponent service={service} />;
}
