import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import Header from './components/Header'
import Home from './components/Home'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import About from './components/About'
import Contact from './components/Contact'
import Pricing from './components/Pricing'

function App() {
 

  return (
    <>
      {/* <Header/> */}
      {/* <Home/> */}
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/About" element={<About/>} />
          <Route path="/Pricing" element={<Pricing/>} />
          <Route path="/Contact" element={<Contact/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
