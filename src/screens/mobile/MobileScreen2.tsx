import { ScreenLayoutBase } from '../../layouts/ScreenLayoutBase'
import { CoordinatesInfo, WeatherCurrent } from '../../components'
import { useWeatherContext } from '../../context/WeatherContext'

export function MobileScreen2() {
  const { weather } = useWeatherContext()

  if (!weather) return null

  const activeCoords = weather
    ? {
        latitude: weather.location.lat,
        longitude: weather.location.lon,
      }
    : null

  return (
    <ScreenLayoutBase>
      <WeatherCurrent weather={weather} />
      {activeCoords && (
        <CoordinatesInfo
          latitude={activeCoords.latitude}
          longitude={activeCoords.longitude}
        />
      )}     
    </ScreenLayoutBase>
  )
}