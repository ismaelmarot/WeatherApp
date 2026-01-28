import type { WindNeedleProps } from '../../types/WindNeedle.type';
import { Needle, NeedleLine } from './WindNeedle.style';

export function WindNeedle({ center, radius, rotation }: WindNeedleProps) {
  return (
    <g transform={`rotate(${rotation} ${center} ${center})`}>
      <Needle
        points={`
          ${center + radius - 6},${center}
          ${center + radius - 25},${center - 10}
          ${center + radius - 25},${center + 10}
        `}
      />
      <NeedleLine
        x1={center + 38}
        y1={center}
        x2={center + radius - 22}
        y2={center}
      />
    </g>
  );
}
