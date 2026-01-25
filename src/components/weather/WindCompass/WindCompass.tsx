type Props = {
  speed: number;   // km/h
  degree: number;  // wind_degree desde la API (0–360)
};

export function WindCompass({ speed, degree }: Props) {
  const size = 180;
  const center = size / 2;
  const radius = 70;

  /**
   * CORRECCIÓN CLAVE:
   * - SVG: 0° apunta a la derecha (E)
   * - Meteorología: 0° = viento viene del Norte
   * - Queremos que la flecha apunte hacia donde SOPLA el viento
   *
   * Fórmula correcta:
   */
  const rotation = degree + 90;

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      {/* Anillo exterior */}
      <circle
        cx={center}
        cy={center}
        r={radius}
        fill="none"
        stroke="#3a3f5c"
        strokeWidth="2"
      />

      {/* Marcas de la brújula */}
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
            stroke="#5b5f7a"
            strokeWidth={isMajor ? 2 : 1}
          />
        );
      })}

      {/* Cardinales */}
      <text x={center} y={18} textAnchor="middle" fill="rgb(0, 0, 0)" fontSize="14">
        N
      </text>
      <text x={size - 12} y={center + 5} fill="rgb(0, 0, 0)" fontSize="14">
        E
      </text>
      <text x={center} y={size - 6} textAnchor="middle" fill="rgb(0, 0, 0)" fontSize="14">
        S
      </text>
      <text x={6} y={center + 5} fill="rgb(0, 0, 0)" fontSize="14">
        W
      </text>

      {/* Velocidad */}
      <text
        x={center}
        y={center}
        textAnchor="middle"
        fill="rgb(0, 0, 0)"
        fontSize="28"
        fontWeight="600"
      >
        {speed}
      </text>
      <text
        x={center}
        y={center + 22}
        textAnchor="middle"
        fill="rgb(0, 0, 0)"
        fontSize="14"
      >
        km/h
      </text>

      {/* Aguja */}
      <g transform={`rotate(${rotation} ${center} ${center})`}>
        <line
          x1={center}
          y1={center}
          x2={center + radius - 12}
          y2={center}
          stroke="rgb(0, 0, 0)"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle
          cx={center + radius - 8}
          cy={center}
          r="6"
          fill="rgb(0, 0, 0)"
        />
      </g>
    </svg>
  );
}
