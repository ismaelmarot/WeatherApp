import styled from 'styled-components'
import { flex, size } from '../../mixins'
import { GeneralColors } from '../../constants/GeneralColors'

export const Container = styled.section`
    ${flex('column','center','center')}
    border-radius: 12px;
    background: ${GeneralColors.grey};
`

export const H3 = styled.h3`
    margin-top: auto.5rem;
    padding: .3rem;
    margin-right: 1rem;
    font-size: 1rem;
    color: ${GeneralColors.black};
`

export const Chart = styled.div`
    ${size('100%','16rem')}
    margin: .5rem;
    font-size: .8rem;
`