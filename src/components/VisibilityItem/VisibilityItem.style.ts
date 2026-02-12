import styled from 'styled-components';
import { GeneralColors } from '../../constants/GeneralColors';
import { flex } from '../../mixins/setFlex';

export const Container = styled.div`
  padding: 1rem;
  box-sizing: border-box;
  border-radius: .5rem;
  font-size: 2rem;
  color: ${GeneralColors.white};
  border: 2px solid ${GeneralColors.white};
`;

export const Label = styled.div`
  font-size: 1.2rem;
`;

export const Value = styled.div`
  ${flex('column','center','center')}
  font-size: 3rem;
  font-weight: 600;
`;