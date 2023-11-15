import { createSignal } from 'solid-js'
import solidLogo from './assets/solid.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = createSignal(0)

  // doubled is a derived signal that updates whenever count changes
  const doubledCount = () => count() * 2

  return (
    <>
      <h1>
        Quote generator!
      </h1>
    </>
  )
}

export default App
