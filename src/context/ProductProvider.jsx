import { useContext } from "react";
import { createContext } from "react";
import { useState } from "react";

const ProductContext = createContext();

export const useProductContext = () => useContext(ProductContext);

export function ProductProvider({ children }) {
  const [searchValue, setSearchValue] = useState("");
  const [categoryId, setCategoryId] = useState(null);
  const [productRating, setProductRating] = useState(null);
  const [productSortBy, setProductSortBy] = useState(null);
  const [productPriceRange, setProductPriceRange] = useState(0);
  const [subCategoryId, setSubCategoryId] = useState(null);
  const [wishlist, setWishlist] = useState(() => {
    return JSON.parse(localStorage.getItem("wishlist")) || [];
  });
  const [cart, setCart] = useState(() => {
    return JSON.parse(localStorage.getItem("cart")) || [];
  });
  const [toasts, setToasts] = useState([]);

  function showToast(message, type) {
    const id = Date.now();
    const newToast = { id, message, type };
    setToasts((prev) => [...prev, newToast]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id));
    }, 3000);
  }

  function removeToast(id) {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }

  return (
    <ProductContext.Provider
      value={{
        searchValue,
        setSearchValue,
        categoryId,
        setCategoryId,
        productRating,
        setProductRating,
        productSortBy,
        setProductSortBy,
        productPriceRange,
        setProductPriceRange,
        subCategoryId,
        setSubCategoryId,
        wishlist,
        setWishlist,
        cart,
        setCart,
        toasts,
        showToast,
        removeToast,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}
