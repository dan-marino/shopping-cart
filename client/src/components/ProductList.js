import React from "react";
import Product from "./Product";

function ProductList({ products }) {
  return (
    <div className="product-listing">
      <h2>Products</h2>
      {products.map((product) => {
        return <Product product={product}/>;
      })}
    </div>
  );
}

export default ProductList;
