import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import { WindItem } from './WindItem'

const windRotationMock = vi.fn()

vi.mock('../../utils', () => ({
    windRotation: (dir: string) => windRotationMock(dir)
}))

vi.mock('./WindItem.style', async (importOriginal) => {
    const actual = await importOriginal<any>()

    return {
        ...actual,
        WindArrowIcon: ({ $rotation }: { $rotation: number }) => (
         <div data-testid="wind-arrow">Rotation: {$rotation}</div>
        )
    }
})

describe('WindItem component', () => {
    beforeEach(() => {
        windRotationMock.mockClear()
    })

    it('renders label', () => {
        windRotationMock.mockReturnValue(90)

        render(<WindItem windKph={20} windDir="E" />)

        expect(screen.getByText('Wind')).toBeInTheDocument()
    })

    it('renders wind speed and unit', () => {
        windRotationMock.mockReturnValue(90)

        render(<WindItem windKph={25} windDir="E" />)

        expect(screen.getByText('25')).toBeInTheDocument()
        expect(screen.getByText('km/h')).toBeInTheDocument()
    })

    it('calls windRotation with provided direction', () => {
        windRotationMock.mockReturnValue(180)

        render(<WindItem windKph={10} windDir="S" />)

        expect(windRotationMock).toHaveBeenCalledWith('S')
    })

    it('uses fallback "N" when windDir is undefined', () => {
        windRotationMock.mockReturnValue(0)

        render(<WindItem windKph={15} windDir={undefined} />)

        expect(windRotationMock).toHaveBeenCalledWith('N')
    })

    it('passes rotation to WindArrowIcon', () => {
        windRotationMock.mockReturnValue(270)

        render(<WindItem windKph={30} windDir="W" />)

        expect(screen.getByText('Rotation: 270')).toBeInTheDocument()
    })
})