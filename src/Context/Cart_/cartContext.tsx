import { createContext, useState } from "react";
import { CartItem } from "../../Interfaces/props";


interface CartContextType {
  cartItems: CartItem[];
  setCartItems: React.Dispatch<React.SetStateAction<CartItem[]>>;
  addOneItem: (item: CartItem) => void;
//   removeFromCart: (id: number) => void;
//   clearCart: () => void;
//   totalPrice: number;
}




export const CartProvider = ({children}: {children:React.ReactNode}) => {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    

    const addOneItem = (item: CartItem) => {
        setCartItems((prev) => {
          const exists = prev.find((i) => i.id === item.id);
          if (!exists) return [...prev, { ...item, quantity: 1 }];
      
          return prev.map((i) =>
            i.id === item.id ? { ...i, quantity: (i.quantity || 0) + 1 } : i
          );
        });
      };
      

    const removeOneItem = (item: CartItem) => {
        

    };

    const clearCart = (id: number) => {

    };



    return (
        <CartContext.Provider value={{cartItems, setCartItems, addOneItem}}>
            {children}
        </CartContext.Provider>
    )


};


export const CartContext = createContext<CartContextType | undefined>(undefined);