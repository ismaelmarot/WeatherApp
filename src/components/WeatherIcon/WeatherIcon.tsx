import type { WeatherIconProps } from '../../types'
import { getWeatherIcon } from '../../utils/weather/getWeatherIcon'
import { Icon, IconNotFound } from './WeatherIcon.style'

export function WeatherIcon({
  code,
  isDay,
}: WeatherIconProps) {
  const iconClass = getWeatherIcon(code, isDay)

  if (!iconClass) return <IconNotFound>ICON NOT FOUND</IconNotFound>

  return (
    <Icon
      className={`wi ${iconClass}`}
    />
  )
}