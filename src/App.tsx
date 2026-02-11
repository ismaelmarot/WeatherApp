import { GlobalStyle } from './styles/GlobalStyle'
import 'weather-icons/css/weather-icons.css'
import { Home } from './pages'
import { AppLayout } from './AppLayout'

function App() {
  return (
    <>
      <GlobalStyle />
      <AppLayout>
        <Home />
      </AppLayout>
    </>
  )
}

export default App
 