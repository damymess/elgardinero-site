import Link from "next/link";
import { MessageCircle, Phone, CheckCircle2, MapPin, ArrowLeft, Leaf, Scissors, Trash2, Sprout } from "lucide-react";
import { locations, type Location } from "@/data/locations";

const GARDENER_NAME = "Youssef";
const PHONE_DISPLAY = "06 49 23 15 45";
const PHONE_LINK = "+212649231545";
const WHATSAPP_NUM = "212649231545";

const services = [
  { icon: <Leaf size={20} className="text-emerald-600" />, name: "Tonte de pelouse" },
  { icon: <Scissors size={20} className="text-emerald-600" />, name: "Taille de haies" },
  { icon: <Trash2 size={20} className="text-emerald-600" />, name: "Grand nettoyage" },
  { icon: <Sprout size={20} className="text-emerald-600" />, name: "Plantation & massifs" },
];

export default function LocationPage({ loc }: { loc: Location }) {
  const whatsappMessage = encodeURIComponent(
    `Bonjour ${GARDENER_NAME}, je vous contacte depuis votre site (page ${loc.name}) pour l'entretien de mon jardin.`
  );
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUM}?text=${whatsappMessage}`;

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: "https://elgardinero.ma" },
      { "@type": "ListItem", position: 2, name: `Jardinier ${loc.name}`, item: `https://elgardinero.ma/jardinier-${loc.slug}` },
    ],
  };

  const localServiceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Jardinier a ${loc.name}`,
    description: loc.description,
    provider: {
      "@type": "LocalBusiness",
      name: "El Gardinero",
      telephone: "+212649231545",
      url: "https://elgardinero.ma",
    },
    areaServed: {
      "@type": loc.name === "Rabat" ? "City" : "Place",
      name: loc.name,
    },
  };

  return (
    <main className="min-h-screen bg-neutral-100 text-neutral-800 pb-24 md:pb-0">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localServiceJsonLd) }}
      />
      <section className="bg-emerald-800 text-white pt-12 pb-16 px-4 rounded-b-[2.5rem] shadow-lg">
        <div className="max-w-3xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-emerald-200 hover:text-white mb-8 text-sm transition-colors">
            <ArrowLeft size={16} /> Retour
          </Link>
          <div className="inline-flex items-center gap-2 bg-emerald-700/50 px-4 py-2 rounded-full mb-6 border border-emerald-600/50">
            <MapPin size={16} />
            <span className="text-sm font-medium">{loc.fullName}</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
            Jardinier &agrave; {loc.name}
          </h1>
          <p className="text-lg text-emerald-100 mb-8 max-w-2xl">{loc.heroText}</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebd5a] text-white px-8 py-4 rounded-2xl font-bold text-lg transition-transform active:scale-95 shadow-xl">
              <MessageCircle size={24} /> Devis gratuit WhatsApp
            </a>
            <a href={`tel:${PHONE_LINK}`} className="flex items-center justify-center gap-2 bg-white text-emerald-900 hover:bg-neutral-100 px-8 py-4 rounded-2xl font-bold text-lg transition-transform active:scale-95 shadow-xl">
              <Phone size={24} /> {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 max-w-3xl mx-auto">
        <div className="bg-white rounded-[2rem] shadow-sm border border-neutral-200 p-8 md:p-12">
          <h2 className="text-2xl font-bold text-emerald-950 mb-6">Entretien de jardins &agrave; {loc.name}</h2>
          <p className="text-neutral-700 leading-relaxed text-lg mb-8">{loc.details}</p>

          <h3 className="font-bold text-lg text-neutral-900 mb-4">Services disponibles &agrave; {loc.name}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
            {services.map((s) => (
              <div key={s.name} className="flex items-center gap-3 bg-emerald-50 px-4 py-3 rounded-xl">
                {s.icon}
                <span className="font-medium text-emerald-900">{s.name}</span>
              </div>
            ))}
          </div>

          {loc.neighborhoods && (
            <>
              <h3 className="font-bold text-lg text-neutral-900 mb-4">Quartiers desservis</h3>
              <div className="flex flex-wrap gap-2 mb-8">
                {loc.neighborhoods.map((n) => (
                  <span key={n} className="bg-neutral-100 text-neutral-700 px-3 py-1.5 rounded-lg text-sm font-medium">{n}</span>
                ))}
              </div>
            </>
          )}

          <h3 className="font-bold text-lg text-neutral-900 mb-4">Zones &agrave; proximit&eacute;</h3>
          <div className="flex flex-wrap gap-2 mb-8">
            {loc.nearbyAreas.map((area) => {
              const nearbyLoc = locations.find((l) => l.name === area);
              return nearbyLoc ? (
                <Link key={area} href={`/jardinier-${nearbyLoc.slug}`} className="bg-emerald-100 text-emerald-800 px-3 py-1.5 rounded-lg text-sm font-medium hover:bg-emerald-200 transition-colors">
                  Jardinier {area}
                </Link>
              ) : (
                <span key={area} className="bg-neutral-100 text-neutral-700 px-3 py-1.5 rounded-lg text-sm font-medium">{area}</span>
              );
            })}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-6 border-t border-neutral-100">
            <span className="flex items-center gap-2 font-medium text-emerald-800 bg-emerald-50 px-4 py-2 rounded-lg w-fit"><CheckCircle2 size={20} className="text-emerald-500" /> Devis gratuit</span>
            <span className="flex items-center gap-2 font-medium text-emerald-800 bg-emerald-50 px-4 py-2 rounded-lg w-fit"><CheckCircle2 size={20} className="text-emerald-500" /> R&eacute;ponse en -1h</span>
            <span className="flex items-center gap-2 font-medium text-emerald-800 bg-emerald-50 px-4 py-2 rounded-lg w-fit"><CheckCircle2 size={20} className="text-emerald-500" /> Sans engagement</span>
          </div>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="max-w-md mx-auto bg-emerald-800 text-white p-8 rounded-3xl text-center shadow-lg">
          <h2 className="text-xl font-bold mb-3">Besoin d&apos;un jardinier &agrave; {loc.name} ?</h2>
          <p className="text-emerald-100 mb-6">Envoyez une photo de votre jardin pour un devis gratuit !</p>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebd5a] text-white px-6 py-4 rounded-xl font-bold transition-transform active:scale-95 w-full">
            <MessageCircle size={24} /> Contacter {GARDENER_NAME} sur WhatsApp
          </a>
        </div>
      </section>

      <div className="md:hidden fixed bottom-6 left-0 right-0 px-4 z-50">
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-[#25D366] text-white w-full py-4 rounded-2xl shadow-2xl font-bold text-lg border-2 border-white/20">
          <MessageCircle size={24} /> Demander un devis
        </a>
      </div>
    </main>
  );
}
