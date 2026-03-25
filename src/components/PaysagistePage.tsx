import Link from "next/link";
import { MessageCircle, Phone, CheckCircle2, MapPin, Leaf, TreePine, Sprout, Droplets, Scissors, ChevronDown } from "lucide-react";
import type { PaysagisteLocation } from "@/data/paysagiste-locations";
import { paysagisteLocations } from "@/data/paysagiste-locations";
import { articles } from "@/data/articles";

const GARDENER_NAME = "Adil";
const PHONE_DISPLAY = "06 49 23 15 45";
const PHONE_LINK = "+212649231545";
const WHATSAPP_NUM = "212649231545";

export default function PaysagistePage({ loc }: { loc: PaysagisteLocation }) {
  const whatsappMessage = encodeURIComponent(
    `Bonjour ${GARDENER_NAME}, je vous contacte depuis votre site (page paysagiste ${loc.name}) pour un projet d'amenagement paysager.`
  );
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUM}?text=${whatsappMessage}`;

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: "https://elgardinero.ma" },
      ...(loc.slug !== "rabat"
        ? [{ "@type": "ListItem", position: 2, name: "Paysagiste Rabat", item: "https://elgardinero.ma/paysagiste-rabat" }]
        : []),
      {
        "@type": "ListItem",
        position: loc.slug !== "rabat" ? 3 : 2,
        name: `Paysagiste ${loc.name}`,
        item: `https://elgardinero.ma/paysagiste-${loc.slug}`,
      },
    ],
  };

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Paysagiste a ${loc.name}`,
    description: loc.description,
    provider: {
      "@type": "LocalBusiness",
      name: "El Gardinero",
      telephone: "+212649231545",
      url: "https://elgardinero.ma",
    },
    areaServed: {
      "@type": loc.slug === "rabat" ? "City" : "Place",
      name: loc.name,
    },
    serviceType: "Amenagement paysager",
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: loc.faq.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  const paysagisteArticles = articles.filter(
    (a) =>
      a.relatedService === "amenagement-jardin" ||
      a.category === "Paysagisme" ||
      a.category === "Amenagement"
  ).slice(0, 4);

  const relatedServices = [
    { name: "Amenagement Paysager", slug: "amenagement-jardin", icon: <TreePine size={20} className="text-emerald-600" /> },
    { name: "Plantation & Massifs", slug: "plantation-fleurs", icon: <Sprout size={20} className="text-emerald-600" /> },
    { name: "Arrosage Automatique", slug: "arrosage-automatique", icon: <Droplets size={20} className="text-emerald-600" /> },
    { name: "Entretien Pelouse", slug: "entretien-pelouse", icon: <Leaf size={20} className="text-emerald-600" /> },
    { name: "Taille & Elagage", slug: "taille-elagage", icon: <Scissors size={20} className="text-emerald-600" /> },
  ];

  return (
    <main className="min-h-screen bg-white text-gray-800 pb-24 md:pb-0">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* Hero */}
      <section className="bg-emerald-800 text-white pt-12 pb-16 px-4 rounded-b-lg shadow-md">
        <div className="max-w-3xl mx-auto">
          <nav className="mb-8 text-sm text-emerald-300">
            <Link href="/" className="hover:text-white">Accueil</Link>
            {loc.slug !== "rabat" && (
              <>
                <span className="mx-2">/</span>
                <Link href="/paysagiste-rabat" className="hover:text-white">Paysagiste Rabat</Link>
              </>
            )}
            <span className="mx-2">/</span>
            <span className="text-white">Paysagiste {loc.name}</span>
          </nav>
          <div className="inline-flex items-center gap-2 bg-emerald-700/50 px-4 py-2 rounded-full mb-6 border border-emerald-600/50">
            <MapPin size={16} />
            <span className="text-sm font-medium">{loc.fullName}</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
            Paysagiste &agrave; {loc.name}
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

      {/* Contenu principal */}
      <section className="py-16 px-4 max-w-3xl mx-auto">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 md:p-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Am&eacute;nagement paysager &agrave; {loc.name}</h2>
          <p className="text-gray-700 leading-relaxed text-lg mb-8">{loc.details}</p>

          <h3 className="font-bold text-lg text-gray-900 mb-4">Nos services de paysagiste</h3>
          <ul className="space-y-3 mb-8">
            {loc.services.map((s) => (
              <li key={s} className="flex items-start gap-3">
                <CheckCircle2 size={20} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">{s}</span>
              </li>
            ))}
          </ul>

          <h3 className="font-bold text-lg text-gray-900 mb-4">Services associ&eacute;s</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
            {relatedServices.map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`} className="flex items-center gap-3 bg-emerald-50 px-4 py-3 rounded-lg hover:bg-emerald-100 transition-colors">
                {s.icon}
                <span className="font-medium text-emerald-900">{s.name}</span>
              </Link>
            ))}
          </div>

          {/* Zones a proximite */}
          <h3 className="font-bold text-lg text-gray-900 mb-4">Paysagiste dans les zones voisines</h3>
          <div className="flex flex-wrap gap-2 mb-8">
            {loc.nearbyAreas.map((area) => {
              const nearbyLoc = paysagisteLocations.find((l) => l.name === area);
              return nearbyLoc ? (
                <Link key={area} href={`/paysagiste-${nearbyLoc.slug}`} className="bg-emerald-100 text-emerald-800 px-3 py-1.5 rounded-lg text-sm font-medium hover:bg-emerald-200 transition-colors">
                  Paysagiste {area}
                </Link>
              ) : (
                <span key={area} className="bg-gray-100 text-gray-700 px-3 py-1.5 rounded-lg text-sm font-medium">{area}</span>
              );
            })}
          </div>

          {/* Lien vers jardinier correspondant */}
          {loc.slug !== "rabat" && (
            <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 mb-8">
              <p className="text-emerald-900 font-medium">
                Besoin d&apos;entretien r&eacute;gulier ?{" "}
                <Link href={`/jardinier-${loc.slug}`} className="underline hover:text-emerald-700">
                  Voir aussi : Jardinier &agrave; {loc.name}
                </Link>
              </p>
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-6 border-t border-gray-100">
            <span className="flex items-center gap-2 font-medium text-emerald-800 bg-emerald-50 px-4 py-2 rounded-lg w-fit"><CheckCircle2 size={20} className="text-emerald-500" /> Devis gratuit</span>
            <span className="flex items-center gap-2 font-medium text-emerald-800 bg-emerald-50 px-4 py-2 rounded-lg w-fit"><CheckCircle2 size={20} className="text-emerald-500" /> 18 ans d&apos;exp&eacute;rience</span>
            <span className="flex items-center gap-2 font-medium text-emerald-800 bg-emerald-50 px-4 py-2 rounded-lg w-fit"><CheckCircle2 size={20} className="text-emerald-500" /> Sans engagement</span>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 max-w-3xl mx-auto pb-8">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Questions fr&eacute;quentes &mdash; Paysagiste &agrave; {loc.name}</h2>
          <div className="space-y-4">
            {loc.faq.map((f) => (
              <details key={f.question} className="group border border-gray-200 rounded-lg">
                <summary className="flex items-center justify-between cursor-pointer px-5 py-4 font-medium text-gray-900 hover:bg-gray-50 rounded-lg">
                  {f.question}
                  <ChevronDown size={18} className="text-gray-400 group-open:rotate-180 transition-transform" />
                </summary>
                <p className="px-5 pb-4 text-gray-600 leading-relaxed">{f.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Articles */}
      {paysagisteArticles.length > 0 && (
        <section className="px-4 max-w-3xl mx-auto pb-8">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
            <h3 className="font-bold text-lg text-gray-900 mb-4">Articles sur l&apos;am&eacute;nagement paysager</h3>
            <div className="space-y-2 mb-4">
              {paysagisteArticles.map((a) => (
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
      )}

      {/* CTA final */}
      <section className="py-12 px-4">
        <div className="max-w-md mx-auto bg-emerald-800 text-white p-8 rounded-lg text-center shadow-md">
          <h2 className="text-xl font-bold mb-3">Besoin d&apos;un paysagiste &agrave; {loc.name} ?</h2>
          <p className="text-emerald-100 mb-6">Envoyez une photo de votre terrain pour un devis gratuit !</p>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-4 rounded-md font-bold transition-transform active:scale-95 w-full">
            <MessageCircle size={24} /> Contacter {GARDENER_NAME} sur WhatsApp
          </a>
        </div>
      </section>

      {/* Mobile CTA fixe */}
      <div className="md:hidden fixed bottom-6 left-0 right-0 px-4 z-50">
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-emerald-600 text-white w-full py-4 rounded-md shadow-lg font-bold text-lg border-2 border-white/20">
          <MessageCircle size={24} /> Demander un devis
        </a>
      </div>
    </main>
  );
}
