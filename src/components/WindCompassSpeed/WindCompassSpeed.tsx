import type { WindCompassSpeedProps } from '../../types/WindCompassSpeed.type';
import { KpHText, SpeedText } from './WindCompassSpeed.style';

export function WindCompassSpeed({ center, speed }: WindCompassSpeedProps) {
    return (
        <>
        <SpeedText x={center} y={center + 5}>{speed}</SpeedText>
        <KpHText x={center} y={center + 18}>km/h</KpHText>
        </>
    );
}
