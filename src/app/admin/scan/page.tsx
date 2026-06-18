"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { QrCode, ShieldAlert, CheckCircle, XCircle, Users, Camera, RefreshCw, Search } from "lucide-react";
import Link from "next/link";

type ScanStatus = "idle" | "scanning" | "success" | "duplicate" | "saturated";

export default function AdminScanInterface() {
  const [status, setStatus] = useState<ScanStatus>("idle");
  const [insideCount, setInsideCount] = useState(542);
  const [manualId, setManualId] = useState("");
  
  const [lastScannedUser, setLastScannedUser] = useState({
    name: "ALEXIS VERDIER",
    type: "PASS INDIVIDUEL",
    email: "a.verdier@exemple.com",
    time: "21:42"
  });

  const triggerScanSimulation = (type: "success" | "duplicate" | "saturated") => {
    setStatus("scanning");
    
    setTimeout(() => {
      setStatus(type);
      if (type === "success") {
        setInsideCount((prev) => Math.min(800, prev + 1));
        setLastScannedUser({
          name: "SARAH AMARA",
          type: "PACK TRIBU (1/4)",
          email: "s.amara@exemple.com",
          time: new Date().toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" })
        });
      }
    }, 1200);
  };

  const resetScanner = () => {
    setStatus("idle");
  };

  return (
    <div className="min-h-screen bg-[#000000] text-white p-4 sm:p-6 md:px-12 flex flex-col justify-between font-inter select-none overflow-x-hidden">
      
      {/* 1. EN-TÊTE : SIGNALÉTIQUE ET COMPTEURS D'OCCUPATION ERP */}
      <div className="w-full max-w-sm mx-auto flex flex-col gap-3">
        <div className="flex justify-between items-center border-b border-white/10 pb-3">
          <div className="flex flex-col">
            <span className="font-mono text-[9px] text-action-neon uppercase tracking-widest font-bold">Régulation des flux</span>
            <h1 className="font-outfit text-lg font-medium text-white tracking-tight">Guichet Contrôle Nef</h1>
          </div>
          <Link href="/" className="text-[10px] font-mono text-white/50 uppercase tracking-wider hover:text-white border border-white/10 rounded-lg px-2.5 py-1 bg-white/[0.02]">
            Sortir
          </Link>
        </div>

        {/* Widgets d'occupation résilients au wrapping */}
        <div className="grid grid-cols-2 gap-2.5">
          <div className="bg-[#050505] border border-white/5 rounded-xl p-3 flex items-center gap-2.5 min-w-0">
            <Users className="w-4 h-4 text-white/40 shrink-0" />
            <div className="flex flex-col min-w-0 truncate">
              <span className="text-[8px] text-white/40 font-mono uppercase tracking-wider block truncate">Présents</span>
              <span className="font-outfit text-base font-medium text-white truncate">{insideCount} <span className="text-[11px] text-white/30 font-normal">/ 800</span></span>
            </div>
          </div>
          <div className="bg-[#050505] border border-white/5 rounded-xl p-3 flex items-center gap-2.5 min-w-0">
            <div className="w-1.5 h-1.5 rounded-full bg-action-neon animate-pulse shrink-0" />
            <div className="flex flex-col min-w-0 truncate">
              <span className="text-[8px] text-white/40 font-mono uppercase tracking-wider block truncate">Saturation</span>
              <span className="font-outfit text-base font-medium text-action-neon truncate">
                {((insideCount / 800) * 100).toFixed(0)}%
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. LE SCANNER : ZONE DE LECTURE ADAPTATIVE ANTI-ÉCRASEMENT */}
      <div className="w-full max-w-sm mx-auto my-auto py-4 flex items-center justify-center">
        <div className="w-full aspect-square bg-[#030303] border border-white/10 rounded-2xl relative overflow-hidden shadow-2xl flex items-center justify-center">
          
          <AnimatePresence mode="wait">
            {/* ETAT 01 : REPOS */}
            {status === "idle" && (
              <motion.div key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex flex-col items-center gap-2.5 text-center p-5 z-10">
                <Camera className="w-6 h-6 text-white/30 animate-pulse" />
                <span className="font-mono text-[9px] text-white/40 uppercase tracking-widest font-bold">Viseur Optique Prêt</span>
                <p className="text-[11px] text-white/50 max-w-[200px] leading-relaxed font-light">Centrez le QR Code du pass d'accès dans le cadre.</p>
              </motion.div>
            )}

            {/* ETAT 02 : BALAYAGE LASER */}
            {status === "scanning" && (
              <motion.div key="scanning" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 flex items-center justify-center bg-black">
                <motion.div 
                  animate={{ top: ["4%", "96%", "4%"] }} 
                  transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }} 
                  className="absolute left-4 right-4 h-[2px] bg-action-laser shadow-[0_0_10px_rgba(188,19,254,0.7)] z-20"
                />
                <QrCode className="w-20 h-20 text-white/5" />
              </motion.div>
            )}

            {/* ETAT 03 : SUCCÈS (PAS ACCORDÉ) */}
            {status === "success" && (
              <motion.div key="success" initial={{ scale: 0.98, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-green-950/95 border border-green-500/30 flex flex-col items-center justify-center gap-3.5 text-center p-4 z-30">
                <CheckCircle className="w-11 h-11 text-green-400 shrink-0" />
                <div className="flex flex-col gap-1 min-w-0 w-full px-2">
                  <span className="font-outfit text-lg font-bold uppercase tracking-tight text-white truncate block">{lastScannedUser.name}</span>
                  <span className="font-mono text-[9px] bg-green-900/50 border border-green-700/50 text-green-300 px-2.5 py-0.5 rounded-full uppercase tracking-wider inline-block mx-auto font-bold">{lastScannedUser.type}</span>
                </div>
                <span className="text-[10px] font-mono text-green-300/60 uppercase tracking-wide">Vérifié à {lastScannedUser.time}</span>
                <button onClick={resetScanner} className="mt-2 bg-white text-black font-inter font-bold text-[9px] uppercase tracking-wider px-4 py-2 rounded-lg flex items-center gap-1.5 shrink-0 active:bg-neutral-200"><RefreshCw className="w-3 h-3" /> Suivant</button>
              </motion.div>
            )}

            {/* ETAT 04 : REJET (FRAUDE DOUBLE PASS) */}
            {status === "duplicate" && (
              <motion.div key="duplicate" initial={{ scale: 0.98, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-red-950/95 border border-red-500/40 flex flex-col items-center justify-center gap-3.5 text-center p-4 z-30">
                <XCircle className="w-11 h-11 text-red-400 shrink-0" />
                <div className="flex flex-col gap-0.5 px-2 w-full min-w-0">
                  <span className="font-outfit text-base font-bold uppercase text-white tracking-tight">Accès Refusé</span>
                  <span className="font-mono text-[8px] text-red-300 uppercase tracking-widest font-bold block truncate">Billet Déjà Validé</span>
                </div>
                <p className="text-[11px] text-red-200/60 max-w-[220px] leading-relaxed font-light">Ce pass unique a été enregistré aux barrières à {lastScannedUser.time}.</p>
                <button onClick={resetScanner} className="mt-2 bg-white text-black font-inter font-bold text-[9px] uppercase tracking-wider px-4 py-2 rounded-lg flex items-center gap-1.5 shrink-0 active:bg-neutral-200"><RefreshCw className="w-3 h-3" /> Réactiver</button>
              </motion.div>
            )}

            {/* ETAT 05 : SEUIL ERP REJOINT */}
            {status === "saturated" && (
              <motion.div key="saturated" initial={{ scale: 0.98, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-neutral-900/95 border border-white/10 flex flex-col items-center justify-center gap-3.5 text-center p-4 z-30">
                <ShieldAlert className="w-11 h-11 text-action-laser shrink-0 animate-pulse" />
                <div className="flex flex-col gap-0.5 px-2 w-full min-w-0">
                  <span className="font-outfit text-base font-bold text-white tracking-tight">Seuil de Sécurité Rejoint</span>
                  <span className="font-mono text-[8px] text-action-laser uppercase tracking-widest font-bold block">Plafond Instantané ERP</span>
                </div>
                <p className="text-[11px] text-white/50 max-w-[220px] leading-relaxed font-light">Capacité maximale de 800 personnes atteinte. Bloquez les entrées en attente de sorties physiques.</p>
                <button onClick={resetScanner} className="mt-2 bg-white text-black font-inter font-bold text-[9px] uppercase tracking-wider px-4 py-2 rounded-lg flex items-center gap-1.5 shrink-0 active:bg-neutral-200"><RefreshCw className="w-3 h-3" /> Réactiver</button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Repères matériels de Caméra */}
          <div className="absolute top-4 left-4 w-3.5 h-3.5 border-t-2 border-l-2 border-white/20 pointer-events-none" />
          <div className="absolute top-4 right-4 w-3.5 h-3.5 border-t-2 border-r-2 border-white/20 pointer-events-none" />
          <div className="absolute bottom-4 left-4 w-3.5 h-3.5 border-b-2 border-l-2 border-white/20 pointer-events-none" />
          <div className="absolute bottom-4 right-4 w-3.5 h-3.5 border-b-2 border-r-2 border-white/20 pointer-events-none" />
        </div>
      </div>

      {/* 3. LE RECOURS MANUEL ET LA CONSOLE DE SIMULATION DISCRÈTE */}
      <div className="w-full max-w-sm mx-auto flex flex-col gap-3">
        
        {/* Recherche d'identité par ID de secours */}
        <div className="flex gap-2 bg-[#050505] border border-white/10 rounded-xl p-1.5 items-center min-w-0">
          <Search className="w-3.5 h-3.5 text-white/30 shrink-0 ml-1.5" />
          <input 
            type="text" 
            value={manualId}
            onChange={(e) => setManualId(e.target.value)}
            placeholder="Saisie manuelle ID (ex: RBT-48291)" 
            className="bg-transparent border-none text-[11px] font-mono focus:outline-none flex-1 uppercase text-white placeholder-white/30 min-w-0"
          />
          <button 
            onClick={() => manualId.trim() && triggerScanSimulation("success")}
            className="bg-white/10 hover:bg-white/20 text-white font-inter font-bold text-[9px] uppercase tracking-wider px-3 py-1.5 rounded-lg transition-colors shrink-0 active:bg-white/30"
          >
            Saisir
          </button>
        </div>

        {/* Panneau de simulation de l'écosystème : Réaligné verticalement sur smartphone */}
        <div className="flex flex-col gap-2 bg-white/[0.01] border border-white/5 p-3 rounded-xl">
          <span className="font-mono text-[8px] text-white/30 uppercase tracking-widest font-bold text-center block mb-0.5">
            Console de Démonstration MVP
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            <button 
              onClick={() => triggerScanSimulation("success")}
              className="bg-green-950/40 hover:bg-green-950/60 text-green-400 border border-green-900/40 rounded-lg py-2.5 text-[10px] font-mono uppercase tracking-wider transition-colors font-bold active:bg-green-900/60"
            >
              Pass Valide
            </button>
            <button 
              onClick={() => triggerScanSimulation("duplicate")}
              className="bg-red-950/40 hover:bg-red-950/60 text-red-400 border border-red-900/40 rounded-lg py-2.5 text-[10px] font-mono uppercase tracking-wider transition-colors font-bold active:bg-red-900/60"
            >
              Fraude Bloquée
            </button>
            <button 
              onClick={() => { setInsideCount(800); triggerScanSimulation("saturated"); }}
              className="bg-neutral-900 hover:bg-neutral-800 text-action-laser border border-white/10 rounded-lg py-2.5 text-[10px] font-mono uppercase tracking-wider transition-colors font-bold active:bg-neutral-800"
            >
              Alerte Jauge
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}