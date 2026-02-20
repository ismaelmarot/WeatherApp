import { useDevice } from '../../hooks'
import {
    MobileScreen1,
    MobileScreen2,
    MobileScreen3,
    MobileScreen4,
    MobileScreen5,
    MobileScreen6,
    MobileScreen7,
    MobileScreen8,
    MobileScreen9
} from '../mobile'
import { TabletScreen1, TabletScreen2 } from '../tablet'
import { DesktopScreen1 } from '../desktop'

export function ScreenRouter() {
    const device = useDevice();

    if (device === 'mobile') {
        return (
        <>
            <MobileScreen1 />
            <MobileScreen2 />
            {/* <MobileScreen3 />
            <MobileScreen4 />
            <MobileScreen5 />
            <MobileScreen6 />
            <MobileScreen7 />
            <MobileScreen8 />
            <MobileScreen9 /> */}
        </>
        )
    }

    if (device === 'tablet') {
        return (
        <>
            <TabletScreen1 />
            <TabletScreen2 />
        </>
        )
    }

    return (
        <>
            <DesktopScreen1 />
        </>
    )
}