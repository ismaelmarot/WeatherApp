import type { WeatherResponse } from '../../../services/weather.service';
import { Grid, Item, Label, Value } from './WeatherDetails.style';

type Props = {
    weather: WeatherResponse;
};

export function WeatherDetails({ weather }: Props) {
    const { current } = weather;

    return (
        <Grid>
            <Item>
                <Label>Humidity</Label>
                <Value>{current.humidity}%</Value>
            </Item>

            <Item>
                <Label>Wind</Label>
                <Value>{current.wind_kph} km/h</Value>
            </Item>

            <Item>
                <Label>UV</Label>
                <Value>{current.uv}</Value>
            </Item>

            <Item>
                <Label>Pressure</Label>
                <Value>{current.pressure_mb} mb</Value>
            </Item>
        </Grid>
    );
}

