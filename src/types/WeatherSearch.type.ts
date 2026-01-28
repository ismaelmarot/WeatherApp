import type { LocationResultProps } from './LocationResult.type';

export type WeatherSearchProps = {
  value: string;
  onChange: (value: string) => void;
  onSubmit?: () => void;
  onSelect: (location: LocationResultProps) => void;
};