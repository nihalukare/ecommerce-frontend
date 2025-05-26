import CategoryFilter from "./CategoryFilter";
import Toasts from "./Toasts";
import { useProductContext } from "../context/ProductProvider";
import PriceRangeFilter from "./PriceRangeFilter";
import RatingFilter from "./RatingFilter";
import SortByFilter from "./SortByFilter";

export default function Filters() {
  const {
    showToast,
    setProductRating,
    setProductSortBy,
    setProductPriceRange,
  } = useProductContext();

  return (
    <div className="col-md-2 p-4">
      <Toasts />

      <div className="d-flex justify-content-between align-items-center mb-3">
        <p className="fw-bold m-0">Filters</p>
        {/* Clear Filters Button */}
        <button
          type="button"
          className="btn text-decoration-underline fw-medium"
          onClick={() => {
            setProductRating(null);
            setProductSortBy(null);
            setProductPriceRange(0);
            showToast("Filters cleared!", "info");
          }}
        >
          Clear
        </button>
      </div>

      <PriceRangeFilter />

      <CategoryFilter />

      <RatingFilter />

      <SortByFilter />
    </div>
  );
}
