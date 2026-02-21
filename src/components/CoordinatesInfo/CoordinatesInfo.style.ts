import styled from 'styled-components'
import { flex } from '../../mixins'
import { ICONS } from '../../constants'
import { GENERAL_COLORS } from '../../constants'

export const Container = styled.div`
    ${flex('row','center','center')}
    font-size: 1rem;
    opacity: .6;
    color: ${GENERAL_COLORS.white}
`;

export const LocationIcon = styled(ICONS.location)`
    font-size: 1.3rem;
    padding-right: .3rem;
`