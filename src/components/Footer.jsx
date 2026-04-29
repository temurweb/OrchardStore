import React from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
// react-icons
import { FaCopyright } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { FaTelegram } from "react-icons/fa";


export default function Footer() {
 const location = useLocation()
 const isLogin = location.pathname === "/login"
 const isRegister = location.pathname === "/register"

 const { t } = useTranslation()


  return (
   <footer className={`bg-gray-700 px-5 md:px-10 lg:px-30 py-8 ${isLogin || isRegister ? "hidden" : ""}`}>
    <div className='flex flex-col items-center  md:flex-row md:justify-between  py-10'>
    <h1 className=' text-white text-4xl font-bold'>Orchard<span className='text-yellow-400'>Store</span></h1>
    <h2 className='text-white text-2xl font-bold'>{t("Footer.title_1")}</h2>
    </div>
    <hr className='text-white/30 mb-8' />
    <div className='flex flex-col items-center md:flex-row md:justify-center gap-5 md:gap-20'>
        {/* Category 1 */}
     <div className=''>
        <h2 className='text-white font-bold text-[20px] md:text-[24px]'>{t("Footer.ul_title_1")}</h2>
        <ul className='text-white text-[16px]'>
            <li className='hover:underline'><Link to='/dairyproducts'>{t("Footer.li_title_1")}</Link></li>
            <li className='hover:underline'><Link to='/vegetables'>{t("Footer.li_title_2")}</Link></li>
            <li className='hover:underline'><Link to='/bakery'>{t("Footer.li_title_3")}</Link></li>
        </ul>
     </div>

      {/* Category 2 */}
      <div>
        <h2 className='text-white font-bold text-[20px] md:text-[24px]'>{t("Footer.ul_title_2")}</h2>
        <ul className='text-white text-[16px]'>
            <li className='hover:underline'><Link to='/aboutus'>{t("Footer.li_title_4")}</Link></li>
            <li className='hover:underline'><Link to='/cart'>{t("Footer.li_title_5")}</Link></li>
            <li className='hover:underline'>{t("Footer.li_title_6")}</li>
          </ul>
      </div>
    </div>
    <hr className='text-white/30 mt-10' />
    <div className='flex flex-col items-center md:flex-row md:justify-between py-10'>
    <div className='flex flex-col md:flex-row  md:justify-between gap-20'>
    <div className='flex justify-center gap-8 text-gray-300 font-semibold text-[18px] md:text-[16px]'>
    <h2 className='hover:underline cursor-pointer'>{t("Footer.title_2")}</h2>
    <h2 className='hover:underline cursor-pointer'>{t("Footer.title_3")}</h2>
    </div>
    <div className='flex justify-center  gap-6'>
      <a href="https://www.youtube.com/"><FaYoutube className='w-10 h-10 text-white duration-500 hover:text-gray-900 cursor-pointer'/></a>
      <a href="https://www.instagram.com"><IoLogoInstagram className='w-10 h-10 text-white duration-500 hover:text-gray-900 cursor-pointer'/></a>
      <a href="https://www.telegram.com"><FaTelegram className='w-10 h-10 text-white duration-500 hover:text-gray-900'/></a>
    </div>
    </div>
        <div className='flex justify-center gap-2 py-8'>
      <FaCopyright className='text-white w-5 h-5 ' />
      <h2 className='text-white text-[14px] font-bold'>2026 OrchardStore. {t("Footer.title_4")}</h2>
    </div>
    </div>
   </footer>
  )
}
