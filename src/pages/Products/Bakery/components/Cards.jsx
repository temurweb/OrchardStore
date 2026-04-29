import React from 'react'
import Bakery from '../../../../data/bakery'
import { useCartStore } from '../../../../store/useCartStore'
import { useState } from 'react'

export default function Cards() {
  const [ addedMessage, setAddedMessage ] = useState(false)


  const addToCart = useCartStore(state => state.addToCart)

  return (
    <div>
      <div className='bg-gray-200 py-10 px-5 md:px-20 '>
      <h1 className='text-[24px] md:text-[40px] text-green-600 font-bold'>Bakery</h1>
      {/* for cards */}
      <div className='grid grid-cols-2 md:flex md:flex-row gap-2 md:gap-3'>
        {Bakery.map(product => (
        <div key={product.id} className='flex flex-col items-center  h-full max-w-2xs  rounded-3xl bg-white p-2'>
       <img className={product.class} src={product.image} alt="" />
          <p className='text-[12px] md:text-[16px] font-bold'>{product.name}</p>
           <p className='bg-yellow-400 p-2 rounded-2xl text-white font-bold'>{product.price} UZS</p>
          <button onClick={() => addToCart(product)} className=' bg-green-600 rounded-3xl p-2 text-[16px] text-white font-bold mt-2'>Add To Cart</button>
          <div>
  
          </div>
        </div>
        ))}
      </div>
      </div>
    </div>
  )
}