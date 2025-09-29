import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Homepage from '../pages/Homepage'
import Contact from '../pages/Contact'
import Blog from '../pages/Blog'
import Pricing from '../pages/Pricing'
import Galerry from '../pages/Galerry'
import Service from '../pages/Service'
import Veterinarian from '../pages/Veterinarian'
import About from '../pages/About'



function App() {

  return (
    <>
<Router>
        <Routes>
          <Route path='/' element={< Homepage />} />
          <Route path='/contact' element={< Contact />} />
          < Route path='/blog' element={< Blog />} />
          < Route path='/Pricing' element={< Pricing />} />
          < Route path='/gallery' element={< Galerry />} />
          < Route path='/service' element={< Service />} />
          < Route path='/veterinarian' element={< Veterinarian />} />
          < Route path='/about' element={< About />} />

        </Routes>
      </Router>
    </>
  )
}

export default App
