import { render, screen } from '@testing-library/react'
import { ScreenContainer } from './ScreenContainer'

describe('ScreenContainer', () => {
    test('renders children', () => {
        render(
            <ScreenContainer>
                <div>Test Child</div>
            </ScreenContainer>
        )

        expect(screen.getByText('Test Child')).toBeInTheDocument()
    })
})