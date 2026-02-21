import { useWeatherContext } from '../../../context'
import { RainChance, RainChanceChart } from '../../../components'
import { getCurrentHour } from '../../../utils'
import { BottomElement, Container, TopElement } from './MobileScreen6.style'
import { ScreenLayoutGlass } from '../../../layouts/ScreenLayout'

export function MobileScreen6() {
  const { weather, forecast } = useWeatherContext()

  if (!weather || !forecast) return null

  const currentHour = getCurrentHour(weather)

  return (
    <ScreenLayoutGlass>
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
    </ScreenLayoutGlass>
  )
}