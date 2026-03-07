import Image from 'next/image';
import Link from 'next/link';
import { Phone, MessageCircle, Scissors, Leaf, Trash2, Sprout, CheckCircle2, MapPin, Star, Camera, FileText, Hammer, ChevronDown, Clock, TreePine, TreePalm, Droplets, ShieldCheck } from 'lucide-react';

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Quelles sont vos zones d'intervention ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "J'interviens dans tout Rabat (Hay Riad, Souissi, Agdal, Hassan, Yacoub El Mansour...), ainsi qu'a Sale, Temara et Harhoura.",
      },
    },
    {
      "@type": "Question",
      name: "Comment obtenir un devis jardinier a Rabat ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Envoyez-moi une ou plusieurs photos de votre jardin sur WhatsApp. Je vous reponds sous 1 heure avec un devis detaille, c'est gratuit !",
      },
    },
    {
      "@type": "Question",
      name: "Quels sont vos delais d'intervention ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "En general sous 24 a 48 heures. Pour les urgences, j'essaie de venir le jour meme.",
      },
    },
    {
      "@type": "Question",
      name: "Fournissez-vous le materiel de jardinage ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui, je viens avec tout mon materiel professionnel : tondeuse, taille-haie, secateurs, souffleur, etc.",
      },
    },
    {
      "@type": "Question",
      name: "Proposez-vous des formules d'entretien regulier ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui ! Je propose des forfaits mensuels ou bimensuels a partir de 1000 DH/mois. C'est la solution la plus economique pour un jardin toujours impeccable.",
      },
    },
    {
      "@type": "Question",
      name: "Que faites-vous des dechets verts ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Je m'occupe de tout : ramassage, nettoyage et evacuation des dechets verts. Jardin propre garanti.",
      },
    },
  ],
};

export default function Home() {
  const GARDENER_NAME = "Youssef";
  const PHONE_DISPLAY = "06 49 23 15 45";
  const PHONE_LINK = "+212649231545";
  const WHATSAPP_NUM = "212649231545";

  const whatsappMessage = encodeURIComponent(`Bonjour ${GARDENER_NAME}, je vous contacte depuis votre site web pour l'entretien de mon jardin.`);
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUM}?text=${whatsappMessage}`;

  return (
    <main className="min-h-screen bg-white font-sans text-gray-800 pb-20 md:pb-0">

      {/* FAQ Schema JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ===== HERO BENTO ===== */}
      <section className="pt-18 pb-6 px-4 md:px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">

          {/* Hero principal — span 2 colonnes */}
          <div className="md:col-span-2 bg-emerald-800 text-white p-8 md:p-12 rounded-xl relative overflow-hidden min-h-[340px] flex flex-col justify-between">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(16,185,129,0.3),transparent_60%)]" />
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-emerald-700/50 px-4 py-2 rounded-full mb-6 border border-emerald-600/50">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span className="text-sm font-medium">Disponible maintenant</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4">
                Votre Jardinier<br />de Confiance
              </h1>
              <p className="text-emerald-100 text-lg max-w-lg">
                Entretien de villas, taille, am&eacute;nagement et grand nettoyage &agrave; Rabat, T&eacute;mara &amp; Sal&eacute;.
              </p>
            </div>
            <div className="relative z-10 flex flex-col sm:flex-row gap-3 mt-8">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebd5a] text-white px-6 py-3.5 rounded-md font-bold transition-transform active:scale-95 shadow-md"
              >
                <MessageCircle size={20} />
                Devis via WhatsApp
              </a>
              <a
                href={`tel:${PHONE_LINK}`}
                className="flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 text-white px-6 py-3.5 rounded-md font-bold backdrop-blur-sm transition-all"
              >
                <Phone size={20} />
                {PHONE_DISPLAY}
              </a>
            </div>
          </div>

          {/* Carte photo hero */}
          <div className="bg-white rounded-xl overflow-hidden relative min-h-[280px] md:min-h-0">
            <Image
              src="/hero-garden.jpg"
              alt="Jardin entretenu par Youssef - jardinier Rabat"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
              priority
            />
            <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl p-3 flex items-center gap-2">
              <MapPin size={16} className="text-emerald-700 shrink-0" />
              <p className="text-sm font-bold text-emerald-900">Rabat &amp; environs</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== COMPTEURS BENTO ===== */}
      <section className="px-4 md:px-6 pb-4">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          <BentoStat value="+150" label="Jardins entretenus" />
          <BentoStat value="8 ans" label="D'exp&eacute;rience" />
          <BentoStat value="4.9/5" label="Satisfaction" accent />
          <BentoStat value="<1h" label="Temps de r&eacute;ponse" />
        </div>
      </section>

      {/* ===== SERVICES BENTO GRID ===== */}
      <section className="px-4 md:px-6 py-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-emerald-950 mb-6">Mes Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

            {/* Taille & Elagage — large */}
            <div className="md:col-span-2 bg-white p-8 rounded-xl border border-gray-200 hover:border-emerald-200 transition-colors group">
              <div className="flex items-start justify-between mb-6">
                <div className="bg-emerald-50 p-4 rounded-lg group-hover:bg-emerald-100 transition-colors">
                  <Scissors className="text-emerald-600" size={28} />
                </div>
                <Link href="/services/taille-elagage" className="text-sm text-emerald-600 font-medium hover:underline">D&eacute;tails &rarr;</Link>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Taille &amp; &Eacute;lagage</h3>
              <p className="text-gray-500 leading-relaxed">Entretien minutieux de vos haies, arbustes et petits arbres fruitiers. Des coupes nettes et soign&eacute;es pour un jardin toujours beau.</p>
              <p className="mt-4 text-emerald-700 font-bold text-lg">150 - 800 DH</p>
            </div>

            {/* Entretien Pelouse */}
            <div className="bg-white p-8 rounded-xl border border-gray-200 hover:border-emerald-200 transition-colors group">
              <div className="flex items-start justify-between mb-6">
                <div className="bg-emerald-50 p-4 rounded-lg group-hover:bg-emerald-100 transition-colors">
                  <Leaf className="text-emerald-600" size={28} />
                </div>
                <Link href="/services/entretien-pelouse" className="text-sm text-emerald-600 font-medium hover:underline">D&eacute;tails &rarr;</Link>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Entretien Pelouse</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Tonte, arrosage et d&eacute;sherbage pour un gazon parfait.</p>
              <p className="mt-4 text-emerald-700 font-bold">150 - 500 DH</p>
            </div>

            {/* Grand Nettoyage */}
            <div className="bg-white p-8 rounded-xl border border-gray-200 hover:border-emerald-200 transition-colors group">
              <div className="flex items-start justify-between mb-6">
                <div className="bg-emerald-50 p-4 rounded-lg group-hover:bg-emerald-100 transition-colors">
                  <Trash2 className="text-emerald-600" size={28} />
                </div>
                <Link href="/services/nettoyage-jardin" className="text-sm text-emerald-600 font-medium hover:underline">D&eacute;tails &rarr;</Link>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Grand Nettoyage</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Remise en &eacute;tat de jardins abandonn&eacute;s et &eacute;vacuation des d&eacute;chets.</p>
              <p className="mt-4 text-emerald-700 font-bold">500 - 2000 DH</p>
            </div>

            {/* Plantation — large avec image */}
            <div className="md:col-span-2 bg-emerald-50 p-8 rounded-xl border border-emerald-100 hover:border-emerald-200 transition-colors group">
              <div className="flex items-start justify-between mb-6">
                <div className="bg-white p-4 rounded-lg group-hover:shadow-sm transition-shadow">
                  <Sprout className="text-emerald-600" size={28} />
                </div>
                <Link href="/services/plantation-fleurs" className="text-sm text-emerald-600 font-medium hover:underline">D&eacute;tails &rarr;</Link>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Plantation &amp; Am&eacute;nagement</h3>
              <p className="text-gray-600 leading-relaxed">Mise en terre de vos fleurs, plantes et cr&eacute;ation de massifs. Conception d&apos;espaces verts sur mesure pour sublimer votre ext&eacute;rieur.</p>
              <p className="mt-4 text-emerald-700 font-bold text-lg">Sur devis</p>
            </div>

            {/* Elagage Palmiers */}
            <div className="bg-white p-8 rounded-xl border border-gray-200 hover:border-emerald-200 transition-colors group">
              <div className="flex items-start justify-between mb-6">
                <div className="bg-emerald-50 p-4 rounded-lg group-hover:bg-emerald-100 transition-colors">
                  <TreePalm className="text-emerald-600" size={28} />
                </div>
                <Link href="/services/elagage-palmiers" className="text-sm text-emerald-600 font-medium hover:underline">D&eacute;tails &rarr;</Link>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">&Eacute;lagage Palmiers</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Taille sanitaire et esth&eacute;tique de vos palmiers. Retrait des palmes s&egrave;ches.</p>
              <p className="mt-4 text-emerald-700 font-bold">200 - 600 DH</p>
            </div>

            {/* Arrosage Automatique */}
            <div className="bg-white p-8 rounded-xl border border-gray-200 hover:border-emerald-200 transition-colors group">
              <div className="flex items-start justify-between mb-6">
                <div className="bg-emerald-50 p-4 rounded-lg group-hover:bg-emerald-100 transition-colors">
                  <Droplets className="text-emerald-600" size={28} />
                </div>
                <Link href="/services/arrosage-automatique" className="text-sm text-emerald-600 font-medium hover:underline">D&eacute;tails &rarr;</Link>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Arrosage Automatique</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Installation et entretien de syst&egrave;mes d&apos;irrigation pour votre jardin.</p>
              <p className="mt-4 text-emerald-700 font-bold">Sur devis</p>
            </div>

            {/* Entretien mensuel — accent */}
            <div className="md:col-span-2 bg-emerald-800 text-white p-8 rounded-xl relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(16,185,129,0.2),transparent_60%)]" />
              <div className="relative z-10">
                <div className="bg-white/15 p-4 rounded-lg mb-6 w-fit backdrop-blur-sm">
                  <Clock className="text-emerald-300" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-2">Forfait Entretien Mensuel</h3>
                <p className="text-emerald-100 leading-relaxed mb-4">La solution la plus &eacute;conomique. Votre jardin reste impeccable toute l&apos;ann&eacute;e avec des visites r&eacute;guli&egrave;res programm&eacute;es.</p>
                <p className="text-2xl font-extrabold">
                  &agrave; partir de 1000 DH<span className="text-base font-medium text-emerald-300">/mois</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== REALISATIONS BENTO ===== */}
      <section className="px-4 md:px-6 py-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-emerald-950 mb-6">Avant / Apr&egrave;s</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-xl overflow-hidden relative aspect-video">
              <span className="absolute top-4 left-4 bg-black/70 text-white px-4 py-1.5 rounded-full text-xs font-bold z-10 uppercase tracking-wider">Avant</span>
              <Image src="/avant.jpg" alt="Jardin avant entretien - vegetation envahissante" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
            <div className="rounded-xl overflow-hidden relative aspect-video">
              <span className="absolute top-4 left-4 bg-emerald-600 text-white px-4 py-1.5 rounded-full text-xs font-bold z-10 uppercase tracking-wider shadow-sm">Apr&egrave;s</span>
              <Image src="/apres.jpg" alt="Jardin apres entretien - pelouse parfaitement tondue" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== COMMENT CA MARCHE — 3 colonnes bento ===== */}
      <section className="px-4 md:px-6 py-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-emerald-950 mb-2">Comment &ccedil;a marche ?</h2>
          <p className="text-gray-500 mb-6">Un devis gratuit en 3 &eacute;tapes simples</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <StepCard
              num={1}
              icon={<Camera size={24} className="text-emerald-700" />}
              title="Envoyez une photo"
              desc="Prenez votre jardin en photo et envoyez-la via WhatsApp."
            />
            <StepCard
              num={2}
              icon={<FileText size={24} className="text-emerald-700" />}
              title="Recevez un devis"
              desc="Je vous r&eacute;ponds sous 1h avec un devis clair, sans surprise."
            />
            <StepCard
              num={3}
              icon={<Hammer size={24} className="text-emerald-700" />}
              title="Intervention rapide"
              desc="On fixe un rendez-vous et je m'occupe de tout."
            />
          </div>
        </div>
      </section>

      {/* ===== TEMOIGNAGES BENTO ===== */}
      <section className="px-4 md:px-6 py-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-emerald-950 mb-6">Ce que disent mes clients</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-2 bg-white p-8 rounded-xl border border-gray-200 relative">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} size={18} className="fill-amber-400 text-amber-400" />)}
              </div>
              <blockquote className="text-lg text-gray-700 leading-relaxed mb-6">
                &laquo; Youssef a transform&eacute; mon jardin en une journ&eacute;e. Ponctuel, soigneux et tr&egrave;s honn&ecirc;te sur les prix. Je le recommande &agrave; toutes mes voisines ! &raquo;
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold text-sm">FZ</div>
                <div>
                  <p className="font-bold text-gray-900 text-sm">Fatima Z.</p>
                  <p className="text-gray-400 text-xs">Hay Riad, Rabat</p>
                </div>
              </div>
            </div>

            <div className="bg-emerald-800 text-white p-8 rounded-xl flex flex-col justify-between">
              <div>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} size={18} className="fill-amber-400 text-amber-400" />)}
                </div>
                <blockquote className="text-emerald-50 leading-relaxed mb-6">
                  &laquo; Excellent travail d&apos;&eacute;lagage sur mes oliviers. Il a tout nettoy&eacute; derri&egrave;re lui. Tr&egrave;s professionnel. &raquo;
                </blockquote>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center text-white font-bold text-sm">KB</div>
                <div>
                  <p className="font-bold text-sm">Karim B.</p>
                  <p className="text-emerald-300 text-xs">Souissi, Rabat</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl border border-gray-200">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} size={18} className="fill-amber-400 text-amber-400" />)}
              </div>
              <blockquote className="text-gray-700 leading-relaxed mb-6">
                &laquo; Mon jardin &eacute;tait abandonn&eacute; depuis 2 ans. Youssef l&apos;a remis en &eacute;tat en 2 jours. R&eacute;sultat impeccable ! &raquo;
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold text-sm">AL</div>
                <div>
                  <p className="font-bold text-gray-900 text-sm">Amina L.</p>
                  <p className="text-gray-400 text-xs">T&eacute;mara</p>
                </div>
              </div>
            </div>

            {/* Note de confiance */}
            <div className="md:col-span-2 bg-emerald-50 p-8 rounded-xl border border-emerald-100 flex flex-col md:flex-row items-center gap-6">
              <div className="bg-white p-4 rounded-lg shadow-sm shrink-0">
                <ShieldCheck size={32} className="text-emerald-600" />
              </div>
              <div>
                <p className="font-bold text-emerald-900 text-lg mb-1">4.9/5 de satisfaction client</p>
                <p className="text-gray-600">Bas&eacute; sur +150 interventions. Chaque client re&ccedil;oit un service personnalis&eacute; et un suivi apr&egrave;s intervention.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FAQ BENTO ===== */}
      <section className="px-4 md:px-6 py-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Titre FAQ dans une carte */}
            <div className="bg-emerald-800 text-white p-8 rounded-xl flex flex-col justify-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-3">Questions fr&eacute;quentes</h2>
              <p className="text-emerald-200">Tout ce que vous devez savoir avant de faire appel &agrave; moi.</p>
            </div>

            {/* FAQ items */}
            <div className="md:col-span-2 space-y-3">
              <FaqItem
                question="Quelles sont vos zones d'intervention ?"
                answer="J'interviens dans tout Rabat (Hay Riad, Souissi, Agdal, Hassan, Yacoub El Mansour...), ainsi qu'&agrave; Sal&eacute;, T&eacute;mara et Harhoura."
              />
              <FaqItem
                question="Comment obtenir un devis ?"
                answer="Envoyez-moi une ou plusieurs photos de votre jardin sur WhatsApp. Je vous r&eacute;ponds sous 1 heure avec un devis d&eacute;taill&eacute;, c'est gratuit !"
              />
              <FaqItem
                question="Quels sont vos d&eacute;lais d'intervention ?"
                answer="En g&eacute;n&eacute;ral sous 24 &agrave; 48 heures. Pour les urgences, j'essaie de venir le jour m&ecirc;me."
              />
              <FaqItem
                question="Fournissez-vous le mat&eacute;riel ?"
                answer="Oui, je viens avec tout mon mat&eacute;riel professionnel : tondeuse, taille-haie, s&eacute;cateurs, souffleur, etc."
              />
              <FaqItem
                question="Proposez-vous des formules d'entretien r&eacute;gulier ?"
                answer="Oui ! Je propose des forfaits mensuels ou bimensuels. C'est la solution la plus &eacute;conomique pour un jardin toujours impeccable."
              />
              <FaqItem
                question="Que faites-vous des d&eacute;chets verts ?"
                answer="Je m'occupe de tout : ramassage, nettoyage et &eacute;vacuation des d&eacute;chets verts. Jardin propre garanti."
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== A PROPOS + CTA BENTO ===== */}
      <section className="px-4 md:px-6 py-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* A propos */}
          <div className="md:col-span-2 bg-white p-8 md:p-10 rounded-xl border border-gray-200">
            <h2 className="text-2xl font-bold text-emerald-950 mb-4">&Agrave; propos de {GARDENER_NAME}</h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-6">
              Bonjour, je suis artisan jardinier ind&eacute;pendant. Mon objectif est simple : vous offrir un service de qualit&eacute;, ponctuel et honn&ecirc;te. En faisant appel &agrave; moi, vous soutenez un p&egrave;re de famille travailleur.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="flex items-center gap-2 font-medium text-emerald-800 bg-emerald-50 px-4 py-2 rounded-xl text-sm"><CheckCircle2 size={18} className="text-emerald-500" /> Travail rigoureux</span>
              <span className="flex items-center gap-2 font-medium text-emerald-800 bg-emerald-50 px-4 py-2 rounded-xl text-sm"><CheckCircle2 size={18} className="text-emerald-500" /> Ponctualit&eacute;</span>
              <span className="flex items-center gap-2 font-medium text-emerald-800 bg-emerald-50 px-4 py-2 rounded-xl text-sm"><CheckCircle2 size={18} className="text-emerald-500" /> Discr&eacute;tion</span>
            </div>
          </div>

          {/* CTA carte */}
          <div className="bg-[#25D366] text-white p-8 rounded-xl flex flex-col justify-between">
            <div>
              <MessageCircle size={32} className="mb-4" />
              <h3 className="text-xl font-bold mb-2">Envoyez une photo de votre jardin</h3>
              <p className="text-white/80 text-sm mb-6">Estimation gratuite sous 1 heure, sans engagement.</p>
            </div>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-white text-emerald-800 px-6 py-3.5 rounded-md font-bold transition-transform active:scale-95 hover:bg-white"
            >
              Ouvrir WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="bg-gray-950 text-white mt-6 py-12 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            <div>
              <p className="font-extrabold text-lg mb-3">El Gardinero</p>
              <p className="text-gray-400 text-sm leading-relaxed">
                Artisan jardinier ind&eacute;pendant &agrave; Rabat. Entretien, taille, am&eacute;nagement et nettoyage de jardins.
              </p>
            </div>
            <div>
              <p className="font-bold text-sm mb-3 text-gray-300">Zones d&apos;intervention</p>
              <div className="flex flex-wrap gap-2">
                {[
                  { name: 'Hay Riad', slug: 'hay-riad' },
                  { name: 'Souissi', slug: 'souissi' },
                  { name: 'Agdal', slug: 'agdal' },
                  { name: 'Sal\u00e9', slug: 'sale' },
                  { name: 'T\u00e9mara', slug: 'temara' },
                  { name: 'Harhoura', slug: 'harhoura' },
                ].map(z => (
                  <Link key={z.slug} href={`/jardinier-${z.slug}`} className="bg-gray-800 text-gray-300 hover:text-white hover:bg-gray-700 px-3 py-1 rounded-lg text-xs transition-colors">{z.name}</Link>
                ))}
              </div>
            </div>
            <div>
              <p className="font-bold text-sm mb-3 text-gray-300">Contact</p>
              <div className="space-y-2">
                <a href={`tel:${PHONE_LINK}`} className="flex items-center gap-2 text-gray-400 hover:text-white text-sm transition-colors">
                  <Phone size={14} /> {PHONE_DISPLAY}
                </a>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-[#25D366] text-sm transition-colors">
                  <MessageCircle size={14} /> WhatsApp
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-gray-600 text-xs">
            <p>&copy; {new Date().getFullYear()} {GARDENER_NAME} &mdash; Jardinier Rabat</p>
            <a href="/mentions-legales" className="hover:text-gray-400 underline">Mentions l&eacute;gales</a>
          </div>
        </div>
      </footer>

    </main>
  );
}

function BentoStat({ value, label, accent }: { value: string; label: string; accent?: boolean }) {
  return (
    <div className={`p-6 rounded-lg text-center ${accent ? 'bg-emerald-800 text-white' : 'bg-white border border-gray-200'}`}>
      <p className={`text-2xl md:text-3xl font-extrabold ${accent ? 'text-white' : 'text-emerald-700'}`}>{value}</p>
      <p className={`text-sm mt-1 ${accent ? 'text-emerald-200' : 'text-gray-500'}`}>{label}</p>
    </div>
  );
}

function StepCard({ num, icon, title, desc }: { num: number; icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="bg-white p-8 rounded-xl border border-gray-200 relative">
      <div className="absolute top-6 right-6 text-4xl font-extrabold text-gray-100">{`0${num}`}</div>
      <div className="bg-emerald-50 p-3 rounded-xl mb-5 w-fit">{icon}</div>
      <h3 className="font-bold text-lg mb-2 text-gray-900">{title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  return (
    <details className="group bg-white rounded-lg border border-gray-200 overflow-hidden">
      <summary className="flex items-center justify-between cursor-pointer p-5 font-semibold text-gray-900 hover:bg-emerald-50/50 transition-colors">
        {question}
        <ChevronDown size={20} className="text-gray-400 group-open:rotate-180 transition-transform shrink-0 ml-4" />
      </summary>
      <p className="px-5 pb-5 text-gray-600 leading-relaxed">{answer}</p>
    </details>
  );
}
