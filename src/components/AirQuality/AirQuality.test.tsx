import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { AirQuality } from './AirQuality'
import { AIR_QUALITY_ITEMS } from '../../config'

vi.mock('..', () => ({
  PollutantGauge: (props: any) => (
    <div data-testid="pollutant-gauge">
      {props.label}
    </div>
  )
}))

describe('AirQuality', () => {

  const mockProps = {
    epaIndex: 2,
    co: 50,
    no2: 30,
    o3: 40,
    so2: 60,
    pm25: 10,
    pm10: 20
  }

  it('should render title', () => {
    render(<AirQuality {...mockProps} />)

    expect(screen.getByText('Air Quality')).toBeInTheDocument()
  })

  it('should render one PollutantGauge per AIR_QUALITY_ITEMS', () => {
    render(<AirQuality {...mockProps} />)

    const gauges = screen.getAllByTestId('pollutant-gauge')

    expect(gauges.length).toBe(AIR_QUALITY_ITEMS.length)
  })

})
