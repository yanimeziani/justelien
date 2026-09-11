"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import DomainsSection from "@/components/DomainsSection";
import ProcessSection from "@/components/ProcessSection";
import ControlSection from "@/components/ControlSection";
import RegionsSection from "@/components/RegionsSection";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";
import LawyerModal from "@/components/LawyerModal";
import BarreauModal from "@/components/BarreauModal";
import ContactModal from "@/components/ContactModal";
import InfoModal from "@/components/InfoModal";
import { LawyerProfile, LAWYERS } from "@/lib/lawyers";

export default function HomePage() {
  const [selectedLawyer, setSelectedLawyer] = useState<LawyerProfile | null>(null);
  const [isBarreauOpen, setIsBarreauOpen] = useState(false);
  const [barreauLawyer, setBarreauLawyer] = useState<LawyerProfile | null>(null);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [contactLawyer, setContactLawyer] = useState<LawyerProfile | null>(null);
  const [infoModalType, setInfoModalType] = useState<"privacy" | "terms" | "avocat" | "justice" | null>(null);

  const handleOpenBarreauVerify = (lawyer?: LawyerProfile) => {
    setBarreauLawyer(lawyer || LAWYERS[0]);
    setIsBarreauOpen(true);
  };

  const handleOpenContact = (lawyer?: LawyerProfile) => {
    setContactLawyer(lawyer || LAWYERS[0]);
    setIsContactOpen(true);
  };

  const handleSelectDomain = (domainId: string) => {
    // Find matching lawyer and open
    const matched = LAWYERS.find((l) => l.domainId === domainId) || LAWYERS[0];
    setSelectedLawyer(matched);
  };

  const handleSelectRegion = (city: string) => {
    const matched = LAWYERS.find((l) => l.city.toLowerCase() === city.toLowerCase()) || LAWYERS[0];
    setSelectedLawyer(matched);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0a1815] text-[#16241f] selection:bg-[#164e43] selection:text-white">
      {/* Fixed/Sticky Top Navigation */}
      <Header
        onOpenTrouver={() => handleOpenContact(LAWYERS[0])}
        onSelectDomain={handleSelectDomain}
      />

      {/* Main Sections */}
      <main className="flex-1 w-full">
        {/* Hero with Search Card & Corridor Map */}
        <Hero
          onSelectLawyer={(lawyer) => setSelectedLawyer(lawyer)}
          onOpenBarreauVerify={handleOpenBarreauVerify}
          onOpenContact={handleOpenContact}
        />

        {/* Section 2: Une situation. Un premier pas. (3 Photo Cards) */}
        <DomainsSection onSelectDomain={handleSelectDomain} />

        {/* Section 3: Votre choix, à chaque étape. (Dark Slate 01-02-03) */}
        <ProcessSection onOpenBarreauVerify={() => handleOpenBarreauVerify()} />

        {/* Section 4: Vous gardez le contrôle. (Verification & Plant card) */}
        <ControlSection onConfirmDemand={() => handleOpenContact(LAWYERS[0])} />

        {/* Section 5: Au Québec. Selon votre réalité. (Quebec City Photo & Regions) */}
        <RegionsSection
          onSelectRegion={handleSelectRegion}
          onOpenJusticeResources={() => setInfoModalType("justice")}
        />

        {/* Section 6: Deep Emerald CTA Banner */}
        <CtaBanner onOpenTrouver={() => handleOpenContact(LAWYERS[0])} />
      </main>

      {/* Footer */}
      <Footer
        onOpenPrivacy={() => setInfoModalType("privacy")}
        onOpenTerms={() => setInfoModalType("terms")}
        onOpenAvocatSpace={() => setInfoModalType("avocat")}
      />

      {/* Modals & Dialogs */}
      {selectedLawyer && (
        <LawyerModal
          lawyer={selectedLawyer}
          onClose={() => setSelectedLawyer(null)}
          onRequestContact={(lawyer) => handleOpenContact(lawyer)}
          onOpenBarreauVerify={(lawyer) => handleOpenBarreauVerify(lawyer)}
        />
      )}

      {isBarreauOpen && (
        <BarreauModal
          lawyer={barreauLawyer}
          onClose={() => {
            setIsBarreauOpen(false);
            setBarreauLawyer(null);
          }}
        />
      )}

      {isContactOpen && (
        <ContactModal
          lawyer={contactLawyer}
          onClose={() => {
            setIsContactOpen(false);
            setContactLawyer(null);
          }}
        />
      )}

      {infoModalType && (
        <InfoModal
          type={infoModalType}
          onClose={() => setInfoModalType(null)}
        />
      )}
    </div>
  );
}
