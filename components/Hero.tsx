"use client";

import React, { useState } from "react";
import HeroSearchCard from "./HeroSearchCard";
import InteractiveMap from "./InteractiveMap";
import { LawyerProfile } from "@/lib/lawyers";

interface HeroProps {
  onSelectLawyer: (lawyer: LawyerProfile) => void;
  onOpenBarreauVerify: (lawyer?: LawyerProfile) => void;
  onOpenContact: (lawyer?: LawyerProfile) => void;
}

export default function Hero({
  onSelectLawyer,
  onOpenBarreauVerify,
  onOpenContact,
}: HeroProps) {
  const [clientType, setClientType] = useState<"moi" | "entreprise">("moi");
  const [selectedDomain, setSelectedDomain] = useState<string>("travail");
  const [selectedCity, setSelectedCity] = useState<string>("Québec");
  const [selectedLanguage, setSelectedLanguage] = useState<string>("Français");
  const [consultationType, setConsultationType] = useState<string>("En personne");

  const handleSubmitSearch = () => {
    // Scrolls smoothly to the domains or opens matching profile
    const el = document.getElementById("domaines");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative w-full pt-6 sm:pt-10 pb-16 lg:pb-24 bg-[#0a1815] overflow-hidden">
      {/* Subtle atmospheric ambient glow */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[400px] bg-emerald-900/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[500px] h-[350px] bg-[#deb887]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Editorial Eyebrow & Main Typography */}
        <div className="max-w-3xl mb-8 sm:mb-12">
          <div className="text-[11px] sm:text-xs font-bold tracking-[0.16em] text-[#9eb3a8] uppercase mb-3 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#deb887]" />
            Avocats au Québec
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-[58px] font-bold tracking-tight text-white leading-[1.08] mb-3">
            Le bon avocat.{" "}
            <span
              className="font-normal italic font-serif text-[#f2efe9]"
              style={{ fontFamily: "var(--font-serif), serif" }}
            >
              Pour votre situation.
            </span>
          </h1>
          <p className="text-base sm:text-lg text-[#a8b9b1] font-normal">
            Votre besoin. Votre région. Votre choix.
          </p>
        </div>

        {/* Two-Column Grid matching the mockup */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Search Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start">
            <HeroSearchCard
              clientType={clientType}
              onClientTypeChange={setClientType}
              selectedDomain={selectedDomain}
              onDomainChange={setSelectedDomain}
              selectedCity={selectedCity}
              onCityChange={setSelectedCity}
              selectedLanguage={selectedLanguage}
              onLanguageChange={setSelectedLanguage}
              consultationType={consultationType}
              onConsultationTypeChange={setConsultationType}
              onSubmitSearch={handleSubmitSearch}
            />
          </div>

          {/* Right Column: Interactive Map & Demo Profile */}
          <div className="lg:col-span-7 w-full">
            <InteractiveMap
              selectedCity={selectedCity}
              selectedDomain={selectedDomain}
              onSelectLawyer={onSelectLawyer}
              onOpenBarreauVerify={onOpenBarreauVerify}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
