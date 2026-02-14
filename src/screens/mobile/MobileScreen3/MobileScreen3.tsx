import { useState } from 'react'
import { ScreenLayoutGlass } from '../../../layouts'
import {
  UvIndex,
  Humidity,
  PressureValue,
  WindItem,
  VisibilityItem,
  InfoPopup,
} from '../../../components'
import { Container, InfoButton, InfoIcon } from './MobileScreen3.style'
import { useWeatherContext } from '../../../context/WeatherContext'

export function MobileScreen3() {
    const { weather } = useWeatherContext()
    const [open, setOpen] = useState(false)

    if (!weather) return null

    return (
        <ScreenLayoutGlass>
            <Container>
                {/* CONTENT */}
                <UvIndex value={weather.current.uv} />
                <Humidity value={weather.current.humidity} />
                <PressureValue value={weather.current.pressure_mb} />
                <VisibilityItem visibilityKm={weather.current.vis_km} />
                <WindItem windKph={weather.current.wind_kph} windDir={weather.current.wind_dir} />

                {/* ICON INFO */}
                <InfoButton onClick={() => setOpen(true)}>
                    <InfoIcon />
                </InfoButton>

                {/* POPUP */}
                {open && (
                    <InfoPopup title="Weather Details" onClose={() => setOpen(false)}>
                        <p><strong>UV Index:</strong> Descripción del índice UV...</p>
                        <p><strong>Humidity:</strong> Descripción de humedad...</p>
                        <p><strong>Pressure:</strong> Descripción de presión...</p>
                        <p><strong>Visibility:</strong> Descripción de visibilidad...</p>
                        <p><strong>Wind:</strong> Descripción del viento...</p>
                    </InfoPopup>
                )}
            </Container>
        </ScreenLayoutGlass>
    )
}
