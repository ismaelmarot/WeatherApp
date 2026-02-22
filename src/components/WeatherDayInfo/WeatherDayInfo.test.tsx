import { render, screen } from '@testing-library/react'
import { describe, test, expect } from 'vitest'
import { WeatherDayInfo } from './WeatherDayInfo'

describe('WeatherDayInfo', () => {
    const mockWeather = {
        forecast: {
            forecastday: [
                {
                day: {
                    mintemp_c: 12.4,
                    maxtemp_c: 24.7,
                    daily_chance_of_rain: 60,
                },
                astro: {
                    sunrise: '06:45 AM',
                    sunset: '08:15 PM',
                },
                },
            ],
        },
    }

    test('renders min/max temperature, sunrise, sunset and rain chance', () => {
        render(<WeatherDayInfo weather={mockWeather as any} />)

        expect(screen.getByText('Min temperature')).toBeInTheDocument()
        expect(screen.getByText('12')).toBeInTheDocument()
        expect(screen.getAllByText('°')).toHaveLength(2)

        expect(screen.getByText('Max temperature')).toBeInTheDocument()
        expect(screen.getByText('25')).toBeInTheDocument()

        expect(screen.getByText('Sunrise')).toBeInTheDocument()
        expect(screen.getByText('06:45')).toBeInTheDocument()
        expect(screen.getByText('AM')).toBeInTheDocument()

        expect(screen.getByText('Sunset')).toBeInTheDocument()
        expect(screen.getByText('08:15')).toBeInTheDocument()
        expect(screen.getByText('PM')).toBeInTheDocument()

        expect(screen.getByText('Rain')).toBeInTheDocument()
        expect(screen.getByText('60')).toBeInTheDocument()
        expect(screen.getByText('%')).toBeInTheDocument()
    })
})