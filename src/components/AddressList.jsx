import { BASE_API_URL } from "../config";
import { useProductContext } from "../context/ProductProvider";
import useFetch from "../hooks/useFetch";

export default function AddressList({
  setIsEditing,
  setEditAddressId,
  setAddressData,
}) {
  const { showToast } = useProductContext();
  const ADDRESSES_API_URL = `${BASE_API_URL}/addresses`;
  const { data, loading, error } = useFetch(ADDRESSES_API_URL);

  async function handleDelete(addressId) {
    try {
      const response = await fetch(`${ADDRESSES_API_URL}/${addressId}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Failed to delete address");
      }
      const data = await response.json();

      showToast(data.message, "success");
      setTimeout(() => {
        window.location.reload();
      }, 3000);
    } catch (error) {
      console.log(error);
      showToast(`Failed to delete address! ${error}`, "danger");
    }
  }

  async function handleEdit(addressId) {
    fetch(`${ADDRESSES_API_URL}/${addressId}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch");
        }
        return res.json();
      })
      .then(({ data }) => {
        if (!data) {
          throw new Error("No address data returned");
        }

        setAddressData({
          country: data?.country || "India",
          fullName: data?.fullName || "",
          mobileNumber: data?.mobileNumber || "",
          pincode: data?.pincode || "",
          flatOrHouse: data?.flatOrHouse || "",
          areaOrStreet: data?.areaOrStreet || "",
          landmark: data?.landmark || "",
          townOrCity: data?.townOrCity || "",
          state: data?.state || "",
          isDefaultAddress: data?.isDefaultAddress || false,
        });
      })
      .catch((error) => console.log("Error fetching data:", error));

    setIsEditing(true);
    setEditAddressId(addressId);
  }

  return (
    <div>
      <p className="fw-medium text-body-secondary text-center">
        List of added addresses
      </p>
      {error && (
        <div className="alert alert-danger" role="alert">
          Error getting addresses
        </div>
      )}
      {loading ? (
        <div className="alert alert-primary" role="alert">
          Loading...
        </div>
      ) : (
        <ul
          className="list-group mx-3 border rounded-2 overflow-y-auto"
          style={{ maxHeight: "20rem" }}
        >
          {data?.data?.length > 0 ? (
            data.data.map((address) => (
              <li
                key={address._id}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                <div>
                  <strong className="m-0">{address.fullName}</strong>
                  <p className="m-0">{address.flatOrHouse},</p>
                  <p className="m-0">{address.areaOrStreet},</p>
                  {address.landmark ? (
                    <p className="m-0">{address.landmark},</p>
                  ) : null}
                  <p className="m-0">
                    {address.townOrCity}, {address.state}, {address.pincode}
                  </p>
                  <p className="m-0">{address.country}</p>
                  <p className="m-0">Phone number: {address.mobileNumber}</p>
                </div>
                <div className="hstack">
                  <button
                    className="btn"
                    onClick={() => {
                      handleDelete(address._id);
                    }}
                  >
                    <i className="bi bi-trash text-danger fs-4"></i>
                    <br />
                    <small className="text-secondary">delete</small>
                  </button>
                  <div
                    className="vr"
                    style={{ height: "60px", margin: "auto" }}
                  ></div>
                  <button
                    className="btn"
                    onClick={() => {
                      handleEdit(address._id);
                    }}
                  >
                    <i className="bi bi-pen text-primary fs-4"></i>
                    <br />
                    <small className="text-secondary">edit</small>
                  </button>
                </div>
              </li>
            ))
          ) : (
            <div className="alert alert-primary" role="alert">
              No address added yet!
            </div>
          )}
        </ul>
      )}
    </div>
  );
}
