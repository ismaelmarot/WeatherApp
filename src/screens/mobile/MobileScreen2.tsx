// import { PlaceholderBlock } from '../../components'
// import { ScreenLayoutBase } from '../../layouts/ScreenLayoutBase'

// export function MobileScreen2() {
//     return (
//         <ScreenLayoutBase>
//             <PlaceholderBlock label="🌡️ Temperatura actual" />
//         </ScreenLayoutBase>
//     )
// }

import { ScreenLayoutBase } from '../../layouts/ScreenLayoutBase';
import { WeatherCurrent } from '../../components';
import { useWeatherContext } from '../../context/WeatherContext';

export function MobileScreen2() {
  const { weather } = useWeatherContext();

  // Si no hay datos, podemos mostrar un mensaje o placeholder
  if (!weather) return null;

  return (
    <ScreenLayoutBase>
      <WeatherCurrent weather={weather} />
    </ScreenLayoutBase>
  );
}
