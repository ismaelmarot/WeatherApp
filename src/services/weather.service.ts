const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const BASE_URL = import.meta.env.VITE_WEATHER_BASE_URL;

if (!API_KEY) {
  throw new Error('Missing WeatherAPI key');
}

export type WeatherResponse = {
  location: {
    name: string;
    country: string;
  };
  current: {
    temp_c: number;
    humidity: number;
    condition: {
      text: string;
      icon: string;
    };
  };
};

export async function getWeatherByCoords(
  lat: number,
  lon: number
): Promise<WeatherResponse> {
  const response = await fetch(
    `${BASE_URL}/current.json?key=${API_KEY}&q=${lat},${lon}&lang=es`
  );

  if (!response.ok) {
    const error = await response.json();
    console.error(error);
    throw new Error(error.error?.message || 'Weather API error');
  }

  return response.json();
}

export async function getWeatherByCity(
  city: string
): Promise<WeatherResponse> {
  const response = await fetch(
    `${BASE_URL}/current.json?key=${API_KEY}&q=${city}&lang=es`
  );

  if (!response.ok) {
    const error = await response.json();
    console.error(error);
    throw new Error(error.error?.message || 'City not found');
  }

  return response.json();
}
