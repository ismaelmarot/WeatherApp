import type { CoordinatesInfoProps } from '../../types'
import { Container } from './CoordinatesInfo.style'

export function CoordinatesInfo({
    latitude,
    longitude,
}: CoordinatesInfoProps) {
    return (
        <Container>
            📍 Lat: {latitude.toFixed(2)} – Lon: {longitude.toFixed(2)}
        </Container>
    )
}
