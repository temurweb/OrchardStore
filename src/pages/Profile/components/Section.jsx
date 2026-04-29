import React from 'react'
// auth
import { useAuth } from '../../../context/AuthContext'
// react-icons
import { MdMarkEmailRead } from "react-icons/md";

export default function Section() {
  const { user } = useAuth()
  return (
    <div className='bg-gray-200 py-10 px-10 flex flex-col items-center min-h-screen'>
      <h2 className='mb-6 text-[24px] text-green-600 font-bold'>Your Profile</h2>
      <div className='flex flex-col items-center bg-white w-[340px] py-8 rounded-3xl shadow-lg'>
        <div className='flex items-center justify-center p-2 rounded-full w-30 h-30 bg-green-500'>
          <h2 className='text-[30px] text-white font-bold'>{user?.email.slice(0, 2).toUpperCase()}</h2>
        </div>
        <h2 className='text-[24px] mt-6 text-gray-600 font-semibold'>Hi, {user?.email.split("@")[0]}</h2>
        <hr  className='w-full text-gray-200 mt-3'/>
        <h2 className='mt-3 flex items-center gap-2 text-gray-600 font-medium'><MdMarkEmailRead className='w-8 h-8 text-green-500 bg-gray-200 p-2 rounded-2xl'/> {user?.email}</h2>
      </div>
    </div>
  )
}
