import type { WeatherCurrentProps } from '../../types';
import { Container, Temp, Condition, Location, Icon } from './WeatherCurrent.style';

export function WeatherCurrent({ weather }: WeatherCurrentProps) {
    return (
        <Container>
            <Icon
                src={weather.current.condition.icon}
                alt={weather.current.condition.text}
            />

            <Temp>{Math.round(weather.current.temp_c)}°</Temp>

            <Condition>{weather.current.condition.text}</Condition>

            <Location>
                {weather.location.name}, {weather.location.country}
            </Location>
        </Container>
    );
}
