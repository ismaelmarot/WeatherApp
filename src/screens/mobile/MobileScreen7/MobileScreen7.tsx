import { useWeatherContext } from '../../../context'
import { MobileScreenWithCard, Wind } from '../../../components'

export function MobileScreen7() {
    const { weather } = useWeatherContext()

    if (!weather) return null

    return (
        <MobileScreenWithCard>
            {weather.current.wind_kph != null && weather.current.wind_degree != null && (
                <Wind 
                    speed={weather.current.wind_kph} 
                    degree={weather.current.wind_degree} 
                />
            )}
        </MobileScreenWithCard>
    )
}