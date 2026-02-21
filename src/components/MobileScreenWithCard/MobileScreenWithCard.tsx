import { CardMobile, ScreenMobile } from './MobileScreenWithCard.style'

export function MobileScreenWithCard({ children }: { children: React.ReactNode }) {
    return (
        <ScreenMobile>
            <CardMobile>{children}</CardMobile>
        </ScreenMobile>
    )
}