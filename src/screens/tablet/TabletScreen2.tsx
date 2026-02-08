import { ScreenLayoutBase } from '../../layouts/ScreenLayoutBase'
import { PlaceholderBlock } from '../../components'

export function TabletScreen2() {
    return (
        <ScreenLayoutBase>
            <PlaceholderBlock label="💨 Viento" />
            <PlaceholderBlock label="📈 Presión" />
            <PlaceholderBlock label="🌕 Luna" />
            <PlaceholderBlock label="🌧️ Lluvia" />
        </ScreenLayoutBase>
    )
}
