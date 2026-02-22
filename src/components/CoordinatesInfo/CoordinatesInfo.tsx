import type { CoordinatesInfoProps } from '../../types'
import { Container, LocationIcon } from './CoordinatesInfo.style'

export function CoordinatesInfo({
    latitude,
    longitude,
}: CoordinatesInfoProps) {
    return (
        <Container>
            <LocationIcon data-testid='location-icon' />
            Lat: {latitude.toFixed(2)} – Lon: {longitude.toFixed(2)}
        </Container>
    )
}
