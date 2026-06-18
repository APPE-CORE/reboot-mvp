"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Terminal } from "lucide-react";

type Message = { id: number; text: string; sender: "user" | "bot" };

const FAQ = [
  { q: "Quel est le dress code ?", a: "Libre. Le noir absolu est recommandé pour s'intégrer à l'expérience." },
  { q: "Y a-t-il un vestiaire ?", a: "Vestiaire sécurisé et obligatoire. Inclus dans le billet." },
  { q: "Billet remboursable ?", a: "Non. Les accès sont nominatifs pour bloquer le marché noir." }
];

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: 0, text: "Terminal REBOOT_ initialisé. Une question sur l'événement ?", sender: "bot" }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleQuestion = (question: string, answer: string) => {
    setMessages(prev => [...prev, { id: Date.now(), text: question, sender: "user" }]);
    
    setTimeout(() => {
      setMessages(prev => [...prev, { id: Date.now() + 1, text: answer, sender: "bot" }]);
    }, 500);
  };

  return (
    <div className="fixed bottom-24 md:bottom-8 right-4 md:right-8 z-[150] flex flex-col items-end">
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="bg-[#050505] border border-white/10 rounded-none w-[90vw] sm:w-96 mb-4 overflow-hidden flex flex-col shadow-[0_0_50px_rgba(0,0,0,0.8)]"
          >
            {/* Header Terminal */}
            <div className="bg-[#000000] p-4 flex justify-between items-center border-b border-white/10">
              <div className="flex items-center gap-3">
                <Terminal className="w-5 h-5 text-action-neon" />
                <span className="font-outfit font-black uppercase tracking-widest text-sm text-white">REBOOT_OS</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white/50 hover:text-white transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Zone de conversation */}
            <div className="p-5 h-80 overflow-y-auto flex flex-col gap-4 scrollbar-hide bg-[#0A0A0A]">
              {messages.map((msg) => (
                <div 
                  key={msg.id} 
                  className={`max-w-[85%] p-3 md:p-4 font-inter text-sm ${
                    msg.sender === "user" 
                      ? "bg-action-neon text-[#000000] self-end font-semibold rounded-tl-xl rounded-tr-xl rounded-bl-xl shadow-lg" 
                      : "bg-[#1A1A1A] border border-white/5 text-[#F5F5F5] self-start rounded-tl-xl rounded-tr-xl rounded-br-xl shadow-lg"
                  }`}
                >
                  {msg.text}
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Requêtes (Boutons) */}
            <div className="p-4 bg-[#000000] border-t border-white/10 flex flex-col gap-2">
              <span className="font-montserrat text-[10px] text-action-laser uppercase tracking-widest mb-2 font-bold flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-action-laser rounded-full animate-pulse"></div>
                Requêtes disponibles
              </span>
              {FAQ.map((item, index) => (
                <button
                  key={index}
                  onClick={() => handleQuestion(item.q, item.a)}
                  className="w-full text-left bg-transparent border border-white/10 hover:border-action-neon hover:text-action-neon p-3 font-inter text-xs text-white/70 transition-all duration-200 uppercase tracking-wide font-medium"
                >
                  {item.q}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

{/* Bouton Trigger : Positionné au-dessus du CTA */}
<motion.button
  whileHover={{ scale: 1.05 }}
  onClick={() => setIsOpen(!isOpen)}
  // bottom-24 permet de remonter de ~20px+ au-dessus du CTA qui est à bottom-8
  className="fixed bottom-24 md:bottom-28 right-6 z-[150] w-[56px] h-[56px] bg-[#000000] border border-white/20 hover:border-action-neon rounded-full flex items-center justify-center transition-all duration-300"
>
  {isOpen ? <X className="w-6 h-6 text-white" /> : <MessageSquare className="w-6 h-6 text-white" />}
</motion.button>

    </div>
  );
}