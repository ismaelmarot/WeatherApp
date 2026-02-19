import type { AirQualityProps } from '../../types'
import { PollutantGauge } from '..'
import { getAqiText } from '../../utils'
import { AIR_QUALITY_ITEMS } from '../../config'
import { Container, Pollutants, Title } from './AirQuality.style'

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