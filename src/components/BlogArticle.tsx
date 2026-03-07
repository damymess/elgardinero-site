"use client";

import Link from "next/link";
import { MessageCircle, Phone, Calendar, Clock, Tag } from "lucide-react";
import { type Article } from "@/data/articles";
import Breadcrumb from "@/components/Breadcrumb";

const GARDENER_NAME = "Adil";
const PHONE_DISPLAY = "06 49 23 15 45";
const PHONE_LINK = "+212649231545";
const WHATSAPP_NUM = "212649231545";

interface RelatedLink {
  slug: string;
  title: string;
  type: "article" | "service";
}

export default function BlogArticle({ article, relatedArticles = [], relatedService }: { article: Article; relatedArticles?: RelatedLink[]; relatedService?: RelatedLink }) {
  const whatsappMessage = encodeURIComponent(
    `Bonjour ${GARDENER_NAME}, j'ai lu votre article "${article.title}" et j'aimerais en savoir plus. Pouvez-vous me contacter ?`
  );
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUM}?text=${whatsappMessage}`;

  const blogPostingJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.metaDescription,
    datePublished: article.publishDate,
    author: {
      "@type": "Person",
      name: GARDENER_NAME,
    },
    publisher: {
      "@type": "Organization",
      name: "El Gardinero",
      url: "https://elgardinero.ma",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://elgardinero.ma/blog/${article.slug}`,
    },
    keywords: article.keywords.join(", "),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: "https://elgardinero.ma" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://elgardinero.ma/blog" },
      { "@type": "ListItem", position: 3, name: article.title, item: `https://elgardinero.ma/blog/${article.slug}` },
    ],
  };

  return (
    <main className="min-h-screen bg-white text-gray-800 pb-24 md:pb-0">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Hero */}
      <section className="bg-emerald-800 text-white pt-12 pb-16 px-4 rounded-b-lg shadow-md">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <Breadcrumb items={[
              { label: "Blog", href: "/blog" },
              { label: article.title },
            ]} />
          </div>
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-flex items-center gap-1.5 bg-emerald-700 text-emerald-100 text-xs font-semibold px-3 py-1 rounded-full">
              <Tag size={12} />
              {article.category}
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
            {article.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-emerald-200 text-sm">
            <span className="inline-flex items-center gap-1.5">
              <Calendar size={14} />
              {new Date(article.publishDate).toLocaleDateString("fr-FR", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock size={14} />
              {article.readTime} min de lecture
            </span>
          </div>
        </div>
      </section>

      {/* Contenu */}
      <section className="py-16 px-4 max-w-3xl mx-auto">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div
            className={[
              "p-8 md:p-12",
              "[&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-gray-900 [&_h2]:mt-8 [&_h2]:mb-4",
              "[&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-gray-800 [&_h3]:mt-6 [&_h3]:mb-3",
              "[&_p]:text-gray-700 [&_p]:leading-relaxed [&_p]:mb-4",
              "[&_ul]:list-disc [&_ul]:list-inside [&_ul]:space-y-2 [&_ul]:mb-4 [&_ul]:text-gray-700",
              "[&_ol]:list-decimal [&_ol]:list-inside [&_ol]:space-y-2 [&_ol]:mb-4 [&_ol]:text-gray-700",
              "[&_strong]:font-semibold [&_strong]:text-gray-900",
              "[&_a]:text-emerald-700 [&_a]:underline [&_a]:hover:text-emerald-900",
            ].join(" ")}
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </div>
      </section>

      {/* Maillage interne */}
      {(relatedService || relatedArticles.length > 0) && (
        <section className="px-4 max-w-3xl mx-auto">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
            {relatedService && (
              <div className="mb-6">
                <h3 className="font-bold text-lg text-gray-900 mb-3">Service associ&eacute;</h3>
                <Link href={`/services/${relatedService.slug}`} className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 px-4 py-2.5 rounded-lg font-medium hover:bg-emerald-200 transition-colors">
                  {relatedService.title} &rarr;
                </Link>
              </div>
            )}
            {relatedArticles.length > 0 && (
              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-3">Articles similaires</h3>
                <div className="space-y-2">
                  {relatedArticles.map((a) => (
                    <Link key={a.slug} href={`/blog/${a.slug}`} className="block bg-gray-50 hover:bg-gray-100 px-4 py-3 rounded-lg transition-colors font-medium text-gray-900">
                      {a.title}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-12 px-4">
        <div className="max-w-md mx-auto bg-emerald-800 text-white p-8 rounded-lg text-center shadow-md">
          <h2 className="text-xl font-bold mb-3">
            Besoin d&apos;un jardinier professionnel ?
          </h2>
          <p className="text-emerald-100 mb-6">
            Envoyez une photo de votre jardin pour un devis gratuit en moins d&apos;1 heure !
          </p>
          <div className="flex flex-col gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-4 rounded-md font-bold transition-transform active:scale-95 w-full"
            >
              <MessageCircle size={24} /> Contacter {GARDENER_NAME}
            </a>
            <a
              href={`tel:${PHONE_LINK}`}
              className="flex items-center justify-center gap-2 bg-white text-emerald-900 hover:bg-gray-50 px-6 py-4 rounded-md font-bold transition-transform active:scale-95 w-full"
            >
              <Phone size={24} /> {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>

      {/* Bouton WhatsApp fixe mobile */}
      <div className="md:hidden fixed bottom-6 left-0 right-0 px-4 z-50">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-emerald-600 text-white w-full py-4 rounded-md shadow-lg font-bold text-lg border-2 border-white/20"
        >
          <MessageCircle size={24} /> Demander un devis
        </a>
      </div>
    </main>
  );
}
