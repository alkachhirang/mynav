import React from 'react'
// import { Route, Routes } from 'react-router-dom'
// import Header from './components/Header'
// import About from './components/About'
// import Faq from './components/Faq'
// import Contact from './components/Contact'
// import Help from './components/Help'
import './App.css'
// import Navbar from '../src/components/Navbar'
import { Emailjs } from './components/Emailjs'


const App = () => {
  return (
    <div>
      {/* <Navbar />
      {/* <Routes>
        <Route path='/' exact element={<Header />}></Route>
        <Route path='/About' exact element={<About />}></Route>
        <Route path='/Faq' exact element={<Faq />}></Route>
        <Route path='/Contact' exact element={<Contact />}></Route>
        <Route path='/Help' exact element={<Help />}></Route>
      </Routes> */}
      <Emailjs/>
    </div>
  )
}

export default App
