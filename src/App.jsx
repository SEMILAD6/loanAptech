import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import About from '../components/About.jsx'
import Footer from '../components/Footer.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <About/>
      <Footer/>
    </div>
  )
}

export default App  
