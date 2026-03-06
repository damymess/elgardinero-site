import type { Metadata } from "next";
import { getService } from "@/data/services";
import ServicePageComponent from "@/components/ServicePage";
import { notFound } from "next/navigation";

const service = getService("amenagement-jardin")!;

export const metadata: Metadata = {
  title: `Amenagement Jardin | Services Jardinier Rabat - El Gardinero`,
  description: service.description,
  alternates: { canonical: `https://elgardinero.ma/services/amenagement-jardin` },
  openGraph: {
    title: `Amenagement Jardin | El Gardinero`,
    description: service.description,
    url: `https://elgardinero.ma/services/amenagement-jardin`,
  },
};

export default function Page() {
  if (!service) notFound();
  return <ServicePageComponent service={service} />;
}
