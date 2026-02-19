import styled from 'styled-components'
import { GENERAL_COLORS } from '../../constants'
import { flex, size } from '../../mixins'

export const Overlay = styled.div`
    ${flex('column','center','center')}
    position: fixed;
    inset: 0;
    z-index: 11;
    backdrop-filter: blur(8px);
`

export const Popup = styled.div`
    ${flex('column','center','center')}
    ${size('100%','100%')}
    border-radius: .5rem;
    background: ${GENERAL_COLORS.white};
`

export const Header = styled.div`
    ${flex('row','center','space-between')}
    ${size('95%','3rem')}
    position: sticky;
    top: 0;
    z-index: 10;
    padding: 0 1rem;
    border-bottom: 2px solid rgba(0, 0, 0, 0.1);
`

export const Title = styled.h3`
    margin: 0;
    font-size: 1.1rem;
    color: ${GENERAL_COLORS.black};
`

export const CloseButton = styled.button`
    border: none;
    background: none;
    font-size: 1.4rem;
    font-weight: bold;
    cursor: pointer;
    line-height: 1;
`

export const ScrollContent = styled.div`
    flex: 1;
    overflow-y: auto;
    padding: 1rem;
`