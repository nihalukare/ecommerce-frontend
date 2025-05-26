import { useProductContext } from "../context/ProductProvider";

export default function RemoveFromCartButton({ item }) {
  const { cart, setCart, showToast } = useProductContext();
  return (
    <button
      className="btn btn-secondary rounded-0 fw-medium"
      type="button"
      onClick={() => {
        if (cart.some((cartItem) => item._id === cartItem._id)) {
          setCart((cart) =>
            cart.filter((cartItem) => cartItem._id !== item._id)
          );
          showToast("Product removed from Cart", "success");
        }
      }}
    >
      {cart.some((cartItem) => item._id === cartItem._id) && "Remove from cart"}
    </button>
  );
}
