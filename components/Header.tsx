"use client";

import React, { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";

interface HeaderProps {
  onOpenTrouver?: () => void;
  onSelectDomain?: (id: string) => void;
}

export default function Header({ onOpenTrouver }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="relative z-40 w-full bg-[#091713]/90 backdrop-blur-md border-b border-white/5 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="transition-opacity hover:opacity-90">
          <Logo variant="light" size="md" />
        </Link>

        {/* Center Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-[14.5px] text-[#c4d6cd] font-normal">
          <a
            href="#domaines"
            className="hover:text-white transition-colors duration-200"
          >
            Domaines de droit
          </a>
          <a
            href="#comment-ca-marche"
            className="hover:text-white transition-colors duration-200"
          >
            Comment ça marche
          </a>
          <a
            href="#ressources"
            className="hover:text-white transition-colors duration-200"
          >
            Ressources
          </a>
          <a
            href="#espace-avocat"
            className="hover:text-white transition-colors duration-200"
          >
            Espace avocat
          </a>
        </nav>

        {/* Right CTA Button */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onOpenTrouver}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium text-white border border-[#2b6557] bg-[#12392f]/70 hover:bg-[#184e41] transition-all duration-200 shadow-sm"
          >
            <span>Trouver un avocat</span>
            <span className="text-xs">↗</span>
          </button>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-white/80 hover:text-white"
            aria-label="Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pt-2 pb-6 bg-[#091713] border-b border-white/10 space-y-3">
          <a
            href="#domaines"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-[#c4d6cd] hover:text-white py-2 text-base"
          >
            Domaines de droit
          </a>
          <a
            href="#comment-ca-marche"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-[#c4d6cd] hover:text-white py-2 text-base"
          >
            Comment ça marche
          </a>
          <a
            href="#ressources"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-[#c4d6cd] hover:text-white py-2 text-base"
          >
            Ressources
          </a>
          <a
            href="#espace-avocat"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-[#c4d6cd] hover:text-white py-2 text-base"
          >
            Espace avocat
          </a>
        </div>
      )}
    </header>
  );
}
