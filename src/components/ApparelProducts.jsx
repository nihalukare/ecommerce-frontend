import { useProductContext } from "../context/ProductProvider";
import useFetch from "../hooks/useFetch";
import { Link, useNavigate } from "react-router-dom";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { BASE_API_URL } from "../config";
import CartButton from "./CartButton";
import WishlistIconButton from "./WishlistIconButton";

export default function ApparelProducts({ productSubCategory, productId }) {
  const API_URL = `${BASE_API_URL}/products/subCategory/${productSubCategory}`;
  const { data, loading, error } = useFetch(API_URL);

  const { wishlist, setWishlist, cart, setCart, showToast } =
    useProductContext();
  useLocalStorage("cart", cart);
  useLocalStorage("wishlist", wishlist);
  const navigate = useNavigate();

  const apparelProducts = data?.data.products.filter(
    (product) => product._id != productId
  );

  if (loading) {
    <div>Loading...</div>;
  }

  if (error) {
    <div>{error}</div>;
  }

  return (
    <div>
      <h3 className="mb-4 fw-bold">More items you may like in apparel</h3>
      <div className="row mb-5">
        {apparelProducts?.slice(0, 4).map((product) => (
          <div key={product._id} className="col-md-3">
            <div className="card position-relative border-0 px-3 mb-4">
              <img
                src={product.imageUrl}
                className="card-img-top rounded-0 mb-3"
                alt={`Product Image`}
              />
              <div className="card-body text-center p-0">
                <p className="card-text fw-medium mb-2">
                  <Link
                    to={`/products/productDetails/${product._id}`}
                    className="text-black link-underline link-underline-opacity-0"
                    target="_blank"
                  >
                    {product.productName}
                  </Link>
                </p>
                <p className="card-text fs-4 fw-bold">
                  ₹{product.discountedPrice}
                </p>
                <div className="d-grid">
                  {/* Add to cart button */}
                  <CartButton product={product} btnText={"Add to Cart"} />
                </div>
              </div>

              {/* Wishlist button */}
              <WishlistIconButton product={product} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
