import styled from 'styled-components'
import { flex } from '../../mixins'
import { GeneralColors } from '../../constants/GeneralColors'
import { ICONS } from '../../constants'

export const Container = styled.div`
    ${flex('row','center','center')}
    font-size: 1rem;
    color: ${GeneralColors.white}
`;

export const LocationIcon = styled(ICONS.location)`
    font-size: 1.5rem;
    padding-right: .3rem;
`