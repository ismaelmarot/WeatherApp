import { describe, it, expect, beforeEach, vi } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import { useDevice } from './useDevice.hook'

vi.mock('../constants', () => ({
    BREAKPOINTS: {
        mobileMax: 767,
        tabletMax: 1023,
    },
}))

function setWindowWidth(width: number) {
    Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: width,
    })
    window.dispatchEvent(new Event('resize'))
}

describe('useDevice', () => {
    beforeEach(() => {
        vi.restoreAllMocks()
    })

    it('returns mobile when width <= mobileMax', () => {
        setWindowWidth(500)

        const { result } = renderHook(() => useDevice())

        expect(result.current).toBe('mobile')
    })

    it('returns tablet when width <= tabletMax', () => {
        setWindowWidth(900)

        const { result } = renderHook(() => useDevice())

        expect(result.current).toBe('tablet')
    })

    it('returns desktop when width > tabletMax', () => {
        setWindowWidth(1300)

        const { result } = renderHook(() => useDevice())

        expect(result.current).toBe('desktop')
    })

    it('updates when resizing', () => {
        setWindowWidth(500)

        const { result } = renderHook(() => useDevice())
        expect(result.current).toBe('mobile')

        act(() => {
            setWindowWidth(1100)
        })

        expect(result.current).toBe('desktop')
    })
})