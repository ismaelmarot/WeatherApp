import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import type { HourForecast } from '../../types/HourlyForecast.type';
import { Container } from './HourlyWatherCart.style';

type Props = {
  data: HourForecast[];
};

export function HourlyWeatherChart({ data }: Props) {
  if (!data.length) return null;

  const chartData = data.map((hour) => ({
    hour: hour.time.split(' ')[1].slice(0, 5), // "13:00"
    temp: hour.temp_c,
  }));

  return (
    <Container>
      <h3>Temperature - next 12 hours</h3>

      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={chartData}>
          <XAxis dataKey="hour" />
          <YAxis unit="°C" />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="temp"
            strokeWidth={3}
            dot={{ r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </Container>
  );
}
