export const POLLUTANT_UNIT = "µg/m³"

export const POLLUTANT_LABELS = {
  CO: "Monóxido de carbono",
  NO2: "Dióxido de nitrógeno",
  O3: "Ozono",
  SO2: "Dióxido de azufre",
  PM25: "Partículas en suspensión menores a 2,5 micrones",
  PM10: "Partículas en suspensión menores a 10 micrones",
}

export const AQI_TEXTS = [
  { max: 50, text: "Bueno" },
  { max: 100, text: "Moderado" },
  { max: 150, text: "Poco saludable para grupos sensibles" },
  { max: 200, text: "Poco saludable" },
  { max: 300, text: "Muy poco saludable" },
  { max: Infinity, text: "Peligroso" },
];

export function getAqiText(aqi: number): string {
  return AQI_TEXTS.find((item) => aqi <= item.max)?.text ?? "Desconocido";
}
