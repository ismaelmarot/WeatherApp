import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import type { HourForecastProps } from '../../types'
import { HourlyForecast } from './HourlyForecast'

const mockHours: HourForecastProps[] = [
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

describe('HourlyForecast', () => {
  it('renders hourly items when hours data is provided', () => {
    render(<HourlyForecast hours={mockHours} />)

    // Verify text "Now"
    expect(screen.getByText('Now')).toBeInTheDocument()

    // Verify temperature
    expect(screen.getByText(/21\s*°/)).toBeInTheDocument()
    expect(screen.getByText(/25\s*°/)).toBeInTheDocument()

    // Verify rain average
    expect(screen.getByText('30%')).toBeInTheDocument()

    // Verify Icons
    const images = screen.getAllByRole('img')
    expect(images.length).toBe(mockHours.length)
    expect(images[0]).toHaveAttribute('src', '/icons/sunny.png')
  })

  it('renders empty container if no hours', () => {
    const { container } = render(<HourlyForecast hours={[]} />)
    const wrapper = container.firstChild
    expect(wrapper).toBeInTheDocument()
    expect(wrapper?.childNodes.length).toBe(0)
  })
})