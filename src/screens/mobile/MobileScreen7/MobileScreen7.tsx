import { useWeatherContext } from '../../../context'
import { Wind } from '../../../components'
import { ScreenLayoutGlass } from '../../../layouts'

export function MobileScreen7() {
    const { weather } = useWeatherContext()

    if (!weather) return null

    return (
        <ScreenLayoutGlass>
            {weather.current.wind_kph != null && weather.current.wind_degree != null && (
                <Wind 
                    speed={weather.current.wind_kph} 
                    degree={weather.current.wind_degree} 
                />
            )}
        </ScreenLayoutGlass>
    )
}
