import { AQI_TEXTS } from '../constants'

export function getAqiText(aqi: number): string {
    return AQI_TEXTS.find((item) => aqi <= item.max)?.text ?? "Desconocido"
}