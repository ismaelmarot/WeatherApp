import { Container, Pollutants, Title } from './AirQuality.style'
import { PollutantGauge } from '../PollutantGauge/PollutantGauge'
import type { AirQualityProps } from '../../types'
import { getAqiText } from '../../constants/aqiInfo'
import { AIR_QUALITY_ITEMS } from '../../config/airQuality.config'

export const AirQuality: React.FC<AirQualityProps> = (props) => {
  return (
    <Container>
      <Title>Air Quality</Title>

      <Pollutants>
        {AIR_QUALITY_ITEMS.map((item) => {
          const value = props[item.valueKey]
          const aqi = item.getAqi(value)

          return (
            <PollutantGauge
              key={item.key}
              label={item.label}
              value={value}
              unit={item.unit}
              aqi={aqi}
              description={item.description}
              aqiStatus={getAqiText(aqi)}
            />
          )
        })}
      </Pollutants>
    </Container>
  )
}
