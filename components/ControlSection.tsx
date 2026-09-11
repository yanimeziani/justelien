"use client";

import React, { useState } from "react";
import Image from "next/image";
import { EnvelopeSimple, LockKey, Check } from "@phosphor-icons/react";

interface ControlSectionProps {
  onConfirmDemand: () => void;
}

export default function ControlSection({ onConfirmDemand }: ControlSectionProps) {
  const [authorized, setAuthorized] = useState(true);
  const [submitted, setSubmitted] = useState(false);

  const handleConfirm = () => {
    if (!authorized) return;
    setSubmitted(true);
    setTimeout(() => {
      onConfirmDemand();
      setSubmitted(false);
    }, 400);
  };

  return (
    <section className="w-full bg-[#fbf9f5] text-[#16241f] py-16 sm:py-24 border-b border-[#eae5d9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-bold tracking-tight text-[#16241f] leading-[1.1]">
              Vous gardez
              <br />
              <span
                className="font-normal italic font-serif text-[#164e43]"
                style={{ fontFamily: "var(--font-serif), serif" }}
              >
                le contrôle.
              </span>
            </h2>

            <p className="text-sm sm:text-base text-[#52635c] font-normal leading-relaxed">
              Choisissez l'avocat destinataire et les renseignements transmis.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 text-[#164e43] flex items-center justify-center shrink-0 mt-0.5 border border-emerald-100">
                  <EnvelopeSimple size={18} weight="bold" />
                </div>
                <p className="text-sm font-medium text-[#22332c] leading-snug">
                  Votre demande reste une demande de contact.
                </p>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 text-[#164e43] flex items-center justify-center shrink-0 mt-0.5 border border-emerald-100">
                  <LockKey size={18} weight="bold" />
                </div>
                <p className="text-sm font-medium text-[#22332c] leading-snug">
                  L'avocat confirme les modalités de consultation.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: High-Fidelity Interactive Preview Card */}
          <div className="lg:col-span-7 flex justify-center lg:justify-end">
            <div className="w-full max-w-[540px] bg-white rounded-2xl overflow-hidden border border-[#eae5d9] shadow-[0_16px_40px_rgba(0,0,0,0.08)] grid grid-cols-1 sm:grid-cols-12">
              {/* Card Left Part */}
              <div className="sm:col-span-8 p-6 sm:p-7 flex flex-col justify-between space-y-5">
                <div>
                  <div className="text-[10.5px] font-bold tracking-[0.14em] text-gray-500 uppercase mb-2">
                    Avant l'envoi
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 leading-tight mb-4">
                    C'est vous qui décidez.
                  </h3>

                  {/* Summary key-value */}
                  <div className="space-y-2 text-xs py-2 border-y border-gray-100 mb-4">
                    <div className="flex justify-between items-center py-1">
                      <span className="text-gray-500">Destinataire</span>
                      <span className="font-semibold text-gray-800 text-right">
                        L'avocat que vous avez choisi
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-1">
                      <span className="text-gray-500">Renseignements transmis</span>
                      <span className="font-semibold text-gray-800 text-right">
                        Vos coordonnées de contact
                      </span>
                    </div>
                  </div>

                  {/* Interactive Authorization Checkbox */}
                  <label className="flex items-center gap-2.5 cursor-pointer select-none text-[13px] text-gray-800 font-medium">
                    <input
                      type="checkbox"
                      checked={authorized}
                      onChange={(e) => setAuthorized(e.target.checked)}
                      className="rounded border-gray-300 text-[#164e43] focus:ring-0 w-4 h-4"
                    />
                    <span>J'autorise l'envoi à cet avocat.</span>
                  </label>
                </div>

                <div>
                  {/* Action button */}
                  <button
                    type="button"
                    onClick={handleConfirm}
                    disabled={!authorized}
                    className={`w-full py-3 px-4 rounded-lg text-xs sm:text-sm font-semibold flex items-center justify-center gap-1.5 transition-all shadow-sm ${
                      authorized
                        ? "bg-[#164e43] hover:bg-[#113f36] text-white"
                        : "bg-gray-200 text-gray-400 cursor-not-allowed"
                    }`}
                  >
                    {submitted ? (
                      <span className="flex items-center gap-1">
                        <Check size={16} weight="bold" />
                        <span>Demande initiée</span>
                      </span>
                    ) : (
                      <>
                        <span>Confirmer ma demande</span>
                        <span className="text-xs">↗</span>
                      </>
                    )}
                  </button>

                  <div className="text-[11px] text-gray-400 text-center mt-2.5">
                    Aucune consultation n'est confirmée à cette étape.
                  </div>
                </div>
              </div>

              {/* Card Right Part: Plant photo & vertical motto */}
              <div className="hidden sm:block sm:col-span-4 relative bg-[#f5f2ec] border-l border-[#eae5d9] min-h-[280px]">
                <Image
                  src="/images/plant_shadow.jpg"
                  alt="Vos choix. Votre parcours."
                  fill
                  className="object-cover"
                  sizes="200px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
