import Link from "next/link";
import { MessageCircle, Phone, CheckCircle2, MapPin, Leaf, Scissors, Trash2, Sprout, TreePalm, Droplets } from "lucide-react";
import { locations, type Location } from "@/data/locations";
import { articles } from "@/data/articles";
import Breadcrumb from "@/components/Breadcrumb";

const GARDENER_NAME = "Adil";
const PHONE_DISPLAY = "06 49 23 15 45";
const PHONE_LINK = "+212649231545";
const WHATSAPP_NUM = "212649231545";

const services = [
  { icon: <Leaf size={20} className="text-emerald-600" />, name: "Tonte de pelouse", slug: "entretien-pelouse" },
  { icon: <Scissors size={20} className="text-emerald-600" />, name: "Taille de haies", slug: "taille-elagage" },
  { icon: <Trash2 size={20} className="text-emerald-600" />, name: "Grand nettoyage", slug: "nettoyage-jardin" },
  { icon: <Sprout size={20} className="text-emerald-600" />, name: "Plantation & massifs", slug: "plantation-fleurs" },
  { icon: <TreePalm size={20} className="text-emerald-600" />, name: "Elagage palmiers", slug: "elagage-palmiers" },
  { icon: <Droplets size={20} className="text-emerald-600" />, name: "Arrosage automatique", slug: "arrosage-automatique" },
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
    <main className="min-h-screen bg-white text-gray-800 pb-24 md:pb-0">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localServiceJsonLd) }}
      />
      <section className="bg-emerald-800 text-white pt-12 pb-16 px-4 rounded-b-lg shadow-md">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <Breadcrumb items={[
              { label: `Jardinier ${loc.name}` },
            ]} />
          </div>
          <div className="inline-flex items-center gap-2 bg-emerald-700/50 px-4 py-2 rounded-full mb-6 border border-emerald-600/50">
            <MapPin size={16} />
            <span className="text-sm font-medium">{loc.fullName}</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
            Jardinier &agrave; {loc.name}
          </h1>
          <p className="text-lg text-emerald-100 mb-8 max-w-2xl">{loc.heroText}</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-md font-bold text-lg transition-transform active:scale-95 shadow-md">
              <MessageCircle size={24} /> Devis gratuit WhatsApp
            </a>
            <a href={`tel:${PHONE_LINK}`} className="flex items-center justify-center gap-2 bg-white text-emerald-900 hover:bg-gray-50 px-8 py-4 rounded-md font-bold text-lg transition-transform active:scale-95 shadow-md">
              <Phone size={24} /> {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 max-w-3xl mx-auto">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 md:p-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Entretien de jardins &agrave; {loc.name}</h2>
          <p className="text-gray-700 leading-relaxed text-lg mb-8">{loc.details}</p>

          <h3 className="font-bold text-lg text-gray-900 mb-4">Services disponibles &agrave; {loc.name}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
            {services.map((s) => (
              <Link key={s.name} href={`/services/${s.slug}`} className="flex items-center gap-3 bg-emerald-50 px-4 py-3 rounded-lg hover:bg-emerald-100 transition-colors">
                {s.icon}
                <span className="font-medium text-emerald-900">{s.name}</span>
              </Link>
            ))}
          </div>

          {loc.neighborhoods && (
            <>
              <h3 className="font-bold text-lg text-gray-900 mb-4">Quartiers desservis</h3>
              <div className="flex flex-wrap gap-2 mb-8">
                {loc.neighborhoods.map((n) => (
                  <span key={n} className="bg-gray-100 text-gray-700 px-3 py-1.5 rounded-lg text-sm font-medium">{n}</span>
                ))}
              </div>
            </>
          )}

          <h3 className="font-bold text-lg text-gray-900 mb-4">Zones &agrave; proximit&eacute;</h3>
          <div className="flex flex-wrap gap-2 mb-8">
            {loc.nearbyAreas.map((area) => {
              const nearbyLoc = locations.find((l) => l.name === area);
              return nearbyLoc ? (
                <Link key={area} href={`/jardinier-${nearbyLoc.slug}`} className="bg-emerald-100 text-emerald-800 px-3 py-1.5 rounded-lg text-sm font-medium hover:bg-emerald-200 transition-colors">
                  Jardinier {area}
                </Link>
              ) : (
                <span key={area} className="bg-gray-100 text-gray-700 px-3 py-1.5 rounded-lg text-sm font-medium">{area}</span>
              );
            })}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-6 border-t border-gray-100">
            <span className="flex items-center gap-2 font-medium text-emerald-800 bg-emerald-50 px-4 py-2 rounded-lg w-fit"><CheckCircle2 size={20} className="text-emerald-500" /> Devis gratuit</span>
            <span className="flex items-center gap-2 font-medium text-emerald-800 bg-emerald-50 px-4 py-2 rounded-lg w-fit"><CheckCircle2 size={20} className="text-emerald-500" /> R&eacute;ponse en -1h</span>
            <span className="flex items-center gap-2 font-medium text-emerald-800 bg-emerald-50 px-4 py-2 rounded-lg w-fit"><CheckCircle2 size={20} className="text-emerald-500" /> Sans engagement</span>
          </div>
        </div>
      </section>

      {/* Articles conseils */}
      <section className="px-4 max-w-3xl mx-auto pb-8">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
          <h3 className="font-bold text-lg text-gray-900 mb-4">Nos conseils jardinage</h3>
          <div className="space-y-2 mb-4">
            {articles.slice(0, 4).map((a) => (
              <Link key={a.slug} href={`/blog/${a.slug}`} className="block bg-gray-50 hover:bg-gray-100 px-4 py-3 rounded-lg transition-colors">
                <span className="font-medium text-gray-900">{a.title}</span>
              </Link>
            ))}
          </div>
          <Link href="/blog" className="text-emerald-700 font-semibold text-sm hover:text-emerald-900 transition-colors">
            Voir tous les articles &rarr;
          </Link>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="max-w-md mx-auto bg-emerald-800 text-white p-8 rounded-lg text-center shadow-md">
          <h2 className="text-xl font-bold mb-3">Besoin d&apos;un jardinier &agrave; {loc.name} ?</h2>
          <p className="text-emerald-100 mb-6">Envoyez une photo de votre jardin pour un devis gratuit !</p>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-4 rounded-md font-bold transition-transform active:scale-95 w-full">
            <MessageCircle size={24} /> Contacter {GARDENER_NAME} sur WhatsApp
          </a>
        </div>
      </section>

      <div className="md:hidden fixed bottom-6 left-0 right-0 px-4 z-50">
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-emerald-600 text-white w-full py-4 rounded-md shadow-lg font-bold text-lg border-2 border-white/20">
          <MessageCircle size={24} /> Demander un devis
        </a>
      </div>
    </main>
  );
}
