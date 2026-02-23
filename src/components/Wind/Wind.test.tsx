import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Wind } from './Wind'

vi.mock('..', () => ({
    WindCompass: ({ speed, degree }: { speed: number; degree: number }) => (
        <div data-testid="wind-compass">
        Speed: {speed} - Degree: {degree}
        </div>
    )
}))

describe('Wind component', () => {
    it('renders the title', () => {
        render(<Wind speed={10} degree={90} />)

        expect(screen.getByText('Wind')).toBeInTheDocument()
    })

    it('renders WindCompass component', () => {
        render(<Wind speed={15} degree={180} />)

        expect(screen.getByTestId('wind-compass')).toBeInTheDocument()
    })

    it('passes correct props to WindCompass', () => {
        render(<Wind speed={20} degree={270} />)

        expect(
        screen.getByText('Speed: 20 - Degree: 270')
        ).toBeInTheDocument()
    })
})