import { useProductContext } from "../context/ProductProvider";

export default function PriceRangeFilter() {
  const { productPriceRange, setProductPriceRange } = useProductContext();

  return (
    <div>
      <p className="fw-bold">Price (In ₹)</p>
      <div className="mb-3">
        <datalist id="markers" className="d-flex justify-content-between">
          <option value={0} label="0" className="m-0"></option>
          <option value={25000} label="25k" className="m-0"></option>
          <option value={50000} label="50k" className="m-0"></option>
          <option value={75000} label="75k" className="m-0"></option>
          <option value={100000} label="100k" className="m-0"></option>
        </datalist>
        <input
          type="range"
          className="form-range"
          min="0"
          max="100000"
          step="25000"
          list="markers"
          value={productPriceRange}
          onChange={(e) => {
            setProductPriceRange(e.target.value);
          }}
        />
        <p>Value: ₹{Number(productPriceRange).toLocaleString()}</p>
      </div>
    </div>
  );
}
