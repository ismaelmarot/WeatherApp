import styled from 'styled-components'
import { flex, size } from '../../mixins'
import { GeneralColors } from '../../constants/GeneralColors'

export const Container = styled.section`
    ${flex('column','center','center')}
    margin-top: 2rem;
    padding: 1rem;
    border-radius: 12px;
    background: ${GeneralColors.grey};
`

export const H3 = styled.h3`
    font-size: 1.5rem;
    color: ${GeneralColors.black}
`

export const Chart = styled.div`
    ${size('100%','16rem')}
    margin-top: 1rem;
`