import { useState } from 'react'
import { useWeatherContext } from '../../../context'
import {
    InfoPopup,
    InfoPopupScreen4,
    MobileScreenWithCard,
    PressureGauge,
    WeatherDayInfo
} from '../../../components'
import { Container, InfoButton, InfoIcon } from './MobileScreen4.style'

export function MobileScreen4() {
    const { weather } = useWeatherContext()
    const [open, setOpen] = useState(false)

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