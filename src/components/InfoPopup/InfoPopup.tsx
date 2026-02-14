import type { InfoPopupProps } from '../../types'
import {
  Overlay,
  Popup,
  Header,
  CloseButton,
  ScrollContent,
  Title,
} from './InfoPopup.style'

export function InfoPopup({
    title,
    children,
    onClose
}: InfoPopupProps) {
    return (
        <Overlay>
            <Popup>
                <Header>
                    <Title>{title}</Title>
                    <CloseButton onClick={onClose} aria-label='Close popup'>
                        ✕
                    </CloseButton>
                </Header>
                <ScrollContent>
                    {children}
                </ScrollContent>
            </Popup>
        </Overlay>
    )
}
