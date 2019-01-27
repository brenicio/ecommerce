import './Order.css';

import * as React from 'react';
import CartStore from 'src/stores/CartStore';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import CartActions from 'src/actions/CartActions';

class Order extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    const products = CartStore.getProducts();
    this.state = {
      orderNumber: Math.round(Math.random() * 100000),
      products: Object.assign(products)
    }
  }

  componentDidMount() {
    CartActions.removeAll();
  }

  render() {
    if(this.state.products.length === 0) {
      return <Redirect to="/" />;
    }

    return (
    <>
    <h2 className="page-title">Parabéns pela compra</h2>

    <div className="mb-3">Número do pedido: {this.state.orderNumber}</div>

    <ul className="list-unstyled order-product-list">
      {this.state.products.map((p:any) => 
      <li className="order-product-item clearfix" key={p.id.toString()}>
        <div className="order-product-item-image"><img src={p.foto} className="img-thumbnail" /></div>
        <div className="order-product-item-content">
          <h3 className="order-product-item-title">{p.nome}</h3>
        </div>
      </li>
      )}
    </ul>
    <div className="text-center">
      <Link to="/" className="btn btn-primary">Seja feliz! Compre mais!</Link>
    </div>
    </>
    );
  }
}

export default Order;
