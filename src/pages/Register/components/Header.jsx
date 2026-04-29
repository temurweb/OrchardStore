import React from 'react'
// react-router-dom
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className='bg-green-600 px-5 lg:px-10 h-12 flex justify-between items-center'>
      <Link  className='flex font-bold' to='/'><h2 className='text-white'>Orchard</h2><span className='text-yellow-500'>Store</span></Link>
    </div>
  )
}
