import { getWeatherIcon } from '../../utils/getWeatherIcon'

type WeatherIconProps = {
  code: number;
  isDay: boolean;
  size?: number;
};

export function WeatherIcon({
  code,
  isDay,
  size = 100,
}: WeatherIconProps) {
  const icon = getWeatherIcon(code, isDay);

  console.log('ICON RESULT:', icon);

  if (!icon) {
    return <div style={{ color: 'red' }}>ICON NOT FOUND</div>;
  }

  return (
    <img
      src={icon}
      width={size}
      height={size}
      style={{ border: '2px solid red',backgroundColor:'white' }}
      draggable={false}
    />
  )
}
