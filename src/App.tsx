import { GlobalStyles } from './styles/GlobalStyles'

function App() {
  return (
    <>
      <GlobalStyles />
      <div
        style={{
          minHeight: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'red'
        }}
      >
        <h1 style={{ color: 'white' }}>
          CENTRADO REAL
        </h1>
      </div>
    </>
  )
}

export default App
