import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'
import type { HourlyForecastChartProps } from '../../types'
import { TEMPERATURE_COLORS } from '../../constants'
import { Chart, Container, H3 } from './HourlyWatherChart.style'

export function HourlyWeatherChart({ data }: HourlyForecastChartProps) {
  if (!Array.isArray(data) || data.length === 0) {
    return null
  }

  const chartData = data.map((hour) => ({
    hour: hour.time.split(' ')[1].slice(0, 5),
    temp: hour.temp_c,
  }))

  const temps = chartData.map(d => d.temp)
  const minTemp = Math.min(...temps)
  const maxTemp = Math.max(...temps)
  const padding = 2

  return (
    <Container>
      <H3>Temperature – next 12 hours</H3>
      <Chart>
        <ResponsiveContainer width='90%' height='100%'>
          <AreaChart
                data={chartData}
                width={260}
                height={250}
                margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="tempAreaGradient" x1='0' y1='1' x2='0' y2='0'>
                    <stop offset='0%' stopColor={TEMPERATURE_COLORS.minimum} />
                    <stop offset='50%' stopColor={TEMPERATURE_COLORS.average} />
                    <stop offset='100%' stopColor={TEMPERATURE_COLORS.maximum} />
                  </linearGradient>
                </defs>

                <XAxis
                  dataKey='hour'
                />

                <YAxis
                  unit='°C'
                  domain={[
                    Math.floor(minTemp - padding),
                    Math.ceil(maxTemp + padding),
                  ]}
                />

                <Tooltip />

                <Area
                  type='monotone'
                  dataKey='temp'
                  stroke={TEMPERATURE_COLORS.maximum}
                  strokeWidth={1}
                  fill='url(#tempAreaGradient)'
                  fillOpacity={0.9}
                />
          </AreaChart>
        </ResponsiveContainer>
      </Chart>
    </Container>
  )
}