import Header from "../components/Header";
import Filters from "../components/Filters";
import SubCategoryNav from "../components/SubCategoryNav";
import Products from "../components/Products";
import { useProductContext } from "../context/ProductProvider";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

export default function ProductsListing() {
  const params = useParams();

  const { setCategoryId, setSubCategoryId } = useProductContext();

  useEffect(() => {
    if (params.categoryId && params.subCategoryId) {
      setCategoryId(params.categoryId);
      setSubCategoryId(params.subCategoryId);
    }
  }, [params.categoryId, params.subCategoryId]);

  return (
    <>
      <Header />
      <main>
        <div className="row">
          <Filters />
          <div className="col-md-10 p-4 bg-body-tertiary">
            <SubCategoryNav />
            <hr />
            <Products />
          </div>
        </div>
      </main>
    </>
  );
}
