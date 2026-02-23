import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { WindCompassSpeed } from './WindCompassSpeed'

describe('WindCompassSpeed component', () => {
    it('renders speed value', () => {
        render(
            <svg>
                <WindCompassSpeed center={130} speed={25} />
            </svg>
        )

        expect(screen.getByText('25')).toBeInTheDocument()
    })

    it('renders km/h label', () => {
        render(
            <svg>
                <WindCompassSpeed center={130} speed={10} />
            </svg>
        )

        expect(screen.getByText('km/h')).toBeInTheDocument()
    })

    it('sets correct coordinates for speed text', () => {
        const { container } = render(
            <svg>
                <WindCompassSpeed center={100} speed={30} />
            </svg>
        )

        const speedText = container.querySelector('text')
        expect(speedText?.getAttribute('x')).toBe('100')
        expect(speedText?.getAttribute('y')).toBe('110')
    })

    it('sets correct coordinates for km/h text', () => {
        const { container } = render(
            <svg>
                <WindCompassSpeed center={100} speed={30} />
            </svg>
        )

        const texts = container.querySelectorAll('text')
        const kmhText = texts[1]

        expect(kmhText.getAttribute('x')).toBe('100')
        expect(kmhText.getAttribute('y')).toBe('135')
    })
})