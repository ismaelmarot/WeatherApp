import { getWeatherIcon } from '../../utils/getWeatherIcon'
import { Icon, IconNotFound } from './WeatherIcon.style'

type WeatherIconProps = {
  code: number;
  isDay: boolean;
  size?: number;
};

export function WeatherIcon({
  code,
  isDay,
  size = 100
}: WeatherIconProps) {
  const icon = getWeatherIcon(code, isDay)

  if (!icon) {
    return <IconNotFound>ICON NOT FOUND</IconNotFound>
  }

  return (
    <Icon
      src={icon}
      width={size}
      height={size}
      draggable={false}
      color="#ffffff"
      style={{borderRadius:'50%'}}
    />
  )
}
