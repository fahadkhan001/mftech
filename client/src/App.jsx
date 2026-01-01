import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'  
import Hero from './section/Hero.jsx' 
import Services from './section/Services.jsx' 
import Home from './pages/Home.jsx' 
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Team from './pages/Team';
function App() {
  const [count, setCount] = useState(0)

  return (
   <Router>
      <div className="bg-[#050505] min-h-screen text-white selection:bg-[#00f2ff] selection:text-black">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} /> 
          <Route path="/team" element={<Team />} />    
          
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
