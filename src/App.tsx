import reactLogo from './assets/react.svg'
import './App.css'

function App() {

  return (
    <>
      <div className="App">
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src="/vite.svg" className="logo" alt="Vite logo" />
          </a>
          <a href="https://reactjs.org" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Hello, React App!!</h1>
        <h2><canvas></canvas></h2>
      </div>
    </>
  )
}

export default App
