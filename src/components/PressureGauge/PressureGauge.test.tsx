import { render, screen } from '@testing-library/react'
import { PressureGauge } from './PressureGauge'
import { PRESSURE_MIN, PRESSURE_MAX } from '../../constants'

describe('PressureGauge', () => {
    test('renders the SVG and circles', () => {
        render(<PressureGauge value={1013} />)

        const svg = document.querySelector('svg')
        expect(svg).toBeInTheDocument()

        expect(screen.getByText('1013')).toBeInTheDocument()

        expect(screen.getByText('hPa')).toBeInTheDocument()
    })

    test('clamps value to min and max', () => {
        render(<PressureGauge value={PRESSURE_MAX + 100} />)
        expect(screen.getByText(String(PRESSURE_MAX))).toBeInTheDocument()

        render(<PressureGauge value={PRESSURE_MIN - 50} />)
        expect(screen.getByText(String(PRESSURE_MIN))).toBeInTheDocument()
    })

    test('renders marker arrow', () => {
        render(<PressureGauge value={1013} />)
        const line = document.querySelector('line')
        expect(line).toBeInTheDocument()
        expect(line?.getAttribute('stroke')).toBeDefined()
    })

    test('renders filled circle with strokeDashoffset', () => {
        render(<PressureGauge value={1013} />)
        const circles = document.querySelectorAll('circle')
        expect(circles.length).toBeGreaterThanOrEqual(2)

        const fillCircle = circles[1]
        expect(fillCircle.getAttribute('strokeDashoffset')).toBeDefined()
    })
})