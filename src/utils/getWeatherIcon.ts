import { WEATHER_ICONS } from '../constants/weatherIcons';
import { getWeatherIconPath } from '../constants/weatherIcons';

export function getWeatherIcon(
  code: number,
  isDay: boolean
): string {
  let fileName = WEATHER_ICONS.cloudy;

  if (code === 1000) {
    fileName = isDay
      ? WEATHER_ICONS.sunny
      : WEATHER_ICONS.nightClear;
  }

  if ([1003, 1006].includes(code)) {
    fileName = WEATHER_ICONS.partlyCloudy;
  }

  if ([1009, 1030].includes(code)) {
    fileName = WEATHER_ICONS.cloudy;
  }

  if ([1063, 1180, 1183, 1186, 1189, 1192, 1195].includes(code)) {
    fileName = WEATHER_ICONS.rain;
  }

  if ([1114, 1117].includes(code)) {
    fileName = WEATHER_ICONS.snow;
  }

  if ([1087, 1273, 1276].includes(code)) {
    fileName = WEATHER_ICONS.storm;
  }

  // 🔥 ESTA LÍNEA ES LA CLAVE
  return getWeatherIconPath(fileName);
}
