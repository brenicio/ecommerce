import * as React from 'react';

import ProductService from '../../services/ProductService';
class Product extends React.Component {
  public render() {
    const product = new ProductService().findProducts()[0];

    return (
        <div>
            <div className="container">
                <div>
                    <h3 className="headline">Informações do Produto</h3>
                </div>
                <div className="row">
                    <div className="col-2 lbl">
                        <span>Versão:</span>
                    </div>
                    <div className="col-10 vlr">
                        <span>{product.versao}</span>
                    </div>
                </div>

                <div className="row">
                    <div className="col-2 lbl">
                        <span>Sabor:</span>
                    </div>
                    <div className="col-10 vlr">
                        <span>{product.sabor}</span>
                    </div>
                </div>

                <div className="row">
                    <div className="col-2 lbl">
                        <span>Conteúdo:</span>
                    </div>
                    <div className="col-10 vlr">
                        <span>{product.conteudo}</span>
                    </div>
                </div> 
 
                <div className="row">
                    <div className="col-2 lbl">
                        <span>Origem:</span>
                    </div>
                    <div className="col-10 vlr">
                        <span>{product.origem}</span>
                    </div>
                </div>

                <div className="row">
                    <div className="col-2 lbl">
                        <span>Ingredientes:</span>
                    </div>
                    <div className="col-10 vlr">
                        <span>{product.ingredientes}</span>
                    </div>
                </div>

                <div className="row">
                    <div className="col-2 lbl">
                        <span>Embalagem:</span>
                    </div>
                    <div className="col-10 vlr">
                        <span>{product.embalagem}</span>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default  Product;