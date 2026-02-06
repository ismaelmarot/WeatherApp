// import type { WeatherDetailsProps } from '../../types/WeatherDetails.type';
// import { WindCompass } from '../WindCompass';
// import { Grid, Item, Label, Value } from './WeatherDetails.style';

// export function WeatherDetails({ weather }: WeatherDetailsProps) {
//     const { current } = weather;

//     return (
//         <Grid>
//             <Item>
//                 <Label>Humidity</Label>
//                 <Value>{current.humidity}%</Value>
//             </Item>
//             <Item>
//                 <Label>Wind</Label>
//                 <WindCompass 
//                     speed={weather.current.wind_kph} 
//                     degree={weather.current.wind_degree}
//                 />
//             </Item>
//             <Item>
//                 <Label>☀️ UV Index</Label>
//                 <Value>{current.uv}</Value>
//             </Item>
//             <Item>
//                 <Label>Pressure</Label>
//                 <Value>{current.pressure_mb} mb</Value>
//             </Item>
//         </Grid>
//     );
// }