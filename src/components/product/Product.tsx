import * as React from 'react';

import { faShoppingCart } from 'node_modules/@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from 'node_modules/@fortawesome/react-fontawesome';

import ProductService from '../../services/ProductService';
import Details from './Details';

import './Product.css';

class Product extends React.Component {
  public render() {
    const product = new ProductService().findProducts()[0];

    return (
        <div>
            <div className="main-work height-400">
                <div className="container">
                    <div className="row">
                        <div className="col-6 lbl">
                            <img className="img-thumbnail" src="https://images-americanas.b2w.io/produtos/01/00/item/5829/3/5829305_1GG.jpg" />        
                        </div>
                        <div className="col-6 vlr">
                            <div className="text-center">
                                <h3 className="headline">{product.nome}</h3>
                            </div>
                            <div className="row main-price text-center">
                                <p className="col-12 sales-price">R$ {product.valor}</p>
                                <div className="col-12 installment-wrapper">
                                    <p className="payment-option payment-option-rate">10x de R$ 69,99 s/ juros</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xs-12 col-md-6 col-sm-6 block-margin-bottom-buttom">
                                    <button type="button" className="btn btn-info btn-block">
                                        Adicionar
                                        <FontAwesomeIcon className ='toolbar-img' icon={faShoppingCart} />
                                    </button>                                
                                </div>
                                <div className="col-xs-12 col-md-6 col-sm-6 block-margin-bottom-buttom">
                                    <button type="button" className="btn btn-danger btn-block">Adicionar</button>                                
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Details />
        </div>
    );
  }
}

export default  Product;