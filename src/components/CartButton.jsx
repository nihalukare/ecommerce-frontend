import { useProductContext } from "../context/ProductProvider";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "../hooks/useLocalStorage";

export default function CartButton({ product, quantity = 1, btnText }) {
  const { cart, setCart, showToast } = useProductContext();

  const navigate = useNavigate();
  useLocalStorage("cart", cart);

  const btnType = cart.some((cartItem) => product._id === cartItem._id)
    ? "primary"
    : "secondary";

  return (
    <button
      className={`btn btn-${btnType} rounded-0 fw-medium`}
      type="button"
      onClick={() => {
        if (cart.some((cartItem) => product._id === cartItem._id)) {
          navigate("/cart");
        } else {
          setCart((cart) => [...cart, { ...product, quantity: quantity }]);
          showToast("Product added to cart!", "success");
        }
      }}
    >
      {cart.some((cartItem) => product._id === cartItem._id)
        ? "Go to Cart"
        : btnText}
    </button>
  );
}
