"use client";

export default function Footer() {
  return (
    <footer className="bg-[#000000] border-t border-white/10 py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12">
        
        {/* Colonne 1 : Identité */}
        <div className="col-span-2 md:col-span-1">
          <span className="font-outfit font-black text-xl text-white tracking-tighter">ABATTOIRS</span>
          <p className="mt-4 font-inter text-[10px] text-white/40 uppercase tracking-widest leading-relaxed">
            Musée - Frac Occitanie Toulouse
          </p>
        </div>

        {/* Colonne 2 : Adresse */}
        <div className="flex flex-col gap-2">
          <span className="font-montserrat text-[9px] font-bold text-white uppercase tracking-[0.2em] mb-2">Localisation</span>
          <a href="#" className="font-inter text-xs text-white/60 hover:text-action-neon transition-colors">
            76 Allées Charles de Fitte<br />31300 Toulouse
          </a>
        </div>

        {/* Colonne 3 : Social */}
        <div className="flex flex-col gap-2">
          <span className="font-montserrat text-[9px] font-bold text-white uppercase tracking-[0.2em] mb-2">Connecter</span>
          {["Instagram", "TikTok", "Facebook", "Newsletter"].map((item) => (
            <a key={item} href="#" className="font-inter text-xs text-white/60 hover:text-white transition-colors">
              {item}
            </a>
          ))}
        </div>

        {/* Colonne 4 : Légal & Curabilité */}
        <div className="flex flex-col gap-2">
          <span className="font-montserrat text-[9px] font-bold text-white uppercase tracking-[0.2em] mb-2">Support</span>
          <a href="#" className="font-inter text-xs text-white/60 hover:text-white transition-colors">Mentions légales</a>
          <a href="#" className="font-inter text-xs text-white/60 hover:text-white transition-colors">Politique de confidentialité</a>
          <a href="#" className="font-inter text-xs text-white/60 hover:text-white transition-colors">Contact</a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5 flex justify-between">
        <span className="font-inter text-[9px] text-white/20 uppercase tracking-widest">© 2026 LES ABATTOIRS — TOULOUSE</span>
        <span className="font-inter text-[9px] text-white/20 uppercase tracking-widest">REBOOT_OS v1.0</span>
      </div>
    </footer>
  );
}