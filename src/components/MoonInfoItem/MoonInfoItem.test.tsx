import { render, screen } from '@testing-library/react'
import { MoonInfoItem } from './MoonInfoItem'

describe('MoonInfoItem', () => {
    it('renders the label', () => {
        render(<MoonInfoItem label="Illumination" value="55 %" item="%" />)
        expect(screen.getByText('Illumination')).toBeInTheDocument()
    })

    it('renders the numeric value and item correctly', () => {
        render(<MoonInfoItem label="Illumination" value="55 %" item="%" />)

        const number = screen.getByText('55')
        expect(number).toBeInTheDocument()

        const unit = screen.getByText('%')
        expect(unit.tagName).toBe('STRONG')
    })

    it('handles value without space before unit', () => {
        render(<MoonInfoItem label="Distance" value="21km" item="km" />)
        expect(screen.getByText('21')).toBeInTheDocument()
        expect(screen.getByText('km').tagName).toBe('STRONG')
    })
})