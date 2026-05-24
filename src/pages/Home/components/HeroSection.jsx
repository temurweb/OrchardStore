import React from 'react'
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'
// images
import man_withproducts from '../../../images/man_withproducts.png'
// react-icons
import { FaChevronRight } from "react-icons/fa";

export default function HeroSection() {
 const { t } = useTranslation()

  return (
    <div className='px-5 lg:px-10 pt-10 bg-gray-200'>
      <div className='bg-green-600 rounded-3xl flex flex-col items-center lg:flex-row  lg:justify-between pt-10 px-5 md:px-20 h-[512px] overflow-hidden'>
        <div className=''>
          <h2 className='text-[24px] md:text-[32px] lg:text-[40px] text-yellow-500 font-bold'>{t("Home.title_1")}</h2>
          <p className='text-[20px] md:text-[24px] lg:text-[32px] text-white font-bold'>{t("Home.title_2")} <br className='hidden lg:block'/> {t("Home.title_2.5")}</p>
          <Link className='mt-4 ' to='/category'><button className=' w-52 lg:w-64 text-[24px] p-1 bg-yellow-500 text-white font-bold mt-4 rounded-full shadow-md shadow-yellow-500 cursor-pointer'>{t("button_1")}</button></Link>
        </div>
        <img className='w-[200px] lg:w-[410px]' src={man_withproducts} alt="man" />
      </div>
    </div>
  )
}

