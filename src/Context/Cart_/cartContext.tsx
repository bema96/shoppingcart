import { createContext } from "react";
import { CartItem } from "../../Interfaces/props";

interface CartContextType {
  cartItems: CartItem[];
  setCartItems: React.Dispatch<React.SetStateAction<CartItem[]>>;
  addToCart: (item: CartItem) => void;
//   removeFromCart: (id: number) => void;
//   clearCart: () => void;
//   totalPrice: number;
}


export const CartContext = createContext<CartContextType | undefined>(undefined);



