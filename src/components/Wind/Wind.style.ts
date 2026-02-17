import styled from 'styled-components'
import { flex } from '../../mixins'
import { GeneralColors } from '../../constants'

export const Container = styled.div`
    ${flex('column','center','flex-start')}
    height: 100%;
    padding-top: 2rem;
    border-radius: .5rem;
    background-color: ${GeneralColors.grey};
`

export const H3 = styled.h3`
    font-size: 3rem;
    font-weight: 600;
    color: ${GeneralColors.white}

`