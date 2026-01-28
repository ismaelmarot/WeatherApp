import { useEffect, useState } from 'react';
import { Container, Input, ItemPlace, ListPlacesSearch, LocationPlace } from './WeatherSearch.style';
import type { LocationResultProps } from '../../types/LocationResult.type';
import type { WeatherSearchProps } from '../../types/WeatherSearch.type';

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const BASE_URL = 'https://api.weatherapi.com/v1';

export function WeatherSearch({
  value,
  onChange,
  onSelect,
}: WeatherSearchProps) {
  const [results, setResults] = useState<LocationResultProps[]>([]);
  const [showList, setShowList] = useState(false);

  useEffect(() => {
    if (value.length < 2) {
      setResults([]);
      return;
    }

    const fetchLocations = async () => {
      try {
        const res = await fetch(
          `${BASE_URL}/search.json?key=${API_KEY}&q=${value}`
        );
        const data = await res.json();
        setResults(data);
        setShowList(true);
      } catch (err) {
        console.error(err);
      }
    };

    fetchLocations();
  }, [value]);

  return (
    <Container>
      <Input
        type='text'
        placeholder="Search city"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => {
          onChange('');
          setResults([]);
          setShowList(false);
        }}
      />

      {showList && results.length > 0 && (
        <ListPlacesSearch>
          {results.map((loc) => (
            <ItemPlace
              key={loc.id}
              onClick={() => {
                onSelect(loc);
                setShowList(false);
              }}
            >
              <strong>{loc.name}</strong>
              <LocationPlace>
                {loc.region}, {loc.country}
              </LocationPlace>
            </ItemPlace>
          ))}
        </ListPlacesSearch>
      )}
    </Container>
  );
}
