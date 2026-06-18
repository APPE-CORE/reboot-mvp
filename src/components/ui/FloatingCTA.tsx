"use client";

import { motion } from "framer-motion";
import { ArrowRight, Flame } from "lucide-react";
import Link from "next/link";

export default function FloatingCTA() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30, x: "-50%" }}
      animate={{ opacity: 1, y: 0, x: "-50%" }}
      transition={{ type: "spring", damping: 25, stiffness: 200 }}
      whileHover={{ 
        borderColor: "rgba(209, 255, 0, 0.4)",
        boxShadow: "0 12px 30px rgba(0, 0, 0, 0.7), 0 0 15px rgba(209, 255, 0, 0.05)"
      }}
      whileTap={{ scale: 0.98 }}
      className="fixed bottom-6 md:bottom-8 left-1/2 z-50 w-[calc(100%-1.5rem)] sm:w-[calc(100%-2rem)] md:w-auto md:min-w-[460px] bg-black/85 backdrop-blur-md border border-white/10 p-2 pl-5 md:pl-6 rounded-full flex items-center justify-between transition-colors duration-200 shadow-[0_20px_40px_rgba(0,0,0,0.8)] select-none"
    >
      {/* Signaux d'Urgence / Métadonnées Panier */}
      <div className="flex flex-col pr-3 min-w-0">
        <div className="flex items-center gap-1.5 text-action-neon">
          <Flame className="w-3.5 h-3.5 animate-pulse shrink-0" />
          <span className="font-montserrat text-[9px] md:text-[10px] font-bold uppercase tracking-widest truncate">
            Dernières places
          </span>
        </div>
        <span className="font-inter text-xs text-white/70 mt-0.5 font-medium truncate">
          Tarif unique • 20,00 €
        </span>
      </div>

      {/* Action Directe : Bouton à cinétique interne */}
      <Link href="/billetterie" className="shrink-0 group">
        <motion.div
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
          className="bg-white text-black group-hover:bg-action-neon group-active:bg-action-neon px-5 py-2.5 md:px-7 md:py-3 rounded-full font-inter font-bold text-xs md:text-sm transition-colors duration-150 flex items-center gap-2"
        >
          <span>Réserver</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
        </motion.div>
      </Link>
    </motion.div>
  );
}