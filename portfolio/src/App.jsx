import React from 'react'
import Hero from './sections/Hero.jsx'
import Navbar from './components/Navbar.jsx'
import Showcase from './sections/Showcase.jsx'
import LogoSection from './components/LogoSection.jsx'
import FeatureCards from './sections/FeatureCards.jsx'
import Experience from './sections/Experience.jsx'

const App = () => {
  return (
    <>  
        <Navbar />
        <Hero />
        <Showcase />
        <LogoSection />
        <FeatureCards />
        <Experience />
    </>
  )
}

export default App