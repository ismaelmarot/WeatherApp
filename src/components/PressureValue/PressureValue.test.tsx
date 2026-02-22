import { render, screen } from '@testing-library/react'
import { PressureValue } from './PressureValue'

describe('PressureValue', () => {
    test('renders label, value and unit', () => {
        render(<PressureValue value={1013} />)

        expect(screen.getByText('Pressure')).toBeInTheDocument()

        expect(screen.getByText('1013')).toBeInTheDocument()

        expect(screen.getByText('mb')).toBeInTheDocument()
    })
})