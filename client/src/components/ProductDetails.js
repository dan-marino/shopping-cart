import React from "react";

function ProductDetails({ product }) {
  return (
    <div className="product-details">
      <h3>{product.title}</h3>
      <p className="price">${product.price.toFixed(2)}</p>
      <p className="quantity">{product.quantity} left in stock</p>
    </div>
  );
}

export default ProductDetails;
