import * as React from 'react';

import './Cart.css';

import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Popover, PopoverHeader, PopoverBody } from 'reactstrap';
import CartStore from '../../stores/CartStore';
import CartActions from '../../actions/CartActions';
import { Link } from 'react-router-dom';

class Cart extends React.Component<any, any> {
  constructor(props: any){
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      popoverOpen: false,
      products: CartStore.getProducts()
    };

    this._onChange = this._onChange.bind(this);
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

  toggle() {
    this.setState({
      popoverOpen: !this.state.popoverOpen
    });
  }

  removeProduct(product:any) {
    CartActions.removeProduct(product);
  }

  render() {
    const total = ((products:any[]) => {
      return products.reduce((result, p) => {
        return result + p.valor;
      }, 0);
    }).bind(this);

    return (
      <div className="cart">
        <a id="CartPopover" className="cart-link">
          <span className="cart-count">{this.state.products.length}</span>
          <FontAwesomeIcon icon={faShoppingCart} className="cart-icon" />
        </a>

        <Popover className="cart-items-container" placement="bottom-end" isOpen={this.state.popoverOpen} trigger="legacy"
          target="CartPopover" toggle={this.toggle}>
          <PopoverHeader className="text-center">Carrinho de Compras</PopoverHeader>
          <PopoverBody>
            {this.state.products.length > 0 ? (
              <div className="cart-product-list-container">
                <div className="cart-product-list-header">
                  <strong className="cart-product-label">Produto</strong>
                  <strong className="cart-product-label text-right">Qtd x Preço</strong>
                </div>
                <ul className="cart-product-list">
                  {this.state.products.map((p:any) =>
                  <li className="cart-product-item" key={p.id.toString()}>
                    <a className="close" onClick={this.removeProduct.bind(this, p)}>&times;</a>
                    <span className="cart-product-label">{p.nome}</span>
                    <span className="cart-product-label text-right">1 x {p.valor}</span>
                  </li>
                  )}
                </ul>
                <div className="cart-product-list-footer">
                  <strong className="cart-product-label">Total: </strong>
                  <span className="cart-product-label text-right">{total(this.state.products)}</span>
                </div>

                <div className="cart-product-list-buttons clearfix">
                    <Link to="/order-checkout" className="btn btn-primary float-right">Finalizar Compra</Link>
                </div>
              </div>
            ) : (
              <div className="text-center">Seu carrinho está vazio</div>
            )}
          </PopoverBody>
        </Popover>
      </div>
    );
  }
}

export default Cart;
