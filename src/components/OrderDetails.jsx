import CartQuantitySelector from "./CartQuantitySelector";
import ShippingAddressSelector from "./ShippingAddressSelector";

import { useProductContext } from "../context/ProductProvider";
import { useState } from "react";
import { useNavigate } from "react-router";
import { BASE_API_URL } from "../config";

export default function OrderDetails() {
  const { cart, showToast } = useProductContext();
  const [selectedAddress, setSelectedAddress] = useState("");
  const [orderSuccess, setOrderSuccess] = useState(false);
  const navigate = useNavigate();

  const ORDERS_API = `${BASE_API_URL}/orders`;

  async function handlePlaceOrder() {
    try {
      const response = await fetch(ORDERS_API, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ products: cart, address: selectedAddress }),
      });
      if (!response.ok) {
        console.log("Failed to place the order");
      }
      const data = await response.json();

      showToast(data.message, "success");
      setOrderSuccess(true);
    } catch (error) {
      console.log(error);
      showToast(`Error placing order, ${error}!`, "danger");
    }
  }

  return (
    <>
      {cart.length > 0 && (
        <div className="card border-0">
          <div className="card-body p-5">
            <h2>ORDER DETAILS</h2>
            <hr />
            <ul className="list-group list-group-flush">
              {cart.map((cartItem) => (
                <li key={cartItem._id} className="list-group-item">
                  <div>
                    {" "}
                    <p className="fs-5 fw-medium m-0">{cartItem.productName}</p>
                    <p className="m-0">
                      <span className="fw-medium">price:</span> ₹
                      {cartItem.discountedPrice.toLocaleString()}
                    </p>
                    <div className="d-flex align-items-center">
                      <p className="fw-medium m-0">quantity:</p>

                      <CartQuantitySelector cartItem={cartItem} />
                    </div>
                    <p className="m-0">
                      <span className="fw-medium">Total:</span> ₹
                      {(
                        cartItem.discountedPrice * cartItem.quantity
                      ).toLocaleString()}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
            <hr />
            <p className="m-0">
              <span className="fw-medium">Delivery Charges:</span> ₹499
            </p>
            <p className="fs-3 fw-semibold">
              Order Total: ₹
              {(
                cart.reduce(
                  (acc, curr) => acc + curr.discountedPrice * curr.quantity,
                  0
                ) + 499
              ).toLocaleString()}
            </p>
            <hr />
            <ShippingAddressSelector
              selectedAddress={selectedAddress}
              setSelectedAddress={setSelectedAddress}
            />
            <p>
              You are saving ₹
              {cart
                .reduce(
                  (acc, curr) =>
                    acc +
                    (curr.actualPrice - curr.discountedPrice) * curr.quantity,
                  0
                )
                .toLocaleString()}{" "}
              on this order.
            </p>

            <div className="d-grid gap-2">
              <button
                className="btn btn-primary rounded-0"
                onClick={() => {
                  if (orderSuccess) {
                    navigate("/orderHistory");
                  } else {
                    handlePlaceOrder();
                  }
                }}
                disabled={!selectedAddress}
              >
                {orderSuccess ? "VIEW ORDER HISTORY" : "PLACE ORDER"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
