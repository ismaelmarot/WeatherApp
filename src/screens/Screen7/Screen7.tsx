import { useWeatherContext } from '../../context'
import { MobileScreenWithCard, Wind } from '../../components'
import { Container } from './Screen7.style'

export function Screen7() {
    const { weather } = useWeatherContext()

    if (!weather) return null

    return (
        <MobileScreenWithCard>
            <Container>
                {weather.current.wind_kph != null && weather.current.wind_degree != null && (
                    <Wind 
                        speed={weather.current.wind_kph} 
                        degree={weather.current.wind_degree} 
                    />
                )}
            </Container>
        </MobileScreenWithCard>
    )
}