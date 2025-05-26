import { useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useProductContext } from "../context/ProductProvider";
import { BASE_API_URL } from "../config";

export default function CategoryFilter() {
  const CATEGORIES_API = `${BASE_API_URL}/categories`;
  const { data, loading, error } = useFetch(CATEGORIES_API);
  const { categoryId } = useProductContext();

  const navigate = useNavigate();

  function handleCategoryChange(categoryId, subCategoryId) {
    navigate(`/products/category/${categoryId}/${subCategoryId}`);
  }

  return (
    <div>
      <p className="fw-bold">Category</p>
      <div className="mb-3">
        {error && <div>Error getting categories!</div>}
        {loading ? (
          <div className="placeholder-wave">
            Loading...
            <p className="form-check-label placeholder-wave mb-0">
              <span className="placeholder col-8"></span>
            </p>
            <p className="form-check-label placeholder-wave mb-0">
              <span className="placeholder col-8"></span>
            </p>
            <p className="form-check-label placeholder-wave mb-0">
              <span className="placeholder col-8"></span>
            </p>
          </div>
        ) : (
          data?.data?.categories?.map((category) => (
            <div key={category._id} className="form-check">
              <input
                type="checkbox"
                id={category._id}
                className="form-check-input"
                checked={categoryId === category._id}
                onChange={() => {
                  handleCategoryChange(category._id, category.subCategory[0]);
                }}
              />
              <label htmlFor={category._id} className="form-check-label">
                {category.categoryName}
              </label>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
