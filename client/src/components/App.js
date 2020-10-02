import React from "react";
import ShoppingCartContainer from "../containers/ShoppingCartContainer";
import ProductListContainer from "../containers/ProductListContainer";
import ToggleableFormContainer from "../containers/ToggleableFormContainer";

class App extends React.Component {
  render() {
    return (
      <div id="app">
        <header>
          <h1>The Shop!</h1>
          <ShoppingCartContainer />
        </header>

        <main>
          <ProductListContainer />
          <ToggleableFormContainer />
        </main>
      </div>
    );
  }
}

export default App;
