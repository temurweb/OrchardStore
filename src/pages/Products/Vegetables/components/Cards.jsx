import React from 'react'
import Vegetables from '../../../../data/vegetables'
import { useCartStore } from '../../../../store/useCartStore'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

export default function Cards() {
  const [ addedMessage, setAddedMessage ] = useState(false)

  const { t } = useTranslation()


  const { addToCart, decreaseQuantity} = useCartStore()

  return (
    <div className='bg-gray-200 py-10 lg:py-20 px-5 lg:px-20'>
       <h2 className='text-green-600 text-[20px] lg:text-[32px] font-semibold'>{t("Header.Product_Categories.Vegetables")}</h2>
         <div className='grid grid-cols-2 gap-3 lg:grid-cols-5 mt-8'>
          {Vegetables.map((product) => {
            return (
              <div className='bg-white px-2 lg:px-5 py-2 rounded-2xl relative'>
                 <img src={product.image} className={product.class} alt="product.img" />
                <h2 className='text-green-600 text-[20px] lg:text-[24px] font-semibold'>{t(product.name)}</h2>
                 <p className='text-gray-500 text-[16px] lg:text-[20px]'>{product.size}</p>
                  <h2 className='text-gray-700 text-[20px] lg:text-[24px]'>{product.price} <span>{t("Cart.Currency")}</span></h2>
                  <button onClick={() => addToCart(product)} className='bg-green-600 w-full text-white rounded-2xl text-[18px] lg:text-[20px] font-bold p-2 '>{t("Cart.Buttons.AddToCart")}</button>
              </div>
            )
          })}
         </div>
    </div>
  )
}