import { Input } from './WeatherSearch.style';
import type { WeatherSearchProps } from '../../../types/WeatherSearch.type';

export function WeatherSearch({ value, onChange }: WeatherSearchProps) {
  return (
    <Input
      type='text'
      placeholder='Search city'
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
