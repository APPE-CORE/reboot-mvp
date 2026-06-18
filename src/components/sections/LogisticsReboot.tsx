"use client";

import { motion } from "framer-motion";

const PROTOCOLS = [
  {
    type: "CHRONOLOGIE",
    title: "Déroulement",
    items: [
      { label: "20H00", detail: "Ouverture des grilles d'accès et contrôle des pass nominatifs sur le parvis." },
      { label: "23H30", detail: "Fermeture définitive des portes d'entrée pour des impératifs de régulation." },
      { label: "02H30", detail: "Fin de la diffusion sonore, évacuation de la nef et clôture du site." }
    ]
  },
  {
    type: "CONSIGNES",
    title: "Obligations Strictes",
    items: [
      { label: "Objectifs masqués", detail: "Application obligatoire d'un opercule opaque sur l'appareil photo à l'entrée." },
      { label: "Vestiaire complet", detail: "Dépôt systématique des sacs et des effets volumineux (inclus dans l'accès)." },
      { label: "Contrôle d'identité", detail: "Présentation d'une pièce d'identité valide pour authentifier le pass." }
    ]
  },
  {
    type: "RESTRICTIONS",
    title: "Interdictions",
    items: [
      { label: "Aucune captation", detail: "Les enregistrements vidéo et les photographies au flash sont interdits." },
      { label: "Pas de guichet", detail: "Aucun point de vente physique ne sera ouvert le soir de l'événement." },
      { label: "Périmètre", detail: "Interdiction stricte de franchir les lignes de sécurité délimitant les œuvres." }
    ]
  }
];

export default function LogisticsReboot() {
  return (
    <section className="relative w-full py-24 px-4 sm:px-6 md:px-12 lg:px-24 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        
        <div className="flex flex-col items-center text-center">
          <span className="font-montserrat text-white/40 font-bold tracking-[0.2em] uppercase text-[10px] mb-3">
            05 — Réglementation
          </span>
          <h2 className="font-outfit text-4xl md:text-5xl font-light text-white tracking-tight">
            Protocoles de <span className="font-medium italic">sécurité.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {PROTOCOLS.map((block, index) => (
            <div key={index} className="bg-[#050505] border border-white/5 rounded-2xl p-6 flex flex-col gap-5">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <h3 className="font-outfit text-base font-medium text-white">{block.title}</h3>
                <span className={`font-mono text-[8px] px-2 py-0.5 rounded font-bold ${
                  block.type === "RESTRICTIONS" ? "bg-red-950/30 text-red-400 border border-red-900/30" :
                  block.type === "CONSIGNES" ? "bg-action-neon/10 text-action-neon border border-action-neon/20" :
                  "bg-neutral-900 text-white/50 border border-neutral-800"
                }`}>
                  {block.type}
                </span>
              </div>

              <div className="flex flex-col gap-4">
                {block.items.map((item, i) => (
                  <div key={i} className="flex flex-col gap-0.5 group">
                    <span className="font-mono text-xs font-bold text-white group-hover:text-action-neon transition-colors">
                      {item.label}
                    </span>
                    <span className="font-inter text-xs text-white/60 leading-relaxed">
                      {item.detail}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="font-inter text-[11px] text-white/30 text-center max-w-md mx-auto leading-relaxed">
          L'accès aux Abattoirs est soumis au respect de ce règlement intérieur spécifique. Les agents de sécurité se réservent le droit d'admission.
        </p>

      </div>
    </section>
  );
}