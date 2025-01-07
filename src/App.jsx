import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './component/Home';
import About from './component/About';
import OurSpecial from './component/OurSpecial';
import Services from './component/Services';
import Contact from './component/Contact';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='About' element={<About />} />
          <Route path='OurSpecial' element={<OurSpecial />} />
          <Route path='Services' element={<Services />} />
          <Route path='Contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App;


