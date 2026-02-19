import { useWeatherContext } from '../../../context'
import { isMoonPhase } from '../../../utils'
import { ScreenLayoutGlass } from '../../../layouts'
import { MoonImage, MoonInfoItem } from '../../../components'
import { Container } from './MobileScreen9.style'

export function MobileScreen9() {
    const { weather, forecast } = useWeatherContext()

    if (!weather || !forecast) return null

    const astro = weather.forecast.forecastday?.[0]?.astro

    if (!astro) return null

    const moonPhase = isMoonPhase(astro.moon_phase)
        ? astro.moon_phase
        : 'Full Moon'

    return (
        <ScreenLayoutGlass>
            <Container>
                <MoonImage phase={moonPhase} />
                <MoonInfoItem label="Moon phase" value={moonPhase} />
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
