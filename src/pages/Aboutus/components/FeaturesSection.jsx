import React from 'react'
// images
import customer from '../../../images/customer.png'
// hooks
import { useTranslation } from 'react-i18next'

export default function FeaturesSection() {
 const { t } = useTranslation()

  return (
    <div className='py-20 pr-20 bg-gray-200 flex flex-col lg:flex-row lg:justify-between gap-8'>
        <img className='w-[512px]  lg:w-[712px] lg:h-[512px] rounded-tr-3xl rounded-br-3xl' src={customer} alt="" />
      <div className='flex flex-col  pl-5 lg:pl-8'>
      <h2 className='text-[24px] lg:text-[32px] text-green-600 font-bold'>{t("About.FeaturesSection.title_1")}</h2>
      <p className='text-[20px] lg:text-[24px] text-yellow-500 font-semibold'>{t("About.FeaturesSection.title_2")}</p>
      <button className='w-52 px-3 py-2 bg-yellow-500 mt-2 rounded-full text-[20px] lg:text-[24px] text-white font-semibold shadow-md shadow-yellow-500'>{t("button_2")}</button>
      </div>
    </div>
  )
}
