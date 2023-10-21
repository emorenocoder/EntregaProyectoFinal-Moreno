import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Contact from '../pages/Contact'
import Cart from '../pages/Cart'
import Checkout from '../pages/Checkout'
import UserProfile from '../Pages/UserProfile'
import Detalle from '../Pages/Detalle'
import About from '../Pages/About'
import Jacket from '../Pages/Jacket'
import Jeans from '../Pages/Jeans'
import Shirt from '../Pages/Shirt'

const RoutesComponent = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/user' element={<UserProfile/>} />
        <Route path='/category/:categoryId' element={<Home />} />
        <Route path='/detalle/:id' element={<Detalle />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/About' element={<About />} />
        <Route path='/checkout/:orderId' element={<Checkout />} />
        <Route path='/Jacket' element={<Jacket />} />
        <Route path='/Jeans' element={<Jeans />} />
        <Route path='/Shirt' element={<Shirt />} />

  </Routes>
  )
}

export default RoutesComponent