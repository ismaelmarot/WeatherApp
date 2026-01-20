import { Wrapper, Card,  } from './CenteredLayout.style';

type Props = {
  children: React.ReactNode;
};

export function CenteredLayout({ children }: Props) {
  return (
    <Wrapper>
      <Card>{children}</Card>
    </Wrapper>
  );
}
