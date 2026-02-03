import {
  Container,
  Title,
  Bar,
  Fill,
  Value,
  Badge
} from './RainChance.style';

type RainChanceProps = {
  chance: number;
  isRainingNow?: boolean;
};

export function RainChance({
  chance,
  isRainingNow = false
}: RainChanceProps) {
  const safeChance = Math.min(Math.max(chance, 0), 100);

  return (
    <Container>
      <Title>Chance of rain</Title>

      <Bar>
        <Fill value={safeChance} />
      </Bar>

      <Value>{safeChance}%</Value>

      {isRainingNow && <Badge>Raining now</Badge>}
    </Container>
  );
}
