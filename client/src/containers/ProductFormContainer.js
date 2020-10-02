import { connect } from "react-redux";
import ProductForm from "../components/ProductForm";

const mapStateToProps = (state, ownProps) => {
  return {
    product: ownProps.product,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onAddClick: (product) => {
      fetch("/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      })
        .then((response) => response.json())
        .then((product) => {
          dispatch({
            type: "ADD_PRODUCT",
            payload: { newProduct: product },
          });
        });
    },
    onEditClick: (updatedProduct) => {
      fetch(`/api/products/${ownProps.product._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedProduct),
      })
        .then((response) => response.json())
        .then((product) => {
          dispatch({
            type: "UPDATE_PRODUCT",
            payload: { product },
          });
        });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductForm);
