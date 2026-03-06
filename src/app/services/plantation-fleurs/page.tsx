import type { Metadata } from "next";
import { getService } from "@/data/services";
import ServicePageComponent from "@/components/ServicePage";
import { notFound } from "next/navigation";

const service = getService("plantation-fleurs")!;

export const metadata: Metadata = {
  title: `Plantation & Massifs | Services Jardinier Rabat - El Gardinero`,
  description: service.description,
  alternates: { canonical: `https://elgardinero.ma/services/plantation-fleurs` },
  openGraph: {
    title: `Plantation & Massifs | El Gardinero`,
    description: service.description,
    url: `https://elgardinero.ma/services/plantation-fleurs`,
  },
};

export default function Page() {
  if (!service) notFound();
  return <ServicePageComponent service={service} />;
}
