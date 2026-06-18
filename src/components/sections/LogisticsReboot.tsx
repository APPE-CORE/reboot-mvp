"use client";

import { motion } from "framer-motion";

const PROTOCOLS = [
  {
    type: "TIMELINE",
    title: "Le Déroulement",
    items: [
      { label: "20H00", detail: "Ouverture des grilles, parvis principal et activation des structures de la nef." },
      { label: "23H30", detail: "Fermeture définitive des portes d'accès pour des raisons de contrôle d'œuvres." },
      { label: "02H30", detail: "Fin de la diffusion sonore, évacuation des collections et clôture du site." }
    ]
  },
  {
    type: "MANDATORY",
    title: "Obligations Strictes",
    items: [
      { label: "Pastille", detail: "Application d'un opercule opaque sur l'objectif des téléphones à l'entrée." },
      { label: "Vestiaire", detail: "Dépôt obligatoire et sécurisé des sacs et effets volumineux inclus." },
      { label: "Identité", detail: "Présentation d'un titre valide pour le contrôle des billets nominatifs." }
    ]
  },
  {
    type: "FORBIDDEN",
    title: "Interdictions",
    items: [
      { label: "Captation", detail: "Aucune vidéo ou photographie au flash autorisée au sein des collections." },
      { label: "Vente In Situ", detail: "Aucun guichet de billetterie physique ne sera opéré le soir de l'événement." },
      { label: "Contact", detail: "Franchissement des lignes de sécurité entourant les œuvres d'art contemporain." }
    ]
  }
];

export default function LogisticsReboot() {
  return (
    <section className="relative w-full py-24 px-6 md:px-12 lg:px-24 bg-[#000000] border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        
        <div className="flex flex-col items-center text-center">
          <span className="font-montserrat text-white/40 font-bold tracking-[0.2em] uppercase text-[10px] mb-4">
            05 — Réglementation
          </span>
          <h2 className="font-outfit text-4xl md:text-5xl font-light text-white tracking-tight">
            Protocoles de <span className="font-medium italic">sécurité.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {PROTOCOLS.map((block, index) => (
            <motion.div 
              key={index}
              whileHover={{ borderColor: "rgba(255,255,255,0.2)" }}
              className="bg-[#050505] border border-white/5 rounded-2xl p-6 flex flex-col gap-6 transition-all duration-200"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <h3 className="font-outfit text-lg font-medium text-white">{block.title}</h3>
                <span className={`font-mono text-[9px] px-2 py-0.5 rounded font-bold ${
                  block.type === "FORBIDDEN" ? "bg-red-950 text-red-400 border border-red-900" :
                  block.type === "MANDATORY" ? "bg-action-neon/10 text-action-neon border border-action-neon/20" :
                  "bg-neutral-900 text-neutral-400 border border-neutral-800"
                }`}>
                  {block.type}
                </span>
              </div>

              <div className="flex flex-col gap-4">
                {block.items.map((item, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ x: 2 }}
                    className="flex flex-col gap-1 group cursor-default"
                  >
                    <span className="font-mono text-xs font-bold text-white group-hover:text-action-neon group-active:text-action-neon transition-colors">
                      {item.label}
                    </span>
                    <span className="font-inter text-xs text-white/60 leading-relaxed">
                      {item.detail}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <p className="font-inter text-[11px] text-white/30 text-center max-w-xl mx-auto leading-relaxed">
          L'accès à l'établissement implique l'acceptation pleine et entière du règlement intérieur spécifique de l'événement REBOOT. Les équipes de sécurité se réservent le droit d'admission.
        </p>

      </div>
    </section>
  );
}