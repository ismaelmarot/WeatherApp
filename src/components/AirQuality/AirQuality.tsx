import { Container, Pollutants, Title } from './AirQuality.style'
import { PollutantGauge } from '../PollutantGauge/PollutantGauge'
import { pm25ToAQI, pm10ToAQI, simpleGasToAQI } from '../../utils/aqiConverters.utils'
import type { AirQualityProps } from '../../types'
import { getAqiText, POLLUTANT_LABELS } from '../../constants/aqiInfo'

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
      <Title>Air Quality</Title>
      <Pollutants>
        <PollutantGauge
          label="CO"
          aqi={simpleGasToAQI(co, 10)}
          description={POLLUTANT_LABELS.CO}
          value={co}
          unit="µg/m³"
          aqiStatus={getAqiText(simpleGasToAQI(co, 10))}
        />
        <PollutantGauge
          label="NO₂"
          aqi={simpleGasToAQI(no2, 200)}
          description={POLLUTANT_LABELS.NO2}
          value={no2}
          unit="µg/m³"
          aqiStatus={getAqiText(simpleGasToAQI(no2, 200))}
        />
        <PollutantGauge
          label="O₃"
          aqi={simpleGasToAQI(o3, 180)}
          description={POLLUTANT_LABELS.O3}
          value={o3}
          unit="µg/m³"
          aqiStatus={getAqiText(simpleGasToAQI(o3, 180))}
          />
        <PollutantGauge
          label="SO₂"
          aqi={simpleGasToAQI(so2, 350)}
          description={POLLUTANT_LABELS.SO2}
          value={so2}
          unit="µg/m³"
          aqiStatus={getAqiText(simpleGasToAQI(so2, 350))}
        />
        <PollutantGauge
          label="PM2.5"
          aqi={pm25ToAQI(pm25)}
          description={POLLUTANT_LABELS.PM25}
          value={pm25}
          unit="µg/m³"
          aqiStatus={getAqiText(pm25ToAQI(pm25))}
        />
        <PollutantGauge
          label="PM10"
          aqi={pm10ToAQI(pm10)}
          description={POLLUTANT_LABELS.PM10}
          value={pm10}
          unit="µg/m³"
          aqiStatus={getAqiText(pm10ToAQI(pm10))}
        />
      </Pollutants>
    </Container>
  )
}
