// import { PlaceholderBlock } from '../../components'
// import { ScreenLayoutBase } from '../../layouts/ScreenLayoutBase'

// export function MobileScreen1() {
//     return (
//         <ScreenLayoutBase>
//             <PlaceholderBlock label="🔍 Búsqueda de lugar" />
//         </ScreenLayoutBase>
//     )
// }

import { ScreenLayoutBase } from '../../layouts/ScreenLayoutBase';
import { useState } from 'react';
import { WeatherSearch, CoordinatesInfo } from '../../components';
import { useWeatherContext } from '../../context/WeatherContext';

export function MobileScreen1() {
  const [city, setCity] = useState('');
  const { fetchByCoords, weather } = useWeatherContext();

  // coords activos los sacamos del weather (si existe)
  const activeCoords = weather
    ? {
        latitude: weather.location.lat,
        longitude: weather.location.lon,
      }
    : null;

  return (
    <ScreenLayoutBase>
      <WeatherSearch
        value={city}
        onChange={setCity}
        onSelect={(location) => {
          setCity(location.name);
          fetchByCoords(location.lat, location.lon);
        }}
      />

      {activeCoords && (
        <CoordinatesInfo
          latitude={activeCoords.latitude}
          longitude={activeCoords.longitude}
        />
      )}
    </ScreenLayoutBase>
  );
}
