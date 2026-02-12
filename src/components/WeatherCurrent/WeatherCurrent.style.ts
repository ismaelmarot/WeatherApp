import styled from 'styled-components'
import { flex, size } from '../../mixins'
import { GeneralColors } from '../../constants/GeneralColors'

export const Container = styled.div`
    ${flex('column','center','space-between')}
    ${size('100%','95dvh')}
`

export const TempIconContainer = styled.div`
    ${flex('column','flex-start','flex-start')}
    width: 100%;
    margin: 1rem;
`

export const Temp = styled.div`
    font-size: 12rem;
    font-weight: 500;
    line-height: 1;
    color: ${GeneralColors.white}
`

export const Location = styled.div`
    ${flex('column','center','center')}
    font-size: 1.5rem;
    color: ${GeneralColors.white};
`

export const Condition = styled.div`
    font-size: 2rem;
    color: ${GeneralColors.white};
`