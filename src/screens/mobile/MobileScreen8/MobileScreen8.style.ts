import styled from 'styled-components'
import { flex, size } from '../../../mixins'

const Element = styled.div`
    width: 100%;
    min-height: 0;
`

export const Container = styled.div`
    ${flex('column', 'center', 'space-between')}
    ${size('90%','100%')}
    min-height: 0;
`

export const TopElement = styled(Element)`
    flex: 0 0 50%;
`

export const BottomElement = styled(Element)`
    ${flex('column', 'center', 'center')}
    flex: 0 0 50%;
`