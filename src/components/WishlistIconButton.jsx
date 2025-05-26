import { useProductContext } from "../context/ProductProvider";
import { useLocalStorage } from "../hooks/useLocalStorage";

export default function WishlistIconButton({ product, quantity = 1 }) {
  const { wishlist, setWishlist, showToast } = useProductContext();
  useLocalStorage("wishlist", wishlist);

  return (
    <button
      className="btn bg-white position-absolute top-0 end-0 rounded-circle m-2 border-0"
      onClick={() => {
        if (wishlist.some((wishlistItem) => wishlistItem._id === product._id)) {
          setWishlist((wishlist) =>
            wishlist.filter((wishlistItem) => wishlistItem._id !== product._id)
          );
          showToast("Product removed from wishlist", "danger");
        } else {
          setWishlist((wishlist) => [
            ...wishlist,
            { ...product, quantity: quantity },
          ]);
          showToast("Product added to wishlist", "info");
        }
      }}
    >
      {wishlist.some((wishlistItem) => wishlistItem._id === product._id) ? (
        <i className="bi bi-heart-fill text-danger"></i>
      ) : (
        <i className="bi bi-heart "></i>
      )}
    </button>
  );
}
