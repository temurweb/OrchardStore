import React from 'react'
import dairy_products from '../../../images/dairy_products.png'
import vegetables from '../../../images/vegetables.png'
import fruits from '../../../images/fruits.png'
import bakery from '../../../images/bakery.png'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'


export default function Categories() {
  const { t } = useTranslation()
  return (
    <div>
      <div className=' px-5 lg:px-20 py-8 bg-gray-200'>
        <div className='flex justify-center lg:justify-between items-center'>
          <h2 className='text-[24px] lg:text-[32px] text-center text-green-600 font-semibold'>{t("Home.title_3")}</h2>
           <Link className='hidden lg:block' to='/category'>
            <button className='text-white text-[16px] lg:text-[20px] bg-green-600 p-2 rounded-2xl font-semibold shadow-md shadow-green-600 cursor-pointer active:scale-105'>{t("button_3")}</button>
           </Link>
        </div>
        {/* Cards */}
        <div className='grid grid-cols-1  gap-8 mt-6 md:grid md:grid-cols-3 lg:grid lg:grid-cols-4'>
         {/* Card 1 */}
         <div className='flex flex-col items-center bg-white rounded-3xl p-2 md:p-2 shadow-md duration-500 hover:scale-105 hover:shadow-xl cursor-pointer'>
           <Link to='/dairyproducts'><img className='w-56 h-48 object-contain' src={dairy_products} alt="dairy" /></Link>
           <h2 className='text-[16px] text-gray-400 font-bold'>{t("Home.cardtitle_1")}</h2>
         </div>
         {/* Card 2 */}
         <div className='flex flex-col items-center bg-white rounded-3xl p-2 md:p-3 shadow-md duration-500 hover:scale-105 hover:shadow-xl cursor-pointer'>
            <Link to='/vegetables'><img className='w-56 h-48 object-conatin' src={vegetables} alt="vegetables" /></Link>
            <h2 className='text-[16px] text-gray-400 font-bold'>{t("Home.cardtitle_2")}</h2>
         </div>
         {/* Card 3 */}
         <div className='flex flex-col items-center bg-white rounded-3xl p-2 md:p-3 shadow-md duration-500 hover:scale-105 hover:shadow-xl cursor-pointer'>
            <img className='w-56 h-48 object-contain' src={fruits} alt="fruits" />
            <h2 className='text-[16px] text-gray-400 font-bold'>{t("Home.cardtitle_3")}</h2>
         </div>
         {/* Card 4 */}
         <div className='flex flex-col items-center bg-white rounded-3xl p-2 md:p-3 shadow-md duration-500 hover:scale-105 hover:shadow-xl cursor-pointer'>
            <img className='w-56 h-48 object-contain' src={bakery} alt="bakeries" />
            <h2 className='text-[16px] text-gray-400 font-bold'>{t("Home.cardtitle_4")}</h2>
         </div>
        </div>
      </div>
    </div>
  )
}
