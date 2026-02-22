import type { WeatherDayInfoProps } from '../../types'
import { Grid, Item, Label, Value, Strong, Degrees } from './WeatherDayInfo.style'

export function WeatherDayInfo({ weather }: WeatherDayInfoProps) {
    const forecast = weather.forecast.forecastday[0]
    const { day, astro } = forecast
    const sunrise = astro.sunrise.split(' ')[0]
    const sunset = astro.sunset.split(' ')[0]


    return (
        <Grid>
            <Item>
                <Label>Min temperature</Label>
                <Value>{Math.round(day.mintemp_c)}<Degrees>°</Degrees></Value>
            </Item>

            <Item>
                <Label>Max temperature</Label>
                <Value>{Math.round(day.maxtemp_c)}<Degrees>°</Degrees></Value>
            </Item>

            <Item>
                <Label>Sunrise</Label>
                <Value>{sunrise}<Strong>AM</Strong></Value>
            </Item>

            <Item>
                <Label>Sunset</Label>
                <Value>{sunset}<Strong>PM</Strong></Value>
            </Item>

            <Item>
                <Label>Rain</Label>
                <Value>{day.daily_chance_of_rain}<Strong>%</Strong></Value>
            </Item>
        </Grid>
    )
}