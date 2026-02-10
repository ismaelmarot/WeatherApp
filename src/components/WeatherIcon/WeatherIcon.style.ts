import styled from 'styled-components'
import { GeneralColors } from '../../constants'

export const Icon = styled.img`
    background-color: ${GeneralColors.white}
`

export const IconNotFound = styled.p`
    font-size: .5rem;
    border: 2px solid red;
    border-radius: .3rem;
    padding: .2rem .5rem;
    background-color: red;
    font-weight: 800;
    color: ${GeneralColors.white}
`