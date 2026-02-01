// import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';
// import type { HourlyForecastChartProps } from '../../types/HourlyForecastChart.type';
// import { Chart, Container, H3 } from './HourlyWatherChart.style';

// export function HourlyWeatherChart({ data }: HourlyForecastChartProps) {
//   if (!data.length) return null;

//   const chartData = data.map((hour) => ({
//     hour: hour.time.split(' ')[1].slice(0, 5),
//     temp: hour.temp_c,
//   }));

//   return (
//     <Container>
//       <H3>Temperature – next 12 hours</H3>
//       <Chart>
//         <LineChart
//           style={{width:'100%', height:'16rem', fontSize:'.8rem'}}
//           data={chartData}
//         >
//           <XAxis dataKey='hour' />
//           <YAxis unit='°C' />
//           <Tooltip />
//           <Line
//             type='monotone'
//             dataKey='temp'
//             strokeWidth={3}
//             dot={{ r: 4 }}
//           />
//         </LineChart>
//       </Chart>
//     </Container>
//   );
// }



import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from 'recharts';
import type { HourlyForecastChartProps } from '../../types/HourlyForecastChart.type';
import { Chart, Container, H3 } from './HourlyWatherChart.style';

export function HourlyWeatherChart({ data }: HourlyForecastChartProps) {
  if (!data || data.length === 0) return null;

  const chartData = data.map((hour) => ({
    hour: hour.time.split(' ')[1].slice(0, 5),
    temp: hour.temp_c,
  }));

  const temps = chartData.map(d => d.temp);
  const minTemp = Math.min(...temps);
  const maxTemp = Math.max(...temps);

  const padding = 2;

  return (
    <Container>
      <H3>Temperature – next 12 hours</H3>

      <Chart>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chartData}>
            <defs>
              {/* 🔥 Gradiente REAL mapeado al eje Y */}
              <linearGradient id="tempAreaGradient" x1="0" y1="1" x2="0" y2="0">
                <stop offset="0%" stopColor="#FFD60A" />   {/* frío */}
                <stop offset="50%" stopColor="#FF9F0A" />  {/* templado */}
                <stop offset="100%" stopColor="#FF3B30" /> {/* calor */}
              </linearGradient>
            </defs>

            <XAxis dataKey="hour" />

            <YAxis
              unit="°C"
              domain={[
                Math.floor(minTemp - padding),
                Math.ceil(maxTemp + padding),
              ]}
            />

            <Tooltip />

            {/* 🔥 ÁREA = intensidad térmica */}
            <Area
              type="monotone"
              dataKey="temp"
              stroke="#FF3B30"
              strokeWidth={3}
              fill="url(#tempAreaGradient)"
              fillOpacity={0.9}
              dot={{ r: 4, fill: '#FF3B30' }}
              activeDot={{ r: 6 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </Chart>
    </Container>
  );
}
