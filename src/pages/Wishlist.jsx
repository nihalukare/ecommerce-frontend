import Header from "../components/Header";
import Toasts from "../components/Toasts";
import WishlistIconButton from "../components/WishlistIconButton";
import { useProductContext } from "../context/ProductProvider";
import { Link } from "react-router-dom";
import CartButton from "../components/CartButton";
import { useLocalStorage } from "../hooks/useLocalStorage";

export default function Wishlist() {
  const { wishlist, cart } = useProductContext();

  useLocalStorage("wishlist", wishlist);
  useLocalStorage("cart", cart);

  return (
    <>
      <Header />
      <main className="bg-body-tertiary">
        <Toasts />
        <h2 className="text-center fw-bold pt-3">My Wishlist</h2>
        <div className="container p-5">
          <div className="row g-4">
            {wishlist.length > 0 ? (
              wishlist.map((wishlistProduct) => (
                <div key={wishlistProduct._id} className="col-md-3">
                  <div className="card position-relative border-0 rounded-0">
                    {/* Product image */}
                    <img
                      src={wishlistProduct.imageUrl}
                      className="card-img-top img-fluid rounded-0"
                      alt={`${wishlistProduct.productName} image`}
                    />

                    <div className="card-body text-center">
                      {/* Product Name */}
                      <h5 className="card-title">
                        <Link
                          to={`/products/productDetails/${wishlistProduct._id}`}
                          className="h5 link-underline link-underline-opacity-0"
                        >
                          {wishlistProduct.productName}
                        </Link>
                      </h5>

                      {/* Product price and discount */}
                      <div className="mb-3">
                        <p className="card-text fs-4 fw-bold m-0">
                          ₹{wishlistProduct.discountedPrice}{" "}
                          <small className="text-decoration-line-through text-body-tertiary fw-medium ms-1">
                            ₹{wishlistProduct.actualPrice}
                          </small>
                        </p>
                        <p className="card-text fs-5 fw-bold text-body-tertiary">
                          {wishlistProduct.discount}% off
                        </p>
                      </div>

                      <div className="d-grid gap-2">
                        {/* Add to Cart Button */}
                        <CartButton
                          product={wishlistProduct}
                          quantity={wishlistProduct.quantity}
                          btnText={"Move to Cart"}
                        />

                        {/* Wishlist Button */}
                        <WishlistIconButton product={wishlistProduct} />
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center">Wishlist is Empty</div>
            )}
          </div>
        </div>
      </main>
    </>
  );
}
