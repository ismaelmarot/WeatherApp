import { useWeatherContext } from '../../context'
import {
    MobileScreenWithCard,
    PressureGauge,
    WeatherDayInfo
} from '../../components'
import { Container } from './Screen4.style'

export function Screen4() {
    const { weather } = useWeatherContext()

    if (!weather) return null

    return (
        <MobileScreenWithCard>
            <Container>
                <WeatherDayInfo weather={weather} />
                <PressureGauge value={weather.current.pressure_mb} />
            </Container>
        </MobileScreenWithCard>
    )
}