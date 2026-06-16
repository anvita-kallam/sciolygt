/** Decorative SVG layers for the parallax hero */

export const MoonGlow = () => (
  <svg viewBox="0 0 1440 500" preserveAspectRatio="xMidYMid slice" className="layer-svg">
    <defs>
      <radialGradient id="moonGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="rgba(212, 200, 150, 0.35)" />
        <stop offset="60%" stopColor="rgba(179, 163, 105, 0.08)" />
        <stop offset="100%" stopColor="transparent" />
      </radialGradient>
    </defs>
    <circle cx="1150" cy="120" r="90" fill="url(#moonGlow)" />
    <circle cx="1150" cy="120" r="38" fill="rgba(240, 235, 220, 0.85)" />
    <circle cx="1135" cy="108" r="8" fill="rgba(200, 195, 180, 0.3)" />
    <circle cx="1165" cy="130" r="5" fill="rgba(200, 195, 180, 0.2)" />
  </svg>
);

export const CloudLayer = ({ variant }: { variant: "far" | "mid" | "near" }) => {
  const opacity = variant === "far" ? 0.25 : variant === "mid" ? 0.4 : 0.55;
  const fill = variant === "far" ? "#1a3050" : variant === "mid" ? "#243858" : "#2e4468";

  return (
    <svg viewBox="0 0 1440 300" preserveAspectRatio="none" className="layer-svg">
      <g opacity={opacity} fill={fill}>
        <ellipse cx="200" cy="180" rx="140" ry="45" />
        <ellipse cx="320" cy="170" rx="100" ry="35" />
        <ellipse cx="120" cy="195" rx="80" ry="30" />

        <ellipse cx="700" cy="150" rx="160" ry="50" />
        <ellipse cx="850" cy="140" rx="110" ry="38" />
        <ellipse cx="600" cy="165" rx="90" ry="32" />

        <ellipse cx="1200" cy="190" rx="130" ry="42" />
        <ellipse cx="1320" cy="175" rx="95" ry="35" />
        <ellipse cx="1080" cy="200" rx="75" ry="28" />
      </g>
    </svg>
  );
};

export const MountainsBack = () => (
  <svg viewBox="0 0 1440 400" preserveAspectRatio="none" className="layer-svg">
    <defs>
      <linearGradient id="mtBackFade" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#062040" stopOpacity="0.85" />
        <stop offset="50%" stopColor="#041830" stopOpacity="0.55" />
        <stop offset="100%" stopColor="#020810" stopOpacity="0" />
      </linearGradient>
      <linearGradient id="mtBackRidge" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#051525" stopOpacity="0.45" />
        <stop offset="100%" stopColor="#020810" stopOpacity="0" />
      </linearGradient>
    </defs>
    <path d="M0,400 L0,280 Q180,180 360,240 T720,200 T1080,260 T1440,220 L1440,400 Z" fill="url(#mtBackFade)" />
    <path d="M0,400 L0,300 L120,260 L200,290 L280,240 L360,280 L440,220 L520,270 L600,230 L680,280 L760,210 L840,260 L920,240 L1000,290 L1080,250 L1160,280 L1240,230 L1320,270 L1440,240 L1440,400 Z" fill="url(#mtBackRidge)" />
  </svg>
);

export const MountainsMid = () => (
  <svg viewBox="0 0 1440 400" preserveAspectRatio="none" className="layer-svg">
    <defs>
      <linearGradient id="mtMidFade" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#073050" stopOpacity="0.8" />
        <stop offset="55%" stopColor="#062040" stopOpacity="0.5" />
        <stop offset="100%" stopColor="#020810" stopOpacity="0" />
      </linearGradient>
      <linearGradient id="mtMidRidge" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#073050" stopOpacity="0.5" />
        <stop offset="100%" stopColor="#020810" stopOpacity="0" />
      </linearGradient>
    </defs>
    <path d="M0,400 L0,320 Q240,220 480,300 T960,260 T1440,300 L1440,400 Z" fill="url(#mtMidFade)" />
    <path d="M200,400 L200,290 L280,330 L360,270 L440,310 L520,250 L600,320 L680,280 L760,340 L840,260 L920,300 L1000,270 L1080,320 L1160,290 L1240,330 L1320,280 L1400,310 L1440,300 L1440,400 Z" fill="url(#mtMidRidge)" />
  </svg>
);

export const CampusSkyline = () => (
  <svg viewBox="0 0 1440 350" preserveAspectRatio="none" className="layer-svg">
    {/* Side blocks kept symmetric around x=720 */}
    <rect x="480" y="200" width="120" height="150" fill="#0a2848" />
    <rect x="840" y="200" width="120" height="150" fill="#0a2848" />
    <rect x="500" y="180" width="80" height="25" fill="#0a2848" />
    <rect x="860" y="180" width="80" height="25" fill="#0a2848" />

    <rect x="300" y="230" width="90" height="120" fill="#082038" />
    <rect x="1050" y="230" width="90" height="120" fill="#082038" />
    <rect x="330" y="212" width="40" height="18" fill="#082038" />
    <rect x="1070" y="212" width="40" height="18" fill="#082038" />

    <rect x="150" y="260" width="80" height="90" fill="#061830" />
    <rect x="1210" y="260" width="80" height="90" fill="#061830" />

    {[500, 530, 560].map((y) =>
      [495, 515, 535, 555].map((x) => (
        <rect key={`${x}-${y}`} x={x} y={y} width="8" height="10" fill="#b3a369" opacity="0.15" />
      ))
    )}
    {[500, 530, 560].map((y) =>
      [885, 905, 925, 945].map((x) => (
        <rect key={`${x}-${y}`} x={x} y={y} width="8" height="10" fill="#b3a369" opacity="0.15" />
      ))
    )}

    <g fill="#0c3055">
      {/* Tech Tower-inspired center mass */}
      <rect x="675" y="92" width="90" height="258" />
      <rect x="642" y="140" width="33" height="210" />
      <rect x="765" y="140" width="33" height="210" />
      <rect x="600" y="172" width="42" height="178" />
      <rect x="798" y="172" width="42" height="178" />
      <rect x="642" y="172" width="156" height="22" />
      <polygon points="720,44 680,92 760,92" />
      <rect x="692" y="78" width="56" height="14" />
      <path d="M690,168 Q720,132 750,168 L750,194 L690,194 Z" />
      {[700, 712, 724, 736].map((x, i) => (
        <rect key={x} x={x} y="116" width="7" height="34" fill="#b3a369" opacity={0.65 - i * 0.08} />
      ))}
      <path d="M688,212 Q720,142 752,212 L752,248 L688,248 Z" fill="#b3a369" opacity="0.5" />
      {[708, 720, 732].map((x) => (
        <rect key={x} x={x} y="168" width="4" height="80" fill="#0c3055" opacity="0.6" />
      ))}
      <text x="720" y="90" textAnchor="middle" textLength="90" lengthAdjust="spacingAndGlyphs" fill="#b3a369" fontSize="12" fontFamily="serif" fontWeight="bold" opacity="0.85">TECH</text>
    </g>
  </svg>
);

export const PineForest = () => (
  <svg viewBox="0 0 1440 280" preserveAspectRatio="none" className="layer-svg">
    <defs>
      <linearGradient id="forestFade" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#0a2038" stopOpacity="0.75" />
        <stop offset="45%" stopColor="#061525" stopOpacity="0.45" />
        <stop offset="100%" stopColor="#020810" stopOpacity="0" />
      </linearGradient>
    </defs>
    <g fill="url(#forestFade)">
      {[40, 90, 140, 190, 250, 310, 370, 430, 490, 550, 610, 670, 730, 790, 850, 910, 970, 1030, 1090, 1150, 1210, 1270, 1330, 1390].map((x, i) => {
        const h = 80 + (i % 5) * 25;
        const w = 35 + (i % 3) * 10;
        return (
          <g key={x}>
            <polygon points={`${x},${280} ${x - w},${280} ${x},${280 - h} ${x + w},${280}`} />
            <polygon points={`${x},${280 - h + 20} ${x - w * 0.7},${280 - h + 20} ${x},${280 - h - 40} ${x + w * 0.7},${280 - h + 20}`} />
            <rect x={x - 6} y={280 - 15} width="12" height="15" fill="#061525" />
          </g>
        );
      })}
    </g>
  </svg>
);

export const MountainsFront = () => (
  <svg viewBox="0 0 1440 400" preserveAspectRatio="none" className="layer-svg">
    <defs>
      <linearGradient id="mtFrontFade" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#0a2848" stopOpacity="0.75" />
        <stop offset="60%" stopColor="#062040" stopOpacity="0.4" />
        <stop offset="100%" stopColor="#020810" stopOpacity="0" />
      </linearGradient>
      <linearGradient id="mtFrontPeak" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#003057" stopOpacity="0.45" />
        <stop offset="100%" stopColor="#020810" stopOpacity="0" />
      </linearGradient>
    </defs>
    <path d="M0,400 L0,340 Q360,280 720,340 T1440,320 L1440,400 Z" fill="url(#mtFrontFade)" />
    <path d="M600,400 L600,300 L680,340 L760,280 L840,320 L920,260 L1000,400 Z" fill="url(#mtFrontPeak)" />
    <path d="M0,400 L0,360 Q200,330 400,350 Q600,370 800,345 Q1000,320 1200,355 Q1300,370 1440,340 L1440,400 Z" fill="url(#mtFrontFade)" opacity="0.65" />
  </svg>
);

export const ForegroundHills = () => (
  <svg viewBox="0 0 1440 200" preserveAspectRatio="none" className="layer-svg">
    <defs>
      <linearGradient id="fgHillFade" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#020810" stopOpacity="0.85" />
        <stop offset="100%" stopColor="#020810" stopOpacity="0" />
      </linearGradient>
    </defs>
    <path d="M0,200 Q180,120 360,160 T720,100 T1080,150 T1440,90 L1440,200 Z" fill="url(#fgHillFade)" />
    <path d="M0,200 Q240,150 480,175 T960,130 T1440,160 L1440,200 Z" fill="url(#fgHillFade)" opacity="0.55" />
  </svg>
);

/** Curved mountain ridge for hero → scroll seam */
export const MountainRidgeSeam = ({
  className = "",
  idPrefix = "ridge",
}: {
  className?: string;
  idPrefix?: string;
}) => (
  <svg viewBox="0 0 1440 200" preserveAspectRatio="none" className={className} aria-hidden>
    <defs>
      <linearGradient id={`${idPrefix}Sky`} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#0a2848" />
        <stop offset="100%" stopColor="#062040" />
      </linearGradient>
      <linearGradient id={`${idPrefix}Back`} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#073050" />
        <stop offset="100%" stopColor="#020810" />
      </linearGradient>
      <linearGradient id={`${idPrefix}Mid`} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#062040" />
        <stop offset="100%" stopColor="#020810" />
      </linearGradient>
      <linearGradient id={`${idPrefix}Front`} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#041830" />
        <stop offset="100%" stopColor="#020810" />
      </linearGradient>
      <linearGradient id={`${idPrefix}Pine`} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#0a2038" />
        <stop offset="100%" stopColor="#020810" />
      </linearGradient>
    </defs>
    <rect x="0" y="0" width="1440" height="200" fill={`url(#${idPrefix}Sky)`} />
    <path
      d="M0,0 L1440,0 L1440,130 Q1300,90 1180,120 Q1060,80 940,105 Q820,65 700,115 Q580,75 460,125 Q340,85 220,135 Q120,110 0,145 Z"
      fill={`url(#${idPrefix}Sky)`}
    />
    <path
      d="M0,200 L0,145 Q120,110 220,135 Q340,85 460,125 Q580,75 700,115 Q820,65 940,105 Q1060,80 1180,120 Q1300,90 1440,130 L1440,200 Z"
      fill={`url(#${idPrefix}Back)`}
    />
    <path
      d="M0,200 L0,155 Q160,115 300,150 Q440,100 580,140 Q720,95 860,135 Q1000,105 1140,145 Q1280,115 1440,160 L1440,200 Z"
      fill={`url(#${idPrefix}Mid)`}
    />
    <path
      d="M0,200 L0,168 Q200,125 400,158 Q600,118 720,152 Q900,128 1080,162 Q1260,138 1440,175 L1440,200 Z"
      fill={`url(#${idPrefix}Front)`}
    />
    <g fill={`url(#${idPrefix}Pine)`}>
      {[30, 75, 120, 175, 230, 290, 355, 420, 490, 560, 635, 710, 790, 870, 955, 1040, 1130, 1220, 1310, 1390].map((x, i) => {
        const h = 22 + (i % 4) * 10;
        const w = 10 + (i % 3) * 4;
        const base = 168 + Math.sin(i * 1.3) * 18 + (i % 5) * 4;
        return (
          <polygon key={x} points={`${x},${base + 32} ${x - w},${base + 32} ${x},${base + 32 - h} ${x + w},${base + 32}`} />
        );
      })}
    </g>
    <rect x="0" y="175" width="1440" height="25" fill="#020810" />
  </svg>
);

export const ScienceDecor = () => (
  <svg viewBox="0 0 1440 400" preserveAspectRatio="none" className="layer-svg science-decor">
    <g opacity="0.12" stroke="#b3a369" strokeWidth="2" fill="none">
      <path d="M80,350 Q120,300 80,250 Q40,200 80,150 Q120,100 80,50" />
      <path d="M110,350 Q70,300 110,250 Q150,200 110,150 Q70,100 110,50" />
      {[100, 150, 200, 250, 300].map((y) => (
        <line key={y} x1="85" y1={y} x2="105" y2={y} strokeWidth="1.5" />
      ))}
    </g>
    <g opacity="0.1" stroke="#b3a369" strokeWidth="1.5" fill="none" transform="translate(1320, 200)">
      <circle cx="0" cy="0" r="8" fill="#b3a369" opacity="0.3" />
      <ellipse cx="0" cy="0" rx="72" ry="20" transform="rotate(0)" />
      <ellipse cx="0" cy="0" rx="72" ry="20" transform="rotate(60)" />
      <ellipse cx="0" cy="0" rx="72" ry="20" transform="rotate(120)" />
    </g>
    <g opacity="0.08" fill="#b3a369" transform="translate(200, 280)">
      <path d="M0,0 L-15,60 L15,60 Z" />
      <rect x="-8" y="-25" width="16" height="25" rx="2" />
      <ellipse cx="0" cy="45" rx="12" ry="4" opacity="0.5" />
    </g>
    <g opacity="0.08" fill="#b3a369" transform="translate(1180, 260)">
      <path d="M0,-40 L12,20 L0,10 L-12,20 Z" />
      <rect x="-4" y="10" width="8" height="25" rx="2" />
      <path d="M-12,20 L-20,35 L-8,25 Z" />
      <path d="M12,20 L20,35 L8,25 Z" />
    </g>
  </svg>
);

export const AuroraBand = () => (
  <svg viewBox="0 0 1440 400" preserveAspectRatio="none" className="layer-svg">
    <defs>
      <linearGradient id="aurora" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="rgba(179, 163, 105, 0)" />
        <stop offset="30%" stopColor="rgba(179, 163, 105, 0.06)" />
        <stop offset="50%" stopColor="rgba(0, 48, 87, 0.12)" />
        <stop offset="70%" stopColor="rgba(179, 163, 105, 0.05)" />
        <stop offset="100%" stopColor="rgba(179, 163, 105, 0)" />
      </linearGradient>
    </defs>
    <path
      d="M0,120 Q360,80 720,110 T1440,90 L1440,180 Q1080,150 720,170 T0,140 Z"
      fill="url(#aurora)"
    />
    <path
      d="M0,160 Q480,130 960,155 T1440,140 L1440,220 Q960,190 480,210 T0,185 Z"
      fill="url(#aurora)"
      opacity="0.6"
    />
  </svg>
);

/* ── Scroll-only scenery: forests, Atlanta landmarks, mascots ── */

const forestFade = (id: string) => (
  <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stopColor="#0a2038" stopOpacity="0.8" />
    <stop offset="50%" stopColor="#061525" stopOpacity="0.5" />
    <stop offset="100%" stopColor="#020810" stopOpacity="0" />
  </linearGradient>
);

export const OakForest = () => (
  <svg viewBox="0 0 1440 280" preserveAspectRatio="none" className="layer-svg">
    <defs>{forestFade("oakFade")}</defs>
    {[30, 85, 145, 210, 280, 355, 430, 510, 595, 685, 780, 880, 985, 1095, 1210, 1330].map((x, i) => {
      const r = 28 + (i % 4) * 10;
      const h = 55 + (i % 3) * 18;
      return (
        <g key={x} fill="url(#oakFade)">
          <rect x={x - 3} y={280 - 18} width="6" height="18" fill="#061525" opacity="0.6" />
          <ellipse cx={x} cy={280 - h} rx={r} ry={r * 1.1} />
          <ellipse cx={x - r * 0.35} cy={280 - h - 8} rx={r * 0.55} ry={r * 0.45} opacity="0.7" />
        </g>
      );
    })}
  </svg>
);

export const MixedForest = () => (
  <svg viewBox="0 0 1440 280" preserveAspectRatio="none" className="layer-svg">
    <defs>{forestFade("mixFade")}</defs>
    <g fill="url(#mixFade)">
      {[50, 160, 290, 420, 560, 700, 850, 1000, 1160, 1300].map((x, i) => {
        const h = 70 + (i % 4) * 20;
        const w = 28 + (i % 2) * 8;
        return (
          <g key={`p-${x}`}>
            <polygon points={`${x},280 ${x - w},280 ${x},${280 - h} ${x + w},280`} />
            <rect x={x - 5} y={268} width="10" height="12" fill="#061525" opacity="0.5" />
          </g>
        );
      })}
      {[110, 240, 380, 520, 660, 800, 940, 1080, 1220, 1360].map((x, i) => {
        const r = 22 + (i % 3) * 8;
        return (
          <g key={`o-${x}`}>
            <rect x={x - 3} y={268} width="6" height="12" fill="#061525" opacity="0.5" />
            <ellipse cx={x} cy={280 - 35 - r} rx={r} ry={r * 0.9} />
          </g>
        );
      })}
    </g>
  </svg>
);

/** Atlanta downtown + Midtown silhouette band */
export const AtlantaSkyline = () => (
  <svg viewBox="0 0 1440 320" preserveAspectRatio="none" className="layer-svg">
    <g fill="#0a2848" opacity="0.75">
      <rect x="200" y="180" width="70" height="140" />
      <rect x="290" y="150" width="55" height="170" />
      <rect x="360" y="200" width="90" height="120" />
      <rect x="480" y="120" width="65" height="200" />
      <rect x="560" y="160" width="80" height="160" />
      {/* Bank of America plaza hint */}
      <polygon points="680,80 720,80 700,40" fill="#0c3055" />
      <rect x="685" y="80" width="30" height="240" />
      <rect x="740" y="140" width="100" height="180" />
      <rect x="860" y="100" width="75" height="220" />
      <rect x="960" y="170" width="110" height="150" />
      <rect x="1090" y="190" width="85" height="130" />
      <rect x="1200" y="210" width="70" height="110" />
    </g>
    {/* Peachtree street line */}
    <path d="M0,300 Q360,290 720,295 T1440,288" stroke="#b3a369" strokeWidth="1.5" opacity="0.12" fill="none" />
  </svg>
);

export const TechTowerSilhouette = ({ opacity = 0.35 }: { opacity?: number }) => (
  <svg viewBox="0 0 120 280" className="gt-graphic gt-tower-silhouette" opacity={opacity} aria-hidden>
    <g fill="#0c3055">
      <rect x="18" y="120" width="16" height="160" />
      <rect x="86" y="120" width="16" height="160" />
      <rect x="34" y="88" width="52" height="192" />
      <polygon points="60,20 28,82 92,82" />
      <rect x="41" y="72" width="38" height="16" />
      <path d="M42,116 Q60,94 78,116 L78,134 L42,134 Z" />
      {[[48, 142], [72, 142], [48, 170], [72, 170]].map(([x, y]) => (
        <rect key={`${x}-${y}`} x={x} y={y} width="10" height="16" rx="5" fill="#061830" />
      ))}
    </g>
    <g fill="#b3a369" opacity="0.6" fontFamily="Georgia, serif" fontSize="10" fontWeight="bold">
      <text x="60" y="206" textAnchor="middle">T</text>
      <text x="60" y="219" textAnchor="middle">E</text>
      <text x="60" y="232" textAnchor="middle">C</text>
      <text x="60" y="245" textAnchor="middle">H</text>
    </g>
  </svg>
);

export const BuzzBee = ({ opacity = 1 }: { opacity?: number }) => (
  <svg viewBox="0 0 120 100" className="gt-graphic gt-bee" opacity={opacity} aria-hidden>
    <ellipse cx="35" cy="42" rx="22" ry="14" fill="rgba(255,255,255,0.3)" transform="rotate(-20 35 42)" />
    <ellipse cx="35" cy="58" rx="22" ry="14" fill="rgba(255,255,255,0.2)" transform="rotate(20 35 58)" />
    <ellipse cx="65" cy="50" rx="35" ry="28" fill="#b3a369" />
    <rect x="42" y="35" width="46" height="7" rx="3" fill="#1a1a1a" />
    <rect x="45" y="48" width="40" height="7" rx="3" fill="#1a1a1a" />
    <rect x="48" y="61" width="34" height="6" rx="3" fill="#1a1a1a" />
    <circle cx="88" cy="45" r="16" fill="#b3a369" />
    <circle cx="93" cy="42" r="5" fill="white" />
    <circle cx="94" cy="42" r="2.5" fill="#1a1a1a" />
    <circle cx="82" cy="40" r="4" fill="white" />
    <circle cx="83" cy="40" r="2" fill="#1a1a1a" />
    <path d="M90,30 Q95,18 98,12" stroke="#1a1a1a" strokeWidth="2" fill="none" />
    <path d="M84,30 Q78,18 74,12" stroke="#1a1a1a" strokeWidth="2" fill="none" />
    <polygon points="28,50 18,50 24,46 24,54" fill="#1a1a1a" />
  </svg>
);

export const RamblinWreck = ({ opacity = 1 }: { opacity?: number }) => (
  <svg viewBox="0 0 220 90" className="gt-graphic gt-wreck" opacity={opacity} aria-hidden>
    <ellipse cx="110" cy="84" rx="90" ry="5" fill="rgba(0,0,0,0.3)" />
    <path d="M30,55 L40,35 L80,28 L140,28 L175,35 L190,55 L190,65 L30,65 Z" fill="#b3a369" />
    <path d="M55,35 L75,28 L130,28 L150,35 L145,48 L60,48 Z" fill="#f5f0e1" />
    <line x1="30" y1="55" x2="190" y2="55" stroke="#1a1a1a" strokeWidth="1.5" />
    <circle cx="55" cy="65" r="14" fill="#1a1a1a" />
    <circle cx="155" cy="65" r="14" fill="#1a1a1a" />
    <line x1="32" y1="40" x2="32" y2="22" stroke="#888" strokeWidth="1.5" />
    <rect x="22" y="22" width="18" height="12" fill="white" stroke="#003057" strokeWidth="1" />
    <text x="31" y="31" textAnchor="middle" fontSize="7" fontWeight="bold" fill="#b3a369">GT</text>
  </svg>
);
