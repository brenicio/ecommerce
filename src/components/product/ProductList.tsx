import * as React from 'react';
import ProductService from '../../services/ProductService';
import { Link } from 'react-router-dom';
import CartActions from 'src/actions/CartActions';

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

    public showAll = () => {
        this.setState(state => (
            { products: new ProductService().findProducts(), 
              numberOfitemsShown: 4,
         }));
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

    buyProduct(product:any) {
      CartActions.addProduct(product);
    }

    public render() {
        const productItems = this.state.products
            .slice(0, this.state.numberOfitemsShown)
            .map(p => 
                <div className="col-md-3" key={p.id}>
                    <figure className="card card-product">
                        <div className="img-wrap">
                            <img src={p.foto} />
                            <Link to={`/productdetails/${p.id}`} className="btn-overlay text-light" href="#">
                                Detalhes
                            </Link>
                        </div>
                        <figcaption className="info-wrap">
                            <Link to={`/productdetails/${p.id}`} className="title">{p.nome}</Link>
                            <div className="action-wrap">
                                <Link to="/order-checkout" onClick={this.buyProduct.bind(this, p)} className="btn btn-primary btn-sm float-right"> Comprar </Link>
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
                <div className="btn-load-page col-md-12 text-center filtro">
                    <a onClick={this.showCachaca} className="col-md-3 col-md-offset-4 col-sm-6 col-sm-offset-3 col-xs-12" >Cachaça</a>
                    <a onClick={this.showVodka} className="col-md-3 col-md-offset-4 col-sm-6 col-sm-offset-3 col-xs-12" >Vodka</a>
                    <a onClick={this.showWhisky} className="col-md-3 col-md-offset-4 col-sm-6 col-sm-offset-3 col-xs-12" >Whisky</a>
                    <a onClick={this.showAll} className="col-md-3 col-md-offset-4 col-sm-6 col-sm-offset-3 col-xs-12" >Todos</a>
                </div>  
           
                {productItems.length ? productItems : "Loading..."}

                <div className="btn-load-page col-md-12 text-center">
                    <a onClick={this.showMore} className="col-md-3 col-md-offset-4 col-sm-6 col-sm-offset-3 col-xs-12 btn btn-grey" >VER MAIS</a>
                </div>
            </div>
        );
    }
}

export default ProdutList;