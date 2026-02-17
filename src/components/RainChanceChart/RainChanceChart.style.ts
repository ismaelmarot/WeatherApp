import styled from 'styled-components'
import { flex, size } from '../../mixins'
import { GeneralColors, ICONS } from '../../constants'

export const Container = styled.div`
    ${size('100%','49%')}
    padding: 1rem;
    border-radius: .5rem;
    background-color: ${GeneralColors.grey};
`

export const Item = styled.div`
    ${flex('row','center','space-between')} 
    padding: .5rem 0;
    font-size: 1rem;
`

export const RainIcon = styled(ICONS.rain)`
    font-size: 1.5rem;
    margin-left: .5rem;
`