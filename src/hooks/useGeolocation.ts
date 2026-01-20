import { useEffect, useState } from 'react';

type Coordinates = {
  latitude: number;
  longitude: number;
};

type GeoState = {
  loading: boolean;
  error: string | null;
  coords: Coordinates | null;
};

export function useGeolocation() {
  const [state, setState] = useState<GeoState>({
    loading: true,
    error: null,
    coords: null,
  });

  useEffect(() => {
    if (!navigator.geolocation) {
      setState({
        loading: false,
        error: 'Geolocation is not supported by your browser',
        coords: null,
      });
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setState({
          loading: false,
          error: null,
          coords: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          },
        });
      },
      () => {
        setState({
          loading: false,
          error: 'Unable to retrieve your location',
          coords: null,
        });
      }
    );
  }, []);

  return state;
}
