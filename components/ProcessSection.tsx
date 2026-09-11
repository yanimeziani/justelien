"use client";

import React from "react";

interface ProcessSectionProps {
  onOpenBarreauVerify: () => void;
}

export default function ProcessSection({ onOpenBarreauVerify }: ProcessSectionProps) {
  return (
    <section id="comment-ca-marche" className="w-full bg-[#0e2129] text-white py-16 sm:py-24 relative overflow-hidden border-y border-white/10">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 -right-20 w-[450px] h-[450px] bg-emerald-700/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
          {/* Left Column: Headline & Barreau Link */}
          <div className="lg:col-span-4">
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-white leading-tight mb-4">
              Votre choix,
              <br />
              <span
                className="font-normal italic font-serif text-[#deb887]"
                style={{ fontFamily: "var(--font-serif), serif" }}
              >
                à chaque étape.
              </span>
            </h2>

            <button
              type="button"
              onClick={onOpenBarreauVerify}
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-[#deb887] hover:text-[#ebd1a8] underline underline-offset-4 transition-colors"
            >
              <span>Vérifier un statut au Barreau du Québec</span>
              <span className="text-xs">↗</span>
            </button>
          </div>

          {/* Center Column: 3 Steps */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {/* Step 01 */}
            <div className="space-y-2">
              <div
                className="text-4xl sm:text-5xl font-serif text-[#deb887] font-semibold"
                style={{ fontFamily: "var(--font-serif), serif" }}
              >
                01
              </div>
              <h3 className="font-bold text-base text-white">
                Précisez votre recherche.
              </h3>
              <p className="text-xs sm:text-[13px] text-slate-300 leading-relaxed">
                Trouvez des avocats selon le domaine, la région et vos préférences.
              </p>
            </div>

            {/* Step 02 */}
            <div className="space-y-2">
              <div
                className="text-4xl sm:text-5xl font-serif text-[#deb887] font-semibold"
                style={{ fontFamily: "var(--font-serif), serif" }}
              >
                02
              </div>
              <h3 className="font-bold text-base text-white">
                Consultez les profils.
              </h3>
              <p className="text-xs sm:text-[13px] text-slate-300 leading-relaxed">
                Découvrez le parcours, les domaines de pratique et les approches de chaque avocat.
              </p>
            </div>

            {/* Step 03 */}
            <div className="space-y-2">
              <div
                className="text-4xl sm:text-5xl font-serif text-[#deb887] font-semibold"
                style={{ fontFamily: "var(--font-serif), serif" }}
              >
                03
              </div>
              <h3 className="font-bold text-base text-white">
                Choisissez <span className="italic">qui</span> contacter.
              </h3>
              <p className="text-xs sm:text-[13px] text-slate-300 leading-relaxed">
                Vous autorisez le partage de vos coordonnées avec l'avocat choisi.
              </p>
            </div>
          </div>

          {/* Right Column: Architectural watermark & motto */}
          <div className="lg:col-span-2 flex flex-col items-center lg:items-end justify-between self-stretch text-right pt-2 lg:pt-0">
            {/* Heritage line illustration */}
            <div className="w-16 h-16 opacity-30 text-[#deb887] mb-auto">
              <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M32 4 L32 20 M24 20 L40 20 M20 20 L20 60 M44 20 L44 60 M20 32 L44 32 M20 44 L44 44 M32 8 L36 16 L28 16 Z" />
                <path d="M12 40 L20 36 L20 60 L12 60 Z M52 40 L44 36 L44 60 L52 60 Z" />
              </svg>
            </div>

            <div className="text-[10px] tracking-[0.16em] uppercase text-[#deb887]/80 font-semibold leading-snug">
              Ici des gens d'aujourd'hui,
              <br />
              un québec de demain.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
