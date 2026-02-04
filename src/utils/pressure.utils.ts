import {
    PRESSURE_RADIUS,
    PRESSURE_MARKER_LENGTH,
    PRESSURE_MARKER_OVERSHOOT
} from '../constants';

export function getArrowCoordinates(percent: number) {
    const cx = 50;
    const cy = 50;
    const angleDeg = 90 + percent * 360;
    const angleRad = (angleDeg * Math.PI) / 180;

    const x1 = cx + Math.cos(angleRad) * (PRESSURE_RADIUS - PRESSURE_MARKER_LENGTH);
    const y1 = cy + Math.sin(angleRad) * (PRESSURE_RADIUS - PRESSURE_MARKER_LENGTH);
    const x2 = cx + Math.cos(angleRad) * (PRESSURE_RADIUS + PRESSURE_MARKER_OVERSHOOT);
    const y2 = cy + Math.sin(angleRad) * (PRESSURE_RADIUS + PRESSURE_MARKER_OVERSHOOT);

    return { x1, y1, x2, y2 };
}
