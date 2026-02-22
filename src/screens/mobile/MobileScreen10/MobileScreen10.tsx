import { useWeatherContext } from '../../../context'
import { LunarCalendar, MobileScreenWithCard, MoonInfoItem } from '../../../components'
import { Container } from './MobileScreen10.style'

export function MobileScreen10() {
    const { weather } = useWeatherContext()

    if (!weather) return null

    const forecast = weather.forecast
    const today = forecast.forecastday[0]
    const astro = today.astro

    return (
        <MobileScreenWithCard>
            <Container>
                <MoonInfoItem label="Moon light" value={`${astro.moon_illumination}`} item='%' />
                <MoonInfoItem label="Moonrise" value={astro.moonrise} item='AM' />
                <MoonInfoItem label="Moonset" value={astro.moonset} item='PM' />


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