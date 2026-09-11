"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import HeroSearchCard from "./HeroSearchCard";
import { LAWYERS, LawyerProfile } from "@/lib/lawyers";
import {
  MapTrifold,
  ListDashes,
  Plus,
  Minus,
  Crosshair,
  MapPin,
  Calendar,
  X,
} from "@phosphor-icons/react";

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

  const [viewMode, setViewMode] = useState<"carte" | "liste">("carte");
  const [activePinId, setActivePinId] = useState<string>("avocat-01-quebec-travail");
  const [isPopupOpen, setIsPopupOpen] = useState(true);
  const [compareCount, setCompareCount] = useState<number>(0);
  const [zoomLevel, setZoomLevel] = useState<number>(1);

  // Synchronize city selection with active pin
  useEffect(() => {
    const matched = LAWYERS.find(
      (l) => l.city.toLowerCase() === selectedCity.toLowerCase()
    );
    if (matched) {
      setActivePinId(matched.id);
      setIsPopupOpen(true);
    }
  }, [selectedCity]);

  const activeLawyer =
    LAWYERS.find((l) => l.id === activePinId) || LAWYERS[0];

  const filteredLawyers = LAWYERS.filter((l) => {
    const matchCity =
      !selectedCity ||
      l.city.toLowerCase().includes(selectedCity.toLowerCase()) ||
      selectedCity === "Québec";
    return matchCity;
  });

  const handleSubmitSearch = () => {
    const el = document.getElementById("domaines");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative w-full min-h-[760px] lg:min-h-[820px] bg-[#071714] overflow-hidden select-none">
      {/* ─────────────────────────────────────────────────────────────
          1. FULL-HERO BACKGROUND MAP (Diagonal St-Laurent Corridor)
          ───────────────────────────────────────────────────────────── */}
      <div className="absolute inset-0 z-0 w-full h-full overflow-hidden">
        <div
          className="absolute inset-0 bg-[#071714] transition-transform duration-700 ease-out"
          style={{
            backgroundImage: "url('/images/hero_map_ref.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center right",
            filter: "brightness(0.95) contrast(1.05)",
            transform: `scale(${zoomLevel})`,
          }}
        />

        {/* Cinematic Atmospheric Vignette / Readability Gradients */}
        {/* Left deep dark scrim to give crisp contrast for editorial typography & card */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#071714] via-[#071714]/85 to-transparent pointer-events-none"
          style={{ width: "65%" }}
        />
        {/* Bottom vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#071714] via-transparent to-[#071714]/30 pointer-events-none" />
      </div>

      {/* ─────────────────────────────────────────────────────────────
          2. FOREGROUND CONTENT & CONTROLS
          ───────────────────────────────────────────────────────────── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10 pb-16 flex flex-col justify-between min-h-[760px] lg:min-h-[820px]">
        {/* Top Header Row with Hero Text & [Carte | Liste] Switcher */}
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 mb-6">
          {/* Hero Editorial Heading */}
          <div className="max-w-2xl">
            <div className="text-[11px] sm:text-xs font-bold tracking-[0.16em] text-[#9eb3a8] uppercase mb-2.5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#deb887]" />
              Avocats au Québec
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-bold tracking-tight text-white leading-[1.08] mb-2.5">
              Le bon avocat.{" "}
              <span
                className="font-normal italic font-serif text-[#f2efe9]"
                style={{ fontFamily: "var(--font-serif), serif" }}
              >
                Pour votre situation.
              </span>
            </h1>
            <p className="text-sm sm:text-base text-[#a8b9b1] font-normal">
              Votre besoin. Votre région. Votre choix.
            </p>
          </div>

          {/* [ Carte | Liste ] Toggle Pill (Top Right) */}
          <div className="self-end lg:self-start bg-white/90 backdrop-blur-md rounded-full p-1 shadow-md border border-gray-200 flex items-center gap-1 shrink-0">
            <button
              type="button"
              onClick={() => setViewMode("carte")}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold transition-all ${
                viewMode === "carte"
                  ? "bg-[#164e43] text-white shadow-sm"
                  : "text-gray-700 hover:text-black"
              }`}
            >
              <MapTrifold size={13} weight="bold" />
              <span>Carte</span>
            </button>
            <button
              type="button"
              onClick={() => setViewMode("liste")}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold transition-all ${
                viewMode === "liste"
                  ? "bg-[#164e43] text-white shadow-sm"
                  : "text-gray-700 hover:text-black"
              }`}
            >
              <ListDashes size={13} weight="bold" />
              <span>Liste</span>
            </button>
          </div>
        </div>

        {/* Two-Column Mid-Hero Section */}
        {viewMode === "carte" ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start my-auto">
            {/* Left Column: 01 / VOTRE RECHERCHE Card */}
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

            {/* Right Column: Interactive Pins & Floating Demo Card */}
            <div className="lg:col-span-7 relative min-h-[380px] sm:min-h-[440px] lg:min-h-[500px]">
              {/* PIN 01 : QUÉBEC (Top Right Corridor) */}
              <div
                className="absolute top-[18%] right-[16%] sm:right-[22%] z-20 cursor-pointer transform -translate-x-1/2 -translate-y-1/2 group"
                onClick={() => {
                  setActivePinId("avocat-01-quebec-travail");
                  setIsPopupOpen(true);
                }}
              >
                <div className="relative flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-400/40 animate-pulse" />
                  <div className="absolute w-11 h-11 rounded-full bg-[#deb887] p-0.5 shadow-[0_0_24px_rgba(222,184,135,0.7)] flex items-center justify-center transition-transform group-hover:scale-110">
                    <div className="w-full h-full rounded-full bg-[#0e352b] flex items-center justify-center text-[#deb887] font-bold text-sm tracking-tight">
                      01
                    </div>
                  </div>
                </div>
                <div className="mt-1 text-center font-serif text-white text-sm font-semibold tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                  Québec
                </div>
              </div>

              {/* PIN 02 : TROIS-RIVIÈRES (Center Corridor) */}
              <div
                className="absolute top-[48%] left-[46%] z-20 cursor-pointer transform -translate-x-1/2 -translate-y-1/2 group"
                onClick={() => {
                  setActivePinId("avocat-02-trois-rivieres-famille");
                  setIsPopupOpen(true);
                }}
              >
                <div className="relative flex items-center justify-center">
                  <div className="w-9 h-9 rounded-full bg-[#3a4e47]/80 p-0.5 shadow-md flex items-center justify-center transition-transform group-hover:scale-110">
                    <div className="w-full h-full rounded-full bg-[#1b2b26] flex items-center justify-center text-gray-300 font-bold text-xs">
                      02
                    </div>
                  </div>
                </div>
                <div className="mt-1 text-center font-serif text-white/90 text-xs font-medium drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                  Trois-Rivières
                </div>
              </div>

              {/* PIN 03 : MONTRÉAL (Bottom Left Corridor) */}
              <div
                className="absolute bottom-[14%] left-[20%] z-20 cursor-pointer transform -translate-x-1/2 -translate-y-1/2 group"
                onClick={() => {
                  setActivePinId("avocat-03-montreal-affaires");
                  setIsPopupOpen(true);
                }}
              >
                <div className="relative flex items-center justify-center">
                  <div className="w-9 h-9 rounded-full bg-[#3a4e47]/80 p-0.5 shadow-md flex items-center justify-center transition-transform group-hover:scale-110">
                    <div className="w-full h-full rounded-full bg-[#1b2b26] flex items-center justify-center text-gray-300 font-bold text-xs">
                      03
                    </div>
                  </div>
                </div>
                <div className="mt-1 text-center font-serif text-white/90 text-xs font-medium drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                  Montréal
                </div>
              </div>

              {/* FLOATING DEMO PROFILE CARD (Over or Near Pin 01) */}
              {isPopupOpen && activeLawyer && (
                <div
                  className={`absolute z-30 transition-all duration-300 ${
                    activeLawyer.city === "Québec"
                      ? "top-4 sm:top-8 left-2 sm:left-12 w-[290px] sm:w-[320px]"
                      : activeLawyer.city === "Trois-Rivières"
                      ? "top-12 left-2 sm:left-16 w-[290px] sm:w-[320px]"
                      : "bottom-12 left-2 sm:left-24 w-[290px] sm:w-[320px]"
                  } bg-white rounded-xl shadow-[0_24px_50px_rgba(0,0,0,0.5)] border border-gray-100 p-4 animate-in fade-in`}
                >
                  {/* Header */}
                  <div className="flex items-center justify-between pb-2 border-b border-gray-100 mb-2.5">
                    <span className="text-[10px] font-bold tracking-[0.14em] text-gray-500 uppercase">
                      Profil de démonstration
                    </span>
                    <button
                      type="button"
                      onClick={() => setIsPopupOpen(false)}
                      className="text-gray-400 hover:text-gray-700 p-1"
                      aria-label="Fermer"
                    >
                      <X size={14} weight="bold" />
                    </button>
                  </div>

                  {/* Lawyer Identity */}
                  <div className="flex items-start gap-3 mb-2.5">
                    <div className="w-9 h-9 rounded-full bg-[#103a31] text-[#deb887] font-bold text-sm flex items-center justify-center shrink-0 shadow-inner">
                      {activeLawyer.badgeNumber}
                    </div>
                    <div>
                      <h4 className="font-bold text-[14.5px] text-gray-900 leading-tight">
                        {activeLawyer.title}
                      </h4>
                      <p className="text-[12px] text-gray-500 mt-0.5">
                        {activeLawyer.city} • {activeLawyer.languages.join(", ")}
                      </p>
                    </div>
                  </div>

                  {/* Metadata Chips */}
                  <div className="flex flex-wrap gap-1.5 text-[11px] text-gray-700 mb-3">
                    <span className="inline-flex items-center gap-1 bg-gray-100 px-2 py-0.5 rounded text-gray-600">
                      <MapPin size={12} weight="bold" />
                      {activeLawyer.consultationType}
                    </span>
                    <span className="inline-flex items-center gap-1 bg-gray-100 px-2 py-0.5 rounded text-gray-600">
                      <Calendar size={12} weight="bold" />
                      {activeLawyer.consultationDetails}
                    </span>
                  </div>

                  {/* Barreau Verification Link */}
                  <div className="mb-3">
                    <button
                      type="button"
                      onClick={() => onOpenBarreauVerify(activeLawyer)}
                      className="inline-flex items-center gap-1 text-[11.5px] text-gray-600 hover:text-[#164e43] underline"
                    >
                      <span>Vérifier au Barreau</span>
                      <span className="text-[10px]">↗</span>
                    </button>
                  </div>

                  {/* Action Button */}
                  <button
                    type="button"
                    onClick={() => onSelectLawyer(activeLawyer)}
                    className="w-full py-2.5 px-3 bg-[#164e43] hover:bg-[#113f36] text-white text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5 transition-all shadow-sm"
                  >
                    <span>Consulter le profil</span>
                    <span className="text-xs">↗</span>
                  </button>
                </div>
              )}

              {/* Bottom Right Map Zoom & Sector Controls */}
              <div className="absolute bottom-2 right-2 sm:right-4 z-20 flex flex-col items-end gap-2">
                <div className="flex flex-col bg-[#0b1e19]/90 backdrop-blur-md rounded-lg border border-white/10 overflow-hidden shadow-lg">
                  <button
                    type="button"
                    onClick={() => setZoomLevel((z) => Math.min(1.35, z + 0.08))}
                    className="p-2 text-white/80 hover:text-white hover:bg-white/10 transition-colors border-b border-white/10"
                    aria-label="Zoom avant"
                  >
                    <Plus size={16} weight="bold" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setZoomLevel((z) => Math.max(0.85, z - 0.08))}
                    className="p-2 text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                    aria-label="Zoom arrière"
                  >
                    <Minus size={16} weight="bold" />
                  </button>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setZoomLevel(1);
                    setActivePinId("avocat-01-quebec-travail");
                    setIsPopupOpen(true);
                  }}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0e2720]/90 backdrop-blur-md text-white text-xs font-medium border border-white/15 hover:bg-[#16382f] transition-all shadow-md"
                >
                  <Crosshair size={14} weight="bold" />
                  <span>Modifier le secteur</span>
                </button>
              </div>
            </div>
          </div>
        ) : (
          /* LIST VIEW */
          <div className="bg-[#0b1e19]/95 backdrop-blur-md rounded-2xl border border-white/15 p-6 shadow-2xl my-auto">
            <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
              <span className="text-xs uppercase font-bold tracking-wider text-emerald-300">
                {filteredLawyers.length} Avocats répertoriés
              </span>
              <span className="text-xs text-gray-300">
                Secteur actif : <strong className="text-white">{selectedCity}</strong>
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredLawyers.map((lawyer) => (
                <div
                  key={lawyer.id}
                  className="bg-[#122822] hover:bg-[#18362e] border border-white/10 rounded-xl p-4 transition-all duration-200 flex flex-col justify-between space-y-3"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#deb887]/20 border border-[#deb887]/40 text-[#deb887] font-bold text-xs flex items-center justify-center shrink-0">
                      {lawyer.badgeNumber}
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-white leading-tight">
                        {lawyer.title}
                      </h4>
                      <p className="text-xs text-emerald-300 mt-0.5">
                        {lawyer.city} • {lawyer.consultationType}
                      </p>
                    </div>
                  </div>

                  <p className="text-xs text-gray-300 line-clamp-2 font-light">
                    {lawyer.approach}
                  </p>

                  <div className="flex items-center justify-between pt-2 border-t border-white/10">
                    <button
                      type="button"
                      onClick={() => onOpenBarreauVerify(lawyer)}
                      className="text-[11.5px] text-gray-400 hover:text-white underline"
                    >
                      Barreau #{lawyer.barreauNumber}
                    </button>
                    <button
                      type="button"
                      onClick={() => onSelectLawyer(lawyer)}
                      className="py-1 px-2.5 rounded-lg bg-[#164e43] hover:bg-[#1f6859] text-white text-xs font-semibold flex items-center gap-1"
                    >
                      <span>Voir profil</span>
                      <span>↗</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bottom Status Bar across full Hero */}
        <div className="w-full pt-4 mt-6 border-t border-white/10 flex flex-wrap items-center justify-between text-[11.5px] text-gray-400">
          <label className="flex items-center gap-2 cursor-pointer hover:text-white transition-colors">
            <input
              type="checkbox"
              checked={compareCount > 0}
              onChange={(e) => setCompareCount(e.target.checked ? 1 : 0)}
              className="rounded border-gray-600 text-[#164e43] focus:ring-0 w-3.5 h-3.5 bg-black/40"
            />
            <span>Comparer les profils ({compareCount})</span>
          </label>

          <span className="text-[11px] text-gray-400">
            Carte illustrative • Profils de démonstration
          </span>
        </div>
      </div>
    </section>
  );
}
