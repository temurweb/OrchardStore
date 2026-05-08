import React from 'react'
// components
import { Outlet } from 'react-router-dom'
import Sidebar from './components/Sidebar'


export default function Category() {
  return (
    <div className='flex'>
     <Sidebar/>
     <Outlet/>
    </div>
  )
}
