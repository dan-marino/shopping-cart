import React from "react";
import ProductDetails from "./ProductDetails";
import ToggleableForm from "./ToggleableForm";
import store from "../lib/store";

function Product({ product }) {
  const deleteProduct = (productId) => {
    fetch(`/api/products/${productId}`, {
      method: "DELETE",
    }).then(() => {
      store.dispatch({
        type: 'DELETE_PRODUCT',
        payload: { productId }
      })
    });
  };

  const handleDeleteClick = (e) => {
    e.preventDefault();
    deleteProduct(product._id);
  };

  return (
    <div className="product" key={product._id}>
      <ProductDetails product={product} />
      <a className="delete-button" onClick={handleDeleteClick}>
        <span>X</span>
      </a>
      <ToggleableForm
        product={product}
      />
    </div>
  );
}

export default Product;
