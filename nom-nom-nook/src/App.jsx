// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter, Routes, Route} from  "react-router-dom";

import Landing from './pages/User/Landing'
import Signup from './pages/User/Signup'
import Login from './pages/User/Login';


import Pricing from './pages/User/Pricing';
import ResSignup from './pages/Restaurant/Signup';
import ResLogin from './pages/Restaurant/Login';



function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />

          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />

          <Route path="/pricing" element={<Pricing />} />
          <Route path="/admin/signup" element={<ResSignup />} />
          <Route path="/admin/login" element={<ResLogin />} />
          

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
