// import { useState } from 'react'
import Home from './components/Home.jsx'
import AboutUs from './components/AboutUs.jsx'
import Service from './components/Service.jsx'
import ContactUs from './components/ContactUs.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import RootLayout from './Layouts/RootLayout.jsx'
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<RootLayout/>}>
            <Route index element={<Home/>}/>
            <Route path='/aboutus' element={<AboutUs/>} />
            <Route path='/service' element={<Service/>}/>
            <Route path='/contactus' element={<ContactUs/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
