import * as React from 'react';
import ProductService from '../../services/ProductService';
import { NavLink } from 'react-router-dom';

class ProdutList extends React.Component {
    public render() {
        const products = new ProductService().findProducts();

        const productItems = products.map((p) => 
            <div className="col-md-3" key={p.id}>
                <figure className="card card-product">
                    <div className="img-wrap">
                        <img src={p.foto} />
                        <a className="btn-overlay" href="#">
                            <NavLink to={`/productdetails/${p.id}`} className="fa fa-search-plus text-light">Detalhes</NavLink>
                        </a>
                    </div>
                    <figcaption className="info-wrap">
                        <a href="#" className="title">{p.nome}</a>
                        <div className="action-wrap">
                            <a href="#" className="btn btn-primary btn-sm float-right"> Comprar </a>
                            <div className="price-wrap h5">
                                <span className="price-new">${p.valor}</span>
                            </div>
                        </div>
                    </figcaption>
                </figure>
            </div>
        );

        return (
            <div className="row">
               { productItems }
            </div>
        );
    }
}

export default ProdutList;