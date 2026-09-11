"use client";

import React, { useState } from "react";
import {
  MapPin,
  Calendar,
  MagnifyingGlass,
  ArrowSquareOut,
  X,
  Plus,
  Minus,
  Crosshair,
  ListDashes,
  MapTrifold,
  Check,
} from "@phosphor-icons/react";
import { LAWYERS, LawyerProfile } from "@/lib/lawyers";

interface InteractiveMapProps {
  selectedCity: string;
  selectedDomain: string;
  onSelectLawyer: (lawyer: LawyerProfile) => void;
  onOpenBarreauVerify: (lawyer?: LawyerProfile) => void;
}

export default function InteractiveMap({
  selectedCity,
  selectedDomain,
  onSelectLawyer,
  onOpenBarreauVerify,
}: InteractiveMapProps) {
  const [viewMode, setViewMode] = useState<"carte" | "liste">("carte");
  const [activePinId, setActivePinId] = useState<string>("avocat-01-quebec-travail");
  const [isPopupOpen, setIsPopupOpen] = useState(true);
  const [compareCount, setCompareCount] = useState<number>(0);
  const [zoomLevel, setZoomLevel] = useState<number>(1);

  // Match selected pin to lawyer
  const activeLawyer =
    LAWYERS.find((l) => l.id === activePinId) || LAWYERS[0];

  // If user changed city from parent search card, sync active pin
  React.useEffect(() => {
    const matched = LAWYERS.find(
      (l) => l.city.toLowerCase() === selectedCity.toLowerCase()
    );
    if (matched) {
      setActivePinId(matched.id);
      setIsPopupOpen(true);
    }
  }, [selectedCity]);

  // Filtered lawyers for list view
  const filteredLawyers = LAWYERS.filter((l) => {
    const matchCity =
      !selectedCity ||
      l.city.toLowerCase().includes(selectedCity.toLowerCase()) ||
      selectedCity === "Québec";
    return matchCity;
  });

  return (
    <div className="relative w-full h-[540px] sm:h-[600px] lg:h-[640px] rounded-2xl overflow-hidden bg-[#0a1613] border border-white/10 shadow-2xl flex flex-col justify-between">
      {/* Top Map Control Bar */}
      <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between pointer-events-none">
        <div className="pointer-events-auto">
          {/* Subtle location indicator */}
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0c221b]/80 backdrop-blur-md text-emerald-200 text-xs font-medium border border-emerald-500/20 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            Corridor Saint-Laurent • Québec
          </span>
        </div>

        {/* [ Carte | Liste ] Toggle Pill */}
        <div className="pointer-events-auto bg-white/90 backdrop-blur-md rounded-full p-1 shadow-md border border-gray-200 flex items-center gap-1">
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

      {/* Main View Area */}
      {viewMode === "carte" ? (
        <div className="relative w-full h-full overflow-hidden select-none">
          {/* Visual Dark Cartography Background */}
          <div
            className="absolute inset-0 bg-[#081714] bg-cover bg-center transition-transform duration-700 ease-out"
            style={{
              backgroundImage: "url('/images/hero_map_ref.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "brightness(0.92) contrast(1.08)",
              transform: `scale(${zoomLevel})`,
            }}
          />

          {/* St. Lawrence River subtle path overlay */}
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#081714]/80 via-transparent to-[#081714]/40" />

          {/* PIN 01 : QUÉBEC (Top-Right) */}
          <div
            className="absolute top-[32%] right-[18%] z-10 cursor-pointer transform -translate-x-1/2 -translate-y-1/2 group"
            onClick={() => {
              setActivePinId("avocat-01-quebec-travail");
              setIsPopupOpen(true);
            }}
          >
            {/* Glow Aura */}
            <div className="relative flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-emerald-500/15 border border-emerald-400/30 animate-pulse" />
              {/* Pin Marker */}
              <div className="absolute w-10 h-10 rounded-full bg-[#deb887] p-0.5 shadow-[0_0_20px_rgba(222,184,135,0.6)] flex items-center justify-center transition-transform group-hover:scale-110">
                <div className="w-full h-full rounded-full bg-[#0e352b] flex items-center justify-center text-[#deb887] font-bold text-sm tracking-tighter">
                  01
                </div>
              </div>
            </div>
            <div className="mt-1 text-center font-serif text-white/90 text-sm font-semibold tracking-wide drop-shadow-md">
              Québec
            </div>
          </div>

          {/* PIN 02 : TROIS-RIVIÈRES (Center) */}
          <div
            className="absolute top-[52%] left-[45%] z-10 cursor-pointer transform -translate-x-1/2 -translate-y-1/2 group"
            onClick={() => {
              setActivePinId("avocat-02-trois-rivieres-famille");
              setIsPopupOpen(true);
            }}
          >
            <div className="relative flex items-center justify-center">
              <div className="w-9 h-9 rounded-full bg-[#465a53]/80 p-0.5 shadow-md flex items-center justify-center transition-transform group-hover:scale-110">
                <div className="w-full h-full rounded-full bg-[#1b2b26] flex items-center justify-center text-gray-300 font-bold text-xs">
                  02
                </div>
              </div>
            </div>
            <div className="mt-1 text-center font-serif text-white/80 text-xs font-medium drop-shadow-md">
              Trois-Rivières
            </div>
          </div>

          {/* PIN 03 : MONTRÉAL (Bottom-Left) */}
          <div
            className="absolute bottom-[20%] left-[16%] z-10 cursor-pointer transform -translate-x-1/2 -translate-y-1/2 group"
            onClick={() => {
              setActivePinId("avocat-03-montreal-affaires");
              setIsPopupOpen(true);
            }}
          >
            <div className="relative flex items-center justify-center">
              <div className="w-9 h-9 rounded-full bg-[#465a53]/80 p-0.5 shadow-md flex items-center justify-center transition-transform group-hover:scale-110">
                <div className="w-full h-full rounded-full bg-[#1b2b26] flex items-center justify-center text-gray-300 font-bold text-xs">
                  03
                </div>
              </div>
            </div>
            <div className="mt-1 text-center font-serif text-white/80 text-xs font-medium drop-shadow-md">
              Montréal
            </div>
          </div>

          {/* FLOATING DEMO POPUP CARD (Positioned over or beside Pin 01) */}
          {isPopupOpen && activeLawyer && (
            <div
              className={`absolute z-30 transition-all duration-300 ${
                activeLawyer.city === "Québec"
                  ? "top-14 left-4 sm:left-8 w-[290px] sm:w-[320px]"
                  : activeLawyer.city === "Trois-Rivières"
                  ? "top-20 left-4 sm:left-12 w-[290px] sm:w-[320px]"
                  : "bottom-24 left-4 sm:left-24 w-[290px] sm:w-[320px]"
              } bg-white rounded-xl shadow-[0_20px_40px_rgba(0,0,0,0.4)] border border-gray-100 p-4 animate-in fade-in zoom-in-95`}
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

              {/* Identity row */}
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

              {/* Badges / metadata */}
              <div className="flex flex-wrap gap-2 text-[11.5px] text-gray-700 mb-3">
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

              {/* CTA Button */}
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

          {/* Bottom Right Zoom & Sector Controls */}
          <div className="absolute bottom-14 right-4 z-20 flex flex-col items-end gap-2">
            <div className="flex flex-col bg-[#0b1e19]/90 backdrop-blur-md rounded-lg border border-white/10 overflow-hidden shadow-lg">
              <button
                type="button"
                onClick={() => setZoomLevel((z) => Math.min(1.4, z + 0.1))}
                className="p-2 text-white/80 hover:text-white hover:bg-white/10 transition-colors border-b border-white/10"
                aria-label="Zoom avant"
              >
                <Plus size={16} weight="bold" />
              </button>
              <button
                type="button"
                onClick={() => setZoomLevel((z) => Math.max(0.8, z - 0.1))}
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
      ) : (
        /* LIST VIEW */
        <div className="relative w-full h-full p-4 sm:p-6 overflow-y-auto bg-[#0a1815] text-white">
          <div className="max-w-xl mx-auto space-y-3 pb-16">
            <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-2">
              <span className="text-xs uppercase font-bold tracking-wider text-emerald-300">
                {filteredLawyers.length} Avocats répertoriés
              </span>
              <span className="text-xs text-gray-400">
                Filtre: {selectedCity}
              </span>
            </div>

            {filteredLawyers.map((lawyer) => (
              <div
                key={lawyer.id}
                className="bg-[#10241e] hover:bg-[#152e27] border border-white/10 rounded-xl p-4 transition-all duration-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#deb887]/20 border border-[#deb887]/40 text-[#deb887] font-bold text-xs flex items-center justify-center shrink-0">
                    {lawyer.badgeNumber}
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-white">
                      {lawyer.title}
                    </h4>
                    <p className="text-xs text-gray-400 mt-0.5">
                      {lawyer.city} • {lawyer.languages.join(", ")} •{" "}
                      <span className="text-emerald-400 font-medium">
                        {lawyer.consultationType}
                      </span>
                    </p>
                    <p className="text-xs text-gray-300 line-clamp-1 mt-1 font-light">
                      {lawyer.approach}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 self-end sm:self-center shrink-0">
                  <button
                    type="button"
                    onClick={() => onOpenBarreauVerify(lawyer)}
                    className="text-xs text-gray-400 hover:text-white underline py-1 px-2"
                  >
                    Barreau
                  </button>
                  <button
                    type="button"
                    onClick={() => onSelectLawyer(lawyer)}
                    className="py-1.5 px-3 rounded-lg bg-[#164e43] hover:bg-[#1d6355] text-white text-xs font-semibold flex items-center gap-1 transition-all"
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

      {/* Bottom Status Bar */}
      <div className="relative z-20 w-full bg-[#081411]/90 backdrop-blur-md px-4 py-2.5 border-t border-white/10 flex flex-wrap items-center justify-between text-[11.5px] text-gray-400">
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
  );
}
