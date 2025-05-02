import { useState } from "react"
import { CartContext } from "./cartContext"
import { CartItem } from "../../Interfaces/props";


export const CartProvider = ({children}: {children:React.ReactNode}) => {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    

    const addToCart = (item: CartItem) => {
        const existingItem = cartItems.find(cartItem => cartItem.id === item.id);
        if (existingItem) {
            setCartItems(cartItems.map(cartItem =>
                cartItem.id === item.id
                    ? {...cartItem, quantity: (cartItem.quantity || 0) + 1}
                    : cartItem
            ));
        } else {
            setCartItems([...cartItems, {...item, quantity: 1}]);
        }
    };

    
    
    
    
    return (
        <CartContext.Provider value={{cartItems, setCartItems, addToCart}}>
            {children}
        </CartContext.Provider>
    )
}