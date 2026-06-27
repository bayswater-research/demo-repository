import React from "react";

interface BayswaterLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  theme?: "light" | "dark";
}

export const BayswaterLogo: React.FC<BayswaterLogoProps> = ({
  className = "",
  size = "md",
  theme = "light"
}) => {
  const sizeMap = {
    sm: { width: 120, height: 100, textClass: "text-[7px]" },
    md: { width: 220, height: 160, textClass: "text-[9px]" },
    lg: { width: 360, height: 260, textClass: "text-[11px]" },
    xl: { width: 480, height: 350, textClass: "text-[14px]" }
  };

  const config = sizeMap[size];

  // Programmatically generate sine waves for absolute crispness and flexibility
  const generateSinePath = (
    width: number,
    height: number,
    amplitude: number,
    frequency: number,
    phase: number,
    verticalOffset: number
  ) => {
    let points = [];
    const steps = 100;
    for (let i = 0; i <= steps; i++) {
      const x = (i / steps) * width;
      const y =
        Math.sin((i / steps) * Math.PI * 2 * frequency + phase) * amplitude +
        verticalOffset;
      points.push(`${x.toFixed(2)},${y.toFixed(2)}`);
    }
    return `M ${points.join(" L ")}`;
  };

  // Base canvas dimensions for the internal vector scaling
  const w = 400;
  const h = 220;

  // Paths
  const primaryWave = generateSinePath(280, 220, 48, 1, Math.PI, 110);
  const secondaryWave = generateSinePath(280, 220, 28, 2.5, 0, 110);
  const tertiaryWave = generateSinePath(280, 220, 8, 4, Math.PI / 2, 110);

  const isDark = theme === "dark";

  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <svg
        viewBox={`0 0 ${w} ${h}`}
        className="w-full h-auto select-none"
        style={{ maxWidth: "100%" }}
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Left Bracket */}
        <path
          d="M 50,45 L 35,45 L 35,175 L 50,175"
          fill="none"
          stroke={isDark ? "#64748b" : "#334155"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Right Bracket */}
        <path
          d="M 350,45 L 365,45 L 365,175 L 350,175"
          fill="none"
          stroke={isDark ? "#64748b" : "#334155"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Horizontal Dotted Guideline */}
        <line
          x1="60"
          y1="110"
          x2="340"
          y2="110"
          stroke={isDark ? "#334155" : "#e2e8f0"}
          strokeWidth="1.5"
          strokeDasharray="4 4"
        />

        {/* Sine Wave Group translated to sit nicely in the center */}
        <g transform="translate(60, 0)">
          {/* Tertiary Wave (High frequency noise, light gray-blue) */}
          <path
            d={tertiaryWave}
            fill="none"
            stroke={isDark ? "#334155" : "#e2e8f0"}
            strokeWidth="1.5"
            strokeDasharray="2 2"
          />

          {/* Secondary Wave (Medium frequency signal, blue) */}
          <path
            d={secondaryWave}
            fill="none"
            stroke="#0284c7"
            strokeWidth="1.5"
            opacity={isDark ? "0.6" : "0.4"}
          />

          {/* Primary Wave (Strong baseline signal, deep slate-dark / slate-light) */}
          <path
            d={primaryWave}
            fill="none"
            stroke={isDark ? "#cbd5e1" : "#0f172a"}
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Data nodes / Inflection points on waves */}
          {/* Node 1: Peak of primary wave */}
          <circle
            cx="70" // 280 * 0.25 (peak is around 1/4 of wave due to Phase = PI)
            cy="62" // 110 - 48
            r="4"
            fill={isDark ? "#0b0f19" : "#ffffff"}
            stroke={isDark ? "#cbd5e1" : "#0f172a"}
            strokeWidth="2"
          />
          
          {/* Node 2: Trough of primary wave */}
          <circle
            cx="210" // 280 * 0.75
            cy="158" // 110 + 48
            r="4"
            fill={isDark ? "#0b0f19" : "#ffffff"}
            stroke={isDark ? "#cbd5e1" : "#0f172a"}
            strokeWidth="2"
          />

          {/* Node 3: Center intercept on secondary wave */}
          <circle
            cx="140"
            cy="110"
            r="3.5"
            fill={isDark ? "#0b0f19" : "#ffffff"}
            stroke="#0284c7"
            strokeWidth="1.5"
          />
          <circle
            cx="140"
            cy="110"
            r="3"
            fill={isDark ? "#0b0f19" : "#ffffff"}
            stroke="#0284c7"
            strokeWidth="1.5"
          />

          {/* Node 4: Inflection on secondary wave */}
          <circle
            cx="105"
            cy="125"
            r="3"
            fill={isDark ? "#0b0f19" : "#ffffff"}
            stroke="#0284c7"
            strokeWidth="1.5"
          />
        </g>
      </svg>

      {/* wide tracked text below */}
      <div className="mt-4 text-center select-none">
        <h1
          className={`font-display font-bold tracking-[0.45em] uppercase sm:tracking-[0.6em] ${
            isDark ? "text-slate-100" : "text-brand-dark"
          } ${config.textClass}`}
        >
          Bayswater Research
        </h1>
      </div>
    </div>
  );
};
