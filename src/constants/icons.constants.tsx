import { FaCircle } from 'react-icons/fa'
import { FaLocationArrow } from 'react-icons/fa'
import { FaRegSun } from 'react-icons/fa'
import { FaSun } from 'react-icons/fa6'
import { FaWind } from 'react-icons/fa'
import { FiSearch } from 'react-icons/fi'
import { FiSunrise, FiSunset } from 'react-icons/fi'
import { IoLocationSharp } from 'react-icons/io5'
import { IoMdInformationCircleOutline } from 'react-icons/io'
import { IoRainyOutline } from 'react-icons/io5'
import { LuSunDim } from 'react-icons/lu'
import { MdOutlineVisibility } from 'react-icons/md'
import { TbSun } from 'react-icons/tb'
import { TbSunFilled } from 'react-icons/tb'
import { TbTemperatureMinus, TbTemperaturePlus} from 'react-icons/tb'
import { TbUvIndex } from 'react-icons/tb'
import { WiHumidity } from 'react-icons/wi'

export const ICONS = {
    location: IoLocationSharp,
    windArrow: FaLocationArrow,
    tempMin: TbTemperatureMinus,
    tempMax: TbTemperaturePlus,
    SearchIcon: FiSearch,
    sunrise: FiSunrise,
    sunset: FiSunset,
    rain: IoRainyOutline,
    uvIndex: TbUvIndex,
    humidity: WiHumidity,
    visibility: MdOutlineVisibility,
    wind: FaWind,
    info: IoMdInformationCircleOutline,
    circle: FaCircle,
    
    SunOne: LuSunDim,
    SunTwo: TbSun,
    SunThree: TbSunFilled,
    SunFour: FaRegSun,
    SunFive: FaSun,
}