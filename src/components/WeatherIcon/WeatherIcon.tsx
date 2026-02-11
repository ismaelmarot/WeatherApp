import { getWeatherIcon } from '../../utils/getWeatherIcon'
import { Icon, IconNotFound } from './WeatherIcon.style'

type WeatherIconProps = {
  code: number
  isDay: boolean
  size?: number
  color?: string
}

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