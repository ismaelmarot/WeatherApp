import { type ReactNode } from 'react'
import { ScrollViewport, RenderScreens } from '../layouts'

export type DeviceType = 'mobile' | 'tablet' | 'desktop'

export const SCREENS_MAP: Record<DeviceType, ReactNode> = {
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
  ),
}