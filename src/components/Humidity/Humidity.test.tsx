import { render, screen } from '@testing-library/react'
import { Humidity } from './Humidity'

describe('Humidity', () => {
    it('renders the component', () => {
        render(<Humidity value={55} />)
        expect(screen.getByText('Humidity')).toBeInTheDocument()
    })

    it('displays the correct value', () => {
        render(<Humidity value={55} />)
        const value = screen.getByText((content) => content.includes('55'))
        expect(value).toBeInTheDocument()
    })
})
