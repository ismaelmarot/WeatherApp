import React from 'react';
import { Container, Pollutants, Title } from './AirQuality.style';
import { PollutantGauge } from '../PollutantGauge/PollutantGauge';
import { pm25ToAQI, pm10ToAQI, simpleGasToAQI } from '../../utils/aqiConverters.utils';
import type { AirQualityProps } from '../../types';

export const AirQuality: React.FC<AirQualityProps> = ({
  co,
  no2,
  o3,
  so2,
  pm25,
  pm10
}) => {
  return (
    <Container>
      <Title style={{color:'black'}}>Air Quality</Title>
      <Pollutants>
        <PollutantGauge label="CO" aqi={simpleGasToAQI(co, 10)} />
        <PollutantGauge label="NO₂" aqi={simpleGasToAQI(no2, 200)} />
        <PollutantGauge label="O₃" aqi={simpleGasToAQI(o3, 180)} />
        <PollutantGauge label="SO₂" aqi={simpleGasToAQI(so2, 350)} />
        <PollutantGauge label="PM2.5" aqi={pm25ToAQI(pm25)} />
        <PollutantGauge label="PM10" aqi={pm10ToAQI(pm10)} />
      </Pollutants>
    </Container>
  );
};
