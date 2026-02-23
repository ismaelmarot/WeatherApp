import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import { WindCompassMarks } from './WindCompassMarks'

describe('WindCompassMarks component', () => {
    it('renders 60 marks', () => {
        const { container } = render(
            <svg>
                <WindCompassMarks center={130} radius={105} />
            </svg>
        )

        const lines = container.querySelectorAll('line')
        expect(lines.length).toBe(60)
    })

    it('renders 12 major marks (every 5)', () => {
        const { container } = render(
            <svg>
                <WindCompassMarks center={130} radius={105} />
            </svg>
        )

        const lines = container.querySelectorAll('line')

        const majorMarks = Array.from(lines).filter(
            (line) => line.getAttribute('stroke-width') === '2'
        )

        expect(majorMarks.length).toBe(12)
    })

    it('renders 48 minor marks', () => {
        const { container } = render(
            <svg>
                <WindCompassMarks center={130} radius={105} />
            </svg>
        )

        const lines = container.querySelectorAll('line')

        const minorMarks = Array.from(lines).filter(
            (line) => line.getAttribute('stroke-width') === '1'
        )

        expect(minorMarks.length).toBe(48)
    })
})