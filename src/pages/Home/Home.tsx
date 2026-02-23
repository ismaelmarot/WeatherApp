import { WeatherProvider } from '../../context'
import { ScreenRouter } from '../../screens/ScreenRouter/ScreenRouter'
import { Container } from './Home.style'

export const Home = () => {
  return (
    <WeatherProvider>
      <Container>
        <ScreenRouter />
      </Container>
    </WeatherProvider>
  )
}

export default Home