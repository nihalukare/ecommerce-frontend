import { Link, useParams } from "react-router-dom";
import { useProductContext } from "../context/ProductProvider";
import useFetch from "../hooks/useFetch";

import WishlistButton from "./WishlistButton";
import CartButton from "./CartButton";
import Toasts from "./Toasts";
import ProductPlaceholders from "./ProductPlaceholders";

import { BASE_API_URL } from "../config";

export default function Products() {
  const params = useParams();

  const API_URL = `${BASE_API_URL}/subCategory/${params.subCategoryId}`;
  const { data, loading, error } = useFetch(API_URL);

  const { searchValue, productRating, productSortBy, productPriceRange } =
    useProductContext();

  let filteredProducts = data?.data?.subCategory?.products;

  // Search Input
  if (searchValue.trim()) {
    filteredProducts = filteredProducts?.filter((product) =>
      product.productName.toLowerCase().includes(searchValue.trim())
    );
  }

  // Rating Input
  if (productRating) {
    filteredProducts = filteredProducts?.filter((product) => {
      if (productRating == 4) {
        return (
          product.rating >= parseFloat(productRating) &&
          product.rating <= parseFloat(productRating) + 1
        );
      } else if (
        product.rating >= parseFloat(productRating) &&
        product.rating < parseFloat(productRating) + 1
      ) {
        return product;
      }
    });
  }

  // Sorting High to Low - Low to High Input
  if (productSortBy && productSortBy === "highToLow") {
    filteredProducts = filteredProducts?.toSorted(
      (a, b) => b.discountedPrice - a.discountedPrice
    );
  } else if (productSortBy && productSortBy === "lowToHigh") {
    filteredProducts = filteredProducts?.toSorted(
      (a, b) => a.discountedPrice - b.discountedPrice
    );
  }

  // Price Range
  if (parseInt(productPriceRange) != 0) {
    filteredProducts = filteredProducts?.filter(
      (product) =>
        product.discountedPrice <= parseInt(productPriceRange) &&
        product.discountedPrice > parseInt(productPriceRange) - 25000
    );
  }

  if (loading) {
    return <ProductPlaceholders />;
  }

  if (error) {
    return (
      <div className="alert alert-danger" role="alert">
        {error}
      </div>
    );
  }

  return (
    <>
      <main>
        <Toasts />
        <p className="fw-bold fs-4">
          Showing All Products{" "}
          <small className="fw-normal fs-6 ms-2">
            (Showing {data && filteredProducts.length} products)
          </small>
        </p>
        <div className="row g-4">
          {filteredProducts?.length > 0 ? (
            filteredProducts.map((product) => (
              <div key={product._id} className="col-md-6">
                <div className="card border-0 rounded-0">
                  <div className="row">
                    <div className="col-md-6 align-self-center">
                      <img
                        src={product.imageUrl}
                        className="img-fluid"
                        alt={`${product.productName} image`}
                      />
                    </div>
                    <div className="col-md-6">
                      <div className="card-body">
                        <h5 className="card-title">
                          <Link
                            to={`/products/productDetails/${product._id}`}
                            className="h5 link-underline link-underline-opacity-0"
                          >
                            {product.productName}
                          </Link>
                        </h5>
                        <div className="mb-5">
                          <p className="card-text fs-4 fw-bold m-0">
                            ₹{product.discountedPrice.toLocaleString()}{" "}
                            <small className="text-decoration-line-through text-body-tertiary fw-medium ms-1">
                              ₹{product.actualPrice.toLocaleString()}
                            </small>
                          </p>
                          <p className="card-text fs-5 fw-bold text-body-tertiary">
                            {product.discount}% off
                          </p>
                        </div>
                        <div className="d-grid gap-2">
                          <CartButton
                            product={product}
                            btnText={"Add to Cart"}
                          />
                          <WishlistButton
                            product={product}
                            btnText={"Save to Wishlist"}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="alert alert-primary w-75" role="alert">
              No products found for this category!
            </div>
          )}
        </div>
      </main>
    </>
  );
}
