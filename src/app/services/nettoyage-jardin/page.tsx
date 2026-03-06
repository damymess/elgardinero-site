import type { Metadata } from "next";
import { getService } from "@/data/services";
import ServicePageComponent from "@/components/ServicePage";
import { notFound } from "next/navigation";

const service = getService("nettoyage-jardin")!;

export const metadata: Metadata = {
  title: `Grand Nettoyage | Services Jardinier Rabat - El Gardinero`,
  description: service.description,
  alternates: { canonical: `https://elgardinero.ma/services/nettoyage-jardin` },
  openGraph: {
    title: `Grand Nettoyage | El Gardinero`,
    description: service.description,
    url: `https://elgardinero.ma/services/nettoyage-jardin`,
  },
};

export default function Page() {
  if (!service) notFound();
  return <ServicePageComponent service={service} />;
}
