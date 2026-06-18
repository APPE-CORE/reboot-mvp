"use client";

import { motion } from "framer-motion";
import { Ticket, ArrowRight, ShieldAlert } from "lucide-react";
import Link from "next/link";

export default function FomoReboot() {
  return (
    <section className="relative w-full py-20 md:py-24 px-4 sm:px-6 md:px-12 lg:px-24 bg-[#000000] border-t border-white/5">
      <div className="max-w-4xl mx-auto flex flex-col gap-10 md:gap-12">
        
        {/* En-tête Brutaliste */}
        <div className="flex flex-col items-center text-center px-2">
          <span className="font-montserrat text-action-laser font-bold tracking-[0.2em] uppercase text-[9px] md:text-[10px] mb-3">
            04 — Saturation des flux
          </span>
          <h2 className="font-outfit text-3xl md:text-5xl font-light text-white tracking-tight leading-tight">
            Une jauge stricte. <span className="font-medium italic text-action-neon">Aucun rajout.</span>
          </h2>
        </div>

        {/* LE TICKET NUMÉRIQUE RESTRUCTURÉ POUR LE MOBILE */}
        <motion.div 
          whileHover={{ borderColor: "rgba(255,255,255,0.2)" }}
          className="w-full bg-[#050505] border border-white/10 rounded-2xl flex flex-col md:flex-row relative overflow-hidden transition-all duration-200 shadow-[0_25px_50px_rgba(0,0,0,0.9)]"
        >
          
          {/* Perforations de ticket physiques virtuelles */}
          <div className="hidden md:block absolute -right-[8px] top-0 w-4 h-4 bg-black rounded-full translate-y-[-50%] z-20 border-b border-white/10" />
          <div className="hidden md:block absolute -right-[8px] bottom-0 w-4 h-4 bg-black rounded-full translate-y-[50%] z-20 border-t border-white/10" />

          {/* Section Gauche : Indicateurs & Jauge Violette anti-chevauchement */}
          <div className="flex-1 p-5 sm:p-6 md:p-8 flex flex-col justify-between gap-6 md:gap-8 border-b md:border-b-0 md:border-r border-dashed border-white/20">
            <div className="flex flex-col gap-5">
              
              <div className="flex items-center gap-2 text-action-neon font-mono text-[10px] uppercase tracking-widest font-bold">
                <ShieldAlert className="w-3.5 h-3.5 animate-pulse shrink-0" />
                Régulation ERP — Seuil critique imminent
              </div>

              {/* Bloc Jauge Réaligné (Empilement propre sur Mobile, Ligne sur PC) */}
              <div className="flex flex-col gap-3 bg-white/[0.01] border border-white/5 p-4 rounded-xl">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 font-mono text-[10px] uppercase tracking-wider text-white/50">
                  <span>Occupation de la Nef</span>
                  <span className="text-action-laser font-bold font-inter text-xs shrink-0">728 / 800 Pass</span>
                </div>
                
                {/* Barre de progression Violette */}
                <div className="w-full h-2.5 bg-neutral-950 rounded-full border border-white/10 relative overflow-hidden p-[1px]">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "91%" }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="h-full bg-action-laser rounded-full shadow-[0_0_12px_rgba(188,19,254,0.5)]"
                  />
                </div>
                
                <div className="text-[10px] text-white/40 font-inter font-medium">
                  Fermeture automatique des transactions à saturation légale.
                </div>
              </div>

              <p className="font-inter text-xs md:text-sm text-white/70 leading-relaxed max-w-md">
                Le décret de sécurité de la Nef monumentale limite l'audience instantanée. Les accès sont nominatifs et cryptés par protocole unique. Dès que le plafond est atteint, les serveurs suspendront définitivement les émissions.
              </p>
            </div>

            {/* Pied de section gauche réaligné pour petits écrans */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 font-mono text-[9px] text-white/30 uppercase tracking-widest font-bold pt-3 border-t border-white/5">
              <div>Phase : Émission finale</div>
              <div>Restant : Moins de 72 pass</div>
            </div>
          </div>

          {/* Section Droite : Talon d'Achat Conversion */}
          <div className="w-full md:w-80 p-5 sm:p-6 md:p-8 bg-white/[0.01] flex flex-col justify-between items-stretch gap-6 text-center md:text-right bg-gradient-to-br from-transparent to-white/[0.01]">
            <div className="flex flex-col items-center md:items-end">
              <span className="font-montserrat text-white/40 uppercase tracking-widest text-[9px] font-bold">
                Tarification réglementée
              </span>
              <span className="font-outfit text-5xl font-light text-white tracking-tighter mt-1">
                20<span className="text-2xl text-white/40 font-normal">€</span>
              </span>
              <span className="font-inter text-[10px] text-action-neon font-bold uppercase mt-2 tracking-wider bg-action-neon/5 border border-action-neon/10 px-2.5 py-0.5 rounded inline-block">
                Éligible Pass Culture
              </span>
            </div>

            <Link 
              href="/billetterie" 
              className="w-full bg-white text-black hover:bg-action-neon hover:text-black active:bg-action-neon font-inter font-bold text-xs uppercase tracking-wider py-4 rounded-xl transition-all duration-150 flex items-center justify-center gap-2 shrink-0 select-none group"
            >
              <Ticket className="w-4 h-4 text-black group-hover:scale-110 transition-transform" />
              Réserver mon accès
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <span className="font-mono text-[9px] text-red-400 uppercase tracking-widest text-center md:text-right font-bold bg-red-950/10 border border-red-900/20 py-2 px-3 rounded-xl">
              Aucun guichet physique sur place
            </span>
          </div>

        </motion.div>
      </div>
    </section>
  );
}