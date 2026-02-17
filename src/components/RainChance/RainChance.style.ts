import styled from 'styled-components'
import { flex, size } from '../../mixins'
import { GeneralColors } from '../../constants'

export const Container = styled.div`
  ${flex('column','center','center')}
  ${size('100%','50%')}
  height: 49%;
  border-radius: 1rem;
  background-color: ${GeneralColors.grey};
`

export const Title = styled.h4`
  font-size: 1rem;
  margin-bottom: 1rem;
`

export const Bar = styled.div`
  ${size('40px','140px')}
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  border: 1px solid ${GeneralColors.blue};
  background: ${GeneralColors.grey};
`

export const Fill = styled.div<{ value: number }>`
position: absolute;
width: 100%;
bottom: 0;
  border-radius: 5px;
  height: ${({ value }) => value}%;
  background: linear-gradient(
    to top,
    rgba(3, 35, 103, 1),
    rgba(169, 206, 250, 1)
  );
  transition: height 0.4s ease;
`

export const Value = styled.span`
  font-size: 1.2rem;
  font-weight: 600;
`

export const Badge = styled.span`
  font-size: 1rem;
  padding: .5rem 1rem;
  border-radius: 999px;
  color: ${GeneralColors.white};
  background: ${GeneralColors.blue};
`
