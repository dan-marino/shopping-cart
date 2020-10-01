const products = (state = [], action) => {
	switch (action.type) {
		case 'RECEIVE_ALL_PRODUCTS':
			return state.concat(action.payload.products);
		case 'ADD_PRODUCT':
			return state.concat(action.payload.newProduct);
		case 'UPDATE_PRODUCT':
			const productToUpdate = action.payload.product;
			const newProducts = state.map((product) => {
        return product._id === productToUpdate._id ?
        	productToUpdate :
        	product;
      });

			return newProducts;
		case 'DELETE_PRODUCT':
			const idOfProductToDelete = action.payload.productId;
			const filteredProducts = state.filter(
        (prod) => prod._id !== idOfProductToDelete
      );

			return filteredProducts;
		case 'ADD_TO_CART':
			const productAddingToCart = action.payload.product;
			const products = state.map((storeProduct) => {
	      if (storeProduct._id === productAddingToCart._id) {
	      	storeProduct.quantity -= 1;
	      }
	      return storeProduct;
	    });

			return products;
		default:
			return state;
	}
};

export default products;
