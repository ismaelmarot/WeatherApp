import type { WindCompassSpeedProps } from '../../types'
import { KpHText, SpeedText } from './WindCompassSpeed.style'

export function WindCompassSpeed({ center, speed }: WindCompassSpeedProps) {
    return (
        <>
            <SpeedText
                x={center}
                y={center + 10}
            >
                {speed}
            </SpeedText>
            <KpHText
                x={center}
                y={center + 35}
            >
                km/h
            </KpHText>
        </>
    )
}