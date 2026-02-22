import { useWeatherContext } from '../../../context'
import { Container } from './MobileScreen10.style'
import { LunarCalendar, MobileScreenWithCard, MoonInfoItem } from '../../../components'

export function MobileScreen10() {
    const { weather } = useWeatherContext()

    if (!weather) return null

    const forecast = weather.forecast
    const today = forecast.forecastday[0]
    const astro = today.astro

    return (
        <MobileScreenWithCard>
            <Container>
                <MoonInfoItem label="Moon light" value={`${astro.moon_illumination}%`} />
                <MoonInfoItem label="Moonrise" value={astro.moonrise} />
                <MoonInfoItem label="Moonset" value={astro.moonset} />


                {forecast.forecastday?.length > 0 && (
                    <LunarCalendar
                        days={forecast.forecastday?.map((d: any) => ({
                            date: d.date,
                            moon_phase: d.astro.moon_phase,
                            moon_illumination: d.astro.moon_illumination,
                        }))}
                    />
                )}
            </Container>
        </MobileScreenWithCard>
    )
}