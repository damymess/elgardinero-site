import Image from "next/image";
import Link from "next/link";
import { MessageCircle, Phone, CheckCircle2, ArrowLeft } from "lucide-react";
import { type Service } from "@/data/services";

const GARDENER_NAME = "Youssef";
const PHONE_DISPLAY = "06 49 23 15 45";
const PHONE_LINK = "+212649231545";
const WHATSAPP_NUM = "212649231545";

export default function ServicePage({ service }: { service: Service }) {
  const whatsappMessage = encodeURIComponent(
    `Bonjour ${GARDENER_NAME}, je vous contacte pour le service "${service.name}". Pouvez-vous me faire un devis ?`
  );
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUM}?text=${whatsappMessage}`;

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    provider: {
      "@type": "LocalBusiness",
      name: "El Gardinero",
      telephone: "+212649231545",
      url: "https://elgardinero.ma",
    },
    areaServed: [
      { "@type": "City", name: "Rabat" },
      { "@type": "City", name: "Sale" },
      { "@type": "City", name: "Temara" },
      { "@type": "City", name: "Harhoura" },
    ],
    ...(service.priceRange !== "Sur devis" && {
      offers: {
        "@type": "Offer",
        priceCurrency: "MAD",
        price: service.priceRange,
        availability: "https://schema.org/InStock",
      },
    }),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: "https://elgardinero.ma" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://elgardinero.ma/#services" },
      { "@type": "ListItem", position: 3, name: service.name, item: `https://elgardinero.ma/services/${service.slug}` },
    ],
  };

  return (
    <main className="min-h-screen bg-white text-gray-800 pb-24 md:pb-0">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <section className="bg-emerald-800 text-white pt-12 pb-16 px-4 rounded-b-lg shadow-md">
        <div className="max-w-3xl mx-auto">
          <Link href="/#services" className="inline-flex items-center gap-2 text-emerald-200 hover:text-white mb-8 text-sm transition-colors">
            <ArrowLeft size={16} /> Retour
          </Link>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">{service.name}</h1>
          <p className="text-lg text-emerald-100 mb-4 max-w-2xl">{service.heroText}</p>
          <p className="text-emerald-300 font-semibold text-lg mb-8">Tarif : {service.priceRange}</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebd5a] text-white px-8 py-4 rounded-md font-bold text-lg transition-transform active:scale-95 shadow-md">
              <MessageCircle size={24} /> Demander un devis
            </a>
            <a href={`tel:${PHONE_LINK}`} className="flex items-center justify-center gap-2 bg-white text-emerald-900 hover:bg-gray-50 px-8 py-4 rounded-md font-bold text-lg transition-transform active:scale-95 shadow-md">
              <Phone size={24} /> {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 max-w-3xl mx-auto">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="aspect-video relative">
            <Image src={service.image} alt={service.name} fill className="object-cover" sizes="(max-width: 768px) 100vw, 768px" />
          </div>
          <div className="p-8 md:p-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{service.name} &agrave; Rabat</h2>
            <p className="text-gray-700 leading-relaxed text-lg mb-8">{service.details}</p>

            <h3 className="font-bold text-lg text-gray-900 mb-4">Ce que comprend ce service</h3>
            <div className="space-y-3 mb-8">
              {service.benefits.map((b) => (
                <div key={b} className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-emerald-500 mt-0.5 shrink-0" />
                  <span className="text-gray-700">{b}</span>
                </div>
              ))}
            </div>

            <div className="bg-emerald-50 p-6 rounded-lg">
              <p className="font-bold text-emerald-900 mb-2">Tarif indicatif : {service.priceRange}</p>
              <p className="text-gray-600 text-sm">Le tarif exact d&eacute;pend de la surface, de l&apos;&eacute;tat du jardin et du volume de travail. Contactez-moi pour un devis gratuit et pr&eacute;cis.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="max-w-md mx-auto bg-emerald-800 text-white p-8 rounded-lg text-center shadow-md">
          <h2 className="text-xl font-bold mb-3">Int&eacute;ress&eacute; par ce service ?</h2>
          <p className="text-emerald-100 mb-6">Envoyez une photo pour un devis gratuit en moins d&apos;1 heure !</p>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebd5a] text-white px-6 py-4 rounded-md font-bold transition-transform active:scale-95 w-full">
            <MessageCircle size={24} /> Contacter {GARDENER_NAME}
          </a>
        </div>
      </section>

      <div className="md:hidden fixed bottom-6 left-0 right-0 px-4 z-50">
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-[#25D366] text-white w-full py-4 rounded-md shadow-lg font-bold text-lg border-2 border-white/20">
          <MessageCircle size={24} /> Demander un devis
        </a>
      </div>
    </main>
  );
}
