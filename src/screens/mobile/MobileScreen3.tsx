import { ScreenLayoutGlass } from '../../layouts'
import {
    UvIndex, Humidity,
    PressureValue,
    WindItem,
    VisibilityItem,
    WeatherDayInfo
} from '../../components'
import { useWeatherContext } from '../../context/WeatherContext'

export function MobileScreen3() {
    const { weather } = useWeatherContext();

    if (!weather) return null;

    return (
        <ScreenLayoutGlass>  
            <UvIndex value={weather.current.uv} />
            <Humidity value={weather.current.humidity} />
            <PressureValue value={weather.current.pressure_mb} />
            <VisibilityItem visibilityKm={weather.current.vis_km} />
            <WindItem windKph={weather.current.wind_kph} windDir={weather.current.wind_dir} />
            <WeatherDayInfo weather={weather} />
        </ScreenLayoutGlass>
    )
}