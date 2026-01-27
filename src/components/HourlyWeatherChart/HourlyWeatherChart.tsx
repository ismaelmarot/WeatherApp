import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';
import type { HourlyForecastChartProps } from '../../types/HourlyForecastChart.type';
import { Chart, Container, H3 } from './HourlyWatherChart.style';

export function HourlyWeatherChart({ data }: HourlyForecastChartProps) {
  if (!data.length) return null;

  const chartData = data.map((hour) => ({
    hour: hour.time.split(' ')[1].slice(0, 5),
    temp: hour.temp_c,
  }));

  return (
    <Container>
      <H3>Temperature – next 12 hours</H3>
      <Chart>
        <LineChart
          style={{width:'100%', height:'16rem', fontSize:'.8rem'}}
          data={chartData}
        >
          <XAxis dataKey='hour' />
          <YAxis unit='°C' />
          <Tooltip />
          <Line
            type='monotone'
            dataKey='temp'
            strokeWidth={3}
            dot={{ r: 4 }}
          />
        </LineChart>
      </Chart>
    </Container>
  );
}
