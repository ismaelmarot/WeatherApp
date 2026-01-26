import { Wrapper, Card } from './CenteredLayout.style';
import type { LayoutProps } from '../../types/Layout.type';

export function CenteredLayout({ children }: LayoutProps) {
  return (
    <Wrapper>
      <Card>{children}</Card>
    </Wrapper>
  );
}
