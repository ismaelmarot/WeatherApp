import { SCREENS } from '../../constants'

export function RenderScreens() {
  return (
    <>
      {SCREENS.map((Screen, index) => (
        <Screen key={index} />
      ))}
    </>
  )
}