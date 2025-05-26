import { useState } from "react";
import { Link } from "react-router-dom";

import Header from "../components/Header";
import Toasts from "../components/Toasts";
import AddressList from "../components/AddressList";
import AddressForm from "../components/AddressForm";

export default function UserProfile() {
  const [addressData, setAddressData] = useState({
    country: "India",
    fullName: "",
    mobileNumber: "",
    pincode: "",
    flatOrHouse: "",
    areaOrStreet: "",
    landmark: "",
    townOrCity: "",
    state: "",
    isDefaultAddress: false,
  });
  const [isEditing, setIsEditing] = useState();
  const [editAddressId, setEditAddressId] = useState();

  return (
    <>
      <Header />
      <main className="bg-body-tertiary py-5">
        <div className="container">
          <Toasts />
          <div className="row">
            <div className="col-md-6">
              {/* User Profile Card */}
              <div
                className="card mx-auto border-0 bg-body-tertiary"
                style={{ width: "18rem" }}
              >
                <img
                  src="src/assets/user-profile.jpg"
                  className="card-img-top img-fluid rounded-circle"
                  alt="User Profile"
                />
                <div className="card-body text-center">
                  <h2 className="card-title">John Doe</h2>
                  <p className="card-text m-0">johndoe@gmail.com</p>
                  <p>+919999988888</p>

                  {/* Order History Button */}
                  <div className="d-grid gap-2">
                    <Link
                      to="/orderHistory"
                      className="btn btn-outline-secondary"
                    >
                      View Order History
                    </Link>
                  </div>
                </div>
              </div>

              {/* List of Addresses */}
              <AddressList
                setIsEditing={setIsEditing}
                setEditAddressId={setEditAddressId}
                setAddressData={setAddressData}
              />
            </div>
            <AddressForm
              setAddressData={setAddressData}
              isEditing={isEditing}
              editAddressId={editAddressId}
              addressData={addressData}
            />
          </div>
        </div>
      </main>
    </>
  );
}
