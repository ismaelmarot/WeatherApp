import { ScreenLayoutBase } from '../../layouts/ScreenLayoutBase'
import { useWeatherContext } from '../../context/WeatherContext'

export function MobileScreen6() {
    const { weather } = useWeatherContext();

    if (!weather) return null;

    return (
        <ScreenLayoutBase>
            <p>6</p>
        </ScreenLayoutBase>
    )
}
