import { useDevice } from '../../hooks'
import { SCREENS_MAP } from '../../constants'
import { BackgroundVideo } from '../../components'

export function DeviceLayout() {
  const device = useDevice()

  return (
    <>
      <BackgroundVideo />
      {SCREENS_MAP[device]}
    </>
  )
}