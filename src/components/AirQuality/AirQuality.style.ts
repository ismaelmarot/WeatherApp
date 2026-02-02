import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 20px auto;
  font-family: sans-serif;
`;

export const Title = styled.h3`
  margin-bottom: 12px;
  text-align: center;
`;

export const AQIBar = styled.div`
  position: relative;
  height: 20px;
  border-radius: 10px;
  background: linear-gradient(
    to right,
    #00e400 0%,      /* Good */
    #ffff00 10%,     /* Moderate */
    #ff7e00 20%,     /* Unhealthy sensitive */
    #ff0000 40%,     /* Unhealthy */
    #8f3f97 60%,     /* Very Unhealthy */
    #7e0023 80%      /* Hazardous */
  );
  margin-bottom: 20px;
  width: 100%;
  box-shadow: inset 0 0 4px rgba(0,0,0,0.3);
`;

export const Indicator = styled.div`
  position: absolute;
  top: -6px;
  width: 0;
  height: 0;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-bottom: 12px solid black;
  transition: left 0.3s ease;
`;

export const Pollutants = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: space-between;
`;

export const Pollutant = styled.div`
  flex: 1 1 30%;
  display: flex;
  justify-content: space-between;
  padding: 6px 8px;
  background: #f5f5f5;
  border-radius: 6px;
`;

export const PollutantName = styled.span`
  font-weight: bold;
`;

export const PollutantValue = styled.span`
  font-family: monospace;
`;
