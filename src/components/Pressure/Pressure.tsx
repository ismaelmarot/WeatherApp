type PressureProps = {
    value: number;
};

export function Pressure({ value }: PressureProps) {
  return (
    <>
      <span>Pressure</span>
      <strong>{value} mb</strong>
    </>
  );
}
