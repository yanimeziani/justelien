"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "@phosphor-icons/react";

interface DomainsSectionProps {
  onSelectDomain: (domainId: string) => void;
}

export default function DomainsSection({ onSelectDomain }: DomainsSectionProps) {
  return (
    <section id="domaines" className="w-full bg-[#f8f6f0] text-[#16241f] py-16 sm:py-24 border-t border-[#eae5d9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight text-[#16241f]">
            Une situation.{" "}
            <span
              className="italic font-normal font-serif text-[#164e43]"
              style={{ fontFamily: "var(--font-serif), serif" }}
            >
              Un premier pas.
            </span>
          </h2>
          <p className="text-sm sm:text-base text-[#5c6d66] max-w-md">
            Trouvez le domaine qui correspond à votre recherche.
          </p>
        </div>

        {/* 3 Large Photographic Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-10">
          {/* Card 1: Famille */}
          <div
            onClick={() => onSelectDomain("famille")}
            className="group cursor-pointer flex flex-col bg-white rounded-2xl overflow-hidden border border-[#eae5d9] shadow-sm hover:shadow-xl transition-all duration-300"
          >
            <div className="relative w-full h-56 sm:h-64 overflow-hidden bg-gray-100">
              <Image
                src="/images/card_famille.jpg"
                alt="Droit de la famille - JusteLien"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="p-5 flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold text-[#16241f] group-hover:text-[#164e43] transition-colors flex items-center gap-1.5">
                  <span>Famille</span>
                  <span className="text-lg transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    →
                  </span>
                </h3>
                <p className="text-xs text-[#6a7b74] mt-1">
                  Séparation, garde, pension, médiation
                </p>
              </div>
            </div>
          </div>

          {/* Card 2: Travail */}
          <div
            onClick={() => onSelectDomain("travail")}
            className="group cursor-pointer flex flex-col bg-white rounded-2xl overflow-hidden border border-[#eae5d9] shadow-sm hover:shadow-xl transition-all duration-300"
          >
            <div className="relative w-full h-56 sm:h-64 overflow-hidden bg-gray-100">
              <Image
                src="/images/card_travail.jpg"
                alt="Droit du travail - JusteLien"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="p-5 flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold text-[#16241f] group-hover:text-[#164e43] transition-colors flex items-center gap-1.5">
                  <span>Travail</span>
                  <span className="text-lg transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    →
                  </span>
                </h3>
                <p className="text-xs text-[#6a7b74] mt-1">
                  Congédiement, fin d'emploi, CNESST
                </p>
              </div>
            </div>
          </div>

          {/* Card 3: Affaires */}
          <div
            onClick={() => onSelectDomain("affaires")}
            className="group cursor-pointer flex flex-col bg-white rounded-2xl overflow-hidden border border-[#eae5d9] shadow-sm hover:shadow-xl transition-all duration-300"
          >
            <div className="relative w-full h-56 sm:h-64 overflow-hidden bg-gray-100">
              <Image
                src="/images/card_affaires.jpg"
                alt="Droit des affaires - JusteLien"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="p-5 flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold text-[#16241f] group-hover:text-[#164e43] transition-colors flex items-center gap-1.5">
                  <span>Affaires</span>
                  <span className="text-lg transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    →
                  </span>
                </h3>
                <p className="text-xs text-[#6a7b74] mt-1">
                  PME, contrats, actionnaires, baux
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Domain Links Row */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 pt-4 text-sm font-semibold text-[#273831] border-t border-[#eae5d9]/80">
          <button
            type="button"
            onClick={() => onSelectDomain("immobilier")}
            className="hover:text-[#164e43] flex items-center gap-1 transition-colors"
          >
            <span>Immobilier</span>
            <span className="text-xs">→</span>
          </button>
          <span className="text-[#d8d3c5] hidden sm:inline">|</span>

          <button
            type="button"
            onClick={() => onSelectDomain("civil")}
            className="hover:text-[#164e43] flex items-center gap-1 transition-colors"
          >
            <span>Civil</span>
            <span className="text-xs">→</span>
          </button>
          <span className="text-[#d8d3c5] hidden sm:inline">|</span>

          <button
            type="button"
            onClick={() => onSelectDomain("criminel")}
            className="hover:text-[#164e43] flex items-center gap-1 transition-colors"
          >
            <span>Criminel et pénal</span>
            <span className="text-xs">→</span>
          </button>
          <span className="text-[#d8d3c5] hidden sm:inline">|</span>

          <button
            type="button"
            onClick={() => onSelectDomain("all")}
            className="hover:text-[#164e43] flex items-center gap-1 transition-colors font-bold text-[#164e43]"
          >
            <span>Tous les domaines</span>
            <span className="text-xs">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
