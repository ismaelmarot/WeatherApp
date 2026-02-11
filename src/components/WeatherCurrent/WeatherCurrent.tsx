import type { WeatherCurrentProps } from '../../types'
import { CoordinatesInfo, WeatherIcon } from '..'
import {
    Container,
    Temp,
    Condition,
    Location,
    TempIconContainer
} from './WeatherCurrent.style'

export function WeatherCurrent({ weather }: WeatherCurrentProps) {

    const activeCoords = weather
    ? {
        latitude: weather.location.lat,
        longitude: weather.location.lon,
      }
    : null

    return (
        <Container>
            <TempIconContainer>
                <WeatherIcon
                    code={weather.current.condition.code}
                    isDay={weather.current.is_day === 1}
                />
                <Temp>
                    {Math.round(weather.current.temp_c)}°
                </Temp>
                <Condition>
                    {weather.current.condition.text}
                </Condition>
            </TempIconContainer>
            <Location>
                {weather.location.name}, {weather.location.country}
                {activeCoords && (
                    <CoordinatesInfo
                        latitude={activeCoords.latitude}
                        longitude={activeCoords.longitude}
                    />
                )} 
            </Location>
        </Container>
    )
}