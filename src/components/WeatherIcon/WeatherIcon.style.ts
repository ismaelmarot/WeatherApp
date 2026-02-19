import styled from 'styled-components'
import { GENERAL_COLORS } from '../../constants'

export const Icon = styled.i`
    font-size: 7rem;
    color: ${GENERAL_COLORS.white};
`

export const IconNotFound = styled.p`
    padding: .2rem .5rem;
    font-size: .5rem;
    font-weight: 800;
    border-radius: .3rem;
    background-color: red;
    color: ${GENERAL_COLORS.white};
`