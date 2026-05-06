import { create } from "zustand";
import { persist } from "zustand/middleware"

export const useCartStore = create(
    persist(
        (set, get) => ({
            cart: [],
            
            // add to cart
            addToCart: (product) => {
                const existing = get().cart.find(p => p.id === product.id)

                if (existing) {
                    set({
                        cart: get().cart.map(p => 
                            p.id === product.id
                            ?  { ...p, quantity: p.quantity + 1}
                            : p
                        )
                    })
                } else {
                    set({
                        cart: [ ...get().cart, { ...product, quantity: 1 }]
                    })
                }
            },


            // decrease quantity
            decreaseQuantity: (product) => {
                const existing = get().cart.find(p => p.id === product.id)

                if (existing) {
                    set({
                        cart: get().cart.map(p =>
                            p.id === product.id
                            ? { ...product, quantity: p.quantity - 1}
                            : p
                        )
                    })
                }
            },



            // removeFromCart
            removeFromCart: (product) => {
              set({
                cart: get().cart.filter(p => p.id !== product.id)
              })
            },


            
        }),
        {
            name: "cart-storage"
        }
    )


)