import styled from 'styled-components';

export const Compass = styled.div`
  position: relative;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 2px solid #ddd;
  margin: 0 auto 0.5rem;
  margin-top: 1rem;
`;

export const Arrow = styled.div`
   position: absolute;
  top: 50%;
  left: 50%;
  transform-origin: center 90%;
  translate: -50% -90%;
  transition: transform 0.3s ease;

  width: 0;
  height: 0;

  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-bottom: 30px solid #111;
`;

export const DirectionLabel = styled.span<{
  top?: boolean;
  right?: boolean;
  bottom?: boolean;
  left?: boolean;
}>`
  position: absolute;
  font-size: 0.75rem;
  color: #666;

  ${(p) => p.top && 'top: -14px; left: 50%; transform: translateX(-50%);'}
  ${(p) => p.right && 'right: -14px; top: 50%; transform: translateY(-50%);'}
  ${(p) => p.bottom && 'bottom: -14px; left: 50%; transform: translateX(-50%);'}
  ${(p) => p.left && 'left: -14px; top: 50%; transform: translateY(-50%);'}
`;

export const Speed = styled.div`
  font-size: 0.85rem;
  text-align: center;
  color: #444;
`;
