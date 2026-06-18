"use client";

const ITEMS = [
  {
    title: "Formats Monumentaux",
    catalogue: "Régulation d'éclairage",
    desc: "Les œuvres majeures des collections permanentes acquièrent un nouveau relief. L'absence d'éclairage institutionnel blanc laisse place à un traitement lumineux architectural direct.",
    img: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=800"
  },
  {
    title: "Espace Tridimensionnel",
    catalogue: "Déambulation libre",
    desc: "Les sculptures et structures conceptuelles sont intégrées au parcours de nuit. Le public se déplace sans barrière physique, au plus près des volumes.",
    img: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=800"
  },
  {
    title: "Arts Numériques",
    catalogue: "Projections minimales",
    desc: "Des installations numériques réagissent aux caractéristiques architecturales du bâtiment, créant un lien direct entre le support historique et les technologies actuelles.",
    img: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=800"
  }
];

export default function CollectionsReboot() {
  return (
    <section className="relative w-full py-24 px-4 sm:px-6 md:px-12 lg:px-24 bg-black border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        
        <div className="flex flex-col items-start">
          <span className="font-montserrat text-action-neon font-bold tracking-[0.2em] uppercase text-[10px] mb-3">
            04 — Le Parcours
          </span>
          <h2 className="font-outfit text-4xl md:text-5xl font-light text-white tracking-tight leading-none">
            Les collections sous <br />
            <span className="font-medium italic text-white/60">un autre angle.</span>
          </h2>
        </div>

        {/* COMPOSANT DESKTOP */}
        <div className="hidden md:flex flex-col gap-24">
          {ITEMS.map((item, index) => {
            const isEven = index % 2 === 1;
            return (
              <div key={index} className="grid grid-cols-12 gap-12 items-center">
                <div className={`col-span-7 overflow-hidden rounded-2xl border border-white/10 bg-neutral-900 aspect-[16/10] group ${isEven ? "md:order-last" : ""}`}>
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-95 transition-opacity duration-300"
                  />
                </div>

                <div className="col-span-5 flex flex-col gap-3">
                  <span className="font-mono text-[9px] text-white/30 uppercase tracking-widest font-bold">{item.catalogue}</span>
                  <h3 className="font-outfit text-2xl font-light text-white">
                    {item.title}
                  </h3>
                  <p className="font-inter text-xs md:text-sm text-white/60 leading-relaxed border-l border-white/10 pl-5">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* COMPOSANT MOBILE SNAP */}
        <div className="md:hidden flex w-[calc(100%+2rem)] -mx-4 overflow-x-auto snap-x snap-mandatory px-4 gap-4 pb-4">
          {ITEMS.map((item, index) => (
            <div key={index} className="w-[85vw] shrink-0 snap-start flex flex-col gap-3 bg-[#050505] border border-white/10 p-4 rounded-xl">
              <div className="w-full aspect-[4/3] rounded-lg overflow-hidden bg-neutral-900 border border-white/5">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover opacity-90" />
              </div>
              <div className="flex flex-col gap-1.5">
                <span className="font-mono text-[8px] text-white/30 font-bold tracking-widest uppercase">{item.catalogue}</span>
                <h3 className="font-outfit text-lg font-medium text-white">{item.title}</h3>
                <p className="font-inter text-xs text-white/50 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}