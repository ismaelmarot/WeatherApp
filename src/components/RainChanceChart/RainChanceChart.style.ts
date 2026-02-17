import styled from 'styled-components'
import { flex } from '../../mixins/setFlex'
import { GeneralColors, ICONS } from '../../constants'

export const Container = styled.div`
    padding: 1rem;
    background-color: ${GeneralColors.grey};
    border-radius: .5rem;
    width: 100%;
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