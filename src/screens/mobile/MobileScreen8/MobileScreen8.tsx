import { useWeatherContext } from '../../../context'
import { DailyRainChart, HourlyWeatherChart } from '../../../components'
import { getNextHours } from '../../../utils'
import { BottomElement, Container, TopElement } from './MobileScreen8.style'
import { ScreenLayoutGlass } from '../../../layouts/ScreenLayout'

export function MobileScreen8() {
    const { weather, forecast } = useWeatherContext()
    const nextHours = getNextHours(forecast)
    const hourlyForecast = forecast?.forecast?.forecastday?.[0]?.hour ?? []

    if (!weather || !forecast) return null
    if (!nextHours || nextHours.length === 0) return null;

    return (
        <ScreenLayoutGlass>
            <Container>
                 <TopElement>
                    {hourlyForecast.length > 0 && (
                        <HourlyWeatherChart data={hourlyForecast} />
                    )}
                 </TopElement>
                 <BottomElement>
                    { forecast && (
                        <DailyRainChart hours={forecast.forecast.forecastday[0].hour} />
                    )}
                 </BottomElement>
            </Container>            
        </ScreenLayoutGlass>
    )
}