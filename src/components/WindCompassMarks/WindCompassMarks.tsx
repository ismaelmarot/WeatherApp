import type { WindCompassMarksProps } from '../../types/WindCompassMarks.type';
import { Line } from './WindCompassMarks.style'; 

export function WindCompassMarks({ center, radius }: WindCompassMarksProps) {
    return (
        <>
        {[...Array(60)].map((_, i) => {
            const angle = (i * 6 * Math.PI) / 180;
            const isMajor = i % 5 === 0;
            const r1 = radius - (isMajor ? 10 : 5);
            const r2 = radius;

            return (
            <Line
                key={i}
                x1={center + r1 * Math.cos(angle)}
                y1={center + r1 * Math.sin(angle)}
                x2={center + r2 * Math.cos(angle)}
                y2={center + r2 * Math.sin(angle)}
                strokeWidth={isMajor ? 2 : 1}
            />
            );
        })}
        </>
    );
}
