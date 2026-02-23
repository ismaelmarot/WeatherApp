import { WEATHER_ICONS } from '../../constants/weatherIcons'

export function getWeatherIcon(code: number, isDay: boolean): string {
  let iconKey = 'cloudy'

  if (code === 1000) iconKey = 'sunny'
  if ([1003, 1006].includes(code)) iconKey = 'partlyCloudy'
  if ([1009, 1030].includes(code)) iconKey = 'cloudy'
  if ([1063, 1180, 1183, 1186, 1189, 1192, 1195].includes(code)) iconKey = 'rain'
  if ([1114, 1117].includes(code)) iconKey = 'snow'
  if ([1087, 1273, 1276].includes(code)) iconKey = 'storm'

  const icon = WEATHER_ICONS[iconKey]
  return isDay ? icon.day : icon.night
}