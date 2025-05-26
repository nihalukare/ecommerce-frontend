import Header from "../components/Header";
import useFetch from "../hooks/useFetch";
import { BASE_API_URL } from "../config";

export default function OrderHistory() {
  const ORDERS_API_URL = `${BASE_API_URL}/orders`;
  const { data, loading, error } = useFetch(ORDERS_API_URL);

  return (
    <>
      <Header />
      <main className="bg-body-tertiary">
        <h2 className="text-center py-3">Order History</h2>
        <div className="container pb-5">
          <div className="row">
            <div className="col-md-10 offset-md-1">
              {loading ? (
                <div className="alert alert-primary fw-medium">Loading...</div>
              ) : (
                error && (
                  <div className="alert alert-danger fw-medium">{error}</div>
                )
              )}
              {data?.orders?.map((order) => (
                <div key={order._id} className="card mb-4">
                  <div className="card-header d-flex justify-content-between text-body-secondary fw-medium">
                    <div>
                      <small>ORDER # {order._id}</small>
                    </div>
                    <div>
                      <small>
                        Order placed:{" "}
                        {new Date(order.createdAt).toLocaleDateString()} at{" "}
                        {new Date(order.createdAt).toLocaleTimeString()}
                      </small>
                    </div>
                  </div>
                  <div className="card-body">
                    {order?.products?.map((product) => (
                      <div key={product._id} className="row mb-3">
                        <div className="col-md-2 text-center">
                          <img
                            src={product.imageUrl}
                            className="card-img img-fluid rounded-0"
                            alt={`${product.productName} image`}
                            style={{ width: "8rem" }}
                          />
                        </div>
                        <div className="col-md-10">
                          <h5 className="card-title">{product.productName}</h5>
                          <p className="card-text m-0">
                            <span className="fw-medium">Quantity:</span>{" "}
                            {product.quantity}
                          </p>
                          <p className="card-text m-0">
                            <span className="fw-medium">Total Price:</span> ₹
                            {(
                              product.discountedPrice * product.quantity
                            ).toLocaleString()}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="card-footer">
                    <div className="m-0">
                      <p className="m-0">
                        <span className="fw-medium">Ship to:</span>
                      </p>
                      {
                        <div>
                          <strong className="m-0">
                            {order?.address?.fullName}
                          </strong>
                          <p className="m-0">
                            {order?.address?.flatOrHouse},{" "}
                            {order?.address?.areaOrStreet},{" "}
                            {order?.address?.landmark}
                          </p>

                          <p className="m-0">
                            {order?.address?.townOrCity},{" "}
                            {order?.address?.state}, {order?.address?.pincode},{" "}
                            {order?.address?.country}
                          </p>

                          <p className="m-0">
                            Phone number: +91 {order?.address?.mobileNumber}
                          </p>
                        </div>
                      }
                    </div>
                    <hr />
                    <p className="m-0">
                      <span className="fw-medium">Delivery charges:</span> ₹499
                    </p>
                    <p className="fs-3 fw-semibold">
                      <span className="fw-medium">
                        Order Total: ₹
                        {(
                          order?.products?.reduce(
                            (acc, curr) =>
                              acc + curr.discountedPrice * curr.quantity,
                            0
                          ) + 499
                        ).toLocaleString()}
                      </span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
