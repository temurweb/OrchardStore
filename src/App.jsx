import React from 'react'
import { Routes, Route } from 'react-router-dom'
// Global Components
import Header from './components/Header'
import BottomNavigation from './components/BottomNavigation'
import Footer from './components/Footer'
// Pages
import Home from './pages/Home/Home'
import Aboutus from './pages/Aboutus/Aboutus'
import DairyProducts from './pages/Products/Dairyproducts/DairyProducts'
import Vegetables from './pages/Products/Vegetables/Vegetables'

import Bakery from './pages/Products/Bakery/Bakery'
import Cart from './pages/Cart/Cart'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Profile from './pages/Profile/Profile'
import Category from './pages/Category/Category'

export default function App() {
  return (
   <>
   <Header/>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/aboutus' element={<Aboutus/>}/>
    <Route path='/category' element={<Category/>}>
      <Route index element={<Vegetables/>}/>
      <Route path='dairyproducts' element={<DairyProducts/>}/>
      <Route path='vegetables' element={<Vegetables/>}/>
      <Route path='bakery' element={<Bakery/>}/>
    </Route>
    <Route path='/cart' element={<Cart/>}/>
    <Route path='/category' element={<Category/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='/profile' element={<Profile/>}/>
   </Routes>
   <BottomNavigation/>
   <Footer/>
   </>
  )
}
