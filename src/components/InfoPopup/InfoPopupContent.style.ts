import styled from 'styled-components'
import { flex, size } from '../../mixins'

type UVINumberProps = {
    $bgColor: string
}

export const UVINumber = styled.div<UVINumberProps>`
    ${flex('column','center','center')}
    ${size('2rem','2rem')}
    font-size: 1.5rem;
    border-radius: 5px;
    color: white;
    background-color: ${({ $bgColor }) =>  $bgColor}
`