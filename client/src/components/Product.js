import React from "react";
import ProductDetails from "./ProductDetails";
import ToggleableForm from "./ToggleableForm";

function Product({ product, onCartClick }) {
  return (
    <div className="product" key={product.id}>
      <ProductDetails product={product} />
      <a className="delete-button">
        <span>X</span>
      </a>
      <ToggleableForm product={product} onCartClick={onCartClick} />
    </div>
  )
}

export default Product;
