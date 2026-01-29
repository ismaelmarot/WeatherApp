type HumidityProps = {
  value: number;
};

export function Humidity({ value }: HumidityProps) {
  return (
    <>
      <span>Humidity</span>
      <strong>{value}%</strong>
    </>
  );
}
