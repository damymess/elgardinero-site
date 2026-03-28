"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, MessageCircle, Menu, X } from "lucide-react";

const PHONE_LINK = "+212661238525";
const WHATSAPP_NUM = "212661238525";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUM}?text=${encodeURIComponent("Bonjour, je vous contacte depuis votre site web.")}`;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 md:px-6 h-14 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-1.5 text-gray-700 hover:text-gray-900"
            aria-label="Menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
          <Link href="/" className="flex items-center">
            <Image src="/logo-icon.jpg" alt="El Gardinero" width={36} height={36} className="md:hidden rounded-sm" />
            <Image src="/logo-horizontal.jpg" alt="El Gardinero - Artisan Jardinier Rabat" width={180} height={45} className="hidden md:block" />
          </Link>
        </div>
        <div className="hidden md:flex items-center gap-6">
          <Link href="/#services" className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors">Services &amp; Tarifs</Link>
          <Link href="/paysagiste-rabat" className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors">Paysagiste</Link>
          <Link href="/blog" className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors">Blog</Link>
        </div>
        <div className="flex items-center gap-3">
          <a
            href={`tel:${PHONE_LINK}`}
            className="hidden sm:flex items-center gap-2 text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors"
          >
            <Phone size={16} />
            06 49 23 15 45
          </a>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2 rounded-md font-bold text-sm transition-transform active:scale-95"
          >
            <MessageCircle size={16} />
            <span className="hidden sm:inline">WhatsApp</span>
            <span className="sm:hidden">Devis</span>
          </a>
        </div>
      </div>
      {/* Menu mobile */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="flex flex-col px-4 py-3 gap-1">
            <Link href="/" onClick={() => setOpen(false)} className="py-2.5 px-3 rounded-lg text-gray-800 font-medium hover:bg-gray-50 transition-colors">Accueil</Link>
            <Link href="/#services" onClick={() => setOpen(false)} className="py-2.5 px-3 rounded-lg text-gray-800 font-medium hover:bg-gray-50 transition-colors">Services &amp; Tarifs</Link>
            <Link href="/paysagiste-rabat" onClick={() => setOpen(false)} className="py-2.5 px-3 rounded-lg text-gray-800 font-medium hover:bg-gray-50 transition-colors">Paysagiste</Link>
            <Link href="/blog" onClick={() => setOpen(false)} className="py-2.5 px-3 rounded-lg text-gray-800 font-medium hover:bg-gray-50 transition-colors">Blog</Link>
            <a href={`tel:${PHONE_LINK}`} className="py-2.5 px-3 rounded-lg text-gray-800 font-medium hover:bg-gray-50 transition-colors flex items-center gap-2">
              <Phone size={16} /> 06 49 23 15 45
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
