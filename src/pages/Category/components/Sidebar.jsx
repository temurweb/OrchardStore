import React from 'react'
// react-router-dom
import { NavLink } from 'react-router-dom'
// react-icons
import { LuCarrot, LuMilk } from "react-icons/lu";
import { GoSidebarExpand, GoSidebarCollapse } from "react-icons/go";
import { FiMenu } from "react-icons/fi";
// hooks
import { useState } from 'react';

export default function Sidebar() {
  const [ sidebar, setSidebar ] = useState(false)
    
  return (
    <div className={`bg-white h-screen  shrink-0 hidden lg:flex flex-col items-center gap-3 py-5  ${sidebar ? 'w-60' : 'w-16'}`}>
      {sidebar ? <GoSidebarExpand className='w-6 h-6 text-gray-500' onClick={() => setSidebar(false)}/> : <FiMenu className='w-6 h-6 text-gray-500' onClick={() => setSidebar(!sidebar)}/>}
      <hr className='w-full text-gray-200' />
      <ul className='text-white text-[20px] flex flex-col items-center gap-6 mt-4'>
        <li className={sidebar ? 'w-52' : 'w-fit'}>
        <NavLink className={({isActive}) => `flex gap-1 p-2 font-bold rounded-2xl bg-gray-200 ${isActive ? 'bg-yellow-500 shadow-md shadow-yellow-500' : ''} ${sidebar ? 'justify-start' : 'justify-center'}`} to='/category/vegetables'>
        <LuCarrot className='w-8 h-8 shrink-0'/>
        <h2 className={sidebar ? 'block' : 'hidden'}>Vegetables</h2>
        </NavLink>
        </li>
        <li className={sidebar ? 'w-52' : 'w-fit'}>
        <NavLink className={({isActive}) => `flex gap-1 p-2 font-bold rounded-2xl bg-gray-200 ${isActive ? 'bg-yellow-500 shadow-md shadow-yellow-500' : ''} ${sidebar ? 'justify-start' : 'justify-center'}`} to='/category/dairyproducts'>
        <LuMilk className='w-8 h-8 shrink-0'/>
        <h2 className={sidebar ? 'block' : 'hidden'}>Dairy Products</h2>
        </NavLink>
        </li>
      </ul>
    </div>
  )
}
