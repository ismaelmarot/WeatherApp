import styled from 'styled-components'
import { flex, size } from '../../mixins'
import { GENERAL_COLORS } from '../../constants'

export const ScreenMobile = styled.div`
    ${flex('column','center','center')}
    ${size('100vw','100dvh')}  
    position: relative;
    scroll-snap-align: start;
    box-sizing: border-box;
    padding: 1rem 0.5rem;
    overflow: hidden;
`

export const CardMobile = styled.div`
     ${flex('column','center','center')}
    width: 90%;
    min-height: 100%;
    box-sizing: border-box;
    border-radius: 30px;
    background-color: ${GENERAL_COLORS.BlackGlass};
    box-shadow: 0 4px 16px ${GENERAL_COLORS.black};
`;