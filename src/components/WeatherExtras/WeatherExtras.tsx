import type { WeatherExtrasProps } from '../../types/WeatherExtras.type';
import { ArrowContainer, Container, Image, Item, ItemMoon, Label, Value, WindArrow } from './WeatherExtras.style';
import { moonImages } from '../../utils/moonImages';
import { windDeg } from '../../constants/WindDeg';

export function WeatherExtras({ weather }: WeatherExtrasProps) {
    const { current, forecast } = weather;
    const localDate = weather.location.localtime.split(' ')[0];

    const todayForecast =
        forecast.forecastday.find((d: any) => d.date === localDate) ??
        forecast.forecastday[0];

    const astro = todayForecast.astro;

    return (
        <Container>
            <Item>
                <Label>Visibility</Label>
                <Value>{current.vis_km} km</Value>
            </Item>

            <Item>
                <Label>Wind</Label>
                <Value>
                    {current.wind_kph} km/h
                    <ArrowContainer>
                        <WindArrow
                            style={{ transform: `rotate(${windDeg(current.wind_dir) + 180}deg)` }}
                        />
                    </ArrowContainer>
                </Value>
            </Item>

            <ItemMoon>
                <Label>Moon</Label>
                <Image
                    src={moonImages[astro.moon_phase] ?? moonImages['Full Moon']}
                    alt={astro.moon_phase}
                />
            </ItemMoon>
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
        </Container>
    );
}
