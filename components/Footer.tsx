"use client";

import React from "react";
import Link from "next/link";
import Logo from "./Logo";

interface FooterProps {
  onOpenPrivacy?: () => void;
  onOpenTerms?: () => void;
  onOpenAvocatSpace?: () => void;
}

export default function Footer({
  onOpenPrivacy,
  onOpenTerms,
  onOpenAvocatSpace,
}: FooterProps) {
  return (
    <footer id="espace-avocat" className="w-full bg-[#061511] text-[#9eb3a8] py-12 sm:py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Top Row */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-white/10">
          <div>
            <Logo variant="light" size="md" />
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center gap-6 sm:gap-8 text-xs sm:text-sm text-[#b0c4ba]">
            <button
              type="button"
              onClick={onOpenPrivacy}
              className="hover:text-white transition-colors"
            >
              Confidentialité
            </button>
            <button
              type="button"
              onClick={onOpenTerms}
              className="hover:text-white transition-colors"
            >
              Conditions d'utilisation
            </button>
            <button
              type="button"
              onClick={onOpenAvocatSpace}
              className="hover:text-white transition-colors"
            >
              Espace avocat
            </button>
          </div>

          {/* MadeLucid signature */}
          <div className="text-xs sm:text-[13px] text-[#9eb3a8]">
            Une initiative <span className="font-semibold text-white">MadeLucid</span>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-[11.5px] text-[#6d8278]">
          <p>
            Plateforme indépendante de mise en relation. Aucun conseil juridique.
          </p>
          <p className="flex items-center gap-2">
            <span>Des gens d'ici. Des solutions pour demain.</span>
            <span className="text-[#deb887] font-bold">—</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
