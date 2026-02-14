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
import { Container, InfoButton } from './MobileScreen3.style'
import { useWeatherContext } from '../../../context/WeatherContext'
import { FaInfoCircle } from 'react-icons/fa'

export function MobileScreen3() {
    const { weather } = useWeatherContext()
    const [open, setOpen] = useState(false)

    if (!weather) return null

    return (
        <ScreenLayoutGlass>
            <Container>

            {/* CONTENIDO */}
            <UvIndex value={weather.current.uv} />
            <Humidity value={weather.current.humidity} />
            <PressureValue value={weather.current.pressure_mb} />
            <VisibilityItem visibilityKm={weather.current.vis_km} />
            <WindItem windKph={weather.current.wind_kph} windDir={weather.current.wind_dir} />

            {/* ICONO INFO */}
            <InfoButton onClick={() => setOpen(true)}>
                <FaInfoCircle size={22} />
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
