import type { WeatherCurrentProps } from '../../types'
import { Container, Temp, Condition, Location, TempIconContainer } from './WeatherCurrent.style'
import { WeatherIcon } from '..'

export function WeatherCurrent({ weather }: WeatherCurrentProps) {

    console.log(weather.current.condition.code);


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
            </Location>
        </Container>
    )
}