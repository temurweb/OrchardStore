import React from 'react'
import dairyProducts from '../../../../data/dairyproducts'
import { useCartStore } from '../../../../store/useCartStore'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

export default function Cards() {
  const [ addedMessage, setAddedMessage ] = useState(false)

  const { t } = useTranslation()


  const addToCart = useCartStore(state => state.addToCart)

  return (
    <div>
      <div className='bg-gray-200 py-10 px-5 md:px-20 '>
      <h1 className='text-[24px] md:text-[40px] text-green-600 font-bold'>Dairy Products</h1>
      {/* for cards */}
      <div className='grid grid-cols-2 justify-center md:flex md:flex-row gap-2 md:gap-3'>
        {dairyProducts.map(product => (
        <div key={product.id} className='flex flex-col items-center  h-full max-w-2xs  rounded-3xl bg-white p-2'>
       <img className={product.class} src={product.image} alt="" />
          <p className='text-[12px] md:text-[16px] font-bold'>{t(product.name)}</p>
           {product.pricePerkg && <p className='bg-yellow-400 p-2 rounded-2xl text-white font-bold'>{product.pricePerkg} UZS </p>}
           {product.price && <p className='bg-yellow-400 p-2 rounded-2xl text-white font-bold'>{product.price} UZS</p>}
          <div className='flex gap-2 text-gray-600 font-bold'>
          {product.size && <p className=''>{product.size}</p>}
          {product.pricePerG && <p>{product.pricePerG} UZS</p>}
          </div>
          <button onClick={() => addToCart(product)} className=' bg-green-600 rounded-3xl p-2 text-[16px] text-white font-bold'>Add To Cart</button>
          <div>
  
          </div>
        </div>
        ))}
      </div>
      </div>
    </div>
  )
}
