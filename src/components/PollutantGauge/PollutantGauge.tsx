import React from 'react';
import { Wrapper, Label } from './PollutantGauge.style';

type PollutantGaugeProps = {
  label: string;
  aqi: number;
};

export const PollutantGauge: React.FC<PollutantGaugeProps> = ({
  label,
  aqi
}) => {
  const radius = 42;
  const stroke = 6;

  const normalizedAQI = Math.min(Math.max(aqi, 0), 500);
  const circumference = 2 * Math.PI * radius;
  const percent = normalizedAQI / 500;
  const dashOffset = circumference * (1 - percent);

  return (
    <Wrapper>
      <svg width="100" height="100">
        {/* Fondo */}
        <circle
          cx="50"
          cy="50"
          r={radius}
          stroke="#e2e6ed"
          strokeWidth={stroke}
          fill="none"
        />

        {/* Progreso */}
        <circle
          cx="50"
          cy="50"
          r={radius}
          stroke="url(#aqiGradient)"
          strokeWidth={stroke}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={dashOffset}
          strokeLinecap="round"
          transform="rotate(90 50 50)"
        />

        <defs>
          <linearGradient id="aqiGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#e00f0f" />
            <stop offset="100%" stopColor="#33ff01" />
          </linearGradient>
        </defs>

        {/* Valor */}
        <text
          x="50"
          y="55"
          textAnchor="middle"
          fontSize="14"
          fill="#000000"
          fontWeight="600"
        >
          {Math.round(normalizedAQI)}
        </text>
      </svg>

      <Label>{label}</Label>
    </Wrapper>
  );
};
