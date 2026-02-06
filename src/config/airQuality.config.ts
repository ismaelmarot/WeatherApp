import { POLLUTANT_LABELS } from '../constants/aqiInfo'
import { pm25ToAQI, pm10ToAQI, simpleGasToAQI } from '../utils/aqiConverters.utils'

export const AIR_QUALITY_ITEMS = [
    {
        key: 'CO',
        label: 'CO',
        valueKey: 'co',
        unit: 'µg/m³',
        getAqi: (v: number) => simpleGasToAQI(v, 10),
        description: POLLUTANT_LABELS.CO
    },
    {
        key: 'NO2',
        label: 'NO₂',
        valueKey: 'no2',
        unit: 'µg/m³',
        getAqi: (v: number) => simpleGasToAQI(v, 200),
        description: POLLUTANT_LABELS.NO2
    },
    {
        key: 'O3',
        label: 'O₃',
        valueKey: 'o3',
        unit: 'µg/m³',
        getAqi: (v: number) => simpleGasToAQI(v, 180),
        description: POLLUTANT_LABELS.O3
    },
    {
        key: 'SO2',
        label: 'SO₂',
        valueKey: 'so2',
        unit: 'µg/m³',
        getAqi: (v: number) => simpleGasToAQI(v, 350),
        description: POLLUTANT_LABELS.SO2
    },
    {
        key: 'PM25',
        label: 'PM2.5',
        valueKey: 'pm25',
        unit: 'µg/m³',
        getAqi: pm25ToAQI,
        description: POLLUTANT_LABELS.PM25
    },
    {
        key: 'PM10',
        label: 'PM10',
        valueKey: 'pm10',
        unit: 'µg/m³',
        getAqi: pm10ToAQI,
        description: POLLUTANT_LABELS.PM10
    }
] as const
