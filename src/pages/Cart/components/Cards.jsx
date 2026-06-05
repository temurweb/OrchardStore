import React from 'react'
// images
import search from '../../../images/search.png'
// hooks
import { useCartStore } from '../../../store/useCartStore'
import { useTranslation } from 'react-i18next'
// icons
import { FiPlus, FiMinus } from 'react-icons/fi'
import { IoCloseOutline } from "react-icons/io5";
// react-router-dom
import Link from 'react-router-dom'

export default function Cards() {
 
  // translation
  const { t } = useTranslation()

   // cart
  const { cart, addToCart, decreaseQuantity, removeFromCart } = useCartStore()

  if (cart.length === 0) {
    return (
      <div className='bg-gray-200 min-h-screen py-20 px-10 flex flex-col items-center'>
        <img className='w-[230px] h-[340px] md:w-[350px] md:h-[512px]' src={search} alt="search" />
        <h2 className='text-green-600 text-[20px] md:text-[24px] lg:text-[32px] font-semibold'>{t("Cart.title_2")}</h2>
        <p className='text-[16px] md:text-[20px] lg:text-[24px] text-yellow-500 font-bold'>{t("Cart.title_3")}</p>
        <Link to='/categories'><button className="w-52 text-white bg-yellow-500  p-2 rounded-3xl>{t("Cart.Buttons.Cta_Btn")}</button></Link>      
      </div>
    )
  }

  return (
    <div className='bg-gray-200 min-h-screen px-5 py-10 lg:py-20 lg:px-20'>
      <h2 className='text-center text-green-600 text-[24px] lg:text-[32px] font-semibold'>{t("Cart.title_1")}</h2>
       <div className='flex justify-between items-center'>
          <div className='w-full max-w-[800px] mt-5 lg:mt-10 bg-white rounded-2xl shadow-md'>
            {/* Header */}
          <ul className='hidden lg:grid grid-cols-[3fr_2fr_2fr_1fr] px-5 py-3 rounded-2xl  bg-green-500 text-white text-[24px] font-bold'>
            <li><h2>{t("Cart.Header.Product")}</h2></li>
            <li><h2>{t("Cart.Header.Price")}</h2></li>
            <li><h2>{t("Cart.Header.Quantity")}</h2></li>
            <li><h2>Subtotal</h2></li>
          </ul>

            {/* Header for mobile */}
            <h2 className='text-center my-3 lg:hidden text-[20px] text-yellow-500 font-bold'>{t("Cart.ProductsList")}</h2>
            <hr className='text-gray-200 lg:hidden' />

            {/* Products */}
            <div className=''>
              {cart.map((product) => {
                return (
                  <div className='flex lg:grid lg:grid-cols-[3fr_2fr_2fr_1fr] gap-4 items-center px-5 py-3 relative' key={product.id}>
                    <div className='flex gap-3 items-center'>
                      <img src={product.image} className='w-36 h-32 lg:w-32 lg:h-32 object-contain rounded-2xl bg-green-600' alt="" />
                       <div className='flex flex-col'>
                        <h2 className='text-[16px] md:text-[20px] lg:text-[24px] font-medium'>{t(product.name)}</h2>
                        <p className='text-[14px] md:text-[16px] lg:text-[20px] font-light text-gray-800'>{product.size}</p>
                        <p className='lg:hidden text-[16px] font-medium'>{product.price} {t("Cart.Currency")}</p>
                        <div className='flex items-center gap-2'>
                          {/* Quantity for mobile */}
                        <div className='flex justify-center gap-2 mt-2 rounded-full p-1 bg-gray-200 w-20 lg:hidden'>
                          <button disabled={product.quantity === 1} ><FiMinus className='bg-white p-0.5 rounded-full w-5 h-5' onClick={() => decreaseQuantity(product)}/></button>
                          <p>{product.quantity}</p>
                          <button disabled={product.quantity === 20}><FiPlus  className='bg-green-500 p-0.5 rounded-full w-5 h-5 text-white' onClick={() => addToCart(product)}/></button>
                        </div>
                        </div>
                        <IoCloseOutline onClick={() => removeFromCart(product)} className='absolute top-4 right-3 w-5 h-5 text-gray-500'/>
                       </div>
                    </div>
                    <h2 className='text-[19px] font-bold hidden lg:block'>{product.price} {t("Cart.Currency")}</h2>
                    <div className='bg-gray-200 hidden lg:flex justify-center items-center gap-2 w-24 p-2 rounded-full font-bold'>
                      <button disabled={product.quantity === 1}>
                        <FiMinus onClick={() => decreaseQuantity(product)} className='w-6 h-6 cursor-pointer'/>
                      </button>
                      <p className='text-[20px]'>{product.quantity}</p>
                     <button disabled={product.quantity === 20}>
                       <FiPlus onClick={() => addToCart(product)} className='w-6 h-6 cursor-pointer'/>
                     </button>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
       </div>
    </div>
  )
}
