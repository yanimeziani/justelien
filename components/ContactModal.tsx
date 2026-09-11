"use client";

import React, { useState } from "react";
import { X, CheckCircle, ShieldCheck, User, EnvelopeSimple, Phone, MapPin } from "@phosphor-icons/react";
import { LawyerProfile, LAWYERS } from "@/lib/lawyers";

interface ContactModalProps {
  lawyer: LawyerProfile | null;
  onClose: () => void;
}

export default function ContactModal({ lawyer, onClose }: ContactModalProps) {
  const [selectedLawyer, setSelectedLawyer] = useState<LawyerProfile>(
    lawyer || LAWYERS[0]
  );
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [region, setRegion] = useState("Québec");
  const [authorized, setAuthorized] = useState(true);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!authorized) return;
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in">
      <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden flex flex-col">
        {/* Header */}
        <div className="bg-[#0b241e] text-white p-5 flex items-center justify-between">
          <div>
            <div className="text-[10px] font-bold tracking-[0.14em] text-[#deb887] uppercase">
              Avant l'envoi • Demande de mise en relation
            </div>
            <h3 className="font-bold text-lg text-white mt-0.5">
              C'est vous qui décidez.
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="text-gray-300 hover:text-white p-1"
          >
            <X size={18} weight="bold" />
          </button>
        </div>

        {/* Body */}
        {submitted ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 bg-emerald-100 text-[#164e43] rounded-full flex items-center justify-center mx-auto shadow-sm">
              <CheckCircle size={36} weight="fill" />
            </div>
            <h4 className="text-xl font-bold text-gray-900">
              Votre demande a bien été transmise.
            </h4>
            <p className="text-sm text-gray-600 max-w-md mx-auto leading-relaxed">
              Vos coordonnées ont été partagées en toute confidentialité avec{" "}
              <span className="font-semibold text-gray-900">{selectedLawyer.name}</span> ({selectedLawyer.city}).
              L'avocat communiquera avec vous sous 24 à 48 heures pour confirmer les modalités de votre consultation.
            </p>
            <div className="p-3.5 bg-gray-50 rounded-xl border border-gray-200 text-xs text-gray-500 max-w-md mx-auto">
              ⓘ Aucune consultation ni honoraire n'est débité à cette étape.
            </div>
            <div className="pt-2">
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-2.5 bg-[#164e43] hover:bg-[#113f36] text-white text-xs font-bold rounded-lg shadow-sm"
              >
                Terminer
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4 text-xs sm:text-sm text-gray-800">
            {/* Target Lawyer Banner */}
            <div className="p-3.5 bg-[#f8f6f0] rounded-xl border border-[#eae5d9] flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#103a31] text-[#deb887] font-bold text-xs flex items-center justify-center">
                  {selectedLawyer.badgeNumber}
                </div>
                <div>
                  <div className="font-bold text-gray-900 text-xs">{selectedLawyer.name}</div>
                  <div className="text-[11px] text-gray-500">{selectedLawyer.title} ({selectedLawyer.city})</div>
                </div>
              </div>
              <span className="text-[11px] font-semibold text-emerald-700 bg-white px-2 py-0.5 rounded border border-emerald-200">
                Avocat sélectionné
              </span>
            </div>

            {/* Inputs */}
            <div className="space-y-3">
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">
                  Votre nom complet
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                    <User size={15} />
                  </div>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ex. Julie Tremblay"
                    className="w-full pl-9 pr-3 py-2 border border-gray-200 rounded-lg text-xs sm:text-sm focus:outline-none focus:border-[#164e43]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    Courriel
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                      <EnvelopeSimple size={15} />
                    </div>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="nom@exemple.ca"
                      className="w-full pl-9 pr-3 py-2 border border-gray-200 rounded-lg text-xs sm:text-sm focus:outline-none focus:border-[#164e43]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    Téléphone
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                      <Phone size={15} />
                    </div>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="(418) 555-0199"
                      className="w-full pl-9 pr-3 py-2 border border-gray-200 rounded-lg text-xs sm:text-sm focus:outline-none focus:border-[#164e43]"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Checkbox authorization */}
            <div className="pt-2 border-t border-gray-100">
              <label className="flex items-start gap-2.5 cursor-pointer select-none text-xs text-gray-700">
                <input
                  type="checkbox"
                  required
                  checked={authorized}
                  onChange={(e) => setAuthorized(e.target.checked)}
                  className="rounded border-gray-300 text-[#164e43] focus:ring-0 mt-0.5 w-4 h-4"
                />
                <span>
                  J'autorise JusteLien à transmettre mes coordonnées de contact à cet avocat
                  dans le seul but d'établir une prise de contact confidentielle.
                </span>
              </label>
            </div>

            {/* Footer buttons */}
            <div className="pt-3 flex items-center justify-between">
              <span className="text-[11px] text-gray-400">
                Aucun paiement requis
              </span>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-3 py-2 text-xs font-medium text-gray-600 hover:text-gray-900"
                >
                  Annuler
                </button>
                <button
                  type="submit"
                  disabled={!authorized}
                  className="px-5 py-2.5 bg-[#164e43] hover:bg-[#113f36] text-white text-xs font-bold rounded-lg shadow-sm transition-all"
                >
                  Confirmer ma demande ↗
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
