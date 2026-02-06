import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'
import { Container, H3, Chart, GradientStopStart, GradientStopEnd } from './DailyRainChart.style'
import type { DailyRainChartProps } from '../../types/DailyRainChart.type'

export function DailyRainChart({ hours }: DailyRainChartProps) {
  if (!hours.length) return null;

  const chartData = hours.map((hour) => ({
    hour: hour.time.split(' ')[1].slice(0, 5),
    rain: Number(hour.chance_of_rain),
  }));

  return (
    <Container>
      <H3>Rain probability – today</H3>

      <Chart>
        <ResponsiveContainer width='100%' height={256}>
          <AreaChart data={chartData}>
            <defs>
              <linearGradient id='rainGradient' x1='0' y1='0' x2='0' y2='1'>
                <GradientStopStart offset='0%' />
                <GradientStopEnd offset='100%' />
              </linearGradient>
            </defs>

            <XAxis dataKey='hour' />
            <YAxis unit="%" domain={[0, 100]} />
            <Tooltip />

            <Area
              type='monotone'
              dataKey='rain'
              stroke='rgba(0,122,255,0.9)'
              fill='url(#rainGradient)'
              strokeWidth={1}
            />
          </AreaChart>
        </ResponsiveContainer>
      </Chart>
    </Container>
  )
}
