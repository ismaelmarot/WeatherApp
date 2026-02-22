import { render, screen } from '@testing-library/react'
import { RainChance } from './RainChance'

describe('RainChance', () => {
    test('renders title and value', () => {
        render(<RainChance chance={45} />)

        expect(screen.getByText('Probability now')).toBeInTheDocument()
        expect(screen.getByText('45%')).toBeInTheDocument()
    })

    test('clamps chance between 0 and 100', () => {
        render(<RainChance chance={150} />)
        expect(screen.getByText('100%')).toBeInTheDocument()

        render(<RainChance chance={-20} />)
        expect(screen.getByText('0%')).toBeInTheDocument()
    })

    test('renders "Raining now" badge if isRainingNow is true', () => {
        render(<RainChance chance={60} isRainingNow={true} />)
        expect(screen.getByText('Raining now')).toBeInTheDocument()
    })

    test('does not render badge if isRainingNow is false', () => {
        render(<RainChance chance={60} isRainingNow={false} />)
        const badge = screen.queryByText('Raining now')
        expect(badge).toBeNull()
    })
})