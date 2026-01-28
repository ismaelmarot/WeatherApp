import type { CoordinatesProps } from './Coordinates.type';

export type GeoStateProps = {
    loading: boolean;
    error: string | null;
    coords: CoordinatesProps | null;
};