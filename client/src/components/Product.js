import React from "react";
import ProductDetails from "./ProductDetails";
import ToggleableForm from "./ToggleableForm";

function Product({ product, onCartClick, onEditClick, onDeleteClick }) {
  const handleDeleteClick = (e) => {
    e.preventDefault();
    onDeleteClick(product._id);
  };
  return (
    <div className="product" key={product._id}>
      <ProductDetails product={product} />
      <a className="delete-button" onClick={handleDeleteClick}>
        <span>X</span>
      </a>
      <ToggleableForm
        product={product}
        onCartClick={onCartClick}
        onEditClick={onEditClick}
      />
    </div>
  );
}

export default Product;
