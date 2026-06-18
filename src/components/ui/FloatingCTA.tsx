"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function FloatingCTA() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      // On décale le CTA vers la gauche (md:right-[120px]) pour libérer la colonne du Chatbot
      className="fixed bottom-8 right-6 md:right-[120px] z-50 w-[calc(100%-3rem)] md:w-auto min-w-[320px] bg-[#000000] border border-white/20 hover:border-action-neon transition-all p-1.5 pl-6 rounded-full flex items-center justify-between"
    >
      <div className="flex flex-col py-1 mr-4">
        <span className="font-outfit font-bold text-sm text-white tracking-wide">Prochain Drop</span>
        <span className="font-inter text-[10px] text-white/50 uppercase tracking-widest mt-0.5">800 Places Max</span>
      </div>

      <Link 
        href="/billetterie" 
        className="bg-white text-black px-6 py-3 rounded-full font-inter font-bold text-sm hover:bg-action-neon transition-colors flex items-center gap-2"
      >
        Réserver
        <ArrowRight className="w-4 h-4" />
      </Link>
    </motion.div>
  );
}