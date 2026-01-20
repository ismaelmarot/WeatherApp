import Home from './pages/Home'
import { GlobalStyle } from './styles/GlobalStyle'
import { CenteredLayout } from './components/layout/CenteredLayout';

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
