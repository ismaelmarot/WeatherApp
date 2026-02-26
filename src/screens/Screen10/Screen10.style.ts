import styled from 'styled-components'
import { flex, size } from '../../mixins'

export const Container = styled.div`
    ${size('90%','100%')}
    border-radius: 30px;
`

export const MoonData = styled.div`
    ${flex('column','center','space-between')}    
    margin: 1rem 0;
    height: 40%;
`