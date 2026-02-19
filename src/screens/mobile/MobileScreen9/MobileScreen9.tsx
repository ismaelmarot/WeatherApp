import { useWeatherContext } from '../../../context'
import { MoonImage, MoonInfoItem, LunarCalendar } from '../../../components'
import { ScreenLayoutGlass } from '../../../layouts'
import { Container } from './MobileScreen9.style'

export function MobileScreen9() {
    const { weather, forecast } = useWeatherContext()

    if (!weather || !forecast) return null

    const astro = weather.forecast.forecastday?.[0]?.astro

    if (!astro) return null

    return (
        <ScreenLayoutGlass>
            <Container>
                <MoonImage phase={astro.moon_phase} />
                <MoonInfoItem label="Moon phase" value={astro.moon_phase} />
            </Container>
            {/* Info lunar actual */}
            {/* <MoonInfoItem label="Moon light" value={`${astro.moon_illumination}%`} />
            <MoonInfoItem label="Moonrise" value={astro.moonrise} />
            <MoonInfoItem label="Moonset" value={astro.moonset} /> */}

            {/* Calendario lunar */}
            {/* {forecast.forecast.forecastday?.length > 0 && (
                <LunarCalendar
                    days={forecast.forecast.forecastday.map((d: any) => ({
                        date: d.date,
                        moon_phase: d.astro.moon_phase,
                        moon_illumination: d.astro.moon_illumination,
                    }))}
                />
            )} */}
        </ScreenLayoutGlass>
    )
}
