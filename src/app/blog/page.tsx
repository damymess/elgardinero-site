import Link from "next/link";
import { Calendar, Clock, Tag, ArrowRight } from "lucide-react";
import { articles } from "@/data/articles";
import { services } from "@/data/services";
import { locations } from "@/data/locations";
import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Blog Jardinage Rabat | Conseils & Astuces | El Gardinero",
  description:
    "Conseils jardinage, entretien pelouse, taille, elagage et amenagement exterieur a Rabat. Articles pratiques par Youssef, jardinier professionnel.",
  keywords: [
    "blog jardinage rabat",
    "conseils jardinier maroc",
    "entretien jardin rabat",
    "astuces jardinage",
    "paysagiste rabat blog",
  ],
  alternates: {
    canonical: "https://elgardinero.ma/blog",
  },
  openGraph: {
    title: "Blog Jardinage Rabat | El Gardinero",
    description:
      "Conseils jardinage, entretien et amenagement exterieur a Rabat par Youssef, jardinier professionnel.",
    url: "https://elgardinero.ma/blog",
    siteName: "El Gardinero",
    locale: "fr_MA",
    type: "website",
  },
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* Hero */}
      <section className="bg-emerald-800 text-white pt-12 pb-16 px-4 rounded-b-lg shadow-md">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8">
            <Breadcrumb items={[
              { label: "Blog" },
            ]} />
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight">
            Blog Jardinage
          </h1>
          <p className="text-lg text-emerald-100 max-w-2xl">
            Conseils pratiques, astuces d&apos;entretien et guides pour un beau jardin a Rabat et ses environs.
          </p>
        </div>
      </section>

      {/* Articles */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="group bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="p-6 flex flex-col h-full">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-700 text-xs font-semibold px-2.5 py-1 rounded-full">
                      <Tag size={10} />
                      {article.category}
                    </span>
                  </div>
                  <h2 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-emerald-700 transition-colors leading-snug">
                    {article.title}
                  </h2>
                  <p className="text-gray-600 text-sm mb-4 flex-1 leading-relaxed">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-400 mt-auto pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex items-center gap-1">
                        <Calendar size={12} />
                        {new Date(article.publishDate).toLocaleDateString("fr-FR", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        })}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <Clock size={12} />
                        {article.readTime} min
                      </span>
                    </div>
                    <span className="inline-flex items-center gap-1 text-emerald-600 font-semibold group-hover:gap-2 transition-all">
                      Lire <ArrowRight size={12} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      {/* Maillage interne */}
      <section className="pb-16 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="font-bold text-lg text-gray-900 mb-4">Nos services</h3>
            <div className="flex flex-wrap gap-2">
              {services.map((s) => (
                <Link key={s.slug} href={`/services/${s.slug}`} className="bg-emerald-100 text-emerald-800 px-3 py-1.5 rounded-lg text-sm font-medium hover:bg-emerald-200 transition-colors">
                  {s.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="font-bold text-lg text-gray-900 mb-4">Zones d&apos;intervention</h3>
            <div className="flex flex-wrap gap-2">
              {locations.map((loc) => (
                <Link key={loc.slug} href={`/jardinier-${loc.slug}`} className="bg-gray-100 text-gray-700 px-3 py-1.5 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors">
                  Jardinier {loc.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
