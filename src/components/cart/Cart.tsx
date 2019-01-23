import * as React from 'react';

import ProductService from '../../services/ProductService';

class Cart extends React.Component {
  constructor(props: any){
    super(props);
  }
  public render() {
    const product = new ProductService().findProducts()[0];

    return (
      <div className="row">
            {product.nome}
      </div>
    );
  }
}

export default Cart;
