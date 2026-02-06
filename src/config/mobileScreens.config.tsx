import type { ReactNode } from 'react';


import {
  WeatherCurrent,
  WeatherSearch,
  WeatherDetails,
  WeatherExtras,
  HourlyForecast,
  DailyRainChart
} from '../components';
import type { MobileScreenProps } from '../types/MobileScreen.type';

export type MobileScreen = {
  id: string;
  render: (props: MobileScreenProps) => ReactNode | null;
};

export const mobileScreens: MobileScreen[] = [
  {
    id: 'weather-current',
    render: ({ weather }) =>
      weather && <WeatherCurrent weather={weather} />
  },
  {
    id: 'weather-search',
    render: ({ city, setCity, onSelect }) => (
      <WeatherSearch
        value={city}
        onChange={setCity}
        onSelect={onSelect}
      />
    )
  },
  {
    id: 'weather-details',
    render: ({ weather }) =>
      weather && <WeatherDetails weather={weather} />
  },
  {
    id: 'weather-extras',
    render: ({ weather }) =>
      weather && <WeatherExtras weather={weather} />
  },
  {
    id: 'hourly-forecast',
    render: ({ nextHours }) =>
      nextHours.length > 0 && (
        <HourlyForecast hours={nextHours} />
      )
  },
  {
    id: 'daily-rain',
    render: ({ forecast }) =>
      forecast && (
        <DailyRainChart
          hours={forecast.forecast.forecastday[0].hour}
        />
      )
  }
];
