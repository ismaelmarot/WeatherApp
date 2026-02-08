import { ScreenLayoutBase } from '../../layouts/ScreenLayoutBase'
import { useWeatherContext } from '../../context/WeatherContext'
import { Wind } from '../../components'

export function MobileScreen7() {
    const { weather } = useWeatherContext();

    if (!weather) return null;

    return (
        <ScreenLayoutBase>
            {weather.current.wind_kph != null && weather.current.wind_degree != null && (
                <Wind 
                    speed={weather.current.wind_kph} 
                    degree={weather.current.wind_degree} 
                />
            )}
        </ScreenLayoutBase>
    );
}
