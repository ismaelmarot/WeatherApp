import { render, screen } from '@testing-library/react'
import { vi } from 'vitest'
import { BackgroundVideo } from './BackgroundVideo'

describe('BackgroundVideo', () => {
  // Mock global de HTMLVideoElement.play
  beforeAll(() => {
    // @ts-ignore
    HTMLVideoElement.prototype.play = vi.fn().mockResolvedValue(undefined)
  })

  it('should render a video element', () => {
    render(<BackgroundVideo />)

    const video = screen.getByTestId('background-video')

    expect(video).toBeInTheDocument()
    expect(video).toHaveAttribute('autoplay')
    expect(video).toHaveAttribute('loop')
    expect(video).toHaveAttribute('playsinline')
  })

  it('should call play on mount', () => {
    render(<BackgroundVideo />)

    // @ts-ignore
    expect(HTMLVideoElement.prototype.play).toHaveBeenCalled()
  })
})
