import { render, screen } from '@testing-library/react'
import { PollutantGauge } from './PollutantGauge'

describe('PollutantGauge', () => {
    const defaultProps = {
        label: 'PM2.5',
        aqi: 120,
        description: 'Contaminante principal',
        aqiStatus: 'Moderado',
        value: 35.5,
        unit: 'µg/m³'
    }

    test('renders the SVG and background circle', () => {
        render(<PollutantGauge {...defaultProps} />)
        
        const svg = document.querySelector('svg')
        expect(svg).toBeInTheDocument()

        expect(screen.getByText('120')).toBeInTheDocument()
    })

    test('renders label and description', () => {
        render(<PollutantGauge {...defaultProps} />)
        expect(screen.getByText('PM2.5')).toBeInTheDocument()
        expect(screen.getByText('Contaminante principal')).toBeInTheDocument()
    })

    test('renders value with unit and status', () => {
        render(<PollutantGauge {...defaultProps} />)
        expect(screen.getByText('35.50 µg/m³')).toBeInTheDocument()
        expect(screen.getByText('Moderado')).toBeInTheDocument()
    })

    test('clamps AQI between 0 and 500', () => {
        render(<PollutantGauge {...defaultProps} aqi={600} />)
        expect(screen.getByText('500')).toBeInTheDocument()

        render(<PollutantGauge {...defaultProps} aqi={-50} />)
        expect(screen.getByText('0')).toBeInTheDocument()
    })
})