import styled from 'styled-components'
import { GeneralColors } from '../../constants'
import { flex } from '../../mixins'

export const Container = styled.div`
  ${flex('column','center','center')}
  margin-top: 2rem;
  background: ${GeneralColors.grey};
  padding: 1rem;
  border-radius: .75rem;
`

export const Title = styled.h3`
  color: ${GeneralColors.black};
  margin-bottom: 1rem;
`

export const Pollutants = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex-wrap: wrap;
  width: 100%;
`
