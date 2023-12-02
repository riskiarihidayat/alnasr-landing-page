import React from 'react'

import { Navbar } from './components'
import { Hero, About, Package, Airplane, Facilities, Testimonial, Gallery, Footer } from './containers'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Package />
      <Airplane />
      <Facilities />
      <Testimonial />
      <Gallery />
      <Footer />
    </div>
  )
}

export default App