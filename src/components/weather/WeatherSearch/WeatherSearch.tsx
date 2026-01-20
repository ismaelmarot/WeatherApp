import { Input } from './WeatherSearch.style';

type Props = {
  value: string;
  onChange: (value: string) => void;
};

export function WeatherSearch({ value, onChange }: Props) {
  return (
    <Input
      type='text'
      placeholder='Search city'
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
