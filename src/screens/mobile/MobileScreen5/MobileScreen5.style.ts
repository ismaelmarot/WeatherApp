import styled from 'styled-components'
import { BREAKPOINTS } from '../../../constants'

export const Container = styled.div`
    height: 37rem;
    @media (min-width: ${BREAKPOINTS.tablet}) {
        width: 95%;
    }
`