import styled from 'styled-components'
import { flex } from '../../mixins'
import { GENERAL_COLORS } from '../../constants'
import { ICONS } from '../../constants'

export const Container = styled.div`
    ${flex('row','center','center')}
    font-size: 1rem;
    color: ${GENERAL_COLORS.white}
`;

export const LocationIcon = styled(ICONS.location)`
    font-size: 1.5rem;
    padding-right: .3rem;
`