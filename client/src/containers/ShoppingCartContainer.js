import { connect } from "react-redux";
import ShoppingCart from "../components/ShoppingCart";

const mapStateToProps = (state) => {
  return {
    cart: state.cart
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onCheckout: () => dispatch({ type: 'CHECKOUT' }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);
