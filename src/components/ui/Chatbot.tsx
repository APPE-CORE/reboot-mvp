"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X } from "lucide-react";

type Message = { id: number; text: string; sender: "user" | "bot" };

const FAQ = [
  { q: "Pass Culture ?", a: "Valable pour les 18-24 ans. Saisissez votre contremarque au checkout pour passer le panier à 0€." },
  { q: "Tarif & Jauge ?", a: "Tarif unique de 20€. Capacité strictement bloquée à 800 places. Aucune vente sur place." },
  { q: "Dress code ?", a: "Libre, mais le noir absolu est vivement recommandé pour s'intégrer à la scénographie." }
];

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: 0, text: "Assistance REBOOT. Quelle est votre question ?", sender: "bot" }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isOpen]);

  const handleQuestion = (question: string, answer: string) => {
    setMessages(prev => [...prev, { id: Date.now(), text: question, sender: "user" }]);
    setTimeout(() => {
      setMessages(prev => [...prev, { id: Date.now() + 1, text: answer, sender: "bot" }]);
    }, 350);
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 10 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            // Positionnement empilé au-dessus du bouton sur mobile
            className="fixed bottom-40 md:bottom-24 right-4 md:right-8 z-[150] bg-[#0A0A0A]/95 backdrop-blur-xl border border-white/10 rounded-2xl w-[290px] sm:w-80 overflow-hidden flex flex-col shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
          >
            {/* Header */}
            <div className="p-3.5 flex justify-between items-center border-b border-white/5 bg-white/[0.02]">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-action-neon rounded-full animate-pulse"></span>
                <span className="font-outfit font-bold text-xs tracking-wider text-white">REBOOT_INFO</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white/40 hover:text-action-neon active:text-action-neon p-1">
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Zone de flux */}
            <div className="p-4 h-40 overflow-y-auto flex flex-col gap-3 bg-transparent max-h-[30dvh] scrollbar-hide">
              {messages.map((msg) => (
                <div 
                  key={msg.id} 
                  className={`max-w-[85%] px-3 py-2 rounded-xl font-inter text-xs leading-relaxed ${
                    msg.sender === "user" 
                      ? "bg-action-neon text-black self-end font-medium rounded-tr-none" 
                      : "bg-white/10 text-white/90 self-start rounded-tl-none border border-white/5"
                  }`}
                >
                  {msg.text}
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Actions rapides */}
            <div className="p-3 bg-white/[0.01] border-t border-white/5 flex flex-col gap-1.5">
              {FAQ.map((item, index) => (
                <button
                  key={index}
                  onClick={() => handleQuestion(item.q, item.a)}
                  className="w-full text-left bg-white/5 border border-white/5 hover:border-action-neon hover:text-action-neon active:bg-white/10 p-2.5 rounded-xl font-inter text-[11px] text-white/80 transition-all tracking-wide font-medium"
                >
                  {item.q}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Trigger Sphérique : Placé à bottom-24 sur mobile pour flotter juste au-dessus du CTA */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-24 md:bottom-8 right-4 md:right-8 z-[150] w-12 h-12 bg-[#000000] border border-white/20 hover:border-action-neon hover:text-action-neon active:border-action-neon active:text-action-neon rounded-full flex items-center justify-center text-white transition-colors duration-150 shadow-lg"
      >
        {isOpen ? <X className="w-4 h-4" /> : <MessageSquare className="w-4 h-4" />}
      </button>
    </>
  );
}