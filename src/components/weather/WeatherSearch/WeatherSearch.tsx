import { Input } from './WeatherSearch.style';
import type { WeatherSearchProps } from '../../../types/WeatherSearch.type';

export function WeatherSearch({
  value,
  onChange,
  onSubmit,
}: WeatherSearchProps) {
  return (
    <Input
      type='text'
      placeholder="Search city"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          onSubmit();
        }
      }}
    />  
  );
}
