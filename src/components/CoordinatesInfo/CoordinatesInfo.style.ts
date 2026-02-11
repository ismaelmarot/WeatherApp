import styled from 'styled-components'
import { flex } from '../../mixins'
import { GeneralColors } from '../../constants/GeneralColors'
import { CiLocationOn } from 'react-icons/ci'

export const Container = styled.div`
    ${flex('row','center','center')}
    font-size: 1rem;
    color: ${GeneralColors.white}
`;

export const LocationIcon = styled(CiLocationOn)`
    font-size: 1.5rem;
    padding-right: .3rem;
`