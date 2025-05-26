export default function QuantitySelector({ quantity, setQuantity }) {
  return (
    <div className="d-flex align-items-center">
      <p className="fw-medium m-0">Quantity:</p>
      <div className="ms-3">
        <button
          className="btn btn-outline-danger btn-sm rounded-circle"
          onClick={() => {
            setQuantity((quantity) => (quantity > 1 ? quantity - 1 : quantity));
          }}
        >
          <i className="bi bi-dash"></i>
        </button>
        <input
          type="text"
          id="quantityInput"
          value={quantity}
          readOnly
          style={{
            width: "4rem",
            height: "2rem",
            margin: "0px 10px",
            textAlign: "center",
            border: "1px solid #ccc",
            borderRadius: "6px",
          }}
        />
        <button
          className="btn btn-outline-success btn-sm rounded-circle"
          onClick={() => {
            setQuantity((quantity) => quantity + 1);
          }}
        >
          <i className="bi bi-plus"></i>
        </button>
      </div>
    </div>
  );
}
