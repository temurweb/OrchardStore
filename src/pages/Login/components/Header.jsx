import React from 'react'
// react-router-dom
import { Link } from 'react-router-dom'
// i18n
import i18n from 'i18next'
import { useTranslation } from 'react-i18next'
// hooks
import { useState } from 'react'
// react-icons
import { CgGlobeAlt } from "react-icons/cg";


export default function Header() {
 const { t } = useTranslation()

//  setLang
const [ lang, setLang ] = useState(false)

  return (
    <div className='bg-green-600 px-5 lg:px-10 h-12 flex justify-between items-center shadow-md'>
      <Link  className='flex font-bold text-[18px] lg:text-[24px]' to='/'><h2 className='text-white'>Orchard</h2><span className='text-yellow-500'>Store</span></Link>
      {/* language switcher */}
      <div className='relative flex flex-col items-center'>
        <button className='flex gap-1 items-center bg-green-500 text-white p-1.5 rounded-4xl'>
          <CgGlobeAlt className='w-6 h-6'/>
          {i18n.language === "en" ? <h2>English</h2> : <h2>O'zbekcha</h2>}
        </button>
      </div>
    </div>
  )
}
