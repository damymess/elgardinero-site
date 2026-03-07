import Link from "next/link";
import { Phone, MessageCircle } from "lucide-react";

const PHONE_LINK = "+212649231545";
const WHATSAPP_NUM = "212649231545";

export default function Navbar() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUM}?text=${encodeURIComponent("Bonjour, je vous contacte depuis votre site web.")}`;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 md:px-6 h-14 flex items-center justify-between">
        <Link href="/" className="font-extrabold text-gray-900 text-lg tracking-tight">
          El Gardinero
        </Link>
        <div className="hidden md:flex items-center gap-6">
          <Link href="/#services" className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors">Services &amp; Tarifs</Link>
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
    </nav>
  );
}
