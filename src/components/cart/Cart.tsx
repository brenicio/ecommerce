import * as React from 'react';

import ProductService from '../../services/ProductService';

class Cart extends React.Component {
  public render() {
    const product = new ProductService().findProducts()[0];

    return (
      <div className="row">
        <div className="col-md-9">
            <div>
                <img src="https://placeimg.com/640/480/any" className="img-fluid" alt="Responsive image" />
            </div>
        </div>
        <div className="col-md-3">
            {product.name}
        </div>
      </div>
    );
  }
}

export default Cart;
