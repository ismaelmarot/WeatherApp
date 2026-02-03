import styled from 'styled-components';

export const Container = styled.div`
  width: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  border: 1px solid black;
  border-radius: 1rem;
  padding: 1rem;
`;

export const Title = styled.h4`
  font-size: 0.9rem;
  margin: 0;
`;

export const Bar = styled.div`
  width: 40px;
  height: 140px;
  background: #e5e7eb;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
`;

export const Fill = styled.div<{ value: number }>`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: ${({ value }) => value}%;
  background: linear-gradient(
    to top,
    #043399,
    #74aff8
  );
  transition: height 0.4s ease;
`;

export const Value = styled.span`
  font-size: 0.9rem;
  font-weight: 600;
`;

export const Badge = styled.span`
  background: #2563eb;
  color: white;
  font-size: 0.7rem;
  padding: 4px 8px;
  border-radius: 999px;
`;
