import { useEffect, useState } from 'react'
import type { DeviceProps } from '../types'
import { BREAKPOINTS } from '../constants'

export function useDevice(): DeviceProps {
    const getDevice = (): DeviceProps => {
        const width = window.innerWidth

        if (width <= BREAKPOINTS.mobileMax) return 'mobile'
        if (width <= BREAKPOINTS.tabletMax) return 'tablet'
        return 'desktop'
    }

    const [device, setDevice] = useState<DeviceProps>(getDevice)

    useEffect(() => {
        const onResize = () => {
        setDevice(getDevice())
        };

        window.addEventListener('resize', onResize)
        return () => window.removeEventListener('resize', onResize)
    }, [])

    return device
}