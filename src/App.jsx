import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Portfolio from './components/portfolio/Portfolio'
import Testimonials from './components/testimonials/Testimonials'
import Services from './components/services/Services'
import Footer from './components/footer/Footer'
import Contact from './components/contact/Contact'
import Exp from './components/exp/Exp'

const App = () => {
  return (
    <>
        <Header/>
        <Nav/>
        <About/>
        <Exp/>
        <Services/>
        <Portfolio/>
        <Testimonials/>
        <Contact/>
        <Footer/>
    </>
  )
}

export default App