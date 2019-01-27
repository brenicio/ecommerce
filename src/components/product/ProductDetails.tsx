import * as React from 'react';
import ProductService from '../../services/ProductService';
import CartActions from '../../actions/CartActions';
import ConverterValor from '../../services/ConverterValor';

interface IState {
    produto: {
        conteudo: string,
        descricao: string,
        embalagem: string,
        foto: string,
        id: string,
        ingredientes: string,
        nome: string,
        origem: string,
        sabor: string,
        valor: number,
        versao: string,
    }
}

interface IProps {
    match: {
        params: {
            id: string;
        }
    }
}

class ProductDetails extends React.Component<IProps, IState> {

    constructor(props: IProps) {
        super(props);
        this.state = {
            produto: this.FindProduct(this.props.match.params.id)

        };
    };

    public FindProduct(idx: string) {
        const produto = new ProductService().findProductsById(idx);
        return produto
    }

    buyProduct(product:any) {
      CartActions.addProduct(product);
    }

    addProductToCart(product:any) {
      CartActions.addProduct(product);
    }

    public render() {
        return (
            <div className="card">
                <div className="row no-gutters">
                    <aside className="col-sm-5 border-right">
                        <article className="gallery-wrap">
                            <div className="img-big-wrap">
                                <div> <a href={this.state.produto.foto} data-fancybox=""><img src={this.state.produto.foto} /></a></div>
                            </div>
                            <div className="img-small-wrap">
                                <div className="item-gallery"> <img src={this.state.produto.foto} /></div>
                                <div className="item-gallery"> <img src={this.state.produto.foto} /></div>
                                <div className="item-gallery"> <img src={this.state.produto.foto} /></div>
                                <div className="item-gallery"> <img src={this.state.produto.foto} /></div>
                            </div>
                        </article>
                    </aside>
                    <aside className="col-sm-7">
                        <article className="p-5">
                            <h3 className="title mb-3">{this.state.produto.nome}</h3>
                            <div className="mb-3">
                                <var className="price h3 text-warning">
                                    <span className="currency"/><span className="num">{new ConverterValor().ConverterValor(this.state.produto.valor)}</span>
                                </var>
                            </div>
                            <dl>
                                <dt>Descrição</dt>
                                <dd><p>{this.state.produto.descricao}</p></dd>
                            </dl>
                            <dl className="row">
                                <dt className="col-sm-3">Conteudo</dt>
                                <dd className="col-sm-9">{this.state.produto.conteudo}</dd>

                                <dt className="col-sm-3">Embalagem</dt>
                                <dd className="col-sm-9">{this.state.produto.embalagem}</dd>

                                <dt className="col-sm-3">Ingredientes</dt>
                                <dd className="col-sm-9">{this.state.produto.ingredientes}</dd>

                                <dt className="col-sm-3">Origem</dt>
                                <dd className="col-sm-9">{this.state.produto.origem}</dd>

                                <dt className="col-sm-3">Sabor</dt>
                                <dd className="col-sm-9">{this.state.produto.sabor}</dd>

                                <dt className="col-sm-3">Versão</dt>
                                <dd className="col-sm-9">{this.state.produto.versao}</dd>
                            </dl>
                            <div className="rating-wrap">

                                <ul className="rating-stars">
                                    <li style={{ width: '80%' }} className="stars-active">
                                        <i className="fa fa-star" /> <i className="fa fa-star" />
                                        <i className="fa fa-star" /> <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                    </li>
                                    <li>
                                        <i className="fa fa-star" /> <i className="fa fa-star" />
                                        <i className="fa fa-star" /> <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                    </li>
                                </ul>
                            </div>
                            <hr />
                            <div className="row">
                                <div className="col-sm-5">
                                    <dl className="dlist-inline">
                                        <dt>Quantidade: </dt>
                                        <dd>
                                            <select className="form-control form-control-sm" style={{ width: '70px' }}>
                                                <option>1</option>
                                                <option>2</option>
                                                <option>4</option>
                                                <option>8</option>
                                                <option>10</option>
                                            </select>
                                        </dd>
                                    </dl>
                                </div>
                                <div className="col-sm-7">
                                    <div />
                                </div>
                            </div>
                            <hr />
                            <button type="button" className="btn  btn-primary" onClick={this.buyProduct.bind(this, this.state.produto)}> Comprar agora </button>
                            <button type="button" className="btn  btn-outline-primary" onClick={this.addProductToCart.bind(this, this.state.produto)}> <i className="fas fa-shopping-cart" /> Adicionar ao carrinho </button>
                        </article>
                    </aside>
                </div>
            </div>
        );
    }
}

export default ProductDetails;