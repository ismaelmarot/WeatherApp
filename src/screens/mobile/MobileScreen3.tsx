import { useState } from 'react'
import { ScreenLayoutGlass } from '../../layouts'
import {
  UvIndex,
  Humidity,
  PressureValue,
  WindItem,
  VisibilityItem,
  InfoPopup,
} from '../../components'
import { useWeatherContext } from '../../context/WeatherContext'
import { FaInfoCircle } from 'react-icons/fa'
import styled from 'styled-components'

export function MobileScreen3() {
  const { weather } = useWeatherContext()
  const [open, setOpen] = useState(false)

  if (!weather) return null

  return (
    <ScreenLayoutGlass>
      {/* ICONO INFO */}
      <InfoButton onClick={() => setOpen(true)}>
        <FaInfoCircle size={22} />
      </InfoButton>

      {/* CONTENIDO */}
      <UvIndex value={weather.current.uv} />
      <Humidity value={weather.current.humidity} />
      <PressureValue value={weather.current.pressure_mb} />
      <VisibilityItem visibilityKm={weather.current.vis_km} />
      <WindItem
        windKph={weather.current.wind_kph}
        windDir={weather.current.wind_dir}
      />

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
    </ScreenLayoutGlass>
  )
}

const InfoButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  z-index: 10;
`
