import { useProductContext } from "../context/ProductProvider";

import Header from "../components/Header";
import Toasts from "../components/Toasts";
import CartItems from "../components/CartItems";
import OrderDetails from "../components/OrderDetails";

export default function Cart() {
  const { cart } = useProductContext();

  return (
    <>
      <Header />
      <main className="bg-body-tertiary">
        <Toasts />
        <h2 className="text-center fw-bold pt-3">My Cart ({cart.length})</h2>
        <div className="container pb-5">
          <div className="row">
            <h3 className="py-3">Cart Items:</h3>
            <CartItems />
            <div className="col-md-5 offset-md-1">
              <OrderDetails />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
