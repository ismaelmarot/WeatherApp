import { ScreenLayoutGlass } from '../../layouts'
import { PlaceholderBlock } from '../../components'

export function TabletScreen2() {
    return (
        <ScreenLayoutGlass>
            <PlaceholderBlock label="💨 Viento" />
            <PlaceholderBlock label="📈 Presión" />
            <PlaceholderBlock label="🌕 Luna" />
            <PlaceholderBlock label="🌧️ Lluvia" />
        </ScreenLayoutGlass>
    )
}
