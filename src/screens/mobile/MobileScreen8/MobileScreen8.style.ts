import styled from 'styled-components'
import { flex } from '../../../mixins'

const Element = styled.div`
    width: 100%;
    min-height: 0;
`

export const Container = styled.div`
    ${flex('column', 'center', 'space-between')}
    height: 100%;
    border: 2px dashed blue;
`

export const TopElement = styled(Element)`
    flex: 0 0 59%;
    border: 2px solid red;
`

export const BottomElement = styled(Element)`
    ${flex('column', 'center', 'center')}
    flex: 0 0 39%;
    border: 2px solid red;
`