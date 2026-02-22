
import { render, screen } from '@testing-library/react'
import type { HourForecastProps } from '../../types'
import { HourlyWeatherChart } from './HourlyWeatherChart'

const mockData: HourForecastProps[] = [
    {
        time: '2026-02-22 09:00',
        temp_c: 21,
        chance_of_rain: 0,
        condition: {
            text: 'Sunny',
            icon: '/icons/sunny.png',
        },
    },
    {
        time: '2026-02-22 12:00',
        temp_c: 25,
        chance_of_rain: 30,
        condition: {
            text: 'Cloudy',
            icon: '/icons/cloudy.png',
        },
    },
]

describe('HourlyWeatherChart', () => {
    it('renders null if data is empty', () => {
        const { container } = render(<HourlyWeatherChart data={[]} />)
        expect(container.firstChild).toBeNull()
    })

    it('renders chart with correct hours and temperatures', () => {
        render(<HourlyWeatherChart data={mockData} />)

        expect(screen.getByText('09:00')).toBeInTheDocument()
        expect(screen.getByText('12:00')).toBeInTheDocument()

        expect(screen.getByText('21°C')).toBeInTheDocument()
        expect(screen.getByText('25°C')).toBeInTheDocument()

        const svg = document.querySelector('svg')
        expect(svg).toBeInTheDocument()
    })
})
