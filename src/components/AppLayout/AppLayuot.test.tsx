import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { AppLayout } from './AppLayout'

// Mock del componente hijo
vi.mock('../BackgroundVideo', () => ({
  BackgroundVideo: () => <div data-testid="background-video" />
}))

describe('AppLayout', () => {
  it('should render BackgroundVideo', () => {
    render(
      <AppLayout>
        <div>Child content</div>
      </AppLayout>
    )

    expect(screen.getByTestId('background-video')).toBeInTheDocument()
  })

  it('should render children inside container', () => {
    render(
      <AppLayout>
        <div>Child content</div>
      </AppLayout>
    )

    expect(screen.getByText('Child content')).toBeInTheDocument()
  })
})
