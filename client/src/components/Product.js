import React from "react";
import ProductDetails from "./ProductDetails";
import ToggleableFormContainer from "../containers/ToggleableFormContainer";

function Product({ product, onDeleteClick }) {
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
      <ToggleableFormContainer
        product={product}
      />
    </div>
  );
}

export default Product;
