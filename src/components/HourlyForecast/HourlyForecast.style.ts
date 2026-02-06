import styled from 'styled-components'
import { flex } from '../../mixins/setFlex'
import { GeneralColors } from '../../constants'

export const Container = styled.div`
  display: flex;
  gap: 1rem;
  overflow-x: auto;
  margin-top: 1.5rem;
  padding-bottom: 0.5rem;

  &::-webkit-scrollbar {
    display: none;
  }
`

export const HourItem = styled.div`
  ${flex('column','center','space-between')}
  min-width: 64px;
  padding: 0.75rem;
  border-radius: .5rem;
  text-align: center;
  background: ${GeneralColors.blue};
`

export const Time = styled.div`
  font-size: .8rem;
  font-weight: 600;
`

export const Temp = styled.div`
  font-size: 1rem;
  font-weight: 500;
  margin-top: .25rem;
`

export const Rain = styled.div`
  font-size: .7rem;
  margin-top: .25rem;
`;

export const Icon = styled.img`
  width: 2rem;
  margin: .25rem auto;
`
