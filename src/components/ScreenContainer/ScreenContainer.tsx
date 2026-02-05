import type { ReactNode } from 'react';
import { Container } from './ScreenContainer.style';

type Props = {
  children: ReactNode;
};

export function ScreenContainer({ children }: Props) {
  return <Container>{children}</Container>;
}
