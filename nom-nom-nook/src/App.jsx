import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter, Routes, Route} from  "react-router-dom";
import Landing from './pages/User/Landing';
import Pricing from './pages/User/Pricing';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/pricing" element={<Pricing />} />
          
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
