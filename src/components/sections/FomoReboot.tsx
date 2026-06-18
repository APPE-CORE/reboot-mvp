"use client";

import { motion } from "framer-motion";
import { AlertTriangle, Ticket } from "lucide-react";
import Link from "next/link";

export default function FomoReboot() {
  return (
    <section className="relative w-full py-24 px-6 md:px-12 lg:px-24 bg-[#000000] border-t border-white/5">
      <div className="max-w-4xl mx-auto flex flex-col gap-12">
        
        {/* En-tête de section */}
        <div className="flex flex-col items-center text-center">
          <span className="font-montserrat text-action-laser font-bold tracking-[0.2em] uppercase text-[10px] mb-4">
            04 — Acquisition
          </span>
          <h2 className="font-outfit text-4xl md:text-5xl font-medium text-white tracking-tight">
            L'accès est restreint.
          </h2>
        </div>

        {/* Le Bloc Transactionnel */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="bg-[#050505] border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden group hover:border-white/20 transition-colors"
        >
          {/* Barre de progression (Urgence) */}
          <div className="absolute top-0 left-0 w-full h-1.5 bg-white/5">
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "85%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="h-full bg-action-laser shadow-[0_0_20px_rgba(188,19,254,0.8)]"
            />
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10 md:gap-8 mt-2">
            
            {/* Arguments & Preuve Sociale */}
            <div className="flex flex-col gap-5 flex-1">
              <div className="flex items-center gap-3 text-action-laser">
                <AlertTriangle className="w-5 h-5" />
                <span className="font-inter font-bold text-sm uppercase tracking-widest">Alerte Jauge</span>
              </div>
              <h3 className="font-outfit text-3xl md:text-4xl font-medium text-white leading-tight">
                85% des pass ont été réclamés.
              </h3>
              <p className="font-inter text-white/50 text-sm md:text-base leading-relaxed max-w-md">
                Pour garantir l'expérience et la sécurité des œuvres, la capacité est strictement figée à 800 personnes. La billetterie se fermera automatiquement sans préavis.
              </p>
            </div>

            {/* Action & Prix */}
            <div className="flex flex-col items-start md:items-end gap-6 md:pl-12 md:border-l border-white/10 w-full md:w-auto">
              <div className="flex flex-col items-start md:items-end">
                <span className="font-montserrat text-white/40 uppercase tracking-widest text-[10px] font-bold mb-1">
                  Prix Unique
                </span>
                <span className="font-outfit text-6xl font-light text-white tracking-tighter">
                20<span className="text-4xl text-white/50">€</span>
                </span>
              </div>
              
              <Link 
                href="/billetterie" 
                className="w-full md:w-auto bg-white text-black px-8 py-4 rounded-full font-inter font-bold text-sm hover:bg-action-laser hover:text-white transition-all flex items-center justify-center gap-3 active:scale-95"
              >
                <Ticket className="w-5 h-5" />
                Sécuriser un accès
              </Link>

              <span className="font-inter text-[10px] text-white/30 uppercase tracking-widest text-center md:text-right w-full font-bold">
                Aucune vente sur place
              </span>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}