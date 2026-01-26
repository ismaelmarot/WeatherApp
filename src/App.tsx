import Home from './pages/Home'
import { GlobalStyle } from './styles/GlobalStyle'
import { CenteredLayout } from './components/Layout/CenteredLayout';

function App() {
  return (
    <>
      <GlobalStyle />
      <CenteredLayout>
        <Home />
      </CenteredLayout>
    </>
  )
}

export default App
