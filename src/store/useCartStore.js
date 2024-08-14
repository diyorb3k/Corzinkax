import { create } from "zustand";

export const useCartStore = create((set) => ({
  cart: [],
  addToCart: (product) =>
    set((state) => {
      const hasProduct = state.cart.find((c) => c.id === product.id);
      if (hasProduct) {
        return {
          cart: state.cart.map((c) =>
            c.id === product.id
              ? { ...c, numOfProducts: c.numOfProducts + 1 }
              : c
          ),
        };
      } else {
        return {
          cart: [...state.cart, { ...product, numOfProducts: 1 }],
        };
      }
    }),



    decrement: (product)=> set((state)=>{
        if( product.numOfProducts === 1){
            return{
                cart: state.cart.filter((c) => c.id !== product.id)
            }
        }else{
            return{
                cart: state.cart.map((c)=> c.id === product.id ? {...product, numOfProducts: product.numOfProducts-1}:c)
            }
        }
    })
}));
