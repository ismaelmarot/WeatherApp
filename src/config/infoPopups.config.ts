import type { InfoKeyProps } from '../types'

export const INFO_POPUPS: Record<
    InfoKeyProps,
    { title: string; content: string }
> = {
    uv: {
        title: 'UV Index',
        content: `
Indicates the strength of ultraviolet radiation.

0–2: Low
3–5: Moderate
6–7: High
8+: Very high
`,
  },

    humidity: {
        title: 'Humidity',
        content: `
    Represents the amount of moisture in the air.
    High humidity can make temperatures feel warmer.
    `,
    },

    pressure: {
        title: 'Pressure',
        content: `
    Atmospheric pressure helps predict weather changes.
    Low pressure often brings rain or storms.
    `,
    },

    visibility: {
        title: 'Visibility',
        content: `
    Distance at which objects can be clearly seen.
    Fog and rain reduce visibility.
    `,
    },

    wind: {
        title: 'Wind',
        content: `
    Wind speed and direction affect temperature and comfort.
    `,
    },

    tempMin: {
        title: 'Minimum Temperature',
        content: `
    Lowest expected temperature during the day.
    `,
    },

    tempMax: {
        title: 'Maximum Temperature',
        content: `
    Highest expected temperature during the day.
    `,
    },

    sunrise: {
        title: 'Sunrise',
        content: `
    Time when the sun first appears above the horizon.
    `,
    },

    sunset: {
        title: 'Sunset',
        content: `
    Time when the sun disappears below the horizon.
    `,
    },

    rain: {
        title: 'Rain',
        content: `
    Chance or amount of precipitation expected.
    `,
    },
}