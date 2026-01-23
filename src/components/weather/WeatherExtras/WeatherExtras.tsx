import type { WeatherResponse } from '../../../services/weather.service';
import { Section, Grid, Item, Label, Value, WindArrow } from './WeatherExtras.style';
import { moonImages } from '../../../utils/moonImages';

type Props = {
    weather: WeatherResponse;
};


export function WeatherExtras({ weather }: Props) {
    const { current, forecast } = weather;
    const astro = forecast.forecastday[0].astro;

    console.log('Moon phase from API:', astro.moon_phase);

    return (
        <Section>
        <Grid>
            {/* Visibilidad */}
            <Item>
            <Label>Visibility</Label>
            <Value>{current.vis_km} km</Value>
            </Item>

            {/* Viento */}
            <Item>
            <Label>Wind</Label>
            <Value>
                {current.wind_kph} km/h
                <WindArrow
                style={{ transform: `rotate(${windDeg(current.wind_dir)}deg)` }}
                />
            </Value>
            </Item>

            {/* Luna */}
            <Item style={{ backgroundColor:'black' }}>
                <Label style={{ color:'white' }}>Moon</Label>
                <img
                    src={moonImages[astro.moon_phase]}
                    alt={astro.moon_phase}
                    width={48}
                    style={{ borderRadius:'50%',  opacity: 0.9, margin:'1rem', width:'8rem' }}
                />
            </Item>
            <Item>
                <Label>Moon phase</Label>
                <Value>{astro.moon_phase}</Value>
            </Item>

            <Item>
                <Label>Moon light</Label>
                <Value>{astro.moon_illumination}%</Value>
            </Item>

            <Item>
                <Label>Moonrise</Label>
                <Value>{astro.moonrise}</Value>
            </Item>

            <Item>
                <Label>Moonset</Label>
                <Value>{astro.moonset}</Value>
            </Item>
        </Grid>
        </Section>
    );
}

/**
 * Convierte N, NE, E, etc a grados
 */
function windDeg(dir: string): number {
    const map: Record<string, number> = {
        N: 0,
        NNE: 22.5,
        NE: 45,
        ENE: 67.5,
        E: 90,
        ESE: 112.5,
        SE: 135,
        SSE: 157.5,
        S: 180,
        SSW: 202.5,
        SW: 225,
        WSW: 247.5,
        W: 270,
        WNW: 292.5,
        NW: 315,
        NNW: 337.5,
    };

    return map[dir] ?? 0;
}
