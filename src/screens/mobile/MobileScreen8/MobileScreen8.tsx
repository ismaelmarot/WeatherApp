import { useWeatherContext } from '../../../context'
import { getNextHours } from '../../../utils'
import { DailyRainChart, HourlyWeatherChart, MobileScreenWithCard } from '../../../components'
import { BottomElement, Container, TopElement } from './MobileScreen8.style'

export function MobileScreen8() {
    const { weather, forecast } = useWeatherContext()
    const nextHours = getNextHours(forecast)
    const hourlyForecast = forecast?.forecast?.forecastday?.[0]?.hour ?? []

    if (!weather || !forecast) return null
    if (!nextHours || nextHours.length === 0) return null;

    return (
        <MobileScreenWithCard>
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
        </MobileScreenWithCard>
    )
}