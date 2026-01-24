import type { HourForecast } from '../../../types/HourlyForecast.type';
import { Container, HourItem, Time, Temp, Icon, Rain } from './HourlyForecast.style';

type Props = {
    hours: HourForecast[];
};

export function HourlyForecast({ hours }: Props) {
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

function formatHour(time: string) {
    return new Date(time).toLocaleTimeString('es-AR', {
        hour: '2-digit',
        minute: '2-digit',
    });
}
