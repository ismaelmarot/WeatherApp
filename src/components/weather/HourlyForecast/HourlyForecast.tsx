import type { HourlyForecastProps } from '../../../types/hourlyForecast.type';
import { Container, HourItem, Time, Temp, Icon, Rain } from './HourlyForecast.style';
import { formatHour } from '../../../utils/formatHOur';

export function HourlyForecast({ hours }: HourlyForecastProps) {
    return (
        <Container>
            {hours.map((hour, index) => (
                <HourItem key={hour.time}>
                    <Time>{index === 0 ? 'Now' : formatHour(hour.time)}</Time>
                    <Icon src={hour.condition.icon} />
                    <Temp>{Math.round(hour.temp_c)}°</Temp>

                    {hour.chance_of_rain > 0 && (
                        <Rain>{hour.chance_of_rain}%</Rain>
                    )}
                </HourItem>
            ))}
        </Container>
    );
}
