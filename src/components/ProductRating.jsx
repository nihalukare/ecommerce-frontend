import Rating from "@mui/material/Rating";
import { useState } from "react";

export default function ProductRating({ productRating }) {
  const [value, setValue] = useState(productRating);
  return (
    <div className="d-flex align-items-center mb-2">
      <p className="m-0">{value.toFixed(1)}</p>
      <Rating defaultValue={value} precision={0.5} readOnly />
    </div>
  );
}
