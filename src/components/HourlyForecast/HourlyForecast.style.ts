import styled from 'styled-components'
import { flex } from '../../mixins/setFlex'
import { GeneralColors } from '../../constants'

export const Container = styled.div`
  ${flex('row','center','center')}
  gap: 1rem;
  overflow-x: auto;
  margin-top: 1.5rem;

  &::-webkit-scrollbar {
    display: none;
  }
`

export const HourItem = styled.div`
  ${flex('column','center','center')}
  min-width: 60px;
  padding-top: 0.75rem;
  text-align: center;
  border-radius: 5px;
  border: 2px solid ${GeneralColors.white};
`

export const Time = styled.div`
  font-size: 1rem;
  font-weight: 500;
`

export const Temp = styled.div`
  font-size: 1.5rem;
  font-weight: 500;
  margin-top: .25rem;
`

export const Rain = styled.div`
  font-size: .7rem;
  margin-top: .25rem;
`;

export const Icon = styled.img`
  width: 3.5rem;
  margin: .25rem auto;
`
