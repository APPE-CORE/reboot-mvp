"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, CameraOff } from "lucide-react";

export default function LogisticsReboot() {
  return (
    <section className="relative w-full py-24 px-6 md:px-12 lg:px-24 bg-[#000000] border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        
        {/* En-tête de section */}
        <div className="flex flex-col items-center text-center">
          <span className="font-montserrat text-white/50 font-bold tracking-[0.2em] uppercase text-[10px] mb-4">
            05 — Directives
          </span>
          <h2 className="font-outfit text-4xl md:text-5xl font-medium text-white tracking-tight">
            Paramètres d'accès.
          </h2>
        </div>

        {/* Grille Logistique */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          
          {/* Localisation */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center text-center p-6"
          >
            <div className="w-14 h-14 bg-white/5 rounded-full flex items-center justify-center mb-6 border border-white/10">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-outfit text-2xl font-medium text-white mb-3">Le Lieu</h3>
            <p className="font-inter text-white/50 text-sm leading-relaxed mb-4">
              Les Abattoirs, Musée - Frac Occitanie Toulouse. L'entrée s'effectue par le parvis principal.
            </p>
            <span className="font-inter text-white font-medium text-sm">
              76 Allées Charles de Fitte, 31300 Toulouse
            </span>
          </motion.div>

          {/* Horaires */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col items-center text-center p-6"
          >
            <div className="w-14 h-14 bg-white/5 rounded-full flex items-center justify-center mb-6 border border-white/10">
              <Clock className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-outfit text-2xl font-medium text-white mb-3">Le Timing</h3>
            <p className="font-inter text-white/50 text-sm leading-relaxed mb-4">
              Ouverture des portes à 21H00 précises. L'événement se clôture à 03H00. 
            </p>
            <span className="font-inter text-action-laser font-bold text-sm uppercase tracking-widest">
              Fermeture des accès à 23H30
            </span>
          </motion.div>

          {/* Politique */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-center text-center p-6"
          >
            <div className="w-14 h-14 bg-white/5 rounded-full flex items-center justify-center mb-6 border border-white/10">
              <CameraOff className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-outfit text-2xl font-medium text-white mb-3">La Règle</h3>
            <p className="font-inter text-white/50 text-sm leading-relaxed mb-4">
              Pour préserver l'immersion et l'anonymat, une pastille sera apposée sur les caméras de vos téléphones à l'entrée.
            </p>
            <span className="font-inter text-white font-medium text-sm">
              No-Camera Policy stricte.
            </span>
          </motion.div>

        </div>
      </div>
    </section>
  );
}