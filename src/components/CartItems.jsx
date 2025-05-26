import RemoveFromCartButton from "./RemoveFromCartButton";
import WishlistButton from "./WishlistButton";
import { useProductContext } from "../context/ProductProvider";
import { Link } from "react-router-dom";
import { useLocalStorage } from "../hooks/useLocalStorage";

export default function CartItems() {
  const { cart, wishlist } = useProductContext();
  useLocalStorage("wishlist", wishlist);
  useLocalStorage("cart", cart);

  return (
    <div className="col-md-6">
      {cart.length > 0 ? (
        cart.map((item) => (
          <div key={item._id} className="col-md-12 mb-3">
            <div className="card border-0 rounded-0">
              <div className="row">
                <div className="col-md-6 align-self-center">
                  <img
                    src={item.imageUrl}
                    className="img-fluid"
                    alt={`${item.productName} image`}
                  />
                </div>
                <div className="col-md-6">
                  <div className="card-body">
                    <h5 className="card-title">
                      <Link
                        to={`/products/productDetails/${item._id}`}
                        className="h5 link-underline link-underline-opacity-0"
                      >
                        {item.productName}
                      </Link>
                    </h5>
                    <div className="mb-4">
                      <p className="card-text fs-4 fw-bold m-0">
                        ₹{item.discountedPrice.toLocaleString()}{" "}
                        <small className="text-decoration-line-through text-body-tertiary fw-medium ms-1">
                          ₹{item.actualPrice.toLocaleString()}
                        </small>
                      </p>
                      <p className="card-text fs-5 fw-bold text-body-tertiary">
                        {item.discount}% off
                      </p>
                    </div>

                    {/* Remove from Cart Button */}
                    <div className="d-grid gap-2">
                      <RemoveFromCartButton item={item} />

                      {/* Move to Wishlist Button */}
                      <WishlistButton
                        product={item}
                        quantity={item.quantity}
                        btnText={"Move to Wishlist"}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="alert alert-primary" role="alert">
          No items in cart
        </div>
      )}
    </div>
  );
}
