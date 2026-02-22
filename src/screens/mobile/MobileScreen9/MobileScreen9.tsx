import { useWeatherContext } from '../../../context'
import { isMoonPhase } from '../../../utils'
import { MobileScreenWithCard, MoonImage } from '../../../components'
import { Container, Strong, MoonPhase } from './MobileScreen9.style'

export function MobileScreen9() {
    const { weather, forecast } = useWeatherContext()

    if (!weather || !forecast) return null

    const astro = weather.forecast.forecastday?.[0]?.astro

    if (!astro) return null

    const moonPhase = isMoonPhase(astro.moon_phase)
        ? astro.moon_phase
        : 'Full Moon'

    return (
        <MobileScreenWithCard>
            <Container>
                <MoonImage phase={moonPhase} />
                <MoonPhase>{moonPhase}</MoonPhase>
                <Strong>Moon phase</Strong>
            </Container>
        </MobileScreenWithCard>
    )
}