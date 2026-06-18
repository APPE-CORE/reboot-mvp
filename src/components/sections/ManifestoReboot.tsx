"use client";

import { motion } from "framer-motion";

export default function ManifestoReboot() {
  return (
    <section className="relative w-full py-24 md:py-36 px-6 md:px-12 lg:px-24 z-10 bg-[#000000] border-t border-white/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        
        <div className="lg:col-span-4 flex flex-col justify-between border-l border-action-neon pl-6 py-2">
          <div className="flex flex-col gap-2">
            <span className="font-montserrat text-[10px] text-action-neon font-bold tracking-[0.2em] uppercase">
              02 — Positionnement
            </span>
            <h2 className="font-outfit text-4xl md:text-5xl font-light text-white tracking-tight leading-none">
              Désacraliser <br />
              <span className="font-medium italic">l'espace.</span>
            </h2>
          </div>
          <span className="hidden lg:block font-mono text-[10px] text-white/30 uppercase tracking-widest">
            REBOOT_PROP_VALUE
          </span>
        </div>

        <div className="lg:col-span-8 flex flex-col gap-12">
          <p className="font-inter text-2xl md:text-4xl font-light text-[#FAFAFA] leading-snug tracking-tight">
            Nous refusons le silence de la contemplation passive. L'art contemporain n'est pas une archive figée, c'est une matière vivante qui exige de l'intensité collective.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-white/80 font-inter text-sm md:text-base leading-relaxed">
            <p className="border-t border-white/10 pt-6">
              REBOOT orchestre la collision directe entre l'héritage d'une institution centenaire et l'énergie brute des cultures nocturnes. La nef monumentale du musée est réquisitionnée, les volumes en briques deviennent le théâtre d'une expérience immersive totale.
            </p>
            <p className="border-t border-white/10 pt-6">
              Vous ne venez pas pour observer une exposition à distance réglementaire. Vous venez interagir au cœur des œuvres, guidés par une scénographie lumineuse architecturale et une programmation sonore sans concession.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-4 pt-8 border-t border-white/10">
            <motion.div 
              whileHover={{ borderColor: "rgba(209,255,0,0.6)" }}
              whileTap={{ scale: 0.98 }}
              className="flex flex-col gap-1 p-4 bg-white/[0.02] border border-white/5 rounded-xl transition-colors duration-150 cursor-pointer group active:border-action-neon"
            >
              <span className="font-outfit text-3xl font-light text-white group-hover:text-action-neon transition-colors">100%</span>
              <span className="font-inter text-[10px] text-white/50 uppercase tracking-widest font-bold">Hybridation culturelle</span>
            </motion.div>
            
            <motion.div 
              whileHover={{ borderColor: "rgba(188,19,254,0.6)" }}
              whileTap={{ scale: 0.98 }}
              className="flex flex-col gap-1 p-4 bg-white/[0.02] border border-white/5 rounded-xl transition-colors duration-150 cursor-pointer group active:border-action-laser"
            >
              <span className="font-outfit text-3xl font-light text-white group-hover:text-action-laser transition-colors">0</span>
              <span className="font-inter text-[10px] text-white/50 uppercase tracking-widest font-bold">Contrainte académique</span>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}