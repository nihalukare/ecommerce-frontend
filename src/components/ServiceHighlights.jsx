import Return from "../assets/icons/restock.svg";
import PayOnDelivery from "../assets/icons/expense.svg";
import FreeDelivery from "../assets/icons/free-delivery.svg";
import SecurePayment from "../assets/icons/nfc-lock.svg";

export default function ServiceHighlights() {
  return (
    <div className="d-flex text-center">
      <div className="d-flex flex-column">
        <div className="bg-body-tertiary mx-4 p-md-4 rounded-circle mb-2">
          <img
            src={Return}
            className="img-fluid"
            alt="10 Days Return"
            style={{ width: "3rem" }}
          />
        </div>
        <p>
          10 days <br /> Returnable
        </p>
      </div>
      <div className="d-flex flex-column">
        <div className="bg-body-tertiary mx-4 p-md-4 rounded-circle mb-2">
          <img
            src={PayOnDelivery}
            className="img-fluid"
            alt="Pay On Delivery"
            style={{ width: "3rem" }}
          />
        </div>
        <p>
          Pay on <br /> Delivery
        </p>
      </div>
      <div className="d-flex flex-column">
        <div className="bg-body-tertiary mx-4 p-md-4 rounded-circle mb-2">
          <img
            src={FreeDelivery}
            className="img-fluid"
            alt="Free Delivery"
            style={{ width: "3rem" }}
          />
        </div>
        <p>
          Free <br /> Delivery
        </p>
      </div>
      <div className="d-flex flex-column">
        <div className="bg-body-tertiary mx-4 p-md-4 rounded-circle mb-2">
          <img
            src={SecurePayment}
            className="img-fluid"
            alt="Secure Payment"
            style={{ width: "3rem" }}
          />
        </div>
        <p>
          Secure <br /> Payment
        </p>
      </div>
    </div>
  );
}
