"use client";

import { motion } from "framer-motion";

export default function ManifestoReboot() {
  return (
    <section className="relative w-full py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        
        <div className="lg:col-span-4 flex flex-col justify-between border-l border-action-neon pl-6 py-2">
          <div className="flex flex-col gap-2">
            <span className="font-montserrat text-[10px] text-action-neon font-bold tracking-[0.2em] uppercase">
              02 — Le Concept
            </span>
            <h2 className="font-outfit text-4xl md:text-5xl font-light text-white tracking-tight leading-none">
              Sortir du <br />
              <span className="font-medium italic">cadre.</span>
            </h2>
          </div>
          <span className="hidden lg:block font-mono text-[10px] text-white/30 uppercase tracking-widest">
            REBOOT_OVERVIEW
          </span>
        </div>

        <div className="lg:col-span-8 flex flex-col gap-10">
          <p className="font-inter text-2xl md:text-3xl font-light text-[#FAFAFA] leading-snug tracking-tight">
            Le musée n'est pas un sanctuaire figé. C'est un espace de confrontation et d'expérience collective.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-white/70 font-inter text-sm md:text-base leading-relaxed">
            <p className="border-t border-white/10 pt-6">
              REBOOT réinvestit la nef monumentale des Abattoirs. Les volumes en briques s'adaptent aux exigences d'une direction artistique contemporaine où l'œuvre d'art et le public partagent le même espace.
            </p>
            <p className="border-t border-white/10 pt-6">
              L'objectif est de proposer une déambulation libre, guidée par un travail scénographique minimaliste et une programmation sonore pointue. Aucune barrière académique, l'accent est mis sur l'essentiel.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-2 pt-6 border-t border-white/10">
            <motion.div whileTap={{ scale: 0.98 }} className="flex flex-col gap-1 p-4 bg-white/[0.02] border border-white/5 rounded-xl cursor-default">
              <span className="font-outfit text-3xl font-light text-white">100%</span>
              <span className="font-inter text-[9px] text-white/40 uppercase tracking-widest font-bold">Immersion sonore</span>
            </motion.div>
            
            <motion.div whileTap={{ scale: 0.98 }} className="flex flex-col gap-1 p-4 bg-white/[0.02] border border-white/5 rounded-xl cursor-default">
              <span className="font-outfit text-3xl font-light text-white">800</span>
              <span className="font-inter text-[9px] text-white/40 uppercase tracking-widest font-bold">Places par édition</span>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}