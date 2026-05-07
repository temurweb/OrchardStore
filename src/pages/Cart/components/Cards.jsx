import React from 'react'
// cart
import { useCartStore } from '../../../store/useCartStore'
// hooks
import { useTranslation } from 'react-i18next'
// react-icons
import { AiOutlinePlus, AiOutlineMinus, AiFillDelete } from "react-icons/ai"

export default function Cards() {
  const { cart, addToCart, decreaseQuantity, removeFromCart } = useCartStore()

  // translation
  const { t } = useTranslation()


  // cart
  const totalPrice = cart.reduce((sum, item) => {
    return sum + item.price * item.quantity
  }, 0)

  // if cart is empty
  if (cart.length === 0) {
    return (
      <div className='bg-gray-200 py-10 px-20 min-h-screen '>
        <h2>Cart is empty. Begin searching for products to continue</h2>
      </div>
    )
  }

  return (
    <div className='bg-gray-200 py-10 px-5 lg:px-10 flex flex-col items-center gap-6 lg:flex-row lg:items-start lg:justify-center lg:gap-8'>
      <div className='bg-white rounded-3xl w-[380px] lg:w-[800px] relative'>
        {cart.map((item) => {
        return (
          <div className='  gap-4 px-2 py-5 text-[16px] lg:text-[20px] border-2 border-gray-200' key={item.id}>
            <div className='flex gap-3'>
             <img src={item.image} className={item.class} alt="item.image" />
              <div>
              <h2>{t(item.name)}</h2>
               <div className='flex gap-1'>
                <p>{t("Cart.Size")} {item.size}</p>
              </div> 
              <h2 className=''>{item.price} {t("Cart.Currency")}</h2>
              <div className='flex justify-center w-24 lg:w-32 rounded-2xl items-center gap-4 bg-gray-200 mt-4 border border-gray-800/70'>
                <button disabled={item.quantity === 10} onClick={() => addToCart(item)}>
                  <AiOutlinePlus className='w-5 h-5 cursor-pointer'/>
                </button>
                <p>{item.quantity}</p>
                <button disabled={item.quantity === 1} onClick={() => decreaseQuantity(item)}>
                  <AiOutlineMinus className='w-5 h-5 cursor-pointer'/>
                </button>
              </div>
              {/* Delete button for desktop */}
              <button className='absolute right-6 top-8' onClick={() => removeFromCart(item)}>
                <AiFillDelete/>
              </button>
              </div> 
            </div> 
               
          </div>
        )
      })}
      </div>
      
      {/* subtotal */}
      <div className='bg-white flex flex-col  rounded-2xl w-[300px] lg:w-[400px] py-4'>
        <h2 className='text-[24px] text-green-600 font-bold text-center'>SubTotal:</h2>
         <div className='flex flex-col mt-4 gap-4'>
           <hr className='text-gray-200 w-full' />
           <div className='flex justify-between px-2'>
            <h2 className='text-[16px] lg:text-[20px] font-bold'>Total Price:</h2>
            <h2 className='text-[16px] lg:text-[20px] font-extrabold underline'>{totalPrice} {t("Cart.Currency")}</h2>
           </div>
         </div>
      </div>
    </div>
  )
}
