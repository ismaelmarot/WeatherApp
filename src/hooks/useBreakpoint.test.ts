import { describe, it, expect, beforeEach, vi } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import { useBreakpoint } from './useBreakpoint.hook'

function setWindowWidth(width: number) {
    Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: width,
    })
    window.dispatchEvent(new Event('resize'))
}

describe('useBreakpoint', () => {
    beforeEach(() => {
        vi.restoreAllMocks()
    })

    it('returns mobile when width < 768', () => {
        setWindowWidth(500)

        const { result } = renderHook(() => useBreakpoint())

        expect(result.current).toBe('mobile')
    })

    it('returns tablet when width >= 768', () => {
        setWindowWidth(800)

        const { result } = renderHook(() => useBreakpoint())

        expect(result.current).toBe('tablet')
    })

    it('returns desktop when width >= 1024', () => {
        setWindowWidth(1200)

        const { result } = renderHook(() => useBreakpoint())

        expect(result.current).toBe('desktop')
    })

    it('updates when window resizes', () => {
        setWindowWidth(500)

        const { result } = renderHook(() => useBreakpoint())
        expect(result.current).toBe('mobile')

        act(() => {
        setWindowWidth(1100)
        })

        expect(result.current).toBe('desktop')
    })
})