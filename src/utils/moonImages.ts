import newMoon from '../assets/moon-phases/new-moon.jpg';
import fullMoon from '../assets/moon-phases/full-moon.jpg';
import firstQuarterMoon from '../assets/moon-phases/first-quarter-moon.jpg';
import thirdQuarterMoon from '../assets/moon-phases/third-quarter-moon.jpg';
import waxingGibbousMoon from '../assets/moon-phases/waxing-gibbous-moon.jpg';
import waxingCrescentMoon from '../assets/moon-phases/waxing-crescent-moon.jpg';
import waningCrescentMoon from '../assets/moon-phases/waning-crescent-moon.jpg';
import waningGibbousMoon from '../assets/moon-phases/waning-gibbous-moon.jpg';


export const moonImages: Record<string, string> = {
    'New Moon': newMoon,
    'Full Moon': fullMoon,
    'First Quarter': firstQuarterMoon,
    'Tird Quarter': thirdQuarterMoon,
    'Waxing Crescent': waxingCrescentMoon,
    'Waxing Gibbous': waxingGibbousMoon,
    'Waning Crescent': waningCrescentMoon,
    'Waning Gibbous': waningGibbousMoon,
};