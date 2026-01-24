import type { WeatherResponse } from '../../../services/weather.service';
import { Grid, Item, Label, Value } from './WeatherDetails.style';
import { WindCompass } from '../WindCompass';

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
                <WindCompass
                    direction={current.wind_dir}
                    speed={current.wind_kph}
                />
            </Item>

            <Item>
                <Label>☀️ UV Index</Label>
                <Value>{current.uv}</Value>
            </Item>

            <Item>
                <Label>Pressure</Label>
                <Value>{current.pressure_mb} mb</Value>
            </Item>
        </Grid>
    );
}

