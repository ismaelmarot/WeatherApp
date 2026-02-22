import { render, screen } from '@testing-library/react'
import { UvIndex } from './UvIndex'

describe('UvIndex', () => {
    test('renders label and value', () => {
        render(<UvIndex value={7} />)

        expect(screen.getByText('UV Index')).toBeInTheDocument()

        expect(screen.getByText('7')).toBeInTheDocument()
    })
})