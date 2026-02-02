import React from 'react';
import {
  Container,
  Title,
  AQIBar,
  Segment,
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

  // Divisiones de AQI
  const segments = [
    { min: 0, max: 50, color: '#2ecc71' },
    { min: 51, max: 100, color: '#f1c40f' },
    { min: 101, max: 150, color: '#e67e22' },
    { min: 151, max: 200, color: '#8e44ad' },
    { min: 201, max: 300, color: '#e74c3c' },
    { min: 301, max: 500, color: '#6e2c00' }
  ];

  // Porcentaje para triángulo
  const positionPercent = (clampedIndex / 500) * 100;

  return (
    <Container>
      <Title>Air Quality Index (AQI): {epaIndex}</Title>

      <AQIBar>
        {segments.map((seg, idx) => {
          const width = ((seg.max - seg.min) / 500) * 100;
          const left = (seg.min / 500) * 100;
          return <Segment key={idx} $color={seg.color} $width={width} $left={left} />;
        })}

        <Indicator $position={positionPercent} />
      </AQIBar>

      <Pollutants>
        <Pollutant>
          <PollutantName>CO</PollutantName>
          <PollutantValue>{co.toFixed(2)}</PollutantValue>
        </Pollutant>
        <Pollutant>
          <PollutantName>NO₂</PollutantName>
          <PollutantValue>{no2.toFixed(2)}</PollutantValue>
        </Pollutant>
        <Pollutant>
          <PollutantName>O₃</PollutantName>
          <PollutantValue>{o3.toFixed(2)}</PollutantValue>
        </Pollutant>
        <Pollutant>
          <PollutantName>SO₂</PollutantName>
          <PollutantValue>{so2.toFixed(2)}</PollutantValue>
        </Pollutant>
        <Pollutant>
          <PollutantName>PM2.5</PollutantName>
          <PollutantValue>{pm25.toFixed(2)}</PollutantValue>
        </Pollutant>
        <Pollutant>
          <PollutantName>PM10</PollutantName>
          <PollutantValue>{pm10.toFixed(2)}</PollutantValue>
        </Pollutant>
      </Pollutants>
    </Container>
  );
};
