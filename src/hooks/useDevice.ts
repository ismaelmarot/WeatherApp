import { useEffect, useState } from 'react';
import { BREAKPOINTS } from '../constants'

type Device = 'mobile' | 'tablet' | 'desktop' //SACAR ESTO A TYPES

export function useDevice(): Device {
    const getDevice = (): Device => {
        const width = window.innerWidth;

        if (width <= BREAKPOINTS.mobileMax) return 'mobile';
        if (width <= BREAKPOINTS.tabletMax) return 'tablet';
        return 'desktop';
    };

    const [device, setDevice] = useState<Device>(getDevice);

    useEffect(() => {
        const onResize = () => {
        setDevice(getDevice());
        };

        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, []);

    return device;
}
