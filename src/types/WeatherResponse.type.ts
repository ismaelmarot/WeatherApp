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