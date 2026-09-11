import React from "react";

interface LogoProps {
  className?: string;
  variant?: "dark" | "light";
  size?: "sm" | "md" | "lg";
}

export default function Logo({
  className = "",
  variant = "light",
  size = "md",
}: LogoProps) {
  const textColor = variant === "light" ? "text-white" : "text-[#0c1e19]";
  const iconSize = size === "sm" ? 24 : size === "lg" ? 36 : 28;

  return (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      {/* Precision Interlocking Knot SVG mirroring JusteLien identity */}
      <svg
        width={iconSize}
        height={iconSize * 0.9}
        viewBox="0 0 38 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
        aria-hidden="true"
      >
        <path
          d="M13 5 C7.5 5 4 9 4 15.5 C4 22 7.5 26 13 26 C16.5 26 19.5 23.5 21.5 19.8 L18.8 17.6 C17.3 20.6 15.2 22.4 13 22.4 C9.6 22.4 7.6 19.4 7.6 15.5 C7.6 11.6 9.6 8.6 13 8.6 C16.6 8.6 19.4 12 21.3 15.5 L24.3 13.5 C21.8 8.8 18.2 5 13 5 Z"
          fill="#deb887"
        />
        <path
          d="M25 29 C30.5 29 34 25 34 18.5 C34 12 30.5 8 25 8 C21.5 8 18.5 10.5 16.5 14.2 L19.2 16.4 C20.7 13.4 22.8 11.6 25 11.6 C28.4 11.6 30.4 14.6 30.4 18.5 C30.4 22.4 28.4 25.4 25 25.4 C21.4 25.4 18.6 22 16.7 18.5 L13.7 20.5 C16.2 25.2 19.8 29 25 29 Z"
          fill="#deb887"
        />
      </svg>
      <span
        className={`font-semibold tracking-tight text-xl sm:text-2xl ${textColor}`}
        style={{ fontFamily: "var(--font-sans), sans-serif" }}
      >
        Juste<span className="font-bold">Lien</span>
      </span>
    </div>
  );
}
