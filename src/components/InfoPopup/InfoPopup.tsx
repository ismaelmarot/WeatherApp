import React from 'react'
import {
  Overlay,
  Popup,
  Header,
  CloseButton,
  ScrollContent,
  Title,
} from './InfoPopup.style'

type InfoPopupProps = {
  title: string
  children: React.ReactNode
  onClose: () => void
}

export function InfoPopup({ title, children, onClose }: InfoPopupProps) {
  return (
    <Overlay>
      <Popup>
        {/* HEADER FIJO */}
        <Header>
          <Title>{title}</Title>
          <CloseButton onClick={onClose} aria-label="Close popup">
            ✕
          </CloseButton>
        </Header>

        {/* UN SOLO SCROLL */}
        <ScrollContent>
          {children}
        </ScrollContent>
      </Popup>
    </Overlay>
  )
}
