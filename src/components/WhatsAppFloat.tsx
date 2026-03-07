"use client";

import { MessageCircle } from "lucide-react";

const WHATSAPP_NUM = "212649231545";

export default function WhatsAppFloat() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUM}?text=${encodeURIComponent("Bonjour, je souhaite un devis pour l'entretien de mon jardin.")}`;

  return (
    /* Mobile uniquement : barre fixe en bas */
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 p-3 bg-white/80 backdrop-blur-sm border-t border-neutral-200">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 bg-[#25D366] text-white w-full py-3.5 rounded-md shadow-md font-bold text-base"
      >
        <MessageCircle size={22} />
        Demander un devis gratuit
      </a>
    </div>
  );
}
