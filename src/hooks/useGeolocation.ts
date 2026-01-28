import { useEffect, useState } from 'react';
import type { GeoStateProps } from '../types/GeoState.type';

export function useGeolocation() {
  const [state, setState] = useState<GeoStateProps>({
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
