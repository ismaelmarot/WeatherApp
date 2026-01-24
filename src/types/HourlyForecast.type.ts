export type HourForecast = {
    time: string;
    temp_c: number;
    chance_of_rain: number;
    condition: {
        text: string;
        icon: string;
    };
};
