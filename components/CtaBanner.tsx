"use client";

import React from "react";

interface CtaBannerProps {
  onOpenTrouver: () => void;
}

export default function CtaBanner({ onOpenTrouver }: CtaBannerProps) {
  return (
    <section className="w-full bg-[#0b382c] text-white py-14 sm:py-20 relative overflow-hidden border-t border-emerald-900/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Block */}
          <div className="lg:col-span-4">
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-white leading-tight">
              Un premier pas.
              <br />
              <span
                className="font-normal italic font-serif text-[#deb887]"
                style={{ fontFamily: "var(--font-serif), serif" }}
              >
                En toute clarté.
              </span>
            </h2>
          </div>

          {/* Center Block */}
          <div className="lg:col-span-5 space-y-4">
            <p className="text-sm sm:text-[15px] text-emerald-100/90 leading-relaxed font-light">
              Trouvez un avocat qui correspond à votre situation et avancez selon vos propres conditions.
            </p>

            <div>
              <button
                type="button"
                onClick={onOpenTrouver}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#0b382c] hover:bg-[#f7f4ed] active:bg-[#ede8db] font-bold text-sm sm:text-[14.5px] transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                <span>Trouver un avocat</span>
                <span className="text-base">↗</span>
              </button>
            </div>
          </div>

          {/* Right Block */}
          <div className="lg:col-span-3 lg:border-l lg:border-emerald-800/80 lg:pl-8 pt-4 lg:pt-0">
            <div className="text-[11px] sm:text-xs tracking-[0.16em] uppercase text-emerald-300 font-semibold leading-relaxed">
              Des connexions
              <br />
              humaines pour
              <br />
              un québec plus juste.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
