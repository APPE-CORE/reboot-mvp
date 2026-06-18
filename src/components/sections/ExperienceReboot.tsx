"use client";

import { motion } from "framer-motion";
import { Disc, Zap, Sparkles, Radio } from "lucide-react";

export default function ExperienceReboot() {
  return (
    <section className="relative w-full py-24 px-6 md:px-12 lg:px-24 bg-[#000000] border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        
        {/* En-tête de section */}
        <div className="flex flex-col items-center text-center">
          <span className="font-montserrat text-action-neon font-bold tracking-[0.2em] uppercase text-[10px] mb-4">
            03 — Immersion
          </span>
          <h2 className="font-outfit text-4xl md:text-5xl font-medium text-white tracking-tight">
            L'anatomie de la nuit.
          </h2>
        </div>

        {/* BENTO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          
          {/* Bloc 1 : Line-up (Large) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2 bg-[#0A0A0A] border border-white/5 rounded-3xl p-8 md:p-12 flex flex-col justify-between group hover:border-white/10 transition-colors"
          >
            <div className="flex justify-between items-start mb-12">
              <Disc className="w-8 h-8 text-white/50 group-hover:text-action-neon transition-colors" />
              <span className="font-inter text-[10px] uppercase tracking-widest text-white/30 border border-white/10 px-3 py-1 rounded-full">
                Curated
              </span>
            </div>
            <div>
              <h3 className="font-outfit text-3xl font-medium text-white mb-3">Line-up Secret</h3>
              <p className="font-inter text-white/50 text-sm md:text-base leading-relaxed max-w-md">
                Aucun nom ne sera dévoilé avant l'ouverture des portes. Une sélection pointue de la scène électronique internationale et locale, conçue pour résonner avec l'architecture brute.
              </p>
            </div>
          </motion.div>

          {/* Bloc 2 : Mapping (Carré) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-[#0A0A0A] border border-white/5 rounded-3xl p-8 md:p-10 flex flex-col justify-between group hover:border-white/10 transition-colors relative overflow-hidden"
          >
            {/* Effet visuel intégré au bloc */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-action-laser/20 blur-[50px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
            
            <Zap className="w-8 h-8 text-action-laser mb-12 relative z-10" />
            <div className="relative z-10">
              <h3 className="font-outfit text-2xl font-medium text-white mb-2">Scénographie Visuelle</h3>
              <p className="font-inter text-white/50 text-sm leading-relaxed">
                Mapping architectural et installations lumineuses interactives générées en temps réel.
              </p>
            </div>
          </motion.div>

          {/* Bloc 3 : Sound System (Carré) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-[#0A0A0A] border border-white/5 rounded-3xl p-8 md:p-10 flex flex-col justify-between group hover:border-white/10 transition-colors"
          >
            <Radio className="w-8 h-8 text-white/50 mb-12" />
            <div>
              <h3 className="font-outfit text-2xl font-medium text-white mb-2">Acoustique Studio</h3>
              <p className="font-inter text-white/50 text-sm leading-relaxed">
                Système son immersif calibré sur mesure pour maîtriser la réverbération de la nef.
              </p>
            </div>
          </motion.div>

          {/* Bloc 4 : Bar & Mixologie (Large) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:col-span-2 bg-[#0A0A0A] border border-white/5 rounded-3xl p-8 md:p-12 flex flex-col justify-between group hover:border-white/10 transition-colors"
          >
            <div className="flex justify-between items-start mb-12">
              <Sparkles className="w-8 h-8 text-white/50 group-hover:text-action-laser transition-colors" />
              <span className="font-inter text-[10px] uppercase tracking-widest text-white/30 border border-white/10 px-3 py-1 rounded-full">
                Circuit Court
              </span>
            </div>
            <div>
              <h3 className="font-outfit text-3xl font-medium text-white mb-3">Mixologie & Vins Natures</h3>
              <p className="font-inter text-white/50 text-sm md:text-base leading-relaxed max-w-md">
                Un bar éphémère opéré par les acteurs locaux toulousains. Vins vivants, cocktails signature et bières artisanales. L'exigence s'applique aussi dans le verre.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}