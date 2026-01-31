import Home from './pages/Home'
import { GlobalStyle } from './styles/GlobalStyle'
import { Layout } from './components/Layout/Layout';

function App() {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Home />
      </Layout>
    </>
  )
}

export default App
