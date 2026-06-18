"use client";

import { motion } from "framer-motion";

const ITEMS = [
  {
    title: "La Nef & L'Impact Brut",
    catalogue: "Inv. 2000.4.1",
    desc: "Les peintures monumentales des années 1950 à nos jours servent de confrontation directe avec la nuit. L'éclairage architectural rasant révèle les textures de briques et les pigments bruts.",
    img: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=800"
  },
  {
    title: "Art Conceptuel & Volumes",
    catalogue: "Inv. 2012.2.14",
    desc: "Des installations tridimensionnelles radicales traversent l'espace central. Les visiteurs déambulent au cœur même des structures, redéfinissant le rapport entre l'œuvre et le corps.",
    img: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=800"
  },
  {
    title: "Créations Numériques",
    catalogue: "Inv. 2026.1.02",
    desc: "Collision finale : des projections génératives réagissent en temps réel aux vibrations sonores de la nef. L'archive historique devient une matière visuelle en constante mutation.",
    img: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=800"
  }
];

export default function CollectionsReboot() {
  return (
    <section className="relative w-full py-24 px-6 md:px-12 lg:px-24 bg-[#000000] border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        
        <div className="flex flex-col items-start">
          <span className="font-montserrat text-action-neon font-bold tracking-[0.2em] uppercase text-[10px] mb-4">
            03.5 — Le Patrimoine
          </span>
          <h2 className="font-outfit text-4xl md:text-5xl font-light text-white tracking-tight leading-none">
            Les collections sous <br />
            <span className="font-medium italic text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">un autre prisme.</span>
          </h2>
        </div>

        {/* INTERFACE DESKTOP */}
        <div className="hidden md:flex flex-col gap-32">
          {ITEMS.map((item, index) => {
            const isEven = index % 2 === 1;
            return (
              <div key={index} className="grid grid-cols-12 gap-12 items-center">
                <div className={`col-span-7 overflow-hidden rounded-2xl border border-white/10 bg-neutral-900 aspect-[16/10] group cursor-pointer ${isEven ? "md:order-last" : ""}`}>
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-300 ease-out scale-100 group-hover:scale-102"
                  />
                </div>

                <div className="col-span-5 flex flex-col gap-4">
                  <span className="font-mono text-[10px] text-white/30 uppercase tracking-widest">{item.catalogue}</span>
                  <h3 className="font-outfit text-3xl font-light text-white hover:text-action-neon transition-colors duration-150 cursor-default">
                    {item.title}
                  </h3>
                  <p className="font-inter text-sm text-white/70 leading-relaxed border-l border-white/10 pl-6">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* INTERFACE MOBILE */}
        <div className="md:hidden flex w-[calc(100%+3rem)] -mx-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide px-6 gap-6 pb-6">
          {ITEMS.map((item, index) => (
            <div 
              key={index} 
              className="w-[85vw] shrink-0 snap-start flex flex-col gap-4 bg-[#050505] border border-white/10 p-5 rounded-2xl active:border-action-neon transition-colors duration-150"
            >
              <div className="w-full aspect-[4/3] rounded-xl overflow-hidden bg-neutral-900 border border-white/5">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover opacity-95" />
              </div>
              <div className="flex flex-col gap-2">
                <span className="font-mono text-[9px] text-white/30 tracking-widest">{item.catalogue}</span>
                <h3 className="font-outfit text-xl font-medium text-white">{item.title}</h3>
                <p className="font-inter text-xs text-white/60 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}