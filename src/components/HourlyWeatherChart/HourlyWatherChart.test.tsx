import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import type { HourForecastProps } from '../../types'
import { HourlyWeatherChart } from './HourlyWeatherChart'

vi.mock('recharts', () => ({
  ResponsiveContainer: ({ children }: any) => <div>{children}</div>,
  AreaChart: ({ children }: any) => (
    <div data-testid="area-chart">{children}</div>
  ),
  Area: () => <div data-testid="area" />,
  XAxis: () => <div data-testid="x-axis" />,
  YAxis: () => <div data-testid="y-axis" />,
  Tooltip: () => <div data-testid="tooltip" />,
}))

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

  it('renders chart structure when data is provided', () => {
    render(<HourlyWeatherChart data={mockData} />)

    expect(
      screen.getByText('Temperature – next 12 hours')
    ).toBeInTheDocument()

    expect(screen.getByTestId('area-chart')).toBeInTheDocument()

    expect(screen.getByTestId('x-axis')).toBeInTheDocument()
    expect(screen.getByTestId('y-axis')).toBeInTheDocument()
    expect(screen.getByTestId('area')).toBeInTheDocument()
  })
})