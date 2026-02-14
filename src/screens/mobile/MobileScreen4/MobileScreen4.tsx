import { useState } from 'react'
import { InfoPopup, InfoPopupScreen4, PressureGauge, WeatherDayInfo } from '../../../components'
import { useWeatherContext } from '../../../context'
import { ScreenLayoutGlass } from '../../../layouts'
import { Container, InfoButton, InfoIcon } from './MobileScreen4.style'

export function MobileScreen4() {
    const { weather } = useWeatherContext()
    const [open, setOpen] = useState(false)

    if (!weather) return null

    return (
        <ScreenLayoutGlass>
            <Container>
                <WeatherDayInfo weather={weather} />
                <PressureGauge value={weather.current.pressure_mb} />
            </Container>

             <InfoButton onClick={() => setOpen(true)}>
                <InfoIcon />
            </InfoButton>
            
            {/* POPUP */}
            {open && (
                <InfoPopup
                    title="Temperature details"
                    onClose={() => setOpen(false)}
                >
                    <InfoPopupScreen4 />
                </InfoPopup>
            )}
        </ScreenLayoutGlass>
    )
}