import './OrderCheckout.css';

import * as React from 'react';
import CartStore from 'src/stores/CartStore';
import { Link, Redirect } from 'react-router-dom';
import CartActions from 'src/actions/CartActions';
import ConverterValor from '../../services/ConverterValor';

const Converter = new ConverterValor();
class OrderCheckout extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    
    this.state = {
      products: CartStore.getProducts()
    };

    this._onChange = this._onChange.bind(this);
  }

  removeProduct(product:any) {
    CartActions.removeProduct(product);
    this.setState({
      products: CartStore.getProducts()
    });
  }

  increaseProductQuantity(product:any) {
    CartActions.increaseProductQuantity(product);
  }

  decreaseProductQuantity(product:any) {
    CartActions.decreaseProductQuantity(product);
  }

  componentDidMount() {
    CartStore.addChangeListener(this._onChange)
  }

  componentWillUnmount() {
    CartStore.removeChangeListener(this._onChange);
  }

  _onChange() {
    this.setState({
      products: CartStore.getProducts()
    })
  }

  render() {
    if(this.state.products.length === 0) {
      return <Redirect to="/" />;
    }
    
    return (
    <>
    <h2 className="page-title">Carrinho de Compra</h2>
    <div className="card">
      <table className="table table-hover shopping-cart-wrap">
        <thead className="text-muted">
          <tr>
            <th scope="col">Produto</th>
            <th scope="col" className="text-center w-150-px">Quantidade</th>
            <th scope="col" className="text-center w-150-px">Preço</th>
            <th scope="col" className="text-center w-150-px">Total</th>
            <th scope="col" className="text-center w-120-px">&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {this.state.products.map((p:any) =>
          <tr key={p.id.toString()}>
            <td>
              <figure className="media">
                <div className="img-wrap">
                  <img src={p.foto} alt={p.nome} className="img-thumbnail img-sm" />
                </div>
                <figcaption className="media-body">
                  <h3 className="title text-truncate">
                    <Link to={`/productdetails/${p.id}`}>{p.nome}</Link>
                  </h3>
                </figcaption>
              </figure>
            </td>
            <td className="text-center">
              <div className="order-product-quantity clearfix">
                <span className="order-product-quantity-number">{p.quantity}</span>
                <span className="order-product-quantity-actions">
                  <button type="button" className="btn btn-primary" onClick={this.increaseProductQuantity.bind(this, p)}>+</button>
                  <button type="button" className="btn btn-danger" onClick={this.decreaseProductQuantity.bind(this, p)}>-</button>
                </span>
              </div>
            </td>
            <td className="text-center">{Converter.ConverterValor(p.valor)}</td>
            <td className="text-center">{Converter.ConverterValor(p.quantity * p.valor)}</td>
            <td className="text-center">
              <button type="button" className="btn btn-sm btn-danger" onClick={this.removeProduct.bind(this, p)}>Remover</button>
            </td>
          </tr>
          )}
        </tbody>
      </table>
    </div>
    <div className="clearfix text-right mt-3">
      <strong>Total Carrinho: </strong> {Converter.ConverterValor(CartStore.getTotal())}
    </div>
    <div className="clearfix mt-3">
      <div className="float-right">
        <Link to="/" className="btn btn-primary">Continuar comprando</Link>
        <Link to="/order" className="btn btn-primary ml-1">Finalizar</Link>
      </div>
    </div>
    </>
    );
  }
}

export default OrderCheckout;
