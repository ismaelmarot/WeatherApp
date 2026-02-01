import { AreaChart, Area, XAxis, YAxis, Tooltip } from 'recharts';
import { Container, H3, Chart } from './DailyRainChart.style';

type HourData = {
  time: string;
  chance_of_rain: number;
};

type DailyRainChartProps = {
  hours: HourData[];
};

export function DailyRainChart({ hours }: DailyRainChartProps) {
  if (!hours.length) return null;

  const chartData = hours.map((hour) => ({
    hour: hour.time.split(' ')[1].slice(0, 5),
    rain: Number(hour.chance_of_rain),
  }));

  return (
    <Container>
      <H3>🌧 Rain probability – today</H3>

      <Chart>
        <AreaChart
          style={{ width: '100%', height: '16rem', fontSize: '.8rem' }}
          data={chartData}
        >
          <XAxis dataKey="hour" />
          <YAxis unit="%" domain={[0, 100]} />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="rain"
            stroke="rgba(0,122,255,0.9)"
            fill="rgba(0,122,255,0.35)"
            strokeWidth={3}
          />
        </AreaChart>
      </Chart>
    </Container>
  );
}
