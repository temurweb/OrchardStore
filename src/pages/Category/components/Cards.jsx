import React from 'react'
// react-router dom
import { Link } from 'react-router-dom'
// images
import dairy_products from '../../../images/dairy_products.png'
import vegetables from '../../../images/vegetables.png'

export default function Cards() {
  return (
    <div className='bg-gray-200 h-screen py-10 px-5 lg:hidden'>
      <div>
        <h2 className='text-green-600 text-[32px] font-bold'>Category</h2>
         <ul className='flex flex-col items-center gap-6 py-4'>
          <li>
            <Link to='/dairyproducts'>
             <div className='flex items-center gap-2 bg-green-500 px-6 py-2 rounded-full shadow-md shadow-green-500 active:scale-105 active:duration-300'>
              <img className='w-36 object-contain' src={dairy_products} alt="dairy_products" />
              <h2 className='text-white text-[16px] font-bold'>Dairy Products</h2>
             </div>
            </Link>
          </li>
          <li>
            <Link to='/vegetables'>
             <div className='flex items-center gap-2 bg-linear-to-r from-amber-400 to-amber-500 px-6 py-2 rounded-full shadow-md shadow-amber-500 active:scale-105 active:duration-300'>
              <img className='w-32 object-contain' src={vegetables} alt="vegetables" />
              <h2 className='text-white text-[16px] font-bold'>Fresh Vegetables</h2>
             </div>
            </Link>
          </li>
          <li></li>
          <li></li>
         </ul>
      </div>
    </div>
  )
}
