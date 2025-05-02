import { useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import { useGetProduct } from "../../Hooks/useGet";
import { CartContext } from "../../Context/Cart_/cartContext";
import { Product } from "../../Interfaces/props";


const AllProducts = () => {
  const { products, loading, error } = useGetProduct();
  const cartContext = useContext(CartContext);
  

  if (!cartContext) {
    throw new Error("CartContext is undefined. Please ensure you are using a valid CartProvider.");
  }

  const { addToCart } = cartContext;

  

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      {products?.products.map((product: Product) => (
        <Link
          to={`/product/${product.id}`}
          key={product.id}
          style={{ listStyle: "none", marginBottom: "1rem" }}
        >
          <img
            src={product.thumbnail}
            alt={product.title}
            style={{ width: "150px", height: "auto" }}
          />
          <p>{product.title}</p>
          <p>{product.price} DKK</p>

          <button
            onClick={() => addToCart(product)}
            style={{
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              padding: "0.5rem 1rem",
              borderRadius: "5px",
              cursor: "pointer",
              marginTop: "0.5rem",
              textDecoration: "none",
            }}
          >
            Læg i kurv
          </button>
        </Link>
      ))}
    </div>
  );
};

export default AllProducts;
