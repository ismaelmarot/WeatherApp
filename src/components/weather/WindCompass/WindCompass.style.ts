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
  width: 2px;
  height: 32px;
  background: #111;
  transform-origin: bottom center;
  translate: -50% -100%;
  border-radius: 2px;

  &::after {
    content: '';
    position: absolute;
    top: -6px;
    left: -4px;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-bottom: 6px solid #111;
  }
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
