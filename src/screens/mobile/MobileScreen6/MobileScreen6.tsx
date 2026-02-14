// import { ScreenLayoutBase } from '../../layouts/ScreenLayoutBase';
// import { useWeatherContext } from '../../context/WeatherContext';
// import { RainChanceChart } from '../../components';
// import { getCurrentHour } from '../../utils';

// export function MobileScreen6() {
//     const { weather, forecast } = useWeatherContext();

//     if (!weather || !forecast) return null;

//     const currentHour = getCurrentHour(weather);

//     return (
//         <ScreenLayoutBase>
//             {forecast.forecast.forecastday?.[0]?.hour && (
//                 <RainChanceChart
//                     hours={forecast.forecast.forecastday[0].hour.slice(
//                         currentHour,
//                         currentHour + 12
//                     )}ß
//                 />
//             )}
//         </ScreenLayoutBase>
//     );ß
// }

import { useWeatherContext } from '../../../context'
import { RainChanceChart, RainChance } from '../../../components'
import { getCurrentHour } from '../../../utils'
import { ScreenLayoutGlass } from '../../../layouts'

export function MobileScreen6() {
    const { weather, forecast } = useWeatherContext()

    if (!weather || !forecast) return null

    const currentHour = getCurrentHour(weather)

    return (
        <ScreenLayoutGlass>
            {/* Gráfico de lluvia de las próximas horas */}
            {forecast.forecast.forecastday?.[0]?.hour && (
                <RainChanceChart
                    hours={forecast.forecast.forecastday[0].hour.slice(
                        currentHour,
                        currentHour + 12
                    )}
                />
            )}

            {/* Probabilidad de lluvia y si está lloviendo ahora */}
            {forecast && weather && (
                <RainChance
                    chance={forecast.forecast.forecastday[0].day.daily_chance_of_rain}
                    isRainingNow={weather.current.precip_mm > 0}
                />
            )}
        </ScreenLayoutGlass>
    )
}