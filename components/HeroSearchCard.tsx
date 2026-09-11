"use client";

import React from "react";
import {
  User,
  Buildings,
  Users,
  Briefcase,
  HouseLine,
  TrendUp,
  Scales,
  Shield,
  MapPin,
  Check,
  Info,
} from "@phosphor-icons/react";
import { LEGAL_DOMAINS } from "@/lib/domains";
import { QUEBEC_REGIONS } from "@/lib/regions";

interface HeroSearchCardProps {
  clientType: "moi" | "entreprise";
  onClientTypeChange: (type: "moi" | "entreprise") => void;
  selectedDomain: string;
  onDomainChange: (domainId: string) => void;
  selectedCity: string;
  onCityChange: (city: string) => void;
  selectedLanguage: string;
  onLanguageChange: (lang: string) => void;
  consultationType: string;
  onConsultationTypeChange: (type: string) => void;
  onSubmitSearch: () => void;
}

export default function HeroSearchCard({
  clientType,
  onClientTypeChange,
  selectedDomain,
  onDomainChange,
  selectedCity,
  onCityChange,
  selectedLanguage,
  onLanguageChange,
  consultationType,
  onConsultationTypeChange,
  onSubmitSearch,
}: HeroSearchCardProps) {
  const getDomainIcon = (id: string) => {
    switch (id) {
      case "famille":
        return <Users size={17} weight="bold" />;
      case "travail":
        return <Briefcase size={17} weight="bold" />;
      case "immobilier":
        return <HouseLine size={17} weight="bold" />;
      case "affaires":
        return <TrendUp size={17} weight="bold" />;
      case "civil":
        return <Scales size={17} weight="bold" />;
      case "criminel":
        return <Shield size={17} weight="bold" />;
      default:
        return <Briefcase size={17} weight="bold" />;
    }
  };

  return (
    <div className="w-full max-w-[430px] lg:max-w-[460px] bg-white rounded-2xl p-5 sm:p-6 shadow-[0_24px_50px_rgba(0,0,0,0.35)] border border-gray-100 text-[#16241f] transition-all">
      {/* Step Badge */}
      <div className="text-[11px] font-bold tracking-[0.14em] text-[#6d7c75] uppercase mb-3">
        01 / Votre recherche
      </div>

      {/* Target selector */}
      <div className="mb-4">
        <label className="block text-[13.5px] font-semibold text-[#182621] mb-2">
          Je cherche un avocat
        </label>
        <div className="grid grid-cols-2 gap-2">
          <button
            type="button"
            onClick={() => onClientTypeChange("moi")}
            className={`flex items-center justify-between px-3.5 py-2.5 rounded-lg text-[13.5px] font-medium transition-all ${
              clientType === "moi"
                ? "bg-[#164e43] text-white shadow-sm"
                : "bg-white border border-gray-200 text-gray-700 hover:border-gray-300"
            }`}
          >
            <span className="flex items-center gap-2">
              <User size={16} weight={clientType === "moi" ? "bold" : "regular"} />
              <span>Pour moi</span>
            </span>
            {clientType === "moi" && <Check size={14} weight="bold" />}
          </button>

          <button
            type="button"
            onClick={() => onClientTypeChange("entreprise")}
            className={`flex items-center justify-between px-3.5 py-2.5 rounded-lg text-[13.5px] font-medium transition-all ${
              clientType === "entreprise"
                ? "bg-[#164e43] text-white shadow-sm"
                : "bg-white border border-gray-200 text-gray-700 hover:border-gray-300"
            }`}
          >
            <span className="flex items-center gap-2">
              <Buildings
                size={16}
                weight={clientType === "entreprise" ? "bold" : "regular"}
              />
              <span>Pour mon entreprise</span>
            </span>
            {clientType === "entreprise" && <Check size={14} weight="bold" />}
          </button>
        </div>
      </div>

      {/* Domaine de droit */}
      <div className="mb-4">
        <label className="block text-[13.5px] font-semibold text-[#182621] mb-2">
          Domaine de droit
        </label>
        <div className="grid grid-cols-3 gap-2">
          {LEGAL_DOMAINS.map((domain) => {
            const isSelected = selectedDomain === domain.id;
            return (
              <button
                key={domain.id}
                type="button"
                onClick={() => onDomainChange(domain.id)}
                className={`flex items-center justify-between px-2.5 py-2 rounded-lg text-[12.5px] font-medium transition-all border ${
                  isSelected
                    ? "bg-[#164e43] border-[#164e43] text-white shadow-sm"
                    : "bg-white border-gray-200 text-gray-700 hover:border-gray-300"
                }`}
              >
                <span className="flex items-center gap-1.5 truncate">
                  {getDomainIcon(domain.id)}
                  <span className="truncate">{domain.shortName}</span>
                </span>
                {isSelected && <Check size={12} weight="bold" className="shrink-0 ml-1" />}
              </button>
            );
          })}
        </div>
      </div>

      {/* Ville ou région */}
      <div className="mb-4">
        <label className="block text-[13.5px] font-semibold text-[#182621] mb-2">
          Ville ou région
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
            <MapPin size={16} weight="regular" />
          </div>
          <select
            value={selectedCity}
            onChange={(e) => onCityChange(e.target.value)}
            className="w-full pl-9 pr-9 py-2.5 bg-white border border-gray-200 rounded-lg text-[13.5px] text-gray-800 font-medium appearance-none focus:outline-none focus:border-[#164e43] focus:ring-1 focus:ring-[#164e43]"
          >
            {QUEBEC_REGIONS.map((region) => (
              <option key={region.id} value={region.shortName}>
                {region.shortName} ({region.name})
              </option>
            ))}
          </select>
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-gray-400">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>

      {/* Langue & Consultation dropdowns */}
      <div className="grid grid-cols-2 gap-3 mb-5">
        <div>
          <label className="block text-[12.5px] font-semibold text-[#182621] mb-1.5">
            Langue
          </label>
          <div className="relative">
            <select
              value={selectedLanguage}
              onChange={(e) => onLanguageChange(e.target.value)}
              className="w-full px-3 py-2 bg-white border border-gray-200 rounded-lg text-[13px] text-gray-800 font-medium appearance-none focus:outline-none focus:border-[#164e43]"
            >
              <option value="Français">Français</option>
              <option value="Anglais">Anglais</option>
              <option value="Bilingue">Bilingue (FR/EN)</option>
            </select>
            <div className="absolute inset-y-0 right-0 pr-2.5 flex items-center pointer-events-none text-gray-400">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        <div>
          <label className="block text-[12.5px] font-semibold text-[#182621] mb-1.5">
            Consultation
          </label>
          <div className="relative">
            <select
              value={consultationType}
              onChange={(e) => onConsultationTypeChange(e.target.value)}
              className="w-full px-3 py-2 bg-white border border-gray-200 rounded-lg text-[13px] text-gray-800 font-medium appearance-none focus:outline-none focus:border-[#164e43]"
            >
              <option value="En personne">En personne</option>
              <option value="Virtuelle">Virtuelle (Zoom/Teams)</option>
              <option value="Au choix">Au choix du client</option>
            </select>
            <div className="absolute inset-y-0 right-0 pr-2.5 flex items-center pointer-events-none text-gray-400">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Primary Action Button */}
      <button
        type="button"
        onClick={onSubmitSearch}
        className="w-full py-3 px-4 bg-[#164e43] hover:bg-[#113f36] active:bg-[#0d332c] text-white text-[14.5px] font-semibold rounded-lg flex items-center justify-center gap-2 transition-all duration-200 shadow-md hover:shadow-lg"
      >
        <span>Voir les profils</span>
        <span className="text-base">↗</span>
      </button>

      {/* Privacy / Safety note */}
      <div className="mt-3 flex items-center gap-1.5 text-[11.5px] text-[#6d7c75]">
        <Info size={14} className="shrink-0 text-gray-400" />
        <span>Aucun récit détaillé ni document à cette étape.</span>
      </div>
    </div>
  );
}
