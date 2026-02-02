import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 24px;
  padding: 16px;
  border-radius: 12px;
  background: #f7f7f7;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h3`
  margin-bottom: 12px;
  font-size: 1.1rem;
`;

export const AQIBar = styled.div`
  position: relative;
  width: 100%;
  height: 20px;
  border-radius: 10px;
  margin-bottom: 16px;
  background: #ddd; /* fallback si no hay segmentos */
  overflow: hidden;
`;

export const Segment = styled.div<{
  $color: string;
  $width: number;
  $left: number;
}>`
  position: absolute;
  top: 0;
  left: ${({ $left }) => $left}%;
  width: ${({ $width }) => $width}%;
  height: 100%;
  background-color: ${({ $color }) => $color};
`;

export const Indicator = styled.div<{ $position: number }>`
  position: absolute;
  top: -6px;
  left: ${({ $position }) => $position}%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 12px solid transparent;
  border-right: 12px solid transparent;
  border-bottom: 18px solid #111;
`;

export const Pollutants = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

export const Pollutant = styled.div`
  flex: 1 1 100px;
  background: #fff;
  border-radius: 8px;
  padding: 8px;
  text-align: center;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
`;

export const PollutantName = styled.div`
  font-size: 0.8rem;
  font-weight: 500;
  margin-bottom: 4px;
`;

export const PollutantValue = styled.div`
  font-size: 1rem;
  font-weight: 600;
`;
