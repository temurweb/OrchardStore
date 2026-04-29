import React from 'react'
import vegetables from '../../../../data/vegetables'
import { useCartStore } from '../../../../store/useCartStore'
import { useState } from 'react'

export default function Cards() {
  const [ addedMessage, setAddedMessage ] = useState(false)


  const addToCart = useCartStore(state => state.addToCart)

  return (
    <div>
      <div className='bg-gray-200 py-10 px-5 md:px-20 '>
      <h1 className='text-[24px] md:text-[40px] text-green-600 font-bold'>Dairy Products</h1>
      {/* for cards */}
      <div className='grid grid-cols-2 md:flex md:flex-row gap-2 md:gap-3'>
        {vegetables.map(vegetable => (
        <div key={vegetable.id} className='flex flex-col items-center  h-full max-w-2xs  rounded-3xl bg-white p-2'>
       <img className={vegetable.class} src={vegetable.image} alt="" />
          <p className='text-[12px] md:text-[16px] font-bold'>{vegetable.name}</p>
           {vegetable.pricePerkg && <p className='bg-yellow-400 p-2 rounded-2xl text-white font-bold'>{vegetable.pricePerkg} UZS </p>}
           {vegetable.price && <p className='bg-yellow-400 p-2 rounded-2xl text-white font-bold'>{vegetable.price} UZS</p>}
          <div className='flex gap-2 text-gray-600 font-bold'>
          {vegetable.size && <p className=''>{vegetable.size}</p>}
          {vegetable.pricePerG && <p>{vegetable.pricePerG} UZS</p>}
          </div>
          <button onClick={() => addToCart(vegetable)} className=' bg-green-600 rounded-3xl p-2 text-[16px] text-white font-bold mt-2'>Add To Cart</button>
          <div>
  
          </div>
        </div>
        ))}
      </div>
      </div>
    </div>
  )
}

