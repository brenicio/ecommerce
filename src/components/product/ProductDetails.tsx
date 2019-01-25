import * as React from 'react';
import ProductService from '../../services/ProductService';

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
        valor: string,
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
                                    <span className="currency">BRL $</span><span className="num">{this.state.produto.valor}</span>
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
                                <div className="label-rating">20 reviews</div>
                                <div className="label-rating">3 orders </div>
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
                                    <dl className="dlist-inline">
                                        <dt>Size: </dt>
                                        <dd>
                                            <label className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                                                <span className="form-check-label">SM</span>
                                            </label>
                                            <label className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                                                <span className="form-check-label">MD</span>
                                            </label>
                                            <label className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                                                <span className="form-check-label">XXL</span>
                                            </label>
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                            <hr />
                            <a href="#" className="btn  btn-primary"> Comprar agora </a>
                            <a href="#" className="btn  btn-outline-primary"> <i className="fas fa-shopping-cart" /> Adicionar ao carrinho </a>
                        </article>
                    </aside>
                </div>
            </div>
        );
    }
}

export default ProductDetails;