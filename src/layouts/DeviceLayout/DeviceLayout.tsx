import { useDevice } from '../../hooks'
import { MobileScreens } from '../../screens'
import { ScrollViewport } from '../ScrollViewport'
import { BackgroundVideo } from '../../components'

export function DeviceLayout() {
  const device = useDevice()

  const screens = {
    mobile: (
      <ScrollViewport>
        <MobileScreens />
      </ScrollViewport>
    ),
    tablet: (
      <ScrollViewport>
        <MobileScreens />
      </ScrollViewport>
    ),
    desktop: (
      <ScrollViewport>
        <MobileScreens />
      </ScrollViewport>
    )
  }

  return (
    <>
      <BackgroundVideo />
      {screens[device]}
    </>
  )
}