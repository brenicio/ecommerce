import * as React from 'react';

import ProductService from '../../services/ProductService';

class Details extends React.Component {
  public render() {
    const product = new ProductService().findProducts()[0];

    return (
        <div className="main-work height-186">
            <div className="container">
                <div className="text-center">
                    <h5 className="headline">Informações do Produto</h5>
                </div>
                <div className="row">
                    <div className="col-6 lbl">
                        <span>Versão:</span>
                    </div>
                    <div className="col-6 vlr">
                        <span>{product.versao}</span>
                    </div>
                </div>

                <div className="row">
                    <div className="col-6 lbl">
                        <span>Sabor:</span>
                    </div>
                    <div className="col-6 vlr">
                        <span>{product.sabor}</span>
                    </div>
                </div>

                <div className="row">
                    <div className="col-6 lbl">
                        <span>Conteúdo:</span>
                    </div>
                    <div className="col-6 vlr">
                        <span>{product.conteudo}</span>
                    </div>
                </div> 
 
                <div className="row">
                    <div className="col-6 lbl">
                        <span>Origem:</span>
                    </div>
                    <div className="col-6 vlr">
                        <span>{product.origem}</span>
                    </div>
                </div>

                <div className="row">
                    <div className="col-6 lbl">
                        <span>Ingredientes:</span>
                    </div>
                    <div className="col-6 vlr">
                        <span>{product.ingredientes}</span>
                    </div>
                </div>

                <div className="row">
                    <div className="col-6 lbl">
                        <span>Embalagem:</span>
                    </div>
                    <div className="col-6 vlr">
                        <span>{product.embalagem}</span>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default  Details;