import { render } from '@testing-library/react'
import { StatusDot } from './StatusDot'

describe('StatusDot', () => {
    test('renders and applies color', () => {
        const color = '#ff0000'
        const { container } = render(<StatusDot color={color} />)

        const dot = container.firstChild
        expect(dot).toBeInTheDocument()
        expect(dot).toHaveStyle(`background-color: ${color}`)
    })
})