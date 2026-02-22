import { render, screen } from '@testing-library/react'
import { DailyRainChart } from './DailyRainChart'

describe('DailyRainChart', () => {
  it('should render the chart title', () => {
    const hours = [
      { time: '2026-02-22 00:00', chance_of_rain: 20 },
      { time: '2026-02-22 01:00', chance_of_rain: 35 },
      { time: '2026-02-22 02:00', chance_of_rain: 50 },
    ]

    render(<DailyRainChart hours={hours} />)

    expect(screen.getByText('Rain – next 12 hours')).toBeInTheDocument()
  })

  it('should render null if hours is empty', () => {
    const { container } = render(<DailyRainChart hours={[]} />)
    expect(container.firstChild).toBeNull()
  })
})
