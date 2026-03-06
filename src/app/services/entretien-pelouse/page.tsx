import type { Metadata } from "next";
import { getService } from "@/data/services";
import ServicePageComponent from "@/components/ServicePage";
import { notFound } from "next/navigation";

const service = getService("entretien-pelouse")!;

export const metadata: Metadata = {
  title: `Entretien Pelouse | Services Jardinier Rabat - El Gardinero`,
  description: service.description,
  alternates: { canonical: `https://elgardinero.ma/services/entretien-pelouse` },
  openGraph: {
    title: `Entretien Pelouse | El Gardinero`,
    description: service.description,
    url: `https://elgardinero.ma/services/entretien-pelouse`,
  },
};

export default function Page() {
  if (!service) notFound();
  return <ServicePageComponent service={service} />;
}
