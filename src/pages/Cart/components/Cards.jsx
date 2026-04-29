import React from 'react'
import { useCartStore } from '../../../store/useCartStore'
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
// image
import search from '../../../images/search.png'
// react-icons
import { MdDelete } from "react-icons/md";
import { FiPlus } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";

export default function Cards() {
   const { t } = useTranslation()

    const {cart, addToCart, removeFromCart, decreaseQuantity } = useCartStore()
    console.log(cart.length, cart)



   if (cart.length === 0) {
    return (
        <div className='flex flex-col items-center py-20 h-screen text-green-600 text-2xl lg:text-3xl font-bold'>
            <h2>Unfortunately, Cart is Empty</h2>
            <p>Begin searching for products </p>
            <button className='bg-green-600 text-white px-4 py-3 rounded-3xl mt-2 shadow-md shadow-green-600'><Link to='/'>Continue shopping</Link></button>
            <img className='h-96 mt-6' src={search} alt="searcherman" />
        </div>
    )
   }

  const totalCart = cart.length

  //  Total price
  const total = cart.reduce((sum, item) => {
   return sum + item.price * item.quantity
  }, 0)

  return (
    <div className='pt-10 px-5 lg:px-20 bg-gray-200 '>
      <h2 className='lg:hidden mb-4 text-green-600 text-[24px] font-bold'>Your Cart</h2>
      {/* Header */}
      <div className='hidden lg:grid lg:grid-cols-4 text-green-600 text-[32px] font-bold '>
        <h2>{t("Cart.Header.Products")}</h2>
        <h2>{t("Cart.Header.Price")}</h2>
        <h2>{t("Cart.Header.Quantity")}</h2>
        <h2>Total</h2>
      </div>

      {/* Products */}
      <div className='bg-white lg:max-w-7xl shadow-xl p-2 rounded-2xl'>
        <h2 className='text-center text-green-600 text-[20px] font-bold lg:hidden'>{t("Cart.Header.Products_list")}</h2>
        {cart.map(item => 
        <div className='grid grid-cols-1 lg:grid-cols-4  relative' key={item.id}>
          <hr className='my-2 text-gray-200 lg:hidden' />
          {/* Product info */}
           <div className='flex gap-3 lg:flex-col '>
             <div className='bg-green-400 w-44 rounded-3xl mb-2'>
              <img className={item.class} src={item.image} alt="product_image" />
             </div>
             <div>
              <div className='flex flex-col  gap-2 mb-2'>
                <h2>{item.name}</h2>
                <p className='lg:hidden'>{item.price} sum</p>
                <div className='flex gap-x-2'>
                  <h2>{item.size} </h2>
                {item.pricePerG && <p>{item.pricePerG}</p>}
                </div>
                {/* Quantity for mobile */}
                <div className='lg:hidden flex justify-center items-center gap-2 bg-gray-200 px-2 py-1 rounded-full w-24'>
                  <button className='flex items-center justify-center bg-white p-1 rounded-full w-6 h-6' disabled={item.quantity === 1} onClick={() => decreaseQuantity(item)}><FiMinus/></button>
                  <p>{item.quantity}</p>
                  <button className='flex items-center justify-center bg-black text-white font-bold p-1 rounded-full w-6 h-6' disabled={item.quantity === 10} onClick={() => addToCart(item)}><FiPlus/></button>
                </div>
              </div>
             </div>
           </div>
           {/* Product-price */}
            <h2 className='my-8 hidden lg:block'>{item.price} UZS</h2>
            {/* Quantity for desktop */}
            <div className='hidden lg:flex lg:justify-center lg:items-center gap-x-6 my-8 bg-gray-200 h-8 w-32 px-2 rounded-2xl font-bold'>
             <button disabled={item.quantity === 1} onClick={() => decreaseQuantity(item)} className='w-6 h-6 cursor-pointer'><FiMinus className=''/></button>
             <p>{item.quantity}</p>
             <button disabled={item.quantity === 10} onClick={() => addToCart(item)} className='w-6 h-6 cursor-pointer'><FiPlus/></button>
            </div>
            {/* total price */}
            <p className='py-8 hidden lg:block'>{total} SUM</p>
            <button onClick={() => removeFromCart(item)} className='absolute top-5 right-2 text-white bg-gray-400 rounded-full p-2 ml-2 lg:hidden'>
              <MdDelete className='w-4 h-4'/>
            </button>
            {/* remove button for desktop */}
            <button onClick={() => removeFromCart(item)} className='hidden lg:flex lg:items-center lg:absolute lg:right-8 lg:top-8 lg:gap-1 lg:cursor-pointer bg-red-500 px-3 py-2 rounded-full text-white'>
              <MdDelete/>
              <h2>{t("Cart.Buttons.Remove")}</h2>
            </button>
        </div>
      )}
      </div>
      {/* Checkout and total for mobile */}
      <div className=' mt-8 bg-white px-5 py-10 rounded-t-4xl shadow-xl flex flex-col'>
        <h2 className='flex justify-between text-[20px] font-bold text-gray-700'>Subtotal: <span className='text-black'>{total} UZS</span></h2>
        <hr className='text-gray-200 my-2' />
        <h2 className='flex justify-between text-[20px] font-bold text-gray-700'>Delivery: <span className='text-black'>Free</span></h2>
        <button className=' mt-4 bg-green-500 w-52 mx-auto px-6 py-3 text-white text-[20px] font-bold rounded-full shadow-lg shadow-green-500'>Checkout now</button>
      </div>

    </div>
  )
}
