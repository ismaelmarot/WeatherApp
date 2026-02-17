import styled from 'styled-components'
import { ICONS } from '../../constants'
import type { StatusDotStyledProps } from '../../types'

export const StatusDotStyled = styled(ICONS.circle)<StatusDotStyledProps>`
    color: ${ ({ $color }) => $color }
`