import { useWeatherContext } from '../../../context'
import { getCurrentHour } from '../../../utils'
import { MobileScreenWithCard, RainChance, RainChanceChart } from '../../../components'
import { BottomElement, Container, TopElement } from './MobileScreen6.style'

export function MobileScreen6() {
  const { weather, forecast } = useWeatherContext()

  if (!weather || !forecast) return null

  const currentHour = getCurrentHour(weather)

  return (
    <MobileScreenWithCard>
      <Container>
        <TopElement>
          {forecast.forecast.forecastday?.[0]?.hour && (
            <RainChanceChart
              hours={forecast.forecast.forecastday[0].hour.slice(
                currentHour,
                currentHour + 12
              )}
            />
          )}
        </TopElement>
        <BottomElement>
            {forecast && weather && (
                <RainChance
                    chance={forecast.forecast.forecastday[0].day.daily_chance_of_rain}
                    isRainingNow={weather.current.precip_mm > 0}
                />
            )}
        </BottomElement>
      </Container>
    </MobileScreenWithCard>
  )
}