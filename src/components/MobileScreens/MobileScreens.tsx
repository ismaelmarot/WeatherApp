import { ScreensWrapper, Screen } from './MobileScreens.style';

export function MobileScreens() {
    return (
        <ScreensWrapper>
        <Screen style={{ background: '#111' }}>SCREEN 1</Screen>
        <Screen style={{ background: '#181818' }}>SCREEN 2</Screen>
        <Screen style={{ background: '#111' }}>SCREEN 3</Screen>
        <Screen style={{ background: '#181818' }}>SCREEN 4</Screen>
        <Screen style={{ background: '#111' }}>SCREEN 5</Screen>
        <Screen style={{ background: '#181818' }}>SCREEN 6</Screen>
        </ScreensWrapper>
    );
}
