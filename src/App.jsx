import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ProductProvider } from "./context/ProductProvider";

import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import ProductsListing from "./pages/ProductsListing";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Wishlist from "./pages/Wishlist";
import Cart from "./pages/Cart";
import UserProfile from "./pages/UserProfile";
import OrderHistory from "./pages/OrderHistory";

import "./App.css";

export default function App() {
  return (
    <ProductProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/products/category/:categoryId/:subCategoryId"
            element={<ProductsListing />}
          />
          <Route
            path="/products/productDetails/:productId"
            element={<ProductDetails />}
          />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/userProfile" element={<UserProfile />} />
          <Route path="/orderHistory" element={<OrderHistory />} />
        </Routes>
      </Router>
    </ProductProvider>
  );
}
