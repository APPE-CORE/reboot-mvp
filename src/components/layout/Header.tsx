"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";

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
    { name: "Expositions", active: false },
    { name: "Agenda", active: false },
    { name: "Le Musée", active: false },
    { name: "Collections", active: false },
    { name: "Boutique", active: false },
    { name: "REBOOT", href: "/", active: true },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-[#000000] border-b border-white/10">
        <div className="flex items-center justify-between px-6 py-4 md:px-12">
          <Link href="/" className="font-outfit font-black text-2xl tracking-tighter text-white">
            <span className="text-action-neon">A</span>BATTOIRS
          </Link>

          <nav className="hidden md:flex gap-8">
            {menuItems.map((item) => (
              item.active ? (
                <Link key={item.name} href={item.href!} className="font-montserrat text-xs font-bold uppercase tracking-widest text-action-neon">
                  {item.name}
                </Link>
              ) : (
                <span key={item.name} className="font-montserrat text-xs font-bold uppercase tracking-widest text-white/30 cursor-not-allowed">
                  {item.name}
                </span>
              )
            ))}
          </nav>

          <button className="md:hidden text-white" onClick={() => setIsOpen(true)}>
            <Menu className="w-8 h-8" />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 bg-[#000000] z-[999] flex flex-col px-6 py-4 h-[100dvh]"
          >
            <div className="flex justify-between items-center">
              <span className="font-outfit font-black text-2xl tracking-tighter text-white">
                <span className="text-action-neon">A</span>BATTOIRS
              </span>
              <button onClick={() => setIsOpen(false)} className="text-white">
                <X className="w-10 h-10" />
              </button>
            </div>
            
            <nav className="flex flex-col gap-8 mt-24">
              {menuItems.map((item) => (
                item.active ? (
                  <Link key={item.name} href={item.href!} onClick={() => setIsOpen(false)} className="font-outfit text-5xl font-black uppercase tracking-tighter text-action-neon">
                    {item.name}
                  </Link>
                ) : (
                  <span key={item.name} className="font-outfit text-5xl font-black uppercase tracking-tighter text-white/20 cursor-not-allowed">
                    {item.name}
                  </span>
                )
              ))}
            </nav>
            
            <div className="mt-auto pb-12">
              <span className="bg-action-laser text-white text-xs font-bold px-4 py-2 rounded-full uppercase tracking-widest">
                Édition Limitée
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}