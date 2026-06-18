"use client";

import { motion } from "framer-motion";

const CARDS = [
  {
    num: "01",
    title: "Scénographie Lumineuse",
    desc: "L'architecture historique de la nef est redéfinie par un système de structures lasers et d'éclairages rasants minimalistes.",
    img: "https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?q=80&w=800",
    accent: "hover:border-action-neon active:border-action-neon"
  },
  {
    num: "02",
    title: "Curation Électronique",
    desc: "Une programmation sonore tenue secrète jusqu'à l'événement, calibrée spécifiquement pour la dimension et l'acoustique du lieu.",
    img: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=800",
    accent: "hover:border-action-laser active:border-action-laser"
  },
  {
    num: "03",
    title: "Production Locale",
    desc: "Une sélection rigoureuse de brasseries artisanales et de domaines indépendants de la région toulousaine en circuit court.",
    img: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=800",
    accent: "hover:border-action-neon active:border-action-neon"
  }
];

export default function ExperienceReboot() {
  return (
    <section className="relative w-full py-24 px-4 sm:px-6 md:px-12 lg:px-24 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        
        <div className="flex flex-col items-center text-center">
          <span className="font-montserrat text-action-laser font-bold tracking-[0.2em] uppercase text-[10px] mb-3">
            03 — Le Dispositif
          </span>
          <h2 className="font-outfit text-4xl md:text-5xl font-light text-white tracking-tight">
            Les piliers de <span className="font-medium italic">l'événement.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {CARDS.map((card, i) => (
            <motion.div
              key={i}
              whileTap={{ scale: 0.99 }}
              className={`bg-[#050505] border border-white/10 rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-150 cursor-pointer group ${card.accent}`}
            >
              <div className="relative h-60 w-full overflow-hidden border-b border-white/5 bg-neutral-900">
                <img 
                  src={card.img} 
                  alt={card.title}
                  className="w-full h-full object-cover opacity-75 group-hover:opacity-90 transition-opacity duration-200"
                />
                <div className="absolute top-4 left-4 font-mono text-[10px] text-white/50 bg-black/60 px-2 py-0.5 rounded border border-white/10 font-bold">
                  {card.num}
                </div>
              </div>

              <div className="p-6 flex flex-col gap-2">
                <h3 className="font-outfit text-lg font-medium text-white transition-colors">
                  {card.title}
                </h3>
                <p className="font-inter text-xs md:text-sm text-white/60 leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}