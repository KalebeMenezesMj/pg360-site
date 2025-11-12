<<<<<<< HEAD
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'
=======
// src/App.jsx

import React from 'react';
import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import Carrossel from './components/Carrossel.jsx';
>>>>>>> 7e8ed6eb4f548b2c31922987864dccf5c7ce6016

function App() {
  const [count, setCount] = useState(0)

  return (
<<<<<<< HEAD
    <div className="w-full min-h-screen">
      <NavBar/>
    </div>
  )
=======
      <div>
      <Home />
      <Carrossel/>
      

    </div>
  );
>>>>>>> 7e8ed6eb4f548b2c31922987864dccf5c7ce6016
}

export default App
