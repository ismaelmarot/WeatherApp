import { BackgroundVideo } from '../../components'
import { useDevice } from '../../hooks'
import { MobileScreens } from '../../screens'
import { ScrollViewport } from '../ScrollViewport'

export function DeviceLayout() {
  const device = useDevice()

  if (device === 'mobile') {
    return (
      <>
        <BackgroundVideo />
        
        <ScrollViewport>
          <MobileScreens />
        </ScrollViewport>
      </>
    )
  }

  return null
}