"use client";

import React from "react";
import { X, ShieldCheck, CheckCircle, ArrowSquareOut } from "@phosphor-icons/react";
import { LawyerProfile } from "@/lib/lawyers";

interface BarreauModalProps {
  lawyer: LawyerProfile | null;
  onClose: () => void;
}

export default function BarreauModal({ lawyer, onClose }: BarreauModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in">
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden flex flex-col">
        {/* Header */}
        <div className="bg-[#0b241e] text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <ShieldCheck size={24} className="text-[#deb887]" weight="fill" />
            <div>
              <h3 className="font-bold text-base text-white">
                Vérification au Barreau du Québec
              </h3>
              <p className="text-xs text-[#deb887]">Tableau de l'Ordre officiel</p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="text-gray-300 hover:text-white p-1"
          >
            <X size={18} weight="bold" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4 text-xs sm:text-sm text-gray-700">
          {lawyer ? (
            <div className="p-4 bg-emerald-50/70 rounded-xl border border-emerald-100 space-y-2">
              <div className="font-bold text-emerald-950 text-sm">{lawyer.name}</div>
              <div className="text-emerald-900 text-xs">
                Section : <span className="font-medium">{lawyer.barreauSection}</span>
              </div>
              <div className="text-emerald-900 text-xs">
                Numéro de membre : <span className="font-mono font-bold">#{lawyer.barreauNumber}</span>
              </div>
              <div className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-white px-2 py-0.5 rounded border border-emerald-200">
                <CheckCircle size={13} weight="fill" className="text-emerald-600" />
                Statut : Membre en règle avec droit de pratique
              </div>
            </div>
          ) : (
            <p className="text-gray-600">
              Tous les avocats référencés sur JusteLien sont préalablement vérifiés auprès du Barreau du Québec.
            </p>
          )}

          <div className="space-y-3 pt-2">
            <h4 className="font-bold text-xs uppercase tracking-wider text-gray-500">
              Garanties pour le public québécois :
            </h4>
            <ul className="space-y-2 text-xs text-gray-600 list-disc list-inside">
              <li>Assurance responsabilité professionnelle obligatoire.</li>
              <li>Secret professionnel et confidentialité protégés par la loi.</li>
              <li>Code de déontologie des avocats du Québec strictement appliqué.</li>
              <li>Formation continue obligatoire annuelle vérifiée par l'Ordre.</li>
            </ul>
          </div>

          <div className="pt-3">
            <a
              href="https://www.barreau.qc.ca/fr/trouver-avocat/bottin-des-avocats/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-[#f4f1ea] hover:bg-[#ebe6dc] text-[#164e43] font-bold text-xs rounded-lg transition-colors border border-[#ded8cb]"
            >
              <span>Consulter le bottin officiel du Barreau du Québec</span>
              <ArrowSquareOut size={14} weight="bold" />
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-gray-50 border-t border-gray-100 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 bg-[#164e43] text-white text-xs font-semibold rounded-lg hover:bg-[#113f36]"
          >
            Compris
          </button>
        </div>
      </div>
    </div>
  );
}
