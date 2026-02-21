import { useState } from 'react'
import { useWeatherContext } from '../../../context/WeatherContext'
import {
  UvIndex,
  Humidity,
  PressureValue,
  WindItem,
  VisibilityItem,
  InfoPopup,
  InfoPopupScreen3,
  MobileScreenWithCard,
} from '../../../components'
import { Container, InfoButton, InfoIcon } from './MobileScreen3.style'

export function MobileScreen3() {
    const { weather } = useWeatherContext()
    const [open, setOpen] = useState(false)

    if (!weather) return null

    return (
        <MobileScreenWithCard>
            <Container>
                <UvIndex value={weather.current.uv} />
                <Humidity value={weather.current.humidity} />
                <PressureValue value={weather.current.pressure_mb} />
                <VisibilityItem visibilityKm={weather.current.vis_km} />
                <WindItem
                    windKph={weather.current.wind_kph}
                    windDir={weather.current.wind_dir}
                />

                <InfoButton onClick={() => setOpen(true)}>
                    <InfoIcon />
                </InfoButton>

                {open && (
                    <InfoPopup
                        title="Weather Details"
                        onClose={() => setOpen(false)}
                    >
                        <InfoPopupScreen3 />
                    </InfoPopup>
                )}
            </Container>
        </MobileScreenWithCard>
    )
}