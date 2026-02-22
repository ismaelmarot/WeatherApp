import { render, screen } from '@testing-library/react'
import type { LunarDayProps } from '../../types'
import { LunarCalendar } from './LunarCalendar'

const mockDays: LunarDayProps[] = [
    { date: '2026-02-21', moon_phase: 'full', moon_illumination: '100' },
    { date: '2026-02-22', moon_phase: 'new', moon_illumination: '0' },
]


test('renders lunar days with correct illumination', () => {
    render(<LunarCalendar days={mockDays} />)

    const illuminations = screen.getAllByTestId('moon-illumination')
    expect(illuminations[0]).toHaveTextContent('100%')
    expect(illuminations[1]).toHaveTextContent('0%')

    const images = screen.getAllByTestId('moon-image')
    expect(images[0]).toHaveAttribute('alt', 'full')
    expect(images[1]).toHaveAttribute('alt', 'new')
})