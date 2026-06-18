"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function RebootLanding() {
  return (
    <div className="flex flex-col bg-[#000000] relative pb-32">
      
      {/* BACKGROUND : Grille Architecturale Subtile */}
      <div 
        className="fixed inset-0 z-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
          backgroundSize: '4rem 4rem',
          maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, #000 20%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, #000 20%, transparent 100%)'
        }}
      />

      {/* SECTION 1 : HERO */}
      <section className="relative w-full h-[calc(100dvh-72px)] flex flex-col items-center justify-center px-6 md:px-12 overflow-hidden z-10">
        <div className="flex flex-col items-center text-center max-w-4xl -mt-16 md:-mt-24">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8 md:mb-10"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-action-neon opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-action-neon"></span>
            </span>
            <span className="font-inter text-[10px] md:text-xs text-white/80 uppercase tracking-widest font-semibold">
              Les Abattoirs — Saison 01
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
            className="font-outfit text-5xl md:text-7xl lg:text-8xl font-light tracking-tight text-white leading-[1.1] md:leading-[1.05]"
          >
            L'art contemporain <br />
            <span className="font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50">
              percute la nuit.
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-6 md:mt-8 font-inter text-sm md:text-lg text-white/50 max-w-lg leading-relaxed"
          >
            Chaque premier samedi du mois, l'institution devient un tiers-lieu éphémère. Une jauge stricte, une nuit unique.
          </motion.p>
        </div>
      </section>

      {/* SECTION 2 : LE MANIFESTE */}
      <section className="relative w-full py-24 md:py-40 px-6 md:px-12 lg:px-24 z-10 border-t border-white/10 bg-[#000000]">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 md:gap-24">
          
          <div className="w-full md:w-1/3">
            <span className="font-montserrat text-action-neon font-bold tracking-[0.2em] uppercase text-xs block mb-4">
              02 — Le Concept
            </span>
            <h2 className="font-outfit text-3xl md:text-4xl font-black uppercase tracking-tight text-white leading-none">
              Désacraliser <br />
              l'institution.
            </h2>
          </div>

          <div className="w-full md:w-2/3 flex flex-col gap-8">
            <p className="font-inter text-2xl md:text-4xl font-medium text-white leading-snug tracking-tight">
              Nous refusons le silence. L'art contemporain n'est pas une archive statique, c'est une matière vivante qui exige l'intensité.
            </p>
            <p className="font-inter text-base md:text-lg text-white/50 leading-relaxed max-w-2xl">
              REBOOT détruit la frontière entre la contemplation muséale et l'énergie du clubbing. La nef monumentale des Abattoirs est réquisitionnée. La scénographie architecturale est repensée. Vous ne venez pas pour observer, vous venez pour interagir au cœur des œuvres.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 mt-8 pt-8 border-t border-white/10">
              <div className="flex flex-col gap-2">
                <span className="font-outfit text-2xl font-black text-white">100%</span>
                <span className="font-inter text-xs text-white/50 uppercase tracking-widest font-bold">Hybridation culturelle</span>
              </div>
              <div className="w-px h-12 bg-white/10 hidden sm:block"></div>
              <div className="flex flex-col gap-2">
                <span className="font-outfit text-2xl font-black text-white">0</span>
                <span className="font-inter text-xs text-white/50 uppercase tracking-widest font-bold">Contrainte académique</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* FLOATING CTA */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, type: "spring", damping: 25, stiffness: 200 }}
        className="fixed bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-40 w-auto min-w-[300px] md:min-w-[380px] bg-[#111111]/90 backdrop-blur-xl border border-white/10 hover:border-white/30 transition-colors p-1.5 pl-6 rounded-full flex items-center justify-between shadow-[0_20px_40px_rgba(0,0,0,0.8)]"
      >
        <div className="flex flex-col py-1 mr-6">
          <span className="font-inter font-bold text-xs md:text-sm text-white">
            Prochain Drop
          </span>
          <span className="font-inter text-[10px] md:text-xs text-white/40 uppercase tracking-widest mt-0.5">
            800 Places Max
          </span>
        </div>

        <Link 
          href="/billetterie" 
          className="group bg-white text-black px-6 py-3 rounded-full font-inter font-bold text-sm transition-all hover:bg-action-neon flex items-center gap-2"
        >
          Réserver
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </motion.div>
      
    </div>
  );
}