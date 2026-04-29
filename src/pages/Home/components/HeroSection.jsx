import React from 'react'
import shopping_man_and_woman from '../../../images/shopping_man_and_woman.png'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

export default function HeroSection() {
  const { t } = useTranslation()
  return (
    <div>
      <div className='pt-20 bg-linear-to-r from-green-600 to-green-800 px-5 md:px-20 flex flex-col lg:flex-row'>
        <div className='flex flex-col items-center'>
          <h1 className='text-yellow-500 text-2xl md:text-5xl font-bold'>{t("Home.title_1")}</h1>
        <p className='text-[16px] md:text-[24px] text-white font-semibold'>{t("Home.title_2")}</p>
        <div className='flex gap-2 md:gap-4 mt-4 md:mt-3'>
        <button className='w-44 lg:w-52 px-3 py-2 bg-yellow-500 mt-2 rounded-full text-[20px] lg:text-[24px] text-white font-semibold shadow-md shadow-yellow-500'>{t("button_1")}</button>
        <button className='w-44 lg:w-52 px-3 py-2 border-2 border-yellow-500 mt-2 rounded-full text-yellow-500 text-[20px] lg:text-[24px] font-semibold hover:bg-yellow-500 hover:text-white hover:shadow-md hover:shadow-yellow-500'><Link to='/aboutus'>{t("button_2")}</Link></button>
        </div>
        </div>
        <img className='w-3xl mt-5 lg:mt-0' src={shopping_man_and_woman} alt="shoppingmanandwoman" />
      </div>
    </div>
  )
}
