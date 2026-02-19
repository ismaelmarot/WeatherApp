import styled from 'styled-components';
import { GENERAL_COLORS } from '../../constants'
import { flex } from '../../mixins/setFlex'

export const Container = styled.div`
  margin: 2rem 0;
  padding: 1rem;
  box-sizing: border-box;
  border-radius: .5rem;
  font-size: 2rem;
  color: ${GENERAL_COLORS.white};
  border: 2px solid ${GENERAL_COLORS.white};
`;

export const Label = styled.div`
  font-size: 1.2rem;
`;

export const Value = styled.div`
  ${flex('column','center','center')}
  font-size: 3rem;
  font-weight: 600;
`;