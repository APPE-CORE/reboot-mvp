"use client";

import { motion } from "framer-motion";
import { QrCode, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function ConfirmationPage() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setIsSubscribed(true);
  };

  return (
    <main className="bg-[#000000] text-white min-h-[calc(100dvh-72px)] flex flex-col items-center justify-center p-6 md:p-12 relative overflow-hidden">
      
      {/* Halo de confirmation */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] md:w-[40vw] md:h-[40vw] bg-action-neon/5 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-2xl w-full flex flex-col items-center text-center z-10">
        
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", damping: 20, stiffness: 100 }}
          className="w-20 h-20 bg-action-neon rounded-full flex items-center justify-center mb-8 shadow-[0_0_50px_rgba(209,255,0,0.3)]"
        >
          <CheckCircle2 className="w-10 h-10 text-black" />
        </motion.div>

        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="font-outfit text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-4"
        >
          Accès<br />Sécurisé
        </motion.h1>

        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="font-inter text-white/70 text-sm md:text-base max-w-md mx-auto mb-12"
        >
          Votre pass pour REBOOT — Édition 01 est validé. Présentez ce code à l'entrée. Aucun billet physique ne sera émis.
        </motion.p>

        {/* Le Pass (QR Code) */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-white p-6 md:p-8 rounded-3xl flex flex-col items-center gap-4 w-full max-w-sm mx-auto mb-16"
        >
          <QrCode className="w-48 h-48 text-black" />
          <span className="font-outfit font-black text-black text-2xl tracking-widest uppercase">
            RBT-01-849
          </span>
        </motion.div>

        {/* Boucle CRM : Capture d'e-mail */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="w-full max-w-md border-t border-white/10 pt-12 flex flex-col items-center"
        >
          <span className="font-outfit font-bold text-xl uppercase tracking-tighter mb-2">
            Ne ratez pas le prochain drop
          </span>
          <p className="font-inter text-xs text-white/50 mb-6">
            La jauge est toujours limitée. Soyez averti 24h avant l'ouverture de la prochaine billetterie.
          </p>

          {!isSubscribed ? (
            <form onSubmit={handleSubscribe} className="flex w-full gap-2">
              <input 
                type="email" 
                placeholder="VOTRE E-MAIL" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-white/5 border border-white/10 rounded-none px-4 py-3 font-inter text-sm focus:outline-none focus:border-action-neon transition-colors placeholder:text-white/30"
              />
              <button 
                type="submit"
                className="bg-action-neon text-black px-6 py-3 font-outfit font-black uppercase text-sm flex items-center justify-center hover:bg-white transition-colors"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          ) : (
            <div className="w-full bg-action-laser/10 border border-action-laser/30 text-action-laser py-4 font-inter text-sm font-bold tracking-widest uppercase text-center">
              Alerte activée
            </div>
          )}
        </motion.div>

        <Link href="/" className="mt-16 font-montserrat text-xs font-bold uppercase tracking-widest text-white/30 hover:text-white transition-colors pb-8">
          Retour à l'accueil
        </Link>
      </div>
    </main>
  );
}