import type { Metadata } from "next";
import { Inter } from "next/font/google";
import GoogleAnalytics from "./google-analytics";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://elgardinero.ma"),
  title: {
    default: "Jardinier Rabat | Entretien, Taille et Nettoyage de Jardins - El Gardinero",
    template: "%s | El Gardinero - Jardinier Rabat",
  },
  description:
    "Artisan jardinier de confiance a Rabat, Hay Riad, Souissi, Temara et Sale. Entretien de villas, tonte, elagage et nettoyage. Devis gratuit sur WhatsApp.",
  keywords: [
    "jardinier rabat",
    "entretien jardin rabat",
    "jardinier hay riad",
    "jardinier souissi",
    "paysagiste rabat",
    "taille haie temara",
    "jardinier sale",
    "nettoyage jardin rabat",
    "prix jardinier maroc",
  ],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://elgardinero.ma",
    siteName: "El Gardinero",
    title: "Jardinier Rabat | Entretien, Taille et Nettoyage de Jardins",
    description:
      "Artisan jardinier de confiance a Rabat. Entretien de villas, tonte, elagage et nettoyage. Devis gratuit sur WhatsApp.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "El Gardinero - Jardinier professionnel a Rabat",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jardinier Rabat | El Gardinero",
    description:
      "Artisan jardinier de confiance a Rabat. Devis gratuit sur WhatsApp.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://elgardinero.ma",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "El Gardinero",
  description:
    "Artisan jardinier de confiance a Rabat. Entretien de villas, tonte, elagage, taille de haies et nettoyage de jardins.",
  url: "https://elgardinero.ma",
  telephone: "+212649231545",
  image: "https://elgardinero.ma/og-image.jpg",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Rabat",
    addressRegion: "Rabat-Sale-Kenitra",
    addressCountry: "MA",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 34.0209,
    longitude: -6.8416,
  },
  areaServed: [
    { "@type": "City", name: "Rabat" },
    { "@type": "City", name: "Sale" },
    { "@type": "City", name: "Temara" },
    { "@type": "City", name: "Harhoura" },
  ],
  serviceType: [
    "Entretien de jardins",
    "Taille de haies",
    "Elagage",
    "Tonte de pelouse",
    "Nettoyage de jardins",
    "Plantation",
  ],
  priceRange: "$$",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "127",
    bestRating: "5",
    worstRating: "1",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "08:00",
    closes: "18:00",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} pt-14`}>
        <GoogleAnalytics />
        <Navbar />
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  );
}
