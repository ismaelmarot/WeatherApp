import styled from 'styled-components'
import { flex, size } from '../../../mixins'
import { GENERAL_COLORS } from '../../../constants'

export const Container = styled.div`
    ${flex('column','center','center')}
    ${size('100%','100%')}
    border-radius: 1rem;
    background-color: ${GENERAL_COLORS.black};
`