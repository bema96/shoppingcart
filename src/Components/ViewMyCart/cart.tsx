import { useContext } from "react";
import { CartContext } from "../../Context/Cart_/cartContext";

export const Cart = () => {
  const context = useContext(CartContext);

  if (!context) return <p>Cart is empty or unavailable.</p>;

  return (
    <div>
      <h1>Din kurv</h1>
      <ul>
        {context.cartItems.map((item) => (
          <li key={item.id}>
            {item.title} – {item.price} DKK
            <img
              src={item.thumbnail}
              alt={item.title}
              style={{ width: "150px", height: "auto" }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
