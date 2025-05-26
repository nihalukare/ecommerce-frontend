import { useNavigate } from "react-router-dom";
import { useProductContext } from "../context/ProductProvider";

export default function BuyNow({ product, quantity }) {
  const { cart, setCart } = useProductContext();
  const navigate = useNavigate();

  return (
    <button
      className="btn btn-primary rounded-0 fw-medium"
      onClick={() => {
        if (cart.some((cartItem) => product._id === cartItem._id)) {
          navigate("/cart");
        } else {
          setCart((cart) => [...cart, { ...product, quantity: quantity }]);
          navigate("/cart");
        }
      }}
    >
      Buy Now
    </button>
  );
}
