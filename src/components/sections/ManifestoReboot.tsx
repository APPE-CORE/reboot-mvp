"use client";

export default function ManifestoReboot() {
  return (
    <section className="relative w-full py-24 md:py-32 px-6 md:px-12 lg:px-24 z-10 bg-[#000000]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
        
        {/* Titre de section */}
        <div className="md:col-span-4 flex flex-col">
          <span className="font-montserrat text-action-laser font-bold tracking-[0.2em] uppercase text-[10px] mb-4">
            02 — Le Concept
          </span>
          <h2 className="font-outfit text-4xl md:text-5xl font-medium text-white tracking-tight leading-tight">
            Désacraliser <br className="hidden md:block" />
            l'institution.
          </h2>
        </div>

        {/* Corps du manifeste */}
        <div className="md:col-span-8 flex flex-col gap-10">
          <p className="font-inter text-2xl md:text-3xl font-light text-white leading-snug">
            L'art contemporain n'est pas une archive statique. C'est une matière vivante qui exige l'intensité. Nous refusons le silence.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-white/70 font-inter text-sm md:text-base leading-relaxed">
            <p>
              REBOOT détruit la frontière entre la contemplation muséale et l'énergie du clubbing. La nef monumentale des Abattoirs est réquisitionnée. La scénographie architecturale est repensée.
            </p>
            <p>
              Vous ne venez pas pour observer passivement. Vous venez pour interagir au cœur des œuvres, avec un line-up exclusif et une proposition de mixologie locale.
            </p>
          </div>

          {/* Chiffres clés / Stats */}
          <div className="flex flex-wrap gap-12 mt-4 pt-8 border-t border-white/10">
            <div className="flex flex-col gap-1">
              <span className="font-outfit text-3xl font-medium text-white">100%</span>
              <span className="font-inter text-xs text-action-neon uppercase tracking-widest font-bold">Hybridation culturelle</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-outfit text-3xl font-medium text-white">0</span>
              <span className="font-inter text-xs text-action-laser uppercase tracking-widest font-bold">Contrainte académique</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}