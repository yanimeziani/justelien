"use client";

import React from "react";
import { X, CheckCircle, ShieldCheck, MapPin, Calendar, Clock, Scales } from "@phosphor-icons/react";
import { LawyerProfile } from "@/lib/lawyers";

interface LawyerModalProps {
  lawyer: LawyerProfile | null;
  onClose: () => void;
  onRequestContact: (lawyer: LawyerProfile) => void;
  onOpenBarreauVerify: (lawyer: LawyerProfile) => void;
}

export default function LawyerModal({
  lawyer,
  onClose,
  onRequestContact,
  onOpenBarreauVerify,
}: LawyerModalProps) {
  if (!lawyer) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden flex flex-col max-h-[90vh]">
        {/* Modal Header */}
        <div className="bg-[#0b241e] text-white p-6 flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-[#deb887] text-[#0b241e] font-bold text-lg flex items-center justify-center shadow-md">
              {lawyer.badgeNumber}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-bold text-white">{lawyer.name}</h3>
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-full border border-emerald-400/30">
                  <ShieldCheck size={13} weight="fill" />
                  Barreau vérifié
                </span>
              </div>
              <p className="text-sm text-[#deb887] font-medium">{lawyer.title}</p>
              <p className="text-xs text-gray-300 mt-0.5">
                {lawyer.city} • {lawyer.barreauSection} (Membre #{lawyer.barreauNumber})
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-gray-300 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
          >
            <X size={20} weight="bold" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-[#16241f]">
          {/* Key specs */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 bg-[#f8f6f0] rounded-xl border border-[#eae5d9] text-xs">
            <div className="flex items-center gap-2">
              <MapPin size={18} className="text-[#164e43]" weight="bold" />
              <div>
                <div className="text-gray-500">Consultation</div>
                <div className="font-semibold text-gray-900">{lawyer.consultationType}</div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Clock size={18} className="text-[#164e43]" weight="bold" />
              <div>
                <div className="text-gray-500">Expérience</div>
                <div className="font-semibold text-gray-900">{lawyer.experienceYears} ans au Barreau</div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Scales size={18} className="text-[#164e43]" weight="bold" />
              <div>
                <div className="text-gray-500">Langues</div>
                <div className="font-semibold text-gray-900">{lawyer.languages.join(", ")}</div>
              </div>
            </div>
          </div>

          {/* Bio */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
              Parcours et pratique
            </h4>
            <p className="text-sm text-gray-700 leading-relaxed">{lawyer.bio}</p>
          </div>

          {/* Approach */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
              Approche du client
            </h4>
            <p className="text-sm text-gray-700 leading-relaxed">{lawyer.approach}</p>
          </div>

          {/* Rate note */}
          <div className="p-3.5 bg-emerald-50 rounded-xl border border-emerald-100 flex items-start gap-2.5">
            <CheckCircle size={18} weight="fill" className="text-[#164e43] shrink-0 mt-0.5" />
            <div className="text-xs text-emerald-900">
              <span className="font-bold">Politique tarifaire : </span>
              {lawyer.rateDescription}. Aucune facturation surprise; devis préliminaire établi avant toute diligence.
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 bg-gray-50 border-t border-gray-100 flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={() => onOpenBarreauVerify(lawyer)}
            className="text-xs text-gray-600 hover:text-[#164e43] underline font-medium"
          >
            Vérifier au Barreau du Québec ↗
          </button>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-gray-600 hover:text-gray-900"
            >
              Fermer
            </button>
            <button
              type="button"
              onClick={() => {
                onClose();
                onRequestContact(lawyer);
              }}
              className="px-5 py-2.5 rounded-lg bg-[#164e43] hover:bg-[#113f36] text-white text-xs font-bold flex items-center gap-1.5 shadow-sm transition-all"
            >
              <span>Demander un contact</span>
              <span>↗</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
