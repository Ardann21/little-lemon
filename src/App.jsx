import { useState } from 'react'
import './App.css'
import Header from './components/header'
import Main from './components/Main'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import Reservations from './components/Reservations'
import Footer from './components/Footer'
import Reservations2 from './components/Reservations2'

function App() {
  return (
    <>
      <Router>
      <Header />
      
      <Routes>
        <Route path='/' element={<Main />}/>
        <Route path='/reservations' element={<Reservations />}/>
        <Route path='/reservations2' element={<Reservations2 />}/>
        
      </Routes>
     <Footer />
    </Router>
    
    </>
  )
}

export default App
