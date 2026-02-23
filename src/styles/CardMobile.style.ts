import styled from 'styled-components'
import { flex } from '../mixins'
import { GENERAL_COLORS } from '../constants'

export const CardMobile = styled.div`
     ${flex('column','center','center')}
    width: 90%;
    max-height: 100%;
    box-sizing: border-box;
    border-radius: 30px;
    opacity: 0.5;
    background-color: ${GENERAL_COLORS.black};
    box-shadow: 0 4px 16px ${GENERAL_COLORS.black};
`;