import type { WeatherResponse } from '../../services/weather.service';
import { Grid, Item, Label, Value } from './WeatherDayInfo.style';

type Props = {
    weather: WeatherResponse;
};

export function WeatherDayInfo({ weather }: Props) {
    const forecast = weather.forecast.forecastday[0];
    const { day, astro } = forecast;

    return (
        <Grid>
            <Item>
                <Label>Min</Label>
                <Value>{Math.round(day.mintemp_c)}°</Value>
            </Item>

            <Item>
                <Label>Max</Label>
                <Value>{Math.round(day.maxtemp_c)}°</Value>
            </Item>

            <Item>
                <Label>Sunrise</Label>
                <Value>{astro.sunrise}</Value>
            </Item>

            <Item>
                <Label>Sunset</Label>
                <Value>{astro.sunset}</Value>
            </Item>

            <Item>
                <Label>Rain</Label>
                <Value>{day.daily_chance_of_rain}%</Value>
            </Item>
        </Grid>
    );
}
