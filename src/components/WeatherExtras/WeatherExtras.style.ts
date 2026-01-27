import styled from 'styled-components';

export const Section = styled.div`
  margin-top: 2rem;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
`;

export const Item = styled.div`
  background-color: #f5f5f7;
  border-radius: 16px;
  padding: 0.85rem;
`;

export const Label = styled.div`
  font-size: 0.75rem;
  color: #6e6e73;
`;

export const Value = styled.div`
  font-size: 1rem;
  font-weight: 500;
  margin-top: 0.25rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const WindArrow = styled.span`
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-bottom: 10px solid #333;
  display: inline-block;
`;
