const cart = (state = [], action) => {
	switch (action.type) {
		case 'ADD_TO_CART':
			let product = action.payload.product;
			const index = state.findIndex(
	      (cartProduct) => cartProduct._id === product._id
	    );
	    if (index >= 0) {
	      product = state[index];
	      state[index] = Object.assign({}, product, {
	        quantity: product.quantity + 1,
	      });
	    } else {
	      product = Object.assign({}, product, { quantity: 1 });
	      state = state.concat(product);
	    }

	    return state;
		case 'UPDATE_PRODUCT':
			const productToUpdate = action.payload.product;
	    const newCart = state.map((cartProduct) => {
        if (cartProduct._id === productToUpdate._id) {
          return Object.assign({}, 
          	productToUpdate,
          	{ quantity: cartProduct.quantity }
          );
        } else {
          return cartProduct;
        }
      });

			return newCart;
		case 'CHECKOUT':
			return [];
		default:
			return state;
	}
};

export default cart;
