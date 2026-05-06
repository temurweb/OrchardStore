import React from 'react'
// auth
import { useAuth } from '../context/AuthContext'
import { auth } from '../firebase/config'
import { signOut } from 'firebase/auth'
// react-router-dom
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
// i18next
import { useTranslation } from 'react-i18next'
import i18next from 'i18next'
// hooks
import { useState, useRef } from 'react'
import { useCartStore } from '../store/useCartStore'
// icons
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";
import { VscAccount } from "react-icons/vsc";
import { MdOutlineShoppingCart, MdOutlineAccountCircle } from "react-icons/md";
import { IoLanguage } from "react-icons/io5";



export default function Header() {

  // lang
  const { t } = useTranslation()
  const [ lang, setLang ] = useState(false)
  


  // setProducts
 const [ products, setProducts ] = useState(false)

 const cart = useCartStore(state => state.cart)
 const total = cart.length

  //  Auth
  const { user } = useAuth()
  const [ account, setAccount ] = useState(false)

  const handleLeave = () => {
    timeoutRef.current = setTimeout(() => {
     setAccount(false)
    }, 200)
  }

  const handleEnter = () => {
    clearTimeout(timeoutRef.current)
    setAccount(true)
  }

  const timeoutRef = useRef(null)

 const handleLogOut = async (e) => {
  try {
    const user = await signOut(auth)
    console.log(user)
  } catch (error) {
    console.log(error.message)
  }
 }


  return (
     <header className='flex justify-between gap-8 px-5 lg:px-16 items-center h-16 py-2 relative bg-white z-50'>
       <Link className='flex text-[24px] lg:text-[32px] text-green-600 font-bold' to='/'><h2>Orchard</h2><span className='text-yellow-500'>Store</span></Link>
       <ul className='hidden lg:flex lg:items-center gap-8 text-[24px] text-gray-500 font-semibold'>
        <li>
          <NavLink to='/aboutus' className={({isActive}) => isActive ? 'text-green-600' : ''}>{t("Header.About us")}</NavLink>
        </li>
        <li>
          <button className={`flex gap-1 items-center cursor-pointer ${products ? 'text-yellow-500' : ''}`} onClick={() => setProducts(!products)}>{t("Header.Products")}
            {products ? <FaAngleUp className='w-5 h-5'/> : <FaAngleDown className='w-5 h-5'/>}
             </button>
           {products && (
            <div className='absolute top-16 left-0 w-full bg-white py-8 px-20 shadow-md'>
              <h2 className='text-[32px] text-gray-400'>{t("Header.Products")}</h2>
              <ul className='text-[24px] gap-4'>
                <li className='hover:text-yellow-500'><Link to='/dairyproducts'>{t("Header.Product_Categories.DairyProducts")}</Link></li>
                <li className='hover:text-yellow-500'><Link>{t("Header.Product_Categories.Vegetables")}</Link></li>
                <li></li>
                <li></li>
              </ul>
            </div>
           )}
        </li>
       </ul>

     <div className=' lg:flex gap-6 items-center '>
        {/* user account */}
      {user ? <div onMouseEnter={handleEnter} onMouseLeave={handleLeave} className='hidden lg:flex items-center justify-center bg-green-500 w-12 h-12 rounded-full '>
        <h2 className='text-[20px] text-white font-bold cursor-pointer'>{user?.email?.[0].toUpperCase()}</h2>
        {account && (
          <div className='absolute top-20 flex flex-col items-center bg-white py-6 w-[256px] rounded-2xl shadow-md gap-3'>
           <div className='flex items-center justify-center w-16 h-16 bg-green-500 rounded-full text-white text-[24px] font-bold'>
            <h2>{user?.email?.[0].toUpperCase()}</h2>
           </div>
           <h2 className='text-[20px] text-gray-500 font-medium'>{t("Header.hi")}, <span>{user?.email.split('@') [0]}</span></h2>
           <hr className='text-gray-200 w-full'/>
           <button onClick={handleLogOut} className='bg-red-500 w-52 p-2 rounded-3xl text-white font-semibold shadow-md shadow-red-500 cursor-pointer'>Logout</button>
          </div>
        )}
      </div>
      :
      <Link className='text-[24px] text-white py-2 hidden lg:block' to='/login'>
          <h2 className='bg-green-500 px-3 py-1 font-bold rounded-2xl'>{t("Header.Login")}</h2>
      </Link>
      }

      {/* Cart */}
      <Link className='hidden lg:block lg:relative my-2 bg-green-500 p-2 rounded-full' to='/cart'>
       <MdOutlineShoppingCart className='w-[30px] h-[30px] text-white'/>
       <div className='hidden lg:absolute -top-0.5 -right-1 lg:flex lg:items-center justify-center bg-green-600  w-[20px] h-[20px] rounded-full text-white'>
        <h2 className='text-[16px]'>{total}</h2>
       </div>
      </Link>

      {/* Lang-switcher */}
      <div className='bg-gray-200 p-1 rounded-2xl text-gray-800 font-medium relative'>
        <button onClick={() => setLang(!lang)} className='flex items-center gap-2 text-[20px] lg:text-[24px] cursor-pointer'>
          <IoLanguage className='w-6 h-6'/>
          {i18next.language === 'en' ? <h2>Eng</h2> : <h2>O'zb</h2>}
        </button>

        {lang && (
          <div className='absolute top-[70px] text-[20px] lg:text-[24px] left-0 w-full bg-white flex flex-col items-center text-gray-800 font-medium shadow-lg p-1 rounded-2xl'>
             <button onClick={() => i18next.changeLanguage('en')}>Eng</button>
             <button onClick={() => i18next.changeLanguage('uz')}>O'zb</button>
          </div>
        )}
      </div>
     </div>
     </header>
  )
}
