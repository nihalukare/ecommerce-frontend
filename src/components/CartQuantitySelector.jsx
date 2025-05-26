import { useProductContext } from "../context/ProductProvider";
import { useLocalStorage } from "../hooks/useLocalStorage";

export default function CartQuantitySelector({ cartItem }) {
  const { cart, setCart } = useProductContext();
  useLocalStorage("cart", cart);

  return (
    <div className="ms-3">
      <button
        className="btn btn-outline-danger btn-sm rounded-circle"
        onClick={() => {
          setCart((prev) =>
            prev.map((item) =>
              item._id === cartItem._id
                ? {
                    ...item,
                    quantity:
                      item.quantity > 1 ? item.quantity - 1 : item.quantity,
                  }
                : item
            )
          );
        }}
      >
        <i className="bi bi-dash"></i>
      </button>
      <input
        type="text"
        id="quantityInput"
        value={cartItem.quantity}
        readOnly
        style={{
          width: "4rem",
          height: "2rem",
          margin: "0px 10px",
          textAlign: "center",
          border: "1px solid #ccc",
          borderRadius: "6px",
        }}
      />
      <button
        className="btn btn-outline-success btn-sm rounded-circle"
        onClick={() => {
          setCart((prev) =>
            prev.map((item) =>
              item._id === cartItem._id
                ? {
                    ...item,
                    quantity: item.quantity + 1,
                  }
                : item
            )
          );
        }}
      >
        <i className="bi bi-plus"></i>
      </button>
    </div>
  );
}
