import type { Metadata } from "next";
import localFont from "next/font/local";
import GoogleAnalytics from "./google-analytics";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://elgardinero.ma"),
  title: {
    default: "Jardinier & Paysagiste Rabat | El Gardinero",
    template: "%s | El Gardinero - Jardinier Paysagiste Rabat",
  },
  description:
    "Jardinier paysagiste de confiance a Rabat, Hay Riad, Souissi, Temara et Sale. Entretien, amenagement paysager, tonte, elagage et nettoyage. Devis gratuit WhatsApp.",
  keywords: [
    "jardinier rabat",
    "paysagiste rabat",
    "jardinier paysagiste rabat",
    "entretien jardin rabat",
    "amenagement paysager rabat",
    "conception paysagere rabat",
    "jardinier hay riad",
    "jardinier souissi",
    "taille haie temara",
    "jardinier sale",
    "nettoyage jardin rabat",
    "prix jardinier maroc",
    "prix paysagiste maroc",
  ],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://elgardinero.ma",
    siteName: "El Gardinero",
    title: "Jardinier & Paysagiste Rabat | El Gardinero",
    description:
      "Jardinier paysagiste de confiance a Rabat. Entretien, amenagement paysager, tonte, elagage et nettoyage. Devis gratuit WhatsApp.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "El Gardinero - Jardinier paysagiste a Rabat",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jardinier & Paysagiste Rabat | El Gardinero",
    description:
      "Jardinier paysagiste de confiance a Rabat. Entretien et amenagement paysager. Devis gratuit WhatsApp.",
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
    "Jardinier paysagiste de confiance a Rabat. Entretien de villas, amenagement paysager, tonte, elagage, taille de haies et nettoyage de jardins.",
  url: "https://elgardinero.ma",
  telephone: "+212661238525",
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
    "Amenagement paysager",
    "Conception paysagere",
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
    <html lang="fr" className={cn("scroll-smooth", "font-sans", geist.variable)}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${geistSans.variable} antialiased pt-14`}>
        <GoogleAnalytics />
        <Navbar />
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  );
}
