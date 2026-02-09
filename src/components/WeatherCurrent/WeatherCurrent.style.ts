import styled from 'styled-components'
import { flex, size } from '../../mixins'
import { GeneralColors } from '../../constants/GeneralColors'

export const Container = styled.div`
    ${flex('column','center','space-between')}
    ${size('100%','100%')}
`

export const TempIconContainer = styled.div`
    ${flex('column','flex-start','flex-start')}
    width: 100%;
    padding-left: 1rem;
`

export const Temp = styled.div`
    font-size: 12rem;
    font-weight: 600;
    line-height: 1;
`

export const Icon = styled.img`
    display: block;
    ${size('6rem','6rem')}
    border: 2px solid blue;
`

export const Condition = styled.div`
    font-size: 2rem;
    color: ${GeneralColors.white};
`

export const Location = styled.div`
    font-size: 2rem;
    color: ${GeneralColors.white};
`