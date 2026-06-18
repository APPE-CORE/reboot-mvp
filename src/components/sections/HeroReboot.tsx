"use client";

import { motion } from "framer-motion";
import { Ticket, ShieldCheck, Users, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function HeroReboot() {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center pt-14 md:pt-16 pb-12 px-6 md:px-12 lg:px-24 overflow-hidden bg-black">
      
      {/* Texture de fond */}
      <img 
        src="https://images.unsplash.com/photo-1599814812367-915c33dacd61?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
        alt="Les Abattoirs Toulouse" 
        className="absolute inset-0 z-0 w-full h-full object-cover object-center opacity-100 pointer-events-none select-none"
      />
      
      {/* Overlays de contraste */}
      <div className="absolute inset-0 z-10 bg-black/40 pointer-events-none" />
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/10 via-black/10 to-black/80 pointer-events-none" />
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/10 via-transparent to-black pointer-events-none" />

      <div className="relative z-20 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center -mt-10">
        
        {/* Éditorial */}
        <div className="lg:col-span-7 flex flex-col items-start">
          <Link href="/admin/scan" className="z-30 group inline-block mb-6">
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/10 border border-white/20 backdrop-blur-sm transition-all group-hover:bg-white/15"
            >
              <span className="w-1.5 h-1.5 bg-action-neon rounded-full animate-pulse"></span>
              <span className="font-montserrat text-[10px] uppercase tracking-[0.15em] text-white font-bold">
                Musée Les Abattoirs — Toulouse
              </span>
            </motion.div>
          </Link>

          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="font-outfit text-5xl md:text-6xl lg:text-[5.5rem] font-light text-[#FAFAFA] leading-[1.05] tracking-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]"
          >
            L'art contemporain <br />
            rencontre <span className="font-bold text-action-neon">la nuit.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="mt-6 font-inter text-base md:text-lg text-white/90 max-w-xl leading-relaxed"
          >
            Chaque premier samedi du mois, l'institution ouvre ses portes de 20h00 à 02h30. Une expérience immersive qui associe l'exigence des collections permanentes et la rigueur des cultures électroniques.
          </motion.p>
        </div>

        {/* Bloc d'Acquisition */}
        <div className="lg:col-span-5 w-full">
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full bg-[#050505]/95 backdrop-blur-md border border-white/20 rounded-2xl p-6 md:p-8 flex flex-col gap-6 shadow-2xl"
          >
            <div className="flex flex-col border-b border-white/10 pb-4">
              <span className="font-montserrat text-[10px] text-action-neon uppercase tracking-widest font-bold">
                Disponibilité du drop
              </span>
              <h2 className="font-outfit text-2xl font-medium text-white mt-1">Accès Restreint</h2>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3.5 bg-white/[0.02] border border-white/5 p-3 rounded-xl">
                <Users className="w-5 h-5 text-white/80 shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span className="font-inter text-xs font-bold text-white">Régulation de la jauge</span>
                  <span className="font-inter text-xs text-white/60 mt-0.5">
                    Capacité ERP strictement limitée à <span className="text-white font-bold">800 entrées</span>. Aucun guichet sur place.
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3.5 bg-white/[0.02] border border-white/5 p-3 rounded-xl">
                <ShieldCheck className="w-5 h-5 text-action-neon shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span className="font-inter text-xs font-bold text-white">Dispositif Pass Culture</span>
                  <span className="font-inter text-xs text-white/60 mt-0.5">
                    18-24 ans : Allocation d'État applicable. <span className="text-action-neon font-bold">Financement à 100%</span> du pass.
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3.5 bg-white/[0.02] border border-white/5 p-3 rounded-xl">
                <Ticket className="w-5 h-5 text-white/80 shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span className="font-inter text-xs font-bold text-white">Tarif Unique</span>
                  <span className="font-inter text-xs text-white/60 mt-0.5">
                    <span className="text-white font-bold">20,00 €</span> • Accès global aux expositions, performances et vestiaire.
                  </span>
                </div>
              </div>
            </div>

            <Link 
              href="/billetterie"
              className="w-full bg-white hover:bg-action-neon text-black py-4 rounded-xl font-inter font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all duration-150 group"
            >
              Réserver un pass d'accès
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <div className="text-[10px] font-mono text-white/40 uppercase tracking-wider text-center pt-1 border-t border-white/5">
              Envoi immédiat sous format Wallet & QR Code sécurisé
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}