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
      className="fixed bottom-6 md:bottom-8 left-1/2 z-50 w-[calc(100%-2rem)] md:w-auto md:min-w-[450px] bg-[#000000] border border-white/20 p-2 pl-5 md:pl-6 rounded-full flex items-center justify-between hover:border-action-neon active:border-action-neon transition-all duration-150 shadow-[0_15px_30px_rgba(0,0,0,0.6)]"
    >
      {/* Signaux d'Urgence */}
      <div className="flex flex-col pr-4">
        <div className="flex items-center gap-1.5 text-action-neon">
          <Flame className="w-3.5 h-3.5 animate-pulse" />
          <span className="font-montserrat text-[9px] md:text-[10px] font-bold uppercase tracking-widest">
            Dernières places
          </span>
        </div>
        <span className="font-inter text-xs text-white/60 mt-0.5 font-medium">
          Tarif Normal • 20€
        </span>
      </div>

      {/* Action Directe avec retour tactile vert */}
      <Link 
        href="/billetterie" 
        className="bg-white text-black hover:bg-action-neon hover:text-black active:bg-action-neon active:text-black px-5 py-2.5 md:px-7 md:py-3 rounded-full font-inter font-bold text-xs md:text-sm transition-colors duration-150 flex items-center gap-2 shrink-0"
      >
        Réserver
        <ArrowRight className="w-4 h-4" />
      </Link>
    </motion.div>
  );
}