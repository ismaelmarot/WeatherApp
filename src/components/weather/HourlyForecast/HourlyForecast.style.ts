import styled from 'styled-components';
import { flex } from '../../../mixins/setFlex';

export const Container = styled.div`
  display: flex;
  gap: 1rem;
  overflow-x: auto;
  margin-top: 1.5rem;
  padding-bottom: 0.5rem;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const HourItem = styled.div`
  ${flex('column','center','space-between')}
  min-width: 64px;
  padding: 0.75rem;
  border: 2px solid red;
  border-radius: .5rem;
  text-align: center;
  background: rgba(255, 255, 255, 0.6);
`;

export const Time = styled.div`
  font-size: 0.8rem;
  font-weight: 600;
`;

export const Temp = styled.div`
  font-size: 1rem;
  font-weight: 500;
  margin-top: 0.25rem;
`;

export const Rain = styled.div`
  font-size: 0.7rem;
  /* color: #007aff; */
  margin-top: 0.25rem;
`;

export const Icon = styled.img`
  width: 32px;
  margin: 0.25rem auto;
`;
