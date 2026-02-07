import newMoon from '../assets/moon-phases/new-moon.jpg';
import fullMoon from '../assets/moon-phases/full-moon.jpg';
import firstQuarterMoon from '../assets/moon-phases/first-quarter-moon.jpg';
import lastQuarterMoon from '../assets/moon-phases/third-quarter-moon.jpg';
import waxingGibbousMoon from '../assets/moon-phases/waxing-gibbous-moon.jpg';
import waxingCrescentMoon from '../assets/moon-phases/waxing-crescent-moon.jpg';
import waningCrescentMoon from '../assets/moon-phases/waning-crescent-moon.jpg';
import waningGibbousMoon from '../assets/moon-phases/waning-gibbous-moon.jpg';

import type { MoonPhase } from '../types';

export const MOON_IMAGES: Record<MoonPhase, string> = {
  'New Moon': newMoon,
  'Full Moon': fullMoon,
  'First Quarter': firstQuarterMoon,
  'Last Quarter': lastQuarterMoon,
  'Waxing Crescent': waxingCrescentMoon,
  'Waxing Gibbous': waxingGibbousMoon,
  'Waning Crescent': waningCrescentMoon,
  'Waning Gibbous': waningGibbousMoon,
};

export function getMoonImage(phase: string): string {
  return MOON_IMAGES[phase as MoonPhase] ?? MOON_IMAGES['Full Moon'];
}
