import styled from 'styled-components'
import { GeneralColors } from '../../constants'
import { flex } from '../../mixins'

export const Container = styled.div`
  ${flex('column','center','center')}
  background: ${GeneralColors.grey};
`

export const Title = styled.h3`
  color: ${GeneralColors.black};
`

export const Pollutants = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex-wrap: wrap;
  width: 100%;
`
