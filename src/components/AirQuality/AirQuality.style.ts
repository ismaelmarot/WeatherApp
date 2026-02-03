import styled from 'styled-components';
import { GeneralColors } from '../../constants';

export const Container = styled.div`
  margin-top: 2rem;
  background: ${GeneralColors.grey};
  padding: 1rem;
  border-radius: 0.75rem;
`;

export const Title = styled.h3`
  color: #fff;
  margin-bottom: 1rem;
`;

export const Pollutants = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;
