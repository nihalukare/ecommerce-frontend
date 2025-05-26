import { NavLink } from "react-router-dom";
import { useProductContext } from "../context/ProductProvider";

export default function Header() {
  const { setSearchValue, wishlist, cart } = useProductContext();

  return (
    <header className="py-2">
      <nav className="navbar expand-lg">
        <div className="container">
          <a href="/" className="navbar-brand text-body-secondary fw-bold">
            MyShoppingSite
          </a>
          <form className="w-25" role="search">
            <div className="input-group border-2 rounded-2 border">
              <span className="input-group-text border-0 bg-white">
                <i className="bi bi-search"></i>
              </span>
              <input
                id="searchInput"
                className="form-control border-0"
                type="search"
                placeholder="Search"
                onChange={(e) => {
                  setSearchValue(e.target.value.toLowerCase());
                }}
              />
            </div>
          </form>
          <div className="d-flex align-items-center">
            <NavLink
              to={"/userProfile"}
              className="text-body-secondary position-relative link-underline link-underline-opacity-0"
            >
              <div className="d-flex align-items-center">
                <div>
                  <i className="bi bi-person-circle fs-5"></i>
                </div>
                <div>
                  <small className="ms-2">User Profile</small>
                </div>
              </div>
            </NavLink>
            <NavLink
              to={"/wishlist"}
              className="text-body-secondary mx-4 position-relative"
            >
              <i className="bi bi-heart fs-5"></i>
              <span className="position-absolute top-25 start-100 translate-middle badge rounded-pill bg-danger">
                {wishlist.length}
              </span>
            </NavLink>
            <NavLink
              to={"/cart"}
              className="text-body-secondary mx-4 link-underline link-underline-opacity-0"
            >
              <div className="d-flex align-items-center">
                <div className="position-relative">
                  <i className="bi bi-cart3 fs-5"></i>
                  <span className="position-absolute top-25 start-100 translate-middle badge rounded-pill bg-danger">
                    {cart.length}
                  </span>
                </div>
                <div className="text-body-secondary fw-medium ms-2">Cart</div>
              </div>
            </NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
}
