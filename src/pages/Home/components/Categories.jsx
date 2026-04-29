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
      <div className='px-20 py-20 bg-gray-200'>
        <h2 className='text-2xl md:text-5xl text-center text-green-600 font-semibold'>{t("Home.title_3")}</h2>
        {/* Cards */}
        <div className='grid grid-cols-1 gap-8 mt-6 md:grid md:grid-cols-3 lg:grid lg:grid-cols-4'>
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
