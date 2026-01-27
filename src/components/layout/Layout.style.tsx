import styled from 'styled-components';
import { flex } from '../../mixins/setFlex';
import { size } from '../../mixins/setSize';
import { GeneralColors } from '../../constants/GeneralColors';

export const Wrapper = styled.div`
  ${flex('column', 'center', 'center')}
  overflow: hidden;
`;

export const Card = styled.div`
  ${size('50rem','100%')}
  padding: 3rem;
  border-radius: .5rem;
  text-align: center;
  background-color: ${GeneralColors.white};
`;
