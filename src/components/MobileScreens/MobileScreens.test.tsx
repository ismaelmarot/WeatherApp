import { render, screen } from '@testing-library/react'
import { MobileScreens } from './MobileScreens'

describe('MobileScreens', () => {
    it('renders all screens', () => {
        render(<MobileScreens />)

        const screens = screen.getAllByText(/SCREEN \d/)
        expect(screens).toHaveLength(6)

        screens.forEach((screenEl, index) => {
        expect(screenEl).toHaveTextContent(`SCREEN ${index + 1}`)
        })
    })
})