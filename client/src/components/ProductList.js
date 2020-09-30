import React from "react";
import Product from "./Product";

function ProductList({ products, onCartClick, onEditClick, onDeleteClick }) {
  return (
    <div className="product-listing">
      <h2>Products</h2>
      {products.map((product) => {
        return (
          <Product
            key={product.id}
            product={product}
            onCartClick={onCartClick}
            onEditClick={onEditClick}
            onDeleteClick={onDeleteClick}
          />
        );
      })}
    </div>
  );
}

export default ProductList;
