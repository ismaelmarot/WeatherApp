import styled from 'styled-components'
import { flex } from '../../../mixins'

const Element = styled.div`
  width: 100%;
  min-height: 0;
`

export const Container = styled.div`
  ${flex('column', 'stretch', 'stretch')}
  height: 100%;
`

export const TopElement = styled(Element)`
  flex: 0 0 60%;
`

export const BottomElement = styled(Element)`
  flex: 0 0 40%;
`
