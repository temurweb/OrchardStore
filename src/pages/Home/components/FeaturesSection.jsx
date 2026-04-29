import React from 'react'
// react-icons
import { GrDeliver } from "react-icons/gr";
import { SiCodefresh } from "react-icons/si";
import { RiSecurePaymentLine } from "react-icons/ri";
// i18next
import { useTranslation } from 'react-i18next';

export default function FeaturesSection() {
  // hooks
  const { t } = useTranslation()
  return (
    <div className='bg-gray-200 py-10 px-5 md:px-10 lg:px-30 flex flex-col items-center'>
      <h1 className='text-2xl md:text-3xl lg:text-5xl text-green-600 font-bold'>{t("Home.title_4")}</h1>
      {/* Cards */}
      <div className='grid grid-cols-2 md:grid md:grid-cols-3  gap-3 mt-7'>
         {/* Card 1 */}
         <div className='flex flex-col items-center bg-green-400 p-4 md:p-6  rounded-3xl text-white font-bold'>
          <GrDeliver className='w-6 h-6 md:w-8 md:h-8'/>
          <h2 className='text-[16px] md:text-[24px] lg:text-2xl'>{t("Home.title_5")}</h2>
          <p className='text-[13px] md:text-[18px]'>{t("Home.cardtitle_5")}</p>
         </div>
         {/* Card 2 */}
         <div className='flex flex-col items-center bg-green-400 p-4 md:p-6 rounded-3xl text-white font-bold'>
           <SiCodefresh className='w-6 h-6  md:w-8 md:h-8'/>
           <h2 className='text-[16px] md:text-[24px] lg:text-2xl'>{t("Home.title_6")}</h2>
           <p className='text-[13px] md:text-[18px]'>{t("Home.cardtitle_6")}</p>
         </div>
         {/* Card 3 */}
         <div className='flex flex-col items-center bg-green-400 p-4 md:p-6 rounded-3xl text-white font-bold'>
          <RiSecurePaymentLine className='w-6 h-6 md:w-8 md:h-8' />
          <h2 className='text-[16px] md:text-[24px] lg:text-2xl'>{t("Home.title_7")}</h2>
          <p className='text-[13px] md:text-[18px]'>{t("Home.cardtitle_7")}</p>
         </div>
      </div>
    </div>
  )
}
