import { useDevice } from '../../hooks'
import { RenderScreens } from '../../screens'
import { ScrollViewport } from '../ScrollViewport'
import { BackgroundVideo } from '../../components'

export function DeviceLayout() {
  const device = useDevice()

  const screens = {
    mobile: (
      <ScrollViewport>
        <RenderScreens />
      </ScrollViewport>
    ),
    tablet: (
      <ScrollViewport>
        <RenderScreens />
      </ScrollViewport>
    ),
    desktop: (
      <ScrollViewport>
        <RenderScreens />
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