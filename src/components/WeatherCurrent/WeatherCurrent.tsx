import type { WeatherResponse } from '../../services/weather.service';
import { Container, Temp, Condition, Location, Icon } from './WeatherCurrent.style';

type Props = {
    weather: WeatherResponse;
};

export function WeatherCurrent({ weather }: Props) {
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
