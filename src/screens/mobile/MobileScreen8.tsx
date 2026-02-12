import { useWeatherContext } from '../../context/WeatherContext'
import { HourlyForecast } from '../../components'
import { getNextHours } from '../../utils'
import { ScreenLayoutGlass } from '../../layouts'

export function MobileScreen8() {
    const { weather, forecast } = useWeatherContext()

    if (!weather || !forecast) return null

    const nextHours = getNextHours(forecast)

    if (!nextHours || nextHours.length === 0) return null;

    return (
        <ScreenLayoutGlass>
            <HourlyForecast hours={nextHours} />
        </ScreenLayoutGlass>
    )
}
