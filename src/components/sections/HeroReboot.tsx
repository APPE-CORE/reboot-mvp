"use client";

import { motion } from "framer-motion";

export default function HeroReboot() {
  return (
    <section className="relative w-full min-h-[90vh] flex flex-col justify-center px-6 md:px-12 lg:px-24 overflow-hidden pt-20">
      
      {/* Éléments graphiques originaux (Bruit visuel et lumière) */}
      <div className="absolute top-10 right-10 w-[40vw] h-[40vw] bg-action-laser/20 blur-[140px] rounded-full pointer-events-none"></div>
      
      <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-12 w-full max-w-7xl mx-auto">
        
        {/* Typographie principale : fine, pure, impactante */}
        <div className="flex flex-col">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-8"
          >
            <span className="w-2 h-2 bg-action-laser rounded-full"></span>
            <span className="font-montserrat text-xs uppercase tracking-[0.2em] text-white/70 font-medium">
              Saison 01 — Les Abattoirs
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="font-outfit text-6xl md:text-7xl lg:text-[8rem] font-light text-white leading-[1.05] tracking-tight"
          >
            L'art moderne <br />
            rencontre <span className="font-medium italic text-action-neon">la nuit.</span>
          </motion.h1>
        </div>

        {/* Paragraphe décalé pour la structure */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="md:max-w-sm pb-4 md:pb-8"
        >
          <p className="font-inter text-base md:text-lg text-white/80 leading-relaxed border-l border-action-neon/50 pl-6">
            Une hybridation totale. Chaque premier samedi du mois, l'institution devient un tiers-lieu éphémère. Programmation secrète, jauge stricte.
          </p>
        </motion.div>

      </div>
    </section>
  );
}