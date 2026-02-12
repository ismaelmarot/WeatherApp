import { PressureGauge } from '../../components'
import { useWeatherContext } from '../../context/WeatherContext'
import { ScreenLayoutGlass } from '../../layouts'

export function MobileScreen4() {
    const { weather } = useWeatherContext();

    if (!weather) return null;

    return (
        <ScreenLayoutGlass>
            <PressureGauge value={weather.current.pressure_mb} />
        </ScreenLayoutGlass>
    )
}