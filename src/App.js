import React from 'react'
//rafce -shortcut to create a templetate for Component Files sucha as App.jsx, Footer.jsx
import "./index.css"
import Header from "./components/header/Header"
import Nav from "./components/footer/Footer"
import About from "./components/about/About"
import Experience from './components/experience/Experience'
import Services from "./components/services/Services"
import Portfolio from "./components/portfolio/Portfolio"
import Testimonials from "./components/testimonials/Testimonials"
import Contact from "./components/contact/Contact"
import Footer from "./components/footer/Footer"

const App = () => {
  return (
    <div>
<Header />
<Nav />
<About />
<Experience/>
<Services />
<Portfolio />
<Testimonials />
<Contact />
<Footer />

    </div>
  )
}

export default App
