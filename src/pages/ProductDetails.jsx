import Header from "../components/Header";
import Rating from "../components/ProductRating";
import Toasts from "../components/Toasts";
import BuyNow from "../components/BuyNow";
import CartButton from "../components/CartButton";
import WishlistIconButton from "../components/WishlistIconButton";
import ServiceHighlights from "../components/ServiceHighlights";
import ApparelProducts from "../components/ApparelProducts";
import QuantitySelector from "../components/QuantitySelector";

import { useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { BASE_API_URL } from "../config";

export default function ProductDetails() {
  let params = useParams();
  const API_URL = `${BASE_API_URL}/products/${params.productId}`;
  const { data, loading, error } = useFetch(API_URL);

  // useLocalStorage("cart", cart)

  const [quantity, setQuantity] = useState(1);

  const product = data?.data?.product;

  return (
    <>
      <Header />
      <Toasts />
      <main className="bg-body-tertiary py-4">
        {error ? (
          <div className="alert alert-danger w-50 mx-auto">{error}</div>
        ) : loading ? (
          <div className="alert alert-primary w-50 mx-auto fw-medium">
            Loading...
          </div>
        ) : null}
        {data && (
          <div className="container bg-white p-3">
            <div className="row gx-4">
              <div className="col-md-4">
                <div className="card border-0 position-relative">
                  <img
                    src={product.imageUrl}
                    className="card-img-top rounded-0 mb-3"
                    alt={`${product.productName} image`}
                  />
                  <div className="card-body p-0">
                    <div className="d-grid gap-2">
                      {/* Buy Now Button */}
                      <BuyNow product={product} quantity={quantity} />
                      {/* Add to Cart button */}
                      <CartButton
                        product={product}
                        quantity={quantity}
                        btnText={"Add to Cart"}
                      />
                    </div>
                  </div>

                  {/* Add to wishlist icon button */}
                  <WishlistIconButton product={product} quantity={quantity} />
                </div>
              </div>
              <div className="col-md-8">
                {/* Product Name */}
                <h3>{product.productName}</h3>

                <Rating productRating={product.rating} />

                {/* Product Warranty */}
                <div className="mb-4">
                  <small className="text-body-secondary">
                    ({" "}
                    {product.warranty
                      ? `${product.warranty} Months Warranty`
                      : `No Warrnaty Provided`}{" "}
                    )
                  </small>
                </div>

                {/* Product Price and Discount */}
                <div className="mb-5">
                  <p className="card-text fs-4 fw-bold m-0">
                    ₹{product.discountedPrice}{" "}
                    <small className="text-decoration-line-through text-body-tertiary fw-medium ms-1">
                      ₹{product.actualPrice}
                    </small>
                  </p>
                  <p className="card-text fs-5 fw-bold text-body-tertiary">
                    {product.discount}% off
                  </p>
                </div>

                {/* Product Quantity Selector */}
                <QuantitySelector
                  quantity={quantity}
                  setQuantity={setQuantity}
                />

                {/* Product Services Highlights */}
                <hr className="opacity-100 mt-5" />
                <ServiceHighlights />
                <hr className="opacity-100 mb-5" />

                {/* Product Description */}
                <div>
                  <h3>Description:</h3>
                  <ul>
                    {product.description.length > 0 ? (
                      product.description.map((description, index) => (
                        <li key={index}>{description}</li>
                      ))
                    ) : (
                      <div>No description available</div>
                    )}
                  </ul>
                </div>
              </div>
              <hr className="border border-secondary opacity-50 my-5" />
            </div>

            <ApparelProducts
              productSubCategory={product.subCategory}
              productId={product._id}
            />
          </div>
        )}
      </main>
    </>
  );
}
