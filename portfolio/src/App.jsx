import React from 'react'
import Hero from './sections/Hero.jsx'
import Navbar from './components/Navbar.jsx'
import Showcase from './sections/Showcase.jsx'

const App = () => {
  return (
    <>  
        <Navbar />
        <Hero />
        <Showcase />
    </>
  )
}

export default App