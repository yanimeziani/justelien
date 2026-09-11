"use client";

import React from "react";
import Image from "next/image";

interface RegionsSectionProps {
  onSelectRegion: (city: string) => void;
  onOpenJusticeResources: () => void;
}

export default function RegionsSection({
  onSelectRegion,
  onOpenJusticeResources,
}: RegionsSectionProps) {
  const regions = [
    { name: "Montréal", id: "montreal" },
    { name: "Québec", id: "quebec" },
    { name: "Laval", id: "laval" },
    { name: "Gatineau", id: "gatineau" },
    { name: "Sherbrooke", id: "sherbrooke" },
  ];

  return (
    <section id="ressources" className="w-full bg-[#fbf9f5] text-[#16241f] py-16 sm:py-24 border-b border-[#eae5d9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Panoramic City Image */}
          <div className="lg:col-span-6">
            <div className="relative w-full h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden border border-[#eae5d9] shadow-md bg-gray-100">
              <Image
                src="/images/quebec_city.jpg"
                alt="Vue de Québec et du fleuve Saint-Laurent"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Right Column: Editorial Text & Regions */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight text-[#16241f] leading-tight mb-3">
                Au Québec.
                <br />
                <span
                  className="font-normal italic font-serif text-[#164e43]"
                  style={{ fontFamily: "var(--font-serif), serif" }}
                >
                  Selon votre réalité.
                </span>
              </h2>

              <p className="text-sm sm:text-base text-[#5c6d66] font-normal leading-relaxed mb-6">
                Recherchez par région et préférence de consultation.
              </p>

              {/* City links / chips */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-6">
                {regions.map((region) => (
                  <button
                    key={region.id}
                    type="button"
                    onClick={() => onSelectRegion(region.name)}
                    className="text-sm sm:text-base font-medium text-[#16241f] hover:text-[#164e43] underline underline-offset-4 decoration-[#deb887] hover:decoration-[#164e43] transition-all"
                  >
                    {region.name}
                  </button>
                ))}
              </div>

              {/* Justice resources link */}
              <div>
                <button
                  type="button"
                  onClick={onOpenJusticeResources}
                  className="inline-flex items-center gap-1 text-xs sm:text-sm font-semibold text-[#164e43] hover:text-[#0f3830] underline"
                >
                  <span>Consulter les ressources d'accès à la justice</span>
                  <span className="text-xs">↗</span>
                </button>
              </div>
            </div>

            {/* Sidebar badge */}
            <div className="pt-4 border-t border-[#eae5d9]/80 flex items-center justify-between">
              <span className="text-[11px] font-bold tracking-[0.16em] uppercase text-[#73837c]">
                Même région. Plus d'options.
              </span>
              <span className="text-xs text-[#8a9892]">Barreaux de section du Québec</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
