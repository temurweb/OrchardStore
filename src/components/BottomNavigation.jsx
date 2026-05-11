import React from 'react'
import { useTranslation } from 'react-i18next';
import { useAuth } from '../context/AuthContext'
// react-icons
import { FaHome } from "react-icons/fa";
import { IoInformationCircleOutline } from "react-icons/io5";
import { CgMoreO } from "react-icons/cg";
import { FiShoppingCart } from "react-icons/fi";
import { AiOutlineProduct } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
// react-router-dom
import { NavLink } from 'react-router-dom'
// hooks
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useCartStore } from '../store/useCartStore';
import { useNavigate } from 'react-router-dom';

export default function BottomNavigation() {
  const { t } = useTranslation()
  const location = useLocation()
  const isRegister = location.pathname === '/register'
  const isLogin = location.pathname === '/login'
  
// cart
const cart = useCartStore(state => state.cart)
const total = cart.length

const { user } = useAuth()
const navigate = useNavigate()

  return (
    <div className={`fixed shadow-[0_8px_20px_rgba(0,0,0,0.08)] lg:hidden bottom-2 mx-2 rounded-4xl  py-2 px-3 bg-white/60 backdrop-blur-2xl  ${isRegister || isLogin ? "hidden" : ""}`}>
      <ul className='w-full max-w-[400px] grid grid-cols-5  place-items-center gap-3 px-2 '>
        <li className='w-[80px]'>
        <NavLink className={({isActive}) => `flex flex-col items-center py-2 px-4 rounded-full  ${isActive ? "bg-yellow-500 shadow-md shadow-yellow-500 text-white transition-all duration-300 ease-in-out" : "text-black"}` } to='/'>
        <FaHome className='w-6 h-6 md:w-10 md:h-10'/>
        <h2 className='font-bold text-[12px] md:text-[20px]'>{t("BottomNavigation.Home_nav")}</h2>
        </NavLink>
        </li>
        <li className='w-[80px]'>
        <NavLink className={({isActive}) => `flex flex-col items-center py-2 px-4 rounded-full  ${isActive ? "bg-yellow-500 shadow-md shadow-yellow-500 text-white transition-all duration-300 ease-in-out" : "text-black"}` } to='/aboutus'>
        <IoInformationCircleOutline className='w-6 h-6 md:w-10 md:h-10'/>
        <h2 className='text-[12px] md:text-[20px] font-bold'>{t("BottomNavigation.About_nav")}</h2>
        </NavLink>
        </li>
        <li className='w-[80px]'>
        <NavLink className={({isActive}) => `flex flex-col items-center py-2 px-4 rounded-full  ${isActive ? "bg-yellow-500 shadow-md shadow-yellow-500 text-white transition-all duration-300 ease-in-out" : "text-black"}`} to='/cart'>
        <div className='relative'>
        <div className='absolute -top-1.5 -right-2 flex items-center justify-center bg-green-500 px-1  rounded-full'>
          <p className='text-white text-[12px]'>{total}</p>
        </div>
        <FiShoppingCart className='w-6 h-6 md:w-10 md:h-10'/>
        </div>
        <h2 className='text-[12px] md:text-[20px] font-bold'>{t("BottomNavigation.Cart_nav")}</h2>
        </NavLink>
        </li>
        <li className='w-[80px]'>
        <NavLink className={({isActive}) => `flex flex-col items-center py-2 px-4 rounded-full  ${isActive ? "bg-yellow-500 shadow-md shadow-yellow-500 text-white transition-all duration-300 ease-in-out" : "text-black"}`} to='/category'>
         <AiOutlineProduct className='w-6 h-6 md:w-10 md:h-10'/>
         <h2 className='text-[12px] md:text-[20px] font-bold'>{t("BottomNavigation.Category_nav")}</h2>
        </NavLink>
        </li>
        <li className='w-[80px]'>
          <NavLink className={({isActive}) => `flex flex-col items-center py-2 px-4 rounded-full  ${isActive ? "bg-yellow-500 shadow-md shadow-yellow-500 text-white duration-300 ease-in-out" : "text-black"}`} to={user ? '/profile' : '/register'}>
              <CgProfile className='w-6 h-6 md:w-10 md:h-10'/>
              <h2 className='text-[12px] md:text-[20px] font-bold '>{t("Account")}</h2>
          </NavLink>
        </li>
      </ul>
    </div>
  )
}
