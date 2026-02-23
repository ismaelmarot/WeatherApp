import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { WindCompass } from './WindCompass'
import { CARDINALS } from '../../constants'

vi.mock('..', () => ({
    WindCompassMarks: () => <g data-testid="marks" />,
    WindCompassSpeed: ({ speed }: { speed: number }) => (
        <text data-testid="speed">Speed: {speed}</text>
    ),
    WindNeedle: ({ rotation }: { rotation: number }) => (
        <g data-testid="needle">Rotation: {rotation}</g>
    )
}))

describe('WindCompass component', () => {
    it('renders svg element', () => {
        render(<WindCompass speed={10} degree={0} />)

        const svg = document.querySelector('svg')
        expect(svg).toBeInTheDocument()
    })

    it('renders all cardinal directions', () => {
        render(<WindCompass speed={10} degree={0} />)

        CARDINALS.forEach(({ label }) => {
        expect(screen.getByText(label)).toBeInTheDocument()
        })
    })

    it('passes speed correctly to WindCompassSpeed', () => {
        render(<WindCompass speed={25} degree={0} />)

        expect(screen.getByText('Speed: 25')).toBeInTheDocument()
    })

    it('calculates rotation correctly and passes to WindNeedle', () => {
        render(<WindCompass speed={10} degree={180} />)

        expect(screen.getByText('Rotation: 270')).toBeInTheDocument()
    })

    it('renders marks component', () => {
        render(<WindCompass speed={10} degree={0} />)

        expect(screen.getByTestId('marks')).toBeInTheDocument()
    })
})