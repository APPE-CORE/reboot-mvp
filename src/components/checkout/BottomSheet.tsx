"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Loader2, Fingerprint, X } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

interface BottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  total: number;
  quantity: number;
}

export default function BottomSheet({ isOpen, onClose, total, quantity }: BottomSheetProps) {
  const [isProcessing, setIsProcessing] = useState(false);
  const router = useRouter();

  const handlePayment = () => {
    setIsProcessing(true);
    setTimeout(() => {
      router.push("/confirmation");
    }, 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={!isProcessing ? onClose : undefined}
            className="fixed inset-0 bg-black/60 backdrop-blur-md z-[100]"
          />

          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 250 }}
            className="fixed bottom-0 left-0 w-full bg-[#1C1C1E] rounded-t-[32px] z-[101] flex flex-col pb-10"
          >
            {/* iOS Handle */}
            <div className="w-12 h-1.5 bg-white/20 rounded-full mx-auto mt-4 mb-2" />

            <div className="px-6 flex flex-col max-w-md mx-auto w-full">
              
              <div className="flex justify-between items-center py-4">
                <span className="font-inter font-semibold text-white/90 text-lg tracking-tight">Apple Pay</span>
                <button onClick={onClose} disabled={isProcessing} className="text-action-neon font-inter font-medium text-sm">
                  Annuler
                </button>
              </div>

              {/* Résumé de commande style iOS */}
              <div className="bg-[#2C2C2E] rounded-2xl p-4 mt-2 flex flex-col gap-3">
                <div className="flex items-center gap-4 border-b border-white/5 pb-4">
                  <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center border border-white/10">
                    <span className="font-outfit font-black text-white text-xl">A</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-inter font-semibold text-white">REBOOT — Édition 01</span>
                    <span className="font-inter text-sm text-white/50">Les Abattoirs, Toulouse</span>
                  </div>
                </div>
                
                <div className="flex justify-between items-center pt-1">
                  <span className="font-inter text-white/70">Entrée Standard x{quantity}</span>
                  <span className="font-inter font-medium text-white">{total},00 €</span>
                </div>
              </div>

              <div className="flex justify-between items-center px-2 mt-6">
                <span className="font-inter text-white/50 uppercase text-xs font-semibold tracking-wider">CARTE</span>
                <span className="font-inter font-medium text-white text-sm">•••• 4242</span>
              </div>

              {/* Bouton Biométrique */}
              <div className="mt-10 flex flex-col items-center">
                <button 
                  onClick={handlePayment}
                  disabled={isProcessing}
                  className="w-20 h-20 bg-action-neon rounded-full flex items-center justify-center transition-transform active:scale-95 disabled:scale-100 shadow-[0_0_40px_rgba(209,255,0,0.15)]"
                >
                  {isProcessing ? (
                    <Loader2 className="w-8 h-8 text-black animate-spin" />
                  ) : (
                    <Fingerprint className="w-10 h-10 text-black" />
                  )}
                </button>
                <span className="font-inter font-medium text-white/80 mt-4 text-sm tracking-tight">
                  {isProcessing ? "Traitement..." : "Confirmer avec Touch ID"}
                </span>
              </div>

            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}