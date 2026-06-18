"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image"; // Ajout de l'import Image

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpen]);

  const menuItems = [
    { name: "Expositions", href: "#", active: false },
    { name: "Agenda", href: "#", active: false },
    { name: "Le Musée", href: "#", active: false },
    { name: "Collections", href: "#", active: false },
    { name: "Boutique", href: "#", active: false },
    { name: "REBOOT", href: "/", active: true },
  ];

  return (
    <>
      {/* HEADER PRINCIPAL : Hauteur et paddings réduits */}
      <header className="fixed top-0 left-0 w-full z-50 bg-[#000000] border-b border-white/5 backdrop-blur-md bg-black/90">
        <div className="flex items-center justify-between px-6 py-3.5 md:px-12 max-w-7xl mx-auto">
          
          {/* LOGO PC & MOBILE AVEC ANIMATION */}
          <Link 
            href="/" 
            className="select-none inline-block origin-left hover:scale-105 transition-transform duration-300"
          >
            <Image 
              src="/logo.png" 
              alt="Les Abattoirs" 
              width={160} 
              height={36} 
              priority
              className="h-9 md:h-10 w-auto object-contain"
            />
          </Link>

          {/* Navigation PC : Liens fins, serrés et 100% interactifs au survol */}
          <nav className="hidden md:flex gap-6">
            {menuItems.map((item) => (
              <Link 
                key={item.name} 
                href={item.href} 
                className={`font-montserrat text-[10px] font-bold uppercase tracking-[0.2em] transition-colors duration-150 ${
                  item.active 
                    ? "text-action-neon" 
                    : "text-white/70 hover:text-action-neon"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <button 
            className="md:hidden text-white hover:text-action-neon active:text-action-neon p-1 transition-colors" 
            onClick={() => setIsOpen(true)}
          >
            <Menu className="w-7 h-7" />
          </button>
        </div>
      </header>

      {/* MENUS MOBILE PLAN / DRAWER */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 bg-[#000000] z-[999] flex flex-col px-6 py-4 h-[100dvh]"
          >
            {/* Header Drawer avec Logo */}
            <div className="flex justify-between items-center py-1">
              <Link href="/" onClick={() => setIsOpen(false)} className="inline-block origin-left hover:scale-105 transition-transform duration-300">
                <Image 
                  src="/logo.png" 
                  alt="Les Abattoirs" 
                  width={150} 
                  height={32} 
                  className="h-9 w-auto object-contain"
                />
              </Link>
              <button 
                onClick={() => setIsOpen(false)} 
                className="text-white hover:text-action-neon active:text-action-neon p-1 transition-colors"
              >
                <X className="w-8 h-8" />
              </button>
            </div>
            
            {/* Navigation Mobile : Typographie ajustée de 5xl à 3xl pour plus d'élégance */}
            <nav className="flex flex-col gap-5 mt-16">
              {menuItems.map((item) => (
                <Link 
                  key={item.name} 
                  href={item.href} 
                  onClick={() => setIsOpen(false)} 
                  className={`font-outfit text-3xl font-medium uppercase tracking-tight transition-colors duration-150 ${
                    item.active 
                      ? "text-action-neon" 
                      : "text-white/80 active:text-action-neon"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
            
            {/* Zone Métadonnées enrichie au bas du menu mobile */}
            <div className="mt-auto pb-8 border-t border-white/5 pt-6 flex flex-col gap-6">
              <div className="flex items-center justify-between">
                <span className="border border-action-laser/40 text-white text-[9px] font-bold px-3 py-1 rounded-full uppercase tracking-widest bg-action-laser/10">
                  Saison 01 — Éphémère
                </span>
                <span className="font-inter text-[10px] text-white/40 uppercase tracking-widest font-semibold">
                  Toulouse, FR
                </span>
              </div>

              {/* Rappel des métriques clés du dossier */}
              <div className="grid grid-cols-2 gap-4 font-inter text-xs text-white/60">
                <div className="flex flex-col">
                  <span className="text-[9px] uppercase tracking-widest text-white/30 font-bold mb-0.5">Capacité</span>
                  <span className="font-medium text-white">800 places max</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[9px] uppercase tracking-widest text-white/30 font-bold mb-0.5">Tarif unique</span>
                  <span className="font-medium text-action-neon">20€ • Pass Culture OK</span>
                </div>
              </div>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}