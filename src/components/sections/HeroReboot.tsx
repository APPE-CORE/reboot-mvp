"use client";

import { motion } from "framer-motion";
import { Ticket, ShieldCheck, Users } from "lucide-react";

export default function HeroReboot() {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center pt-14 md:pt-16 pb-12 px-6 md:px-12 lg:px-24 overflow-hidden bg-[#000000]">
      
      {/* Texture d'arrière-plan en couleur native */}
      <img 
        src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600" 
        alt="Les Abattoirs Architecture" 
        className="absolute inset-0 z-0 w-full h-full object-cover object-center opacity-55 pointer-events-none select-none transition-opacity duration-300"
      />
      
      {/* Filtres de contraste de l'écriture */}
      <div className="absolute inset-0 z-10 bg-black/40 pointer-events-none" />
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/80 via-black/10 to-black/80 pointer-events-none" />
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/60 via-transparent to-black pointer-events-none" />

      <div className="relative z-20 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center -mt-10">
        
        {/* Accroche Éditoriale */}
        <div className="lg:col-span-7 flex flex-col items-start">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/10 border border-white/20 mb-6 backdrop-blur-sm"
          >
            <span className="w-1.5 h-1.5 bg-action-neon rounded-full animate-pulse"></span>
            <span className="font-montserrat text-[10px] uppercase tracking-[0.15em] text-white font-bold">
              Musée Les Abattoirs — Toulouse
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="font-outfit text-5xl md:text-6xl lg:text-[5.5rem] font-light text-[#FAFAFA] leading-[1.05] tracking-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]"
          >
            L'art contemporain <br />
            rencontre <span className="font-bold text-action-neon select-none">la nuit.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mt-6 font-inter text-base md:text-lg text-white/90 max-w-xl leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]"
          >
            Chaque premier samedi du mois, l'institution devient un tiers-lieu éphémère de 20h00 à 02h30. Une collision brute entre l'héritage patrimonial et l'intensité de la culture club.
          </motion.p>
        </div>

        {/* Module d'Achat Exclusif */}
        <div className="lg:col-span-5 w-full">
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="w-full bg-[#050505]/95 backdrop-blur-md border border-white/20 rounded-2xl p-6 md:p-8 flex flex-col gap-6 shadow-[0_30px_60px_rgba(0,0,0,0.95)]"
          >
            <div className="flex flex-col border-b border-white/10 pb-4">
              <span className="font-montserrat text-[10px] text-action-neon uppercase tracking-widest font-bold">
                Statut du Drop Actuel
              </span>
              <h2 className="font-outfit text-2xl font-medium text-white mt-1">Accès Limité</h2>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3.5 bg-white/[0.02] border border-white/5 p-3 rounded-xl">
                <Users className="w-5 h-5 text-white/80 shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span className="font-inter text-xs font-bold text-white">Capacité Réglementaire ERP</span>
                  <span className="font-inter text-xs text-white/60 mt-0.5">
                    Jauge strictement bloquée à <span className="text-white font-bold">800 entrées</span>. Aucun rajout sur place.
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3.5 bg-white/[0.02] border border-white/5 p-3 rounded-xl">
                <ShieldCheck className="w-5 h-5 text-action-neon shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span className="font-inter text-xs font-bold text-white">Dispositif État Intégré</span>
                  <span className="font-inter text-xs text-white/60 mt-0.5">
                    18-24 ans : <span className="text-action-neon font-bold">100% Finançable</span> via votre application Pass Culture.
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3.5 bg-white/[0.02] border border-white/5 p-3 rounded-xl">
                <Ticket className="w-5 h-5 text-white/80 shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span className="font-inter text-xs font-bold text-white">Tarification Unique</span>
                  <span className="font-inter text-xs text-white/60 mt-0.5">
                    <span className="text-white font-bold">20,00 €</span> • Taxes et accès aux collections inclus.
                  </span>
                </div>
              </div>
            </div>

            <div className="text-[10px] font-mono text-white/40 uppercase tracking-wider text-center pt-2">
              Délivrance immédiate du billet • format wallet & qr code
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}