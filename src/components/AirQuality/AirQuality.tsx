import React, { useRef, useState, useEffect } from 'react';
import {
  Container,
  Title,
  AQIBar,
  Indicator,
  Pollutants,
  Pollutant,
  PollutantName,
  PollutantValue
} from './AirQuality.style';

export type AirQualityProps = {
  epaIndex: number; // 0 - 500
  co: number;
  no2: number;
  o3: number;
  so2: number;
  pm25: number;
  pm10: number;
};

export const AirQuality: React.FC<AirQualityProps> = ({
  epaIndex,
  co,
  no2,
  o3,
  so2,
  pm25,
  pm10
}) => {
  const clampedIndex = Math.min(Math.max(epaIndex, 0), 500);
  const barRef = useRef<HTMLDivElement>(null);
  const [indicatorLeft, setIndicatorLeft] = useState(0);

  // Calcular posición de la flecha según ancho de la barra
  const updateIndicator = () => {
    if (barRef.current) {
      const width = barRef.current.offsetWidth;
      const left = (clampedIndex / 500) * width;
      setIndicatorLeft(left);
    }
  };

  useEffect(() => {
    updateIndicator();

    const observer = new ResizeObserver(() => updateIndicator());
    if (barRef.current) observer.observe(barRef.current);

    return () => observer.disconnect();
  }, [clampedIndex]);

  return (
    <Container>
      <Title>Air Quality Index (AQI): {epaIndex}</Title>

      <AQIBar ref={barRef}>
        {/* Flecha dinámica */}
        <Indicator style={{ left: indicatorLeft }} />
      </AQIBar>

      <Pollutants>
        {[
          ['CO', co],
          ['NO₂', no2],
          ['O₃', o3],
          ['SO₂', so2],
          ['PM2.5', pm25],
          ['PM10', pm10]
        ].map(([name, value]) => (
          <Pollutant key={name}>
            <PollutantName>{name}</PollutantName>
            <PollutantValue>{(value as number).toFixed(2)}</PollutantValue>
          </Pollutant>
        ))}
      </Pollutants>
    </Container>
  );
};
