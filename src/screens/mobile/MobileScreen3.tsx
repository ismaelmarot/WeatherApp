import { ScreenLayoutBase } from '../../layouts/ScreenLayoutBase'
import { UvIndex, Humidity, PressureValue } from '../../components'
import { useWeatherContext } from '../../context/WeatherContext'

export function MobileScreen3() {
    const { weather } = useWeatherContext();

    if (!weather) return null;

    return (
        <ScreenLayoutBase>
            <UvIndex value={weather.current.uv} />
            <Humidity value={weather.current.humidity} />
            <PressureValue value={weather.current.pressure_mb} />
        </ScreenLayoutBase>
    )
}
