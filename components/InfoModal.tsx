"use client";

import React from "react";
import { X, ShieldCheck, FileText, Gavel, Scales } from "@phosphor-icons/react";

interface InfoModalProps {
  type: "privacy" | "terms" | "avocat" | "justice" | null;
  onClose: () => void;
}

export default function InfoModal({ type, onClose }: InfoModalProps) {
  if (!type) return null;

  const getContent = () => {
    switch (type) {
      case "privacy":
        return {
          title: "Politique de confidentialité",
          icon: <ShieldCheck size={24} className="text-[#deb887]" weight="fill" />,
          subtitle: "Loi 25 du Québec & Protection des renseignements personnels",
          body: (
            <div className="space-y-3 text-xs sm:text-sm text-gray-700 leading-relaxed">
              <p>
                JusteLien applique les normes les plus strictes de conformité avec la{" "}
                <span className="font-semibold">Loi 25 du Québec</span> sur la protection des renseignements personnels.
              </p>
              <h5 className="font-bold text-gray-900 pt-2">1. Principe de minimisation</h5>
              <p>
                Aucun document juridique confidentiel, pièce de dossier ni récit détaillé n'est collecté sur la plateforme. Seules les coordonnées nécessaires à la prise de contact initiale sont transmises.
              </p>
              <h5 className="font-bold text-gray-900 pt-2">2. Consentement explicite</h5>
              <p>
                Vos coordonnées ne sont jamais vendues, cédées ni partagées sans votre autorisation active explicite à l'avocat que vous avez vous-même désigné.
              </p>
              <h5 className="font-bold text-gray-900 pt-2">3. Hébergement des données</h5>
              <p>
                Toutes les données en transit et au repos sont chiffrées selon les standards TLS 1.3 et AES-256 avec hébergement respectueux des exigences québécoises et canadiennes.
              </p>
            </div>
          ),
        };
      case "terms":
        return {
          title: "Conditions d'utilisation",
          icon: <FileText size={24} className="text-[#deb887]" weight="fill" />,
          subtitle: "Plateforme indépendante de mise en relation juridique",
          body: (
            <div className="space-y-3 text-xs sm:text-sm text-gray-700 leading-relaxed">
              <p className="p-3 bg-amber-50 rounded-lg border border-amber-200 text-amber-900 font-medium">
                Important : JusteLien n'est pas un cabinet d'avocats et ne fournit aucun avis ni conseil juridique.
              </p>
              <p>
                JusteLien est une plateforme technologique indépendante visant à faciliter l'accès à la justice au Québec en permettant aux justiciables d'identifier et d'entrer en relation avec des avocats membres en règle du Barreau du Québec.
              </p>
              <h5 className="font-bold text-gray-900 pt-2">Relation avocat-client</h5>
              <p>
                L'utilisation de la plateforme ne crée aucune relation avocat-client entre l'utilisateur et JusteLien. La relation professionnelle n'est établie qu'après accord mutuel direct entre l'utilisateur et l'avocat choisi.
              </p>
            </div>
          ),
        };
      case "avocat":
        return {
          title: "Espace Avocat",
          icon: <Gavel size={24} className="text-[#deb887]" weight="fill" />,
          subtitle: "Rejoindre le réseau de praticiens JusteLien",
          body: (
            <div className="space-y-4 text-xs sm:text-sm text-gray-700 leading-relaxed">
              <p>
                Vous êtes membre en règle du Barreau du Québec et souhaitez recevoir des demandes de consultation qualifiées, respectueuses de votre secteur et de votre pratique ?
              </p>
              <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-100 space-y-2">
                <div className="font-bold text-emerald-950">Avantages pour les cabinets et praticiens :</div>
                <ul className="list-disc list-inside space-y-1 text-xs text-emerald-900">
                  <li>Filtrage préalable par domaine de droit et préférence géographique.</li>
                  <li>Respect scrupuleux du Code de déontologie des avocats du Québec.</li>
                  <li>Aucun modèle d'enchères ni de courtage déguisé.</li>
                  <li>Visibilité auprès des justiciables et entreprises locales.</li>
                </ul>
              </div>
              <div className="pt-2">
                <a
                  href="mailto:contact@justelien.ca?subject=Demande%20d'adh%C3%A9sion%20avocat%20JusteLien"
                  className="inline-flex items-center justify-center w-full py-2.5 px-4 bg-[#164e43] hover:bg-[#113f36] text-white font-bold rounded-lg text-xs transition-colors shadow-sm"
                >
                  Soumettre une demande d'adhésion praticien
                </a>
              </div>
            </div>
          ),
        };
      case "justice":
        return {
          title: "Accès à la justice au Québec",
          icon: <Scales size={24} className="text-[#deb887]" weight="fill" />,
          subtitle: "Ressources communautaires et gouvernementales",
          body: (
            <div className="space-y-3 text-xs sm:text-sm text-gray-700 leading-relaxed">
              <p>
                Si vous avez besoin d'assistance juridique financière ou communautaire :
              </p>
              <ul className="space-y-2">
                <li className="p-3 bg-gray-50 rounded-lg border border-gray-200">
                  <div className="font-bold text-gray-900">Commission des services juridiques (Aide juridique)</div>
                  <div className="text-xs text-gray-600">Pour les personnes financièrement admissibles au Québec.</div>
                  <a href="https://www.csj.qc.ca" target="_blank" rel="noopener noreferrer" className="text-xs text-[#164e43] underline font-medium mt-1 inline-block">Visiter csj.qc.ca ↗</a>
                </li>
                <li className="p-3 bg-gray-50 rounded-lg border border-gray-200">
                  <div className="font-bold text-gray-900">Centres de justice de proximité (CJP)</div>
                  <div className="text-xs text-gray-600">Services d'information juridique gratuits et confidentiels dans plusieurs régions.</div>
                  <a href="https://www.justicedeproximite.qc.ca" target="_blank" rel="noopener noreferrer" className="text-xs text-[#164e43] underline font-medium mt-1 inline-block">Visiter justicedeproximite.qc.ca ↗</a>
                </li>
                <li className="p-3 bg-gray-50 rounded-lg border border-gray-200">
                  <div className="font-bold text-gray-900">Barreau du Québec - Service de référence</div>
                  <div className="text-xs text-gray-600">Consultation initiale de 30 minutes à tarif préférentiel fixe.</div>
                  <a href="https://www.barreau.qc.ca" target="_blank" rel="noopener noreferrer" className="text-xs text-[#164e43] underline font-medium mt-1 inline-block">Visiter barreau.qc.ca ↗</a>
                </li>
              </ul>
            </div>
          ),
        };
    }
  };

  const content = getContent();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in">
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden flex flex-col max-h-[85vh]">
        <div className="bg-[#0b241e] text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            {content.icon}
            <div>
              <h3 className="font-bold text-base text-white">{content.title}</h3>
              <p className="text-xs text-[#deb887]">{content.subtitle}</p>
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

        <div className="p-6 overflow-y-auto">{content.body}</div>

        <div className="p-4 bg-gray-50 border-t border-gray-100 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 bg-[#164e43] text-white text-xs font-semibold rounded-lg hover:bg-[#113f36]"
          >
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
}
