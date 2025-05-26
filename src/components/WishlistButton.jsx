import { useProductContext } from "../context/ProductProvider";

export default function WishlistButton({ product, quantity = 1, btnText }) {
  const { wishlist, setWishlist, showToast } = useProductContext();
  const btnType = wishlist.some((item) => product._id === item._id)
    ? "secondary"
    : "outline-secondary";
  return (
    <button
      className={`btn btn-${btnType} rounded-0 fw-medium`}
      type="button"
      onClick={() => {
        if (wishlist.some((item) => product._id === item._id)) {
          setWishlist((prev) =>
            prev.filter((item) => item._id !== product._id)
          );
          showToast("Product removed from wishlist", "danger");
        } else {
          setWishlist((prev) => [...prev, { ...product, quantity: quantity }]);
          showToast("Product added to wishlist", "info");
        }
      }}
    >
      {wishlist.some((item) => product._id === item._id)
        ? "Remove from Wishlist"
        : btnText}
    </button>
  );
}
