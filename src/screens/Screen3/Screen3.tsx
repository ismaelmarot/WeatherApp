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
import { Container, InfoButton, InfoIcon, DataInfo } from './Screen3.style'

export function Screen3() {
    const { weather } = useWeatherContext()
    const [open, setOpen] = useState(false)

    if (!weather) return null

    return (
        <MobileScreenWithCard>
            <Container>
                <DataInfo>
                    <UvIndex value={weather.current.uv} />
                    <Humidity value={weather.current.humidity} />
                    <PressureValue value={weather.current.pressure_mb} />
                    <VisibilityItem visibilityKm={weather.current.vis_km} />
                </DataInfo>
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