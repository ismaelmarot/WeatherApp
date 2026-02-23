import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import { WindNeedle } from './WindNeedle'

describe('WindNeedle component', () => {
    it('applies correct rotation transform', () => {
        const { container } = render(
            <svg>
                <WindNeedle center={130} radius={105} rotation={90} />
            </svg>
        )

        const group = container.querySelector('g')

        expect(group?.getAttribute('transform'))
        .toBe('rotate(90 130 130)')
    })

    it('renders correct needle points', () => {
        const center = 100
        const radius = 80

        const { container } = render(
            <svg>
                <WindNeedle center={center} radius={radius} rotation={0} />
            </svg>
        )

        const polygon = container.querySelector('polygon')

        const expectedPoints = [
        `${center + radius - 6},${center}`,
        `${center + radius - 25},${center - 10}`,
        `${center + radius - 25},${center + 10}`
        ].join(' ')

        const receivedPoints = polygon
        ?.getAttribute('points')
        ?.replace(/\s+/g, ' ')
        .trim()

        expect(receivedPoints).toBe(expectedPoints)
    })

    it('renders correct needle line coordinates', () => {
        const center = 120
        const radius = 90

        const { container } = render(
            <svg>
                <WindNeedle center={center} radius={radius} rotation={0} />
            </svg>
        )

        const line = container.querySelector('line')

        expect(line?.getAttribute('x1')).toBe(String(center + 38))
        expect(line?.getAttribute('y1')).toBe(String(center))
        expect(line?.getAttribute('x2')).toBe(String(center + radius - 22))
        expect(line?.getAttribute('y2')).toBe(String(center))
    })
})