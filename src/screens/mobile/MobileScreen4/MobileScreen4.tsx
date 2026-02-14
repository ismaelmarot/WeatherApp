import { PressureGauge, WeatherDayInfo } from '../../../components'
import { useWeatherContext } from '../../../context'
import { ScreenLayoutGlass } from '../../../layouts'
import { Container } from './MobileScreen4.style'

export function MobileScreen4() {
    const { weather } = useWeatherContext();

    if (!weather) return null;

    return (
        <ScreenLayoutGlass>
            <Container>
                <WeatherDayInfo weather={weather} />
                <PressureGauge value={weather.current.pressure_mb} />
            </Container>
        </ScreenLayoutGlass>
    )
}