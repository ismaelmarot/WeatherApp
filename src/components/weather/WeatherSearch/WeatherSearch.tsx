import { useEffect, useState } from 'react';
import { Input } from './WeatherSearch.style';

type LocationResult = {
  id: number;
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
};

type WeatherSearchProps = {
  value: string;
  onChange: (value: string) => void;
  onSelect: (location: LocationResult) => void;
};

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const BASE_URL = 'https://api.weatherapi.com/v1';


export function WeatherSearch({
  value,
  onChange,
  onSelect,
}: WeatherSearchProps) {
  const [results, setResults] = useState<LocationResult[]>([]);
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
    <div style={{ position: 'relative' }}>
      <Input
        type="text"
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
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            background: '#ffffff',
            border:'2px solid black',
            borderRadius: '8px',
            marginTop: '4px',
            overflow: 'hidden',
            zIndex: 10,
          }}
        >
          {results.map((loc) => (
            <div
              key={loc.id}
              onClick={() => {
                onSelect(loc);
                setShowList(false);
              }}
              style={{
                padding: '10px',
                cursor: 'pointer',
                borderBottom: '1px solid #222',
              }}
            >
              <strong>{loc.name}</strong>
              <div style={{ fontSize: '12px', opacity: 0.7 }}>
                {loc.region}, {loc.country}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

