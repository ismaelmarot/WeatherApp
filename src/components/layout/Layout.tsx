import { Wrapper, Card } from './CenteredLayout.style';
import type { LayoutProps } from '../../types/Layout.type';

export function Layout({ children }: LayoutProps) {
  return (
    <Wrapper>
      <Card>{children}</Card>
    </Wrapper>
  );
}
