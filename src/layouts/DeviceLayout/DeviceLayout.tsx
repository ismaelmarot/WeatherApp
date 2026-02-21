import { useDevice } from '../../hooks'
import { MobileScreens } from '../../screens'
import { ScrollViewport } from '../ScrollViewport'
// import { TabletScreens } from '../screens/tablet'
// import { DesktopScreen } from '../screens/desktop'

export function DeviceLayout() {
  const device = useDevice()

  if (device === 'mobile') {
    return (
      <ScrollViewport>
        <MobileScreens />
      </ScrollViewport>
    )
  }

//   if (device === 'tablet') {
//     return (
//       <ScrollViewport>
//         <TabletScreens />
//       </ScrollViewport>
//     )
//   }

  return null
//   return <DesktopScreen />
}