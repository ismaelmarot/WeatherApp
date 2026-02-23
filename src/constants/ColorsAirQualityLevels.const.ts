export const COLORS_AIR_QUALITY_LEVELS = {
  Bueno: 'rgba(0, 255, 94, 1)',
  Moderado: 'rgba(250, 204, 21, 1)',
  'Poco saludable para grupos sensibles': 'rgba(249, 115, 22, 1)',
  'No saludable': 'rgba(139, 92, 246, 1)',
  'Muy no saludable': 'rgba(255, 0, 0, 1)',
  Peligroso: 'rgb(138, 17, 17)',
} as const

export type AqiStatus = keyof typeof COLORS_AIR_QUALITY_LEVELS