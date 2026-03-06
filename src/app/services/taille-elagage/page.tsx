import type { Metadata } from "next";
import { getService } from "@/data/services";
import ServicePageComponent from "@/components/ServicePage";
import { notFound } from "next/navigation";

const service = getService("taille-elagage")!;

export const metadata: Metadata = {
  title: `Taille & Elagage | Services Jardinier Rabat - El Gardinero`,
  description: service.description,
  alternates: { canonical: `https://elgardinero.ma/services/taille-elagage` },
  openGraph: {
    title: `Taille & Elagage | El Gardinero`,
    description: service.description,
    url: `https://elgardinero.ma/services/taille-elagage`,
  },
};

export default function Page() {
  if (!service) notFound();
  return <ServicePageComponent service={service} />;
}
