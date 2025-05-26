import { useProductContext } from "../context/ProductProvider";

export default function SortByFilter() {
  const { productSortBy, setProductSortBy } = useProductContext();

  return (
    <div>
      <p className="fw-bold">Sort by</p>
      <form className="mb-3">
        <div className="form-check">
          <input
            type="radio"
            name="sortBy"
            id="highToLow"
            className="form-check-input"
            value={"highToLow"}
            checked={productSortBy == "highToLow"}
            onChange={(e) => {
              setProductSortBy(e.target.value);
            }}
          />
          <label htmlFor="highToLow" className="form-check-label">
            Price - High to Low
          </label>
        </div>
        <div className="form-check">
          <input
            type="radio"
            name="sortBy"
            id="lowToHigh"
            className="form-check-input"
            value={"lowToHigh"}
            checked={productSortBy == "lowToHigh"}
            onChange={(e) => {
              setProductSortBy(e.target.value);
            }}
          />
          <label htmlFor="lowToHigh" className="form-check-label">
            Price - Low to High
          </label>
        </div>
      </form>
    </div>
  );
}
