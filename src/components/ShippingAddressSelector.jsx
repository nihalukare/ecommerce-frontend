import { BASE_API_URL } from "../config";
import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";

export default function ShippingAddressSelector({
  selectedAddress,
  setSelectedAddress,
}) {
  const ADDRESSES_API = `${BASE_API_URL}/addresses`;
  const { data, loading, error } = useFetch(ADDRESSES_API);

  const addresses = data?.data;

  if (error) {
    return <div className="alert alert-danger">{error}</div>;
  }
  if (loading) {
    return (
      <div className="alert alert-info" role="alert">
        Laoding...
      </div>
    );
  }
  return (
    <>
      {!selectedAddress && (
        <div className="alert alert-info">
          <i className="bi bi-info-circle me-2"></i>
          Select address for delivery or click to{" "}
          <Link to={"/userProfile"}>add address</Link>
        </div>
      )}
      <ul
        className="list-group border rounded-2 overflow-y-auto mb-3"
        style={{ maxHeight: "15rem" }}
      >
        {addresses &&
          addresses.map((address) => (
            <li
              key={address._id}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              <div>
                <strong className="m-0">{address.fullName}</strong>
                <p className="m-0">{address.flatOrHouse},</p>
                <p className="m-0">{address.areaOrStreet},</p>
                <p className="m-0">{address.landmark},</p>
                <p className="m-0">
                  {address.townOrCity}, {address.state}, {address.pincode}
                </p>
                <p className="m-0">{address.country}</p>
                <p className="m-0">Phone number: +91 {address.mobileNumber}</p>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="addresses"
                  id={address._id}
                  onChange={() => {
                    setSelectedAddress(address);
                  }}
                />
              </div>
            </li>
          ))}
      </ul>
    </>
  );
}
