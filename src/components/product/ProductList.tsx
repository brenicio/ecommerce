import * as React from 'react';
import ProductService from '../../services/ProductService';



class ProdutList extends React.Component {
    public render() {
        const product = new ProductService().findProducts()[0];
        return (
            <div className="row">
                <div className="col-md-3">
                    <figure className="card card-product">
                        <div className="img-wrap">
                            <img src={product.foto} />
                            <a className="btn-overlay" href="#">
                                <i className="fa fa-search-plus" /> Detalhes
                            </a>
                        </div>
                        <figcaption className="info-wrap">
                            <a href="#" className="title">{product.nome}</a>
                            <div className="action-wrap">
                                <a href="#" className="btn btn-primary btn-sm float-right"> Comprar </a>
                                <div className="price-wrap h5">
                                    <span className="price-new">${product.valor}</span>
                                    <del className="price-old">${product.valor}</del>
                                </div>
                            </div>
                        </figcaption>
                    </figure>
                </div>
                <div className="col-md-3">
                    <figure className="card card-product">
                        <div className="img-wrap">
                            <img src={product.foto} />
                            <a className="btn-overlay" href="#">
                                <i className="fa fa-search-plus" /> Detalhes
                             </a>
                        </div>
                        <figcaption className="info-wrap">
                            <a href="#" className="title">{product.nome}</a>
                            <div className="action-wrap">
                                <a href="#" className="btn btn-primary btn-sm float-right"> Comprar </a>
                                <div className="price-wrap h5">
                                    <span className="price-new">${product.valor}</span>
                                </div>
                            </div>
                        </figcaption>
                    </figure>
                </div>
                <div className="col-md-3">
                    <figure className="card card-product">
                        <div className="img-wrap">
                            <img src={product.foto} />
                            <a className="btn-overlay" href="#">
                                <i className="fa fa-search-plus" /> Detalhes
                             </a>
                        </div>
                        <figcaption className="info-wrap">
                            <a href="#" className="title">{product.nome}</a>
                            <div className="action-wrap">
                                <a href="#" className="btn btn-primary btn-sm float-right"> Comprar </a>
                                <div className="price-wrap h5">
                                    <span className="price-new">${product.valor}</span>
                                </div>
                            </div>
                        </figcaption>
                    </figure>
                </div>
                <div className="col-md-3">
                    <figure className="card card-product">
                        <div className="img-wrap">
                            <img src={product.foto} />
                            <a className="btn-overlay" href="#">
                                <i className="fa fa-search-plus" /> Detalhes
                             </a>
                        </div>
                        <figcaption className="info-wrap">
                            <a href="#" className="title">{product.nome}</a>
                            <div className="action-wrap">
                                <a href="#" className="btn btn-primary btn-sm float-right"> Comprar </a>
                                <div className="price-wrap h5">
                                    <span className="price-new">${product.valor}</span>
                                </div>
                            </div>
                        </figcaption>
                    </figure>
                </div>

            </div>
        );
    }
}



export default ProdutList;