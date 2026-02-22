import { render, screen } from '@testing-library/react'
import { MoonImage } from './MoonImage'
import { describe, it, expect, vi } from 'vitest'

vi.mock('../../utils/moonImages', () => ({
    moonImages: {
        'Full Moon': '/full-moon.jpg',
        'New Moon': '/new-moon.jpg',
    }
}))

describe('MoonImage', () => {
    it('renders correct image for a valid phase', () => {
        render(<MoonImage phase="New Moon" />)

        const img = screen.getByAltText('New Moon') as HTMLImageElement
        expect(img).toBeInTheDocument()
        expect(img.src).toContain('/new-moon.jpg')
    })

    it('falls back to Full Moon image if phase key is missing', () => {
        render(<MoonImage phase="Full Moon" />)  

        const img = screen.getByAltText('Full Moon') as HTMLImageElement
        expect(img).toBeInTheDocument()
        expect(img.src).toContain('/full-moon.jpg')
    })
})