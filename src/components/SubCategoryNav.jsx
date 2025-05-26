import useFetch from "../hooks/useFetch";
import { Link, useParams } from "react-router-dom";
import { useProductContext } from "../context/ProductProvider";
import { BASE_API_URL } from "../config";

export default function SubCategoryNav() {
  const params = useParams();
  const { subCategoryId } = useProductContext();
  const API_URL = `${BASE_API_URL}/categories/${params.categoryId}`;

  const { data, loading, error } = useFetch(API_URL);

  const subCategories = data?.data?.category?.subCategory;

  return (
    <>
      <div className="col-md-10 bg-body-tertiary">
        {loading && (
          <div className="mb-3 text-body-secondary fs-5 placeholder-wave">
            Loading....
          </div>
        )}
        {error && <div className="alert alert-danger">{error}</div>}
        <div className="d-flex align-items-center">
          {!loading && (
            <p className="mb-0 fw-bold fs-4 text-body-secondary">
              Sub Categories:{" "}
            </p>
          )}
          <ul className="nav nav-underline w-75 ms-5">
            {subCategories &&
              subCategories.map((subCategory) => (
                <li key={subCategory._id} className="nav-item mx-3">
                  <Link
                    to={`/products/category/${params.categoryId}/${subCategory._id}`}
                    className={`nav-link ${
                      subCategoryId === subCategory._id ? "active" : null
                    }`}
                  >
                    {subCategory.subCategoryName}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </>
  );
}
