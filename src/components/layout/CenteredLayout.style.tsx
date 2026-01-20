import styled from 'styled-components';
import { flex } from '../../mixins/setFlex';

export const Wrapper = styled.div`
  height: 95vh;
  ${flex('column', 'center', 'center')}
  overflow: hidden;
`;

export const Card = styled.div`
  height: 100%;
  width: 50rem;
  border-radius: .5rem;
  padding: 3rem;
  background-color: rgb(255, 255, 255);

  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  text-align: center;
`;
