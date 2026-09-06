interface AbstractGraphicProps {
  variant?: "hero" | "corner" | "competition";
  accentFrom?: string;
  accentTo?: string;
  className?: string;
}

export function AbstractGraphic({
  variant = "hero",
  accentFrom = "#1455D9",
  accentTo = "#6633CC",
  className = "",
}: AbstractGraphicProps) {
  const gradId = `grad-${accentFrom.replace("#", "")}-${accentTo.replace("#", "")}`;

  if (variant === "corner") {
    return (
      <svg
        className={`absolute pointer-events-none select-none ${className}`}
        width="120"
        height="120"
        viewBox="0 0 120 120"
        fill="none"
        aria-hidden="true"
      >
        <rect x="80" y="0" width="6" height="6" fill={accentFrom} opacity="0.5" />
        <rect x="92" y="0" width="6" height="6" fill={accentTo} opacity="0.35" />
        <rect x="92" y="12" width="6" height="6" fill="#C5229E" opacity="0.3" />
        <line x1="80" y1="-2" x2="100" y2="-2" stroke={accentFrom} strokeWidth="1" opacity="0.3" />
        <circle cx="106" cy="18" r="2" fill={accentTo} opacity="0.4" />
        <circle cx="114" cy="10" r="1.5" fill="#C5229E" opacity="0.3" />
      </svg>
    );
  }

  if (variant === "competition") {
    return (
      <svg
        className={`pointer-events-none select-none ${className}`}
        width="200"
        height="200"
        viewBox="0 0 200 200"
        fill="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={accentFrom} stopOpacity="0.6" />
            <stop offset="100%" stopColor={accentTo} stopOpacity="0.6" />
          </linearGradient>
        </defs>
        <rect x="140" y="20" width="10" height="10" fill={accentFrom} opacity="0.3" />
        <rect x="158" y="20" width="10" height="10" fill={accentTo} opacity="0.2" />
        <rect x="158" y="38" width="10" height="10" fill="#C5229E" opacity="0.2" />
        <line x1="140" y1="18" x2="170" y2="18" stroke={accentFrom} strokeWidth="1" opacity="0.25" />
        <line x1="138" y1="20" x2="138" y2="50" stroke={accentTo} strokeWidth="1" opacity="0.2" />
        <circle cx="178" cy="56" r="4" fill={`url(#${gradId})`} opacity="0.5" />
        <circle cx="190" cy="42" r="2.5" fill={accentTo} opacity="0.35" />
        <circle cx="170" cy="64" r="2" fill="#C5229E" opacity="0.3" />
      </svg>
    );
  }

  // Hero variant
  return (
    <div className={`relative ${className}`} aria-hidden="true">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 500 500"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="heroGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1455D9" stopOpacity="0.12" />
            <stop offset="50%" stopColor="#6633CC" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#C5229E" stopOpacity="0.06" />
          </linearGradient>
          <linearGradient id="heroGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={accentFrom} stopOpacity="0.2" />
            <stop offset="100%" stopColor={accentTo} stopOpacity="0.1" />
          </linearGradient>
        </defs>
        {/* Grid lines */}
        {[0, 1, 2, 3, 4].map((i) => (
          <line
            key={`h${i}`}
            x1="0"
            y1={100 + i * 80}
            x2="500"
            y2={100 + i * 80}
            stroke="#E7E8EC"
            strokeWidth="1"
          />
        ))}
        {[0, 1, 2, 3, 4].map((i) => (
          <line
            key={`v${i}`}
            x1={60 + i * 100}
            y1="0"
            x2={60 + i * 100}
            y2="500"
            stroke="#E7E8EC"
            strokeWidth="1"
          />
        ))}
        {/* Orbital rings */}
        <circle cx="360" cy="200" r="180" stroke="url(#heroGrad2)" strokeWidth="1" fill="none" />
        <circle cx="360" cy="200" r="120" stroke="#1455D9" strokeWidth="0.5" strokeOpacity="0.15" fill="none" />
        <circle cx="360" cy="200" r="60" stroke="#6633CC" strokeWidth="0.5" strokeOpacity="0.2" fill="none" />
        {/* Squares */}
        <rect x="280" y="120" width="16" height="16" fill="#1455D9" opacity="0.2" />
        <rect x="304" y="120" width="16" height="16" fill="#6633CC" opacity="0.15" />
        <rect x="304" y="144" width="16" height="16" fill="#C5229E" opacity="0.12" />
        <rect x="420" y="250" width="10" height="10" fill="#1455D9" opacity="0.25" />
        <rect x="434" y="250" width="10" height="10" fill="#C5229E" opacity="0.2" />
        {/* Dots */}
        <circle cx="320" cy="300" r="3" fill="#1455D9" opacity="0.3" />
        <circle cx="340" cy="290" r="2" fill="#6633CC" opacity="0.25" />
        <circle cx="400" cy="320" r="4" fill="#C5229E" opacity="0.2" />
        <circle cx="440" cy="180" r="3" fill="#1455D9" opacity="0.3" />
        {/* Gradient blob */}
        <ellipse cx="380" cy="220" rx="80" ry="80" fill="url(#heroGrad1)" />
        {/* Corner marks */}
        <line x1="260" y1="100" x2="260" y2="116" stroke="#1455D9" strokeWidth="1" opacity="0.4" />
        <line x1="260" y1="100" x2="276" y2="100" stroke="#1455D9" strokeWidth="1" opacity="0.4" />
        <line x1="460" y1="300" x2="460" y2="316" stroke="#C5229E" strokeWidth="1" opacity="0.35" />
        <line x1="444" y1="316" x2="460" y2="316" stroke="#C5229E" strokeWidth="1" opacity="0.35" />
      </svg>
    </div>
  );
}
