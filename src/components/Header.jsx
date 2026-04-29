import React from 'react'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router-dom'
// firebase
import { useAuth } from '../context/AuthContext'
import { signOut } from 'firebase/auth'
// react-icons
import { GoSidebarCollapse } from "react-icons/go";
import { GoSidebarExpand } from "react-icons/go";
import { CgGlobeAlt } from "react-icons/cg";
import { CgMathEqual } from "react-icons/cg";
import { CgClose } from "react-icons/cg";
import { CgChevronDown } from "react-icons/cg";
import { CgChevronUp } from "react-icons/cg";
import { BiSolidCart } from "react-icons/bi";
import { FaAngleRight } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa6";
import { MdOutlineLogin } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { FaInfo } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { IoIosClose } from "react-icons/io";
// i18next
import i18n from 'i18next'
// useCartStore
import { useCartStore } from '../store/useCartStore'
// imported images
import fresh_products from '../images/fresh_products.png'
import { auth } from '../firebase/config'


export default function Header() { 
const { user } = useAuth()

const [ profile, setProfile ] = useState(false)

const handleSignOut = async (e) => {
  e.preventDefault()
  try {
    const logOut = await signOut(auth)
    console.log(logOut)
  } catch (error) {
    console.log(error.message)
  }
}


// handleProduct
const handleProduct = () => {
  setProduct(!product)
  setMenu(false)
}


// menu 
const [ menu, setMenu ] = useState(false)

//  Language
const [ lang, setLang ] = useState(false)



// For product pages menu
const [ productPages, setProductpages ] = useState(false)

const handlePage = () => {
  setProductpages(!productPages)
  setLang(false)
}


// useLocation
const location = useLocation()
const isDairyproducts = location.pathname === "/dairyproducts"
const isLogin = location.pathname === "/login"
const isRegister = location.pathname === "/register"
const isCart = location.pathname === "/cart"


// for cart
const cart =  useCartStore(state => state.cart)
const totalItems = cart.length


  // translation
  const { t } = useTranslation()



  return (
    <div>
      <header className={`flex relative justify-between  lg:z-50 lg:justify-center gap-2 md:gap-10 h-16 items-center px-5 md:px-10 ${productPages ? "bg-green-400" : "bg-linear-to-r from-green-600 to-green-800 "} ${isLogin || isRegister ? "hidden" : ""}`}>
        <Link to='/'><h2 className='text-[20px] md:text-[24px] lg:text-[24px] text-white  font-semibold'>Orchard<span className='text-yellow-400'>Store</span></h2></Link>
        <ul className=' gap-8 text-white text-[16px] font-bold hidden lg:flex'>
            <li className={`duration-300 hover:text-yellow-400 `}><NavLink className={({isActive}) => isActive ? "bg-green-400 p-1 rounded-2xl" : ""} to='/aboutus'>{t("Header.About us")}</NavLink></li>
            <li>
              <div  onClick={handlePage} className='flex gap-1'>
                <button className={`cursor-pointer ${productPages ? "text-yellow-400" : ""}`}>{t("Header.Products")}</button>
                {productPages ? <CgChevronUp className={`w-6 h-6 cursor-pointer ${productPages ? "text-yellow-400" : ""}`}/> : <CgChevronDown className={`w-6 h-6 cursor-pointer${productPages ? "text-yellow-400" : ""}`}/>}
                {productPages && (
                  <div className={`absolute top-16 bg-green-400 w-full left-0 px-10 text-[16px] h-96 transform-transition duration-500  ${productPages ? "translate-y-0" : "-translate-y-full"}`}>
                    <div className='flex justify-between gap-10'>
                     <div className='flex-col'>
                      <h2 className='pt-10 text-[32px] pb-5'>Products Category</h2>
                    <ul className='text-[24px]'>
                      <li className='transition-transform duration-500 hover:text-yellow-400'><Link to='dairyproducts'>{t("Header.Product_Categories.DairyProducts")}</Link></li>
                      <li className='transition-transform duration-500 hover:text-yellow-400'><Link to='/vegetables'>Vegetables</Link></li>
                      <li className='transition-transform duration-500 hover:text-yellow-400'><Link to='/bakery'>Bakery</Link></li>
                    </ul>
                     </div>
                     <img className='w-2xl ml-10' src={fresh_products} alt="" />
                    </div>
                  </div>
                )}
              </div>
            </li>
          {user ? <div className='relative flex flex-col items-center'><button className='flex items-center gap-1 cursor-pointer' onClick={() => setProfile(!profile)}><CgProfile className='w-6 h-6'/> <h2>{t("Header.Account")}</h2></button>
           {profile && (
            <div className='absolute top-12 bg-gray-200 flex justify-between items-center px-10 py-8 gap-3 rounded-3xl'>
              <div className='flex flex-col items-center gap-3 '>
                <div className='w-16 h-16  flex items-center justify-center bg-linear-to-r from-green-700 to-green-500 rounded-full '>
                <h2>{user?.email?.slice(0, 2).toUpperCase()}</h2>
              </div>
              <h2 className='flex items-center gap-2 text-gray-900'>Hi,<span>{user?.email}!</span></h2>
              <button onClick={handleSignOut} className='bg-red-500 px-5 py-3 rounded-3xl'>Log Out</button>
              </div>
              <IoIosClose onClick={() => setProfile(false)} className='absolute top-3 right-4 text-black cursor-pointer w-6 h-6'/>
            </div>
           )}
          </div>
          :
          <ul className='flex gap-8'>
            <li className='duration-500 hover:text-yellow-400'><NavLink className={({isActive}) => isActive ? "bg-green-400 p-1 rounded-2xl" : ""} to='/login'>Login</NavLink></li>
            <li className='duration-500 hover:text-yellow-400'><NavLink className={({isActive}) => isActive ? "bg-green-400 p-1 rounded-2xl" : ""} to='/register'>Register</NavLink></li>
          </ul>
          }
        </ul>
      

 
        {/* Language switcher */}
       <div className={`relative flex flex-col items-center duration-300 `}>
        <div onClick={() => setLang(!lang)} className={`flex gap-1 cursor-pointer ${productPages ? "opacity-0 pointer-events-none" : ""}`}>
          <CgGlobeAlt className='w-6 h-6 text-white'/>
          <button className='font-bold text-white cursor-pointer' >
          {i18n.language === "en" ? <h2>English</h2> : <h2>O'zbekcha</h2>}
        </button>
        </div>
        {lang && (
          <div className='absolute top-8 text-white text-[16px] font-bold flex flex-col items-center p-2 bg-green-400 rounded-3xl '>
            <button className='cursor-pointer duration-300 hover:text-yellow-400' onClick={() => i18n.changeLanguage("en")}>English</button>
            <button className='cursor-pointer duration-300 hover:text-yellow-400' onClick={() => i18n.changeLanguage("uz")}>O'zbekcha</button>
          </div>
        )}
       </div>
  
   {/* Cart */}
   <div className={`hidden lg:block`}>
    <NavLink className={({isActive}) => `flex gap-1 items-center hover:text-yellow-500 ${isActive ? "bg-green-400 p-1 rounded-2xl " : ""}` } to='/cart'>
    <BiSolidCart className='h-6 w-6 text-white'/>
    <h2 className='text-white font-bold'>Cart {totalItems}</h2>
    </NavLink>
   </div>
    </header>
    </div>
  )
}
