import { useWeatherContext } from '../../../context'
import {
    MobileScreenWithCard,
    PressureGauge,
    WeatherDayInfo
} from '../../../components'
import { Container } from './MobileScreen4.style'

export function MobileScreen4() {
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