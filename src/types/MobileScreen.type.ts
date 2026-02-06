export type MobileScreenProps = {
  weather: any | null;
  forecast: any | null;
  city: string;
  setCity: (value: string) => void;
  onSelect: (location: any) => void;
  nextHours: any[];
};
