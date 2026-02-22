import { render, screen } from '@testing-library/react'
import { CoordinatesInfo } from './CoordinatesInfo'

describe('CoordinatesInfo', () => {
  it('should render the coordinates correctly', () => {
    const latitude = -34.91
    const longitude = -57.97

    render(<CoordinatesInfo latitude={latitude} longitude={longitude} />)

    const text = screen.getByText(/Lat: -34\.91 – Lon: -57\.97/)
    expect(text).toBeInTheDocument()
  })

  it('should render the LocationIcon', () => {
    render(<CoordinatesInfo latitude={0} longitude={0} />)

    const icon = screen.getByTestId('location-icon')
    expect(icon).toBeInTheDocument()
  })
})