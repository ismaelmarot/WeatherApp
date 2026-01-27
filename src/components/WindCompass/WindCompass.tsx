type Props = {
  speed: number;   // km/h
  degree: number;  // wind_degree from API (0–360)
};

export function WindCompass({ speed, degree }: Props) {
  const size = 180;
  const center = size / 2;
  const radius = 70;
  const rotation = degree + 90;

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      {/* External Ring */}
      <circle
        cx={center}
        cy={center}
        r={radius}
        fill="none"
        stroke="#e5e7eb"
        strokeWidth="2"
      />

      {/* Marks */}
      {[...Array(60)].map((_, i) => {
        const angle = (i * 6 * Math.PI) / 180;
        const isMajor = i % 5 === 0;
        const r1 = radius - (isMajor ? 10 : 5);
        const r2 = radius;

        return (
          <line
            key={i}
            x1={center + r1 * Math.cos(angle)}
            y1={center + r1 * Math.sin(angle)}
            x2={center + r2 * Math.cos(angle)}
            y2={center + r2 * Math.sin(angle)}
            stroke="#d1d5db"
            strokeWidth={isMajor ? 2 : 1}
          />
        );
      })}

      {/* Cardinal */}
      <text x={center} y={16} textAnchor="middle" fill="#111827" fontSize="14" fontWeight="600">
        N
      </text>
      <text x={size - 15} y={center + 5} fill="#111827" fontSize="14" fontWeight="600">
        E
      </text>
      <text x={center} y={size - 6} textAnchor="middle" fill="#111827" fontSize="14" fontWeight="600">
        S
      </text>
      <text x={2} y={center + 5} fill="#111827" fontSize="14" fontWeight="600">
        W
      </text>

      {/* Speed */}
      <text
        x={center}
        y={center + 5}
        textAnchor="middle"
        fill="#111827"
        fontSize="28"
        fontWeight="600"
      >
        {speed}
      </text>
      <text
        x={center}
        y={center + 18}
        textAnchor="middle"
        fill="#6b7280"
        fontSize="13"
      >
        km/h
      </text>

      {/* Needle */}
      <g transform={`rotate(${rotation} ${center} ${center})`}>
        {/* Body */}
        <line
          x1={center + 38}
          y1={center}
          x2={center + radius - 22}
          y2={center}
          stroke="#111827"
          strokeWidth="4.5"
          strokeLinecap="round"
        />

        {/* Triangular tip */}
        <polygon
          points={`
            ${center + radius - 6},${center}
            ${center + radius - 22},${center - 8}
            ${center + radius - 22},${center + 8}
          `}
          fill="#111827"
        />
      </g>
    </svg>
  );
}
