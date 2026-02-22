import { COLORS_AIR_QUALITY_LEVELS, GENERAL_COLORS } from "../constants"

export function getAqiColor(status?: string) {
  if (!status) return GENERAL_COLORS.white

  const normalized = status.toLowerCase()

  const match = Object.entries(COLORS_AIR_QUALITY_LEVELS).find(
    ([key]) => key.toLowerCase() === normalized
  )

  return match?.[1] ?? GENERAL_COLORS.white
}
