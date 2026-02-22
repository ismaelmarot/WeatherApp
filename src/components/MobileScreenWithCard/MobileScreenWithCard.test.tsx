import { render, screen } from '@testing-library/react'
import { MobileScreenWithCard } from './MobileScreenWithCard'

describe('MobileScreenWithCard', () => {
    it('renders children inside the card', () => {
        render(
        <MobileScreenWithCard>
            <p>Test content</p>
        </MobileScreenWithCard>
        )

        expect(screen.getByText('Test content')).toBeInTheDocument()
    })
})