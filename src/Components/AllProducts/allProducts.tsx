import { useContext } from "react";
import { Link } from "react-router-dom";
import { useGetProduct } from "../../Hooks/useGet";
import { CartContext } from "../../Context/Cart_/cartContext";
import { Product } from "../../Interfaces/props";


const AllProducts = () => {
  const { products, loading, error } = useGetProduct();
  const cartContext = useContext(CartContext);
  

  if (!cartContext) {
    throw new Error("CartContext is undefined. Please ensure you are using a valid CartProvider.");
  }

  const { addOneItem } = cartContext;

  

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      {products?.products.map((product: Product) => (
        <div key={product.id} style={{ marginBottom: "1rem" }}>
          <Link
            to={`/product/${product.id}`}
            style={{ listStyle: "none", textDecoration: "none", color: "inherit" }}
          >
            <img
              src={product.thumbnail}
              alt={product.title}
              style={{ width: "150px", height: "auto" }}
            />
            <p>{product.title}</p>
            <p>{product.price} DKK</p>
          </Link>
      
          <button
            onClick={(e) => {
                e.preventDefault(); // ← vigtigt: forhindrer Link-navigation
                e.stopPropagation(); // ← vigtigt: stopper bubbling op til Link
                console.log("Tilføj til kurv:", product.title);
                addOneItem(product);
            }}
            style={{
                backgroundColor: "#007bff",
                color: "white",
                border: "none",
                padding: "0.5rem 1rem",
                borderRadius: "5px",
                cursor: "pointer",
                marginTop: "0.5rem",
            }}
            >
            Læg i kurv
            </button>
          
        </div>
      ))}
    </>
  );
};

export default AllProducts;
