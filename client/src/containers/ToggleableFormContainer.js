import { connect } from "react-redux";
import ToggleableForm from "../components/ToggleableForm";

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addToCart: () => {
      dispatch({
        type: 'ADD_TO_CART',
        payload: { product: ownProps.product }
      });
    }
  }
}

export default connect(null, mapDispatchToProps)(ToggleableForm);
