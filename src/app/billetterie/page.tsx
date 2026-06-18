"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { AlertCircle, Clock, ChevronLeft, Minus, Plus } from "lucide-react";
import Link from "next/link";
import BottomSheet from "@/components/checkout/BottomSheet"; // IMPORT DU COMPOSANT

export default function BilletteriePage() {
  const [quantity, setQuantity] = useState(1);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false); // GESTION DE L'ÉTAT
  const price = 20;
  const total = price * quantity;

  return (
    <>
      <main className="bg-[#000000] text-white min-h-[calc(100dvh-72px)] flex flex-col">
        {/* Navigation retour */}
        <div className="px-4 py-6 md:px-8 border-b border-white/10">
          <Link href="/" className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors uppercase font-montserrat text-xs font-bold tracking-widest">
            <ChevronLeft className="w-4 h-4" />
            Retour
          </Link>
        </div>

        <div className="flex-1 max-w-3xl w-full mx-auto px-4 py-8 md:px-8 flex flex-col">
          {/* En-tête de page */}
          <h1 className="font-outfit text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-2">
            Sélection
          </h1>
          <p className="font-montserrat text-sm text-action-neon uppercase tracking-widest font-bold mb-10">
            Reboot — Édition 01
          </p>

          {/* Bloc FOMO (Urgence) */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-[#0A0A0A] border border-action-laser/30 p-6 rounded-none mb-10 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-white/10">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "85%" }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="h-full bg-action-laser"
              />
            </div>
            <div className="flex items-start gap-4">
              <AlertCircle className="w-6 h-6 text-action-laser shrink-0 mt-1" />
              <div>
                <h2 className="font-inter font-bold text-lg uppercase tracking-wider text-action-laser">Alerte Jauge</h2>
                <p className="font-inter text-sm text-white/70 mt-1">680 billets vendus sur 800. La billetterie fermera automatiquement une fois le quota atteint.</p>
              </div>
            </div>
          </motion.div>

          {/* Sélecteur de billets */}
          <div className="flex flex-col gap-6 mb-auto">
            <div className="flex items-center justify-between border-b border-white/10 pb-6">
              <div>
                <h3 className="font-outfit text-2xl font-medium uppercase tracking-tight">Entrée Standard</h3>
                <p className="font-inter text-sm text-white/50 mt-1">Accès total de 21h à 03h.</p>
              </div>
              
              <div className="flex items-center gap-4 bg-[#111111] p-2">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="font-outfit text-xl font-medium w-6 text-center">{quantity}</span>
                <button 
                  onClick={() => setQuantity(Math.max(1, Math.min(4, quantity + 1)))}
                  className="w-10 h-10 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Zone de transaction (Sticky) */}
          <div className="sticky bottom-4 mt-12 bg-[#000000] pt-4 border-t border-white/10">
            <div className="flex justify-between items-end mb-6">
              <span className="font-inter font-bold text-sm uppercase tracking-widest text-white/50">Total</span>
              <span className="font-outfit text-4xl font-black">{total} €</span>
            </div>

            <button 
              onClick={() => setIsCheckoutOpen(true)} // DÉCLENCHE LE TIROIR
              className="w-full bg-action-neon text-black font-outfit font-black uppercase text-2xl py-6 flex items-center justify-center gap-3 transition-transform active:scale-95 hover:bg-white"
            >
              Continuer
            </button>
            
            <div className="flex items-center justify-center gap-2 mt-4 text-white/30">
              <Clock className="w-3 h-3" />
              <span className="font-inter text-[10px] uppercase tracking-widest font-bold">Réservation bloquée pour 10:00</span>
            </div>
          </div>
        </div>
      </main>

      {/* INJECTION DU BOTTOM SHEET */}
      <BottomSheet 
        isOpen={isCheckoutOpen} 
        onClose={() => setIsCheckoutOpen(false)} 
        total={total} 
        quantity={quantity} 
      />
    </>
  );
}