import { useProductContext } from "../context/ProductProvider";

export default function RatingFilter() {
  const { productRating, setProductRating } = useProductContext();

  return (
    <div>
      <p className="fw-bold">Rating</p>
      <form className="mb-3">
        <div className="form-check">
          <input
            type="radio"
            name="rating"
            id="rating4AndAbove"
            className="form-check-input"
            value={4.0}
            checked={productRating == 4.0}
            onChange={(e) => {
              setProductRating(e.target.value);
            }}
          />
          <label htmlFor="rating4AndAbove" className="form-check-label">
            4 Stars & above
          </label>
        </div>
        <div className="form-check">
          <input
            type="radio"
            name="rating"
            id="rating3AndAbove"
            className="form-check-input"
            value={3.0}
            checked={productRating == 3.0}
            onChange={(e) => {
              setProductRating(e.target.value);
            }}
          />
          <label htmlFor="rating3AndAbove" className="form-check-label">
            3 Stars & above
          </label>
        </div>
        <div className="form-check">
          <input
            type="radio"
            name="rating"
            id="rating2AndAbove"
            className="form-check-input"
            value={2.0}
            checked={productRating == 2.0}
            onChange={(e) => {
              setProductRating(e.target.value);
            }}
          />
          <label htmlFor="rating2AndAbove" className="form-check-label">
            2 Stars & above
          </label>
        </div>
        <div className="form-check">
          <input
            type="radio"
            name="rating"
            id="rating1AndAbove"
            className="form-check-input"
            value={1.0}
            checked={productRating == 1.0}
            onChange={(e) => {
              setProductRating(e.target.value);
            }}
          />
          <label htmlFor="rating1AndAbove" className="form-check-label">
            1 Stars & above
          </label>
        </div>
      </form>
    </div>
  );
}
