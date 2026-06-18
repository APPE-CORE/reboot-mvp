"use client";

import { motion } from "framer-motion";
import { Ticket } from "lucide-react";
import Link from "next/link";

export default function FomoReboot() {
  return (
    <section className="relative w-full py-24 px-6 md:px-12 lg:px-24 bg-[#000000] border-t border-white/5">
      <div className="max-w-4xl mx-auto flex flex-col gap-12">
        
        <div className="flex flex-col items-center text-center">
          <span className="font-montserrat text-action-neon font-bold tracking-[0.2em] uppercase text-[10px] mb-4">
            04 — Disponibilités
          </span>
          <h2 className="font-outfit text-4xl md:text-5xl font-light text-white tracking-tight">
            Preuve de <span className="font-medium italic">rareté.</span>
          </h2>
        </div>

        <motion.div 
          whileHover={{ borderColor: "rgba(255,255,255,0.3)" }}
          className="w-full bg-[#050505] border border-white/10 rounded-2xl flex flex-col md:flex-row relative overflow-hidden transition-all duration-200"
        >
          {/* Section Principale */}
          <div className="flex-1 p-6 md:p-8 flex flex-col justify-between gap-8 border-b md:border-b-0 md:border-r border-dashed border-white/20 relative">
            <div className="hidden md:block absolute -right-[8px] top-0 w-4 h-4 bg-black rounded-full translate-y-[-50%] z-20 border-b border-white/10" />
            <div className="hidden md:block absolute -right-[8px] bottom-0 w-4 h-4 bg-black rounded-full translate-y-[50%] z-20 border-t border-white/10" />

            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-action-laser font-mono text-[10px] uppercase tracking-widest font-bold">
                <span className="w-1.5 h-1.5 bg-action-laser rounded-full animate-ping" />
                Alerte d'épuisement des pass
              </div>
              <h3 className="font-outfit text-2xl md:text-3xl font-light text-white tracking-tight">
                Jauge verrouillée à <span className="font-medium text-action-neon">85%</span>.
              </h3>
              <p className="font-inter text-xs md:text-sm text-white/70 leading-relaxed max-w-md">
                Afin de préserver l'intégrité absolue des collections d'art contemporain et de garantir la sécurité des œuvres exposées, la capacité est restreinte à 800 personnes par édition.
              </p>
            </div>

            <div className="flex items-center gap-6 font-mono text-[10px] text-white/40 uppercase tracking-widest">
              <div>ID: RBT-S01-ED01</div>
              <div>CAPACITÉ: 800 MAX</div>
            </div>
          </div>

          {/* Talon */}
          <div className="w-full md:w-72 p-6 md:p-8 bg-white/[0.01] flex flex-col justify-between items-stretch gap-6 text-center md:text-right">
            <div className="flex flex-col md:items-end">
              <span className="font-montserrat text-white/40 uppercase tracking-widest text-[9px] font-bold">
                Frictionless Checkout
              </span>
              <span className="font-outfit text-5xl font-light text-white tracking-tighter mt-1">
                20<span className="text-2xl text-white/40 font-normal">€</span>
              </span>
              <span className="font-inter text-[10px] text-action-neon font-medium uppercase mt-1 tracking-wide">
                Pass culture accepté
              </span>
            </div>

            <Link 
              href="/billetterie" 
              className="w-full bg-white text-black hover:bg-action-neon hover:text-black active:bg-action-neon active:text-black px-6 py-3.5 rounded-xl font-inter font-bold text-xs uppercase tracking-wider transition-colors duration-150 flex items-center justify-center gap-2 shrink-0 select-none"
            >
              <Ticket className="w-4 h-4" />
              Sécuriser l'accès
            </Link>

            <span className="font-mono text-[9px] text-white/30 uppercase tracking-widest text-center md:text-right font-bold">
              Aucun guichet sur place
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}