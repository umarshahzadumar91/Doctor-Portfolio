import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import AboutUs from './Components/AboutUs'
import StatsCounters from './Components/StatsCounters'
import EducationCertifications from './Components/EducationCertifications'
import AreasOfExpertise from './Components/AreasOfExpertise '
import WhatsAppButton from './Components/WhatsAppButton '
import Contact from './Components/Contact'
import Footer from './Components/Footer '


const App = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <AboutUs/>
    <StatsCounters/>
    <EducationCertifications/>
    <AreasOfExpertise/>
    <WhatsAppButton/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App