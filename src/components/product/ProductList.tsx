import * as React from 'react';
import ProductService from '../../services/ProductService';
import { NavLink } from 'react-router-dom';

export interface IProdutListState {
    products: any[];
    numberOfitemsShown: number;
}

class ProdutList extends React.Component<any, IProdutListState> {

    constructor(props: any){
        super(props);

        this.state = {
            products: new ProductService().findProducts(),
            numberOfitemsShown: 4,
        };
    }

    public showMore = () => {
        if (this.state.numberOfitemsShown + 4 <= this.state.products.length) {
            this.setState(state => ({ numberOfitemsShown: state.numberOfitemsShown + 4 }));
        } else {
            this.setState({ numberOfitemsShown: this.state.products.length })
        }
    }

    public showCachaca = () => {
       this.setState(state => (
           { products: new ProductService().findProductsByType('C'), 
             numberOfitemsShown: 4,
        }));
    }

    public showVodka = () => {
        this.setState(state => (
            { products: new ProductService().findProductsByType('V'), 
              numberOfitemsShown: 4,
         }));
     }
 
     public showWhisky = () => {
        this.setState(state => (
            { products: new ProductService().findProductsByType('W'), 
              numberOfitemsShown: 4,
         }));
     }
 
    public render() {
        const productItems = this.state.products
            .slice(0, this.state.numberOfitemsShown)
            .map(p => 
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
                                    <span className="price-new">R$ {p.valor}</span>
                                </div>
                            </div>
                        </figcaption>
                    </figure>
                </div>
            );

        return (
            <div className="row">
                {productItems.length ? productItems : "Loading..."}
                <div className="btn-load-page col-md-12 text-center">
                    <a onClick={this.showMore} className="col-md-3 col-md-offset-4 col-sm-6 col-sm-offset-3 col-xs-12 btn btn-grey" >VER MAIS</a>

                    <a onClick={this.showCachaca} className="col-md-3 col-md-offset-4 col-sm-6 col-sm-offset-3 col-xs-12 btn btn-grey" >Cachaça</a>
                    <a onClick={this.showVodka} className="col-md-3 col-md-offset-4 col-sm-6 col-sm-offset-3 col-xs-12 btn btn-grey" >Vodka</a>
                    <a onClick={this.showWhisky} className="col-md-3 col-md-offset-4 col-sm-6 col-sm-offset-3 col-xs-12 btn btn-grey" >Whisky</a>
                </div>
            </div>
        );
    }
}

export default ProdutList;