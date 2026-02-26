import { type ReactNode } from 'react'
import type { DeviceProps } from '../types'
import { ScrollViewport, RenderScreens } from '../layouts'

export const SCREENS_MAP: Record<DeviceProps, ReactNode> = {
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