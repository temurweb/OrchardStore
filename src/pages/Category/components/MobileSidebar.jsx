import React from 'react'
// react-router-dom
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom';
// icons
import { GoSidebarExpand } from "react-icons/go";
import { LuCarrot, LuMilk } from 'react-icons/lu';

export default function MobileSidebar({ sidebar, setSidebar }) {
  return (
   <div className={`fixed top-0 left-0 bg-white/60 backdrop-blur-2xl shadow-md  w-72 h-screen transition-all duration-300 py-5  ${sidebar ? 'translate-x-0' : '-translate-x-full'}`}>
    <div className='flex justify-between items-center px-5'>
     <Link className='flex text-[24px] lg:text-[32px] text-green-600 font-bold' to='/'><h2>Orchard</h2><span className='text-yellow-500'>Store</span></Link>
      <GoSidebarExpand onClick={() => setSidebar(false)} className='w-6 h-6 text-gray-500'/>
    </div> 
    <hr className='my-3 w-full text-gray-200' />
    <ul className='px-5 flex flex-col items-center gap-4'>
        <li className='w-52'>
            <NavLink to='/category/vegetables' className={({isActive}) => `flex justify-center gap-2 items-center p-2 rounded-2xl text-white text-[20px] font-bold ${isActive ? 'bg-yellow-500 shadow-md shadow-yellow-500' : 'bg-gray-400'}`}>
                <LuCarrot className='w-6 h-6'/>                
                <h2>
                Vegetables
                </h2>
            </NavLink>
        </li>
        <li className='w-52'>
            <NavLink to='/category/dairyproducts' className={({isActive}) => `flex justify-center gap-2 items-center p-2 rounded-2xl text-white text-[20px] font-bold ${isActive ? 'bg-yellow-500 shadow-md shadow-yellow-500' : 'bg-gray-400'}`}>
                <LuMilk className='w-6 h-6'/>                
                <h2>
                Dairy Products
                </h2>
            </NavLink>
        </li>
    </ul>
   </div>
  )
}
