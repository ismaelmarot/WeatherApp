import { useWeatherContext } from '../../../context'
import { Container } from './MobileScreen5.style'
import { AirQuality, MobileScreenWithCard } from '../../../components'

export function MobileScreen5() {
    const { weather } = useWeatherContext()

    if (!weather) return null;

    return (
        <MobileScreenWithCard>
            <Container>
                {weather.current.air_quality && (
                    <AirQuality
                        epaIndex={weather.current.air_quality['us-epa-index']}
                        co={weather.current.air_quality.co}
                        no2={weather.current.air_quality.no2}
                        o3={weather.current.air_quality.o3}
                        so2={weather.current.air_quality.so2}
                        pm25={weather.current.air_quality.pm2_5}
                        pm10={weather.current.air_quality.pm10}
                    />
                )}
            </Container>
        </MobileScreenWithCard>
    )
}