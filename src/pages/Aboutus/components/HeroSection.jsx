import React from 'react'
// images
import deliver from '../../../images/deliver.jpg'
import { useTranslation } from 'react-i18next'
// icons
import { CiDeliveryTruck } from "react-icons/ci";
import { AiFillProduct } from "react-icons/ai";


export default function HeroSection() {
  const { t } = useTranslation()
  return (
    <div className='bg-linear-to-r from-green-600 to-green-800 py-10 pl-5 lg:pl-20 flex flex-col  lg:flex-row lg:gap-6 lg:justify-between lg:relative'>
      <div className=''>
      <h2 className='text-[24px] lg:text-[32px] text-white font-bold'>{t("About.HeroSection.title_1")}, <br /> {t("About.HeroSection.title_2")} <br /> {t("About.HeroSection.title_3")}</h2>
      <p className='text-[20px] lg:text-[24px] text-yellow-500 font-medium'>{t("About.HeroSection.title_4")} <br /> {t("About.HeroSection.title_5")}</p>
      <button className='w-52 px-3 py-2 bg-yellow-500 mt-2 rounded-full text-[20px] lg:text-[24px] text-white font-semibold shadow-md shadow-yellow-500'>{t("button_1")}</button>
      </div>
      <ul className='hidden lg:flex lg:gap-5 lg:absolute lg:left-20 lg:bottom-10'>
        <li>
          <div className='flex flex-col gap-2  bg-linear-to-r from-green-700 to-green-900 p-3 rounded-3xl shadow-lg shadow-green-700'>
            <div className='flex items-center gap-2'>
              <CiDeliveryTruck className='w-8 h-8 font-bold bg-green-500 p-1 text-white rounded-full'/>
            <h2 className='text-white text-[20px] font-bold'>{t("About.HeroSection.cardtitle_1")}</h2>
            </div>
            <p className='text-white text-[16px] font-medium'>{t("About.HeroSection.cardtitle_2")} <br /> {t("About.HeroSection.cardtitle_3")}</p>
          </div>
        </li>
        <li>
          <div className='flex flex-col gap-2 bg-linear-to-r from-green-700 to-green-900 p-3 rounded-3xl shadow-lg shadow-green-700'>
            <div className='flex items-center gap-2'>
               <AiFillProduct className='w-[28px] h-[28px] font-bold bg-green-500 p-1 text-white rounded-full'/>
              <h2 className='text-white text-[20px] font-bold'>{t("About.HeroSection.cardtitle_4")}</h2>
            </div>
            <p className='text-white text-[16px] font-medium'>{t("About.HeroSection.cardtitle_5")} <br /> {t("About.HeroSection.cardtitle_6")}</p>
          </div>
        </li>
        <li></li>
      </ul>
      <img className='w-[512px] pt-4  lg:w-[760px] lg:h-[612px] rounded-tl-4xl rounded-bl-4xl' src={deliver} alt="" />
    </div>
  )
}

