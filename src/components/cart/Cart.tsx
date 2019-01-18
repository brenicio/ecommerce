import * as React from 'react';

import ProductService from '../../services/ProductService';
class Cart extends React.Component {
  public render() {
    const product = new ProductService().findProducts()[0];

    return (
      <div className="row">
            {product.name}
      </div>
    );
  }
}

export default Cart;
