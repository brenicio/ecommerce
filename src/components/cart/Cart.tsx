import * as React from 'react';

import './Cart.css';

import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Popover, PopoverHeader, PopoverBody, Row, Col } from 'reactstrap';

class Cart extends React.Component<any, any> {
  constructor(props: any){
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      popoverOpen: false
    };
  }

  public toggle() {
    this.setState({
      popoverOpen: !this.state.popoverOpen
    });
  }

  public render() {
    return (
      <div className="cart">
        <a id="Popover1" className="cart-link">
          <span className="cart-count">0</span>
          <FontAwesomeIcon icon={faShoppingCart} className="cart-icon" />
        </a>

        <Popover className="cart-items-container" placement="bottom-end" isOpen={this.state.popoverOpen} trigger="legacy"
          target="Popover1" toggle={this.toggle}>
          <PopoverHeader className="text-center">Carrinho de Compras</PopoverHeader>
          <PopoverBody>
            <Row>
              <Col sm="12">
                <ul>
                  <li>Produto 1</li>
                  <li>Produto 2</li>
                  <li>Produto 3</li>
                </ul>
              </Col>
              <Col sm="4">
                <strong>Total: </strong>
              </Col>
              <Col sm="8" className="text-right">
                R$ 20,00
              </Col>
            </Row>
          </PopoverBody>
        </Popover>
      </div>
    );
  }
}

export default Cart;
