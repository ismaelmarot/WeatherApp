import styled from 'styled-components'
import { flex } from '../../mixins/setFlex'
import { GeneralColors } from '../../constants'

export const Container = styled.div`
    margin-top: 1rem;
    padding: 1rem;
    background-color: ${GeneralColors.blue};
    border-radius: .5rem;
`

export const Item = styled.div`
    ${flex('row','center','space-between')} 
    padding: 8px 0;
    font-size: .8rem;
`