"use client";

import { motion } from "framer-motion";

const CARDS = [
  {
    num: "01",
    title: "La Nef Monumentale",
    desc: "Les volumes historiques du musée métamorphosés par une architecture de faisceaux lasers et de structures lumineuses éphémères.",
    img: "https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?q=80&w=800",
    accent: "hover:border-action-neon active:border-action-neon group-hover:text-action-neon"
  },
  {
    num: "02",
    title: "Curations Electroniques",
    desc: "Un line-up sonore tenu secret jusqu'à l'ouverture des portes, calibré pour entrer en résonance avec la matérialité brute du lieu.",
    img: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=800",
    accent: "hover:border-action-laser active:border-action-laser group-hover:text-action-laser"
  },
  {
    num: "03",
    title: "Mixologie & Terroir",
    desc: "Bars éphémères approvisionnés en circuit court par les brasseries et vignerons artisanaux de la scène toulousaine.",
    img: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=800",
    accent: "hover:border-action-neon active:border-action-neon group-hover:text-action-neon"
  }
];

export default function ExperienceReboot() {
  return (
    <section className="relative w-full py-24 px-6 md:px-12 lg:px-24 bg-[#000000] border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        
        <div className="flex flex-col items-center text-center">
          <span className="font-montserrat text-action-laser font-bold tracking-[0.2em] uppercase text-[10px] mb-4">
            03 — Immersion
          </span>
          <h2 className="font-outfit text-4xl md:text-5xl font-light text-white tracking-tight">
            L'anatomie de la <span className="font-medium italic">nuit.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {CARDS.map((card, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              whileTap={{ scale: 0.98 }}
              className={`bg-[#050505] border border-white/10 rounded-2xl overflow-hidden flex flex-col justify-between group transition-all duration-200 cursor-pointer ${card.accent}`}
            >
              <div className="relative h-64 w-full overflow-hidden border-b border-white/5 bg-neutral-900">
                <img 
                  src={card.img} 
                  alt={card.title}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-active:opacity-100 transition-all duration-300 ease-out scale-100 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 font-mono text-xs text-white/50 bg-black/60 px-2 py-1 rounded border border-white/10">
                  {card.num}
                </div>
              </div>

              <div className="p-6 md:p-8 flex flex-col gap-3">
                <h3 className="font-outfit text-xl font-medium text-white group-hover:text-action-neon group-active:text-action-neon transition-colors">
                  {card.title}
                </h3>
                <p className="font-inter text-xs md:text-sm text-white/70 leading-relaxed">
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