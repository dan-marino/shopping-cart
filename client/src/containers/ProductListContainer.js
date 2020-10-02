import { connect } from "react-redux";
import ProductList from "../components/ProductList";

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllProducts: () => {
      fetch("/api/products", { mode: "cors" })
        .then((response) => response.json())
        .then((products) => {
          dispatch({
            type: "RECEIVE_ALL_PRODUCTS",
            payload: { products },
          });
        });
    },
    deleteProduct: (productId) => {
      fetch(`/api/products/${productId}`, {
        method: "DELETE",
      }).then(() => {
        dispatch({
          type: "DELETE_PRODUCT",
          payload: { productId },
        });
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
