import { render, screen } from '@testing-library/react'
import { RainChanceChart } from './RainChanceChart'

describe('RainChanceChart', () => {
    const sampleHours = [
        { time: '2026-02-22 09:00', temp_c: 22.4, chance_of_rain: 30 },
        { time: '2026-02-22 12:00', temp_c: 25.1, chance_of_rain: 50 },
        { time: '2026-02-22 15:00', temp_c: 23.8, chance_of_rain: 70 },
    ]

    test('renders header', () => {
        render(<RainChanceChart hours={sampleHours} />)
        expect(screen.getByText('Rain Chance')).toBeInTheDocument()
    })

    test('renders all hour items', () => {
        render(<RainChanceChart hours={sampleHours} />)

        sampleHours.forEach(h => {
        const hourLabel = h.time.split(' ')[1].slice(0, 5)
        expect(screen.getByText(hourLabel)).toBeInTheDocument()
        expect(screen.getByText(`${Math.round(h.temp_c ?? 0)}°C`)).toBeInTheDocument()
        expect(screen.getByText(`${h.chance_of_rain ?? 0}%`)).toBeInTheDocument()
        })
    })

    test('renders RainIcon for each item', () => {
        render(<RainChanceChart hours={sampleHours} />)
        const icons = document.querySelectorAll('svg')
        expect(icons.length).toBeGreaterThanOrEqual(sampleHours.length)
    })
})