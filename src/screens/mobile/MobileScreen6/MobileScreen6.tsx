import { useWeatherContext } from '../../../context'
import { RainChanceChart, RainChance } from '../../../components'
import { getCurrentHour } from '../../../utils'
import { ScreenLayoutGlass } from '../../../layouts'
import { Container } from './MobileScreen6.style'

export function MobileScreen6() {
    const { weather, forecast } = useWeatherContext()

    if (!weather || !forecast) return null

    const currentHour = getCurrentHour(weather)

    return (
        <ScreenLayoutGlass>
            <Container>
                {forecast.forecast.forecastday?.[0]?.hour && (
                    <RainChanceChart
                        hours={forecast.forecast.forecastday[0].hour.slice(
                            currentHour,
                            currentHour + 12
                        )}
                    />
                )}
                {forecast && weather && (
                    <RainChance
                        chance={forecast.forecast.forecastday[0].day.daily_chance_of_rain}
                        isRainingNow={weather.current.precip_mm > 0}
                    />
                )}
            </Container>
        </ScreenLayoutGlass>
    )
}