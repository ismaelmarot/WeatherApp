import { useDevice } from '../../hooks'
import { SCREENS_MAP } from '../../constants'
import { BackgroundVideo } from '../../components'
import { ContentWrapper, LayoutWrapper } from './DeviceLayout.style'

export function DeviceLayout() {
  const device = useDevice()

  return (
    <LayoutWrapper>
      <BackgroundVideo />
        <ContentWrapper>
          {SCREENS_MAP[device]}
        </ContentWrapper>
    </LayoutWrapper>
  )
}