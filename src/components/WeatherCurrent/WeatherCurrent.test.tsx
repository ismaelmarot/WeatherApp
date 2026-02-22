import { render, screen } from '@testing-library/react'
import { describe, test, expect, vi } from 'vitest'
import { WeatherCurrent } from './WeatherCurrent'

vi.mock('..', () => ({
    WeatherIcon: () => <div data-testid="weather-icon" />,
        CoordinatesInfo: ({ latitude, longitude }: any) => (
            <div data-testid="coords">
                {latitude}, {longitude}
            </div>
        ),
    }))

    describe('WeatherCurrent', () => {
        const mockWeather = {
            location: {
                name: 'Madrid',
                country: 'Spain',
                lat: 40.41,
                lon: -3.7,
            },
            current: {
                temp_c: 21.6,
                is_day: 1,
                condition: {
                    text: 'Sunny',
                    code: 1000,
                },
            },
        }

    test('renders temperature, condition, location and coordinates', () => {
        render(<WeatherCurrent weather={mockWeather as any} />)

        expect(screen.getByTestId('weather-icon')).toBeInTheDocument()

        expect(screen.getByText('22°')).toBeInTheDocument()

        expect(screen.getByText('Sunny')).toBeInTheDocument()
        expect(screen.getByText(/Madrid, Spain/)).toBeInTheDocument()

        expect(screen.getByTestId('coords')).toBeInTheDocument()
        expect(screen.getByText('40.41, -3.7')).toBeInTheDocument()
    })
})