"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";

const FAQ_ITEMS = [
  {
    q: "Comment s'applique le crédit Pass Culture ?",
    a: "Sélectionnez votre billet. Sur la page de validation, saisissez la contremarque générée par votre application d'État dans l'encart prévu. Après authentification du code, le montant total du panier s'ajustera automatiquement à 0,00 €."
  },
  {
    q: "Peut-on accéder au musée après 23h30 ?",
    a: "Non. Les accès ferment de manière définitive à 23h30 pour se conformer aux directives de conservation des œuvres d'art exposées dans la nef. Aucun remboursement ne sera accordé aux retardataires."
  },
  {
    q: "Pourquoi masquer la caméra de mon smartphone ?",
    a: "Ce protocole garantit la confidentialité des participants et protège le droit de reproduction des artistes exposés. Tout retrait ou refus d'application de la pastille de sécurité entraîne l'exclusion immédiate."
  },
  {
    q: "Est-il possible d'annuler ou de modifier mon billet ?",
    a: "Les pass d'entrée sont nominatifs, uniques et non modifiables en raison de la capacité d'accueil ERP limitée à 800 personnes par édition."
  }
];

export default function FaqReboot() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative w-full py-20 px-4 sm:px-6 md:px-12 lg:px-24 bg-black border-t border-white/5">
      <div className="max-w-3xl mx-auto flex flex-col gap-10">
        
        <div className="flex flex-col items-center text-center">
          <span className="font-montserrat text-white/40 font-bold tracking-[0.2em] uppercase text-[9px] md:text-[10px] mb-3">
            06 — Informations Pratiques
          </span>
          <h2 className="font-outfit text-3xl md:text-4xl font-light text-white tracking-tight">
            Questions <span className="font-medium italic text-action-laser">fréquentes.</span>
          </h2>
        </div>

        <div className="flex flex-col gap-2.5">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="bg-[#050505] border border-white/10 rounded-xl overflow-hidden">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full p-4.5 sm:p-5 flex items-center justify-between text-left gap-4 focus:outline-none"
                >
                  <span className="font-outfit text-sm md:text-base font-medium text-white/90">
                    {item.q}
                  </span>
                  <div className={`w-5.5 h-5.5 rounded bg-white/5 border border-white/10 flex items-center justify-center text-white shrink-0 ${isOpen ? "border-action-laser text-action-laser" : ""}`}>
                    {isOpen ? <Minus className="w-3 h-3" /> : <Plus className="w-3 h-3" />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="px-5 pb-5 pt-0.5 border-t border-white/5 font-inter text-xs md:text-sm text-white/60 leading-relaxed bg-gradient-to-b from-transparent to-white/[0.005]">
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        <div className="flex items-center gap-2 justify-center font-mono text-[9px] uppercase tracking-wider text-white/30 bg-white/[0.01] border border-white/5 py-2 px-3 rounded-lg max-w-sm mx-auto">
          <HelpCircle className="w-3.5 h-3.5 text-action-laser shrink-0" />
          <span>Contact technique : support@reboot.museum</span>
        </div>

      </div>
    </section>
  );
}