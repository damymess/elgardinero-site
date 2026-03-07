import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Mentions legales",
  robots: { index: false, follow: false },
};

export default function MentionsLegales() {
  return (
    <main className="min-h-screen bg-white py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-emerald-700 hover:text-emerald-900 mb-8 text-sm font-medium">
          <ArrowLeft size={16} /> Retour
        </Link>

        <h1 className="text-3xl font-extrabold text-gray-900 mb-8">Mentions l&eacute;gales</h1>

        <div className="bg-white rounded-lg border border-gray-200 p-8 space-y-8 text-gray-700 leading-relaxed">
          <section>
            <h2 className="font-bold text-lg text-gray-900 mb-3">&Eacute;diteur du site</h2>
            <p>
              <strong>El Gardinero</strong><br />
              Youssef — Artisan jardinier ind&eacute;pendant<br />
              Rabat, Maroc<br />
              T&eacute;l&eacute;phone : 06 49 23 15 45<br />
              Email : contact@elgardinero.ma
            </p>
          </section>

          <section>
            <h2 className="font-bold text-lg text-gray-900 mb-3">Activit&eacute;</h2>
            <p>
              Prestation de services de jardinage et d&apos;entretien d&apos;espaces verts pour particuliers et professionnels dans la r&eacute;gion de Rabat-Sal&eacute;-K&eacute;nitra.
            </p>
          </section>

          <section>
            <h2 className="font-bold text-lg text-gray-900 mb-3">H&eacute;bergement</h2>
            <p>
              Ce site est h&eacute;berg&eacute; par Vercel Inc.<br />
              440 N Baxter St, Los Angeles, CA 90036, &Eacute;tats-Unis<br />
              Site : vercel.com
            </p>
          </section>

          <section>
            <h2 className="font-bold text-lg text-gray-900 mb-3">Propri&eacute;t&eacute; intellectuelle</h2>
            <p>
              L&apos;ensemble du contenu de ce site (textes, images, graphismes, logo) est la propri&eacute;t&eacute; exclusive de El Gardinero, sauf mention contraire. Toute reproduction, m&ecirc;me partielle, est interdite sans autorisation pr&eacute;alable.
            </p>
          </section>

          <section>
            <h2 className="font-bold text-lg text-gray-900 mb-3">Donn&eacute;es personnelles</h2>
            <p>
              Ce site ne collecte aucune donn&eacute;e personnelle via des formulaires. Les contacts se font exclusivement via WhatsApp ou appel t&eacute;l&eacute;phonique. Aucun cookie de suivi n&apos;est utilis&eacute; en dehors de Google Analytics (si activ&eacute;), qui peut collecter des donn&eacute;es anonymis&eacute;es de navigation.
            </p>
          </section>

          <section>
            <h2 className="font-bold text-lg text-gray-900 mb-3">Limitation de responsabilit&eacute;</h2>
            <p>
              Les tarifs indiqu&eacute;s sur ce site sont donn&eacute;s &agrave; titre indicatif et peuvent varier selon la nature et l&apos;ampleur des travaux. Seul un devis personnalis&eacute; fait foi.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
