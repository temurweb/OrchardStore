import React from 'react'
// react-router dom
import { Link } from 'react-router-dom'
// images
import dairy_products from '../../../images/dairy_products.png'
import vegetables from '../../../images/vegetables.png'
// react-icons
import { LuMilk } from "react-icons/lu";
import { FaArrowRight } from "react-icons/fa6";

export default function Cards() {
  return (
    <div className='bg-gray-200 h-screen py-10 px-5 md:px-10 lg:px-20'>
      <h2 className='text-[24px] md:text-[32px] lg:text-[40px] text-green-600 font-bold'>Shop By Categories</h2>
      {/* cards */}
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center py-10'>
        {/* Card 1 */}
        <div className='flex justify-between items-center bg-linear-to-r from-white to-blue-100 px-4 py-8 shadow-md rounded-3xl overflow-x-hidden'>
          <div className='flex flex-col gap-2'>
            <LuMilk className='w-8 h-8 p-1 bg-blue-300 text-white rounded-full'/>
             <h2 className='text-blue-700 text-[20px] lg:text-[24px] font-semibold'>Dairy Products</h2>
              <p className='text-blue-500 font-bold'>Fresh Milk, Cheese and Butter</p>
              <Link className='flex items-center gap-2 text-green-600 text-[16px] md:text-[20px] lg:text-[24px] font-bold mt-2' to='/dairyproducts'>
              <h2>Shop Now</h2>
              <FaArrowRight/>
              </Link>
          </div>
          <img className='w-[200px] hidden lg:block' src={dairy_products} alt="" />
        </div>
      </div>
    </div>
  )
}
