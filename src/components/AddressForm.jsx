import { useProductContext } from "../context/ProductProvider";
import { BASE_API_URL } from "../config";

export default function AddressForm({
  setAddressData,
  isEditing,
  editAddressId,
  addressData,
}) {
  const { showToast } = useProductContext();

  const isFormValid =
    addressData.fullName.trim().length > 0 &&
    /^\d{10}$/.test(addressData.mobileNumber) &&
    /^\d{6}$/.test(addressData.pincode) &&
    addressData.flatOrHouse.trim().length > 0 &&
    addressData.areaOrStreet.trim().length > 0 &&
    addressData.townOrCity.trim().length > 0 &&
    addressData.state.trim().length > 0;

  function handleChange(event) {
    const { name, value } = event.target;
    setAddressData((addressData) => ({
      ...addressData,
      [name]: name === "isDefaultAddress" ? event.target.checked : value,
    }));
  }

  function handleMobileChange(event) {
    const value = event.target.value;
    if (/^\d{0,10}$/.test(value)) {
      setAddressData((addressData) => ({
        ...addressData,
        mobileNumber: value,
      }));
    }
  }

  function handlePincodeChange(event) {
    const value = event.target.value;
    if (/^\d{0,6}$/.test(value)) {
      setAddressData((addressData) => ({
        ...addressData,
        pincode: value,
      }));
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (!isFormValid) {
      alert("Please fill the address form correctly!");
    } else {
      const url = isEditing
        ? `${BASE_API_URL}/addresses/${editAddressId}`
        : `${BASE_API_URL}/addresses`;

      const method = isEditing ? "PUT" : "POST";

      try {
        const response = await fetch(url, {
          method: method,
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(addressData),
        });

        if (!response.ok) {
          throw new Error("Failed to add Address");
        }
        const data = await response.json();

        showToast(data.message, "success");
        setTimeout(() => {
          window.location.reload();
        }, 3000);
      } catch (error) {
        console.log(error);
        showToast("Failed to add address, please try again.", "danger");
      }
    }
  }

  return (
    <div className="col-md-6">
      <h3 className="mb-3 text-body-secondary">Add Address</h3>
      <form onSubmit={handleSubmit} className="mb-3">
        <div className="mb-3">
          <label htmlFor="countryInput" className="form-label fw-medium">
            Country
          </label>
          <input
            type="text"
            className="form-control"
            id="countryInput"
            name="country"
            value={addressData.country}
            readOnly
          />
        </div>
        <div className="mb-3">
          <label htmlFor="fullNameInput" className="form-label fw-medium">
            Full name (First and Last name)
          </label>
          <input
            type="text"
            className="form-control"
            id="fullNameInput"
            name="fullName"
            value={addressData.fullName}
            onChange={handleChange}
            required={true}
            placeholder="E.g. John Doe"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="mobileNumberInput" className="form-label fw-medium">
            Mobile Number
          </label>
          <input
            type="text"
            className="form-control"
            id="mobileNumberInput"
            name="mobileNumber"
            value={addressData.mobileNumber}
            onChange={handleMobileChange}
            required={true}
            placeholder="Enter 10-digit mobile number"
          />
          {addressData.mobileNumber &&
            !/^\d{10}$/.test(addressData.mobileNumber) && (
              <small className="text-danger">
                Mobile number should be of 10 digits
              </small>
            )}
        </div>

        <div className="mb-3">
          <label htmlFor="pincodeInput" className="form-label fw-medium">
            Pincode
          </label>
          <input
            type="text"
            className="form-control"
            id="pincodeInput"
            name="pincode"
            value={addressData.pincode}
            onChange={handlePincodeChange}
            required={true}
            placeholder="6 digits [0-9] PIN code"
          />
          {addressData.pincode && !/^\d{6}$/.test(addressData.pincode) && (
            <small className="text-danger">Pincode should be of 6 digits</small>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="flatOrHouseInput" className="form-label fw-medium">
            Flat, House no., Building, Company, Apartment
          </label>
          <input
            type="text"
            className="form-control"
            id="flatOrHouseInput"
            name="flatOrHouse"
            value={addressData.flatOrHouse}
            onChange={handleChange}
            required={true}
            placeholder="Flat / House No. / Building / Apartment"
          />
          {}
        </div>

        <div className="mb-3">
          <label htmlFor="areaOrStreetInput" className="form-label fw-medium">
            Area, Street, Sector, Village
          </label>
          <input
            type="text"
            className="form-control"
            id="areaOrStreetInput"
            name="areaOrStreet"
            value={addressData.areaOrStreet}
            onChange={handleChange}
            required={true}
            placeholder="Area / Street / Sector / Village"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="landmarkInput" className="form-label fw-medium">
            Landmark <small className="fw-normal">(optional)</small>
          </label>
          <input
            type="text"
            className="form-control"
            id="landmarkInput"
            name="landmark"
            placeholder="E.g. near apollo hospital"
            value={addressData.landmark}
            onChange={handleChange}
            required={false}
          />
        </div>

        <div className="mb-3">
          <div className="row">
            <div className="col-md-6">
              <label htmlFor="townInput" className="form-label fw-medium">
                Town/City
              </label>
              <input
                type="text"
                className="form-control"
                id="townInput"
                name="townOrCity"
                value={addressData.townOrCity}
                onChange={handleChange}
                required={true}
                placeholder="Enter Town or City"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="stateInput" className="form-label fw-medium">
                State:
              </label>
              <input
                type="text"
                className="form-control"
                id="stateInput"
                name="state"
                value={addressData.state}
                onChange={handleChange}
                required={true}
                placeholder="Enter State"
              />
            </div>
          </div>
        </div>
        <div className="form-check mb-3">
          <input
            className="form-check-input"
            type="checkbox"
            checked={addressData.isDefaultAddress}
            id="checkDefaultAddress"
            name="isDefaultAddress"
            onChange={handleChange}
          />
          <label className="form-check-label" htmlFor="checkDefaultAddress">
            Make this my default address.
          </label>
        </div>

        <button className="btn btn-outline-dark" type="submit">
          {isEditing ? "Edit Address" : "Add Address"}
        </button>
      </form>
    </div>
  );
}
