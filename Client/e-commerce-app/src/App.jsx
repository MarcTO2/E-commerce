import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import ProductSection from './sections/ProductSection'
import AboutSection from './sections/AboutSection'
import ContactSection from './sections/ContactSection';
import CartSection from './sections/CartSection';
import Login from './components/Auth/login/Login';
import Register from './components/Auth/register/Register';

const App = () => {
  return (
  <Router>
    <div className='flex flex-col min-h-screen'>
      <Nav />
      <main className='flex-1'>
      <Routes>
      <Route path='login' element={<Login />} />
      <Route path='register' element={<Register />} />
      <Route path='home' element={<Hero />} />
      <Route path='products' element={<ProductSection />} />
      <Route path='about' element={<AboutSection />} />
      <Route path="contact" element={<ContactSection />} />
      <Route path="cart" element={<CartSection />} />
      </Routes>
      </main>
      <Footer />
      </div>
    </Router>
  )
}

export default App