import { useWeatherContext } from '../../../context'
import { DailyRainChart, HourlyForecast, HourlyWeatherChart } from '../../../components'
import { getNextHours } from '../../../utils'
import { ScreenLayoutGlass } from '../../../layouts'

export function MobileScreen8() {
    const { weather, forecast } = useWeatherContext()

    const hourlyForecast = forecast?.forecast?.forecastday?.[0]?.hour ?? []

    if (!weather || !forecast) return null

    const nextHours = getNextHours(forecast)

    if (!nextHours || nextHours.length === 0) return null;

    return (
        <ScreenLayoutGlass>
            <HourlyForecast hours={nextHours} />

            { forecast && (
                <DailyRainChart hours={forecast.forecast.forecastday[0].hour} />
            )}


            
        </ScreenLayoutGlass>
    )
}
