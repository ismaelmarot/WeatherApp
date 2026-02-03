const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const BASE_URL = import.meta.env.VITE_WEATHER_BASE_URL;

if (!API_KEY) {
  throw new Error('Missing WeatherAPI key');
}

if (!BASE_URL) {
  throw new Error('Missing WeatherAPI base URL');
}

export type WeatherResponse = {
  location: {
    name: string;
    country: string;
    localtime: string;
  };

  current: {
    air_quality: any;
    wind_degree: number;
    temp_c: number;
    feelslike_c: number;
    humidity: number;
    wind_kph: number;
    wind_dir: string;
    pressure_mb: number;
    vis_km: number;
    uv: number;
    precip_mm: number;
    condition: {
      text: string;
      icon: string;
    };
  };

  forecast: {
    forecastday: {
      date: string;
      day: {
        maxtemp_c: number;
        mintemp_c: number;
        daily_chance_of_rain: number;
        totalprecip_mm: number;
      };
      astro: {
        sunrise: string;
        sunset: string;
        moonrise: string;
        moonset: string;
        moon_phase: string;
        moon_illumination: string;
      };
      hour: {
        time: string;
        temp_c: number;
        chance_of_rain: number;
        precip_mm: number;
        condition: {
          icon: string;
        };
      }[];
    }[];
  };
};


/* Weather by Coordinates */
export async function getWeatherByCoords(
  lat: number,
  lon: number
): Promise<WeatherResponse> {
  const response = await fetch(
     `${BASE_URL}/forecast.json?key=${API_KEY}&q=${lat},${lon}&days=1&lang=es&aqi=yes`
  );

  if (!response.ok) {
    const error = await response.json();
    console.error('Weather API error:', error);
    throw new Error(error.error?.message || 'Error fetching weather');
  }

  return response.json();
}

/* Weather by City */
export async function getWeatherByCity(
  city: string
): Promise<WeatherResponse> {
  const response = await fetch(
    `${BASE_URL}/forecast.json?key=${API_KEY}&q=${city}&days=1&lang=es`
  );

  if (!response.ok) {
    const error = await response.json();
    console.error('Weather API error:', error);
    throw new Error(error.error?.message || 'City not found');
  }

  return response.json();
}

export async function getForecastByCoords(
  lat: number,
  lon: number,
  days = 7
) {
  const response = await fetch(
    `${BASE_URL}/forecast.json?key=${API_KEY}&q=${lat},${lon}&days=${days}&lang=es`
  );

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error?.message || 'Forecast error');
  }

  return response.json();
}
