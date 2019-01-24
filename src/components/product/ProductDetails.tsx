import * as React from 'react';
import productService from '../../services/ProductService';
import {RouteComponentProps} from 'react-router-dom'
import ProductService from '../../services/ProductService';

const product = new productService().findProducts()[0];

class ProductDetails extends React.Component<RouteComponentProps> {   
    
    constructor(props: any){        
        super(props);
        
        

    };
   public FindProduct(idx: any){ 
       const idProd = idx.id;            
       const produto = new ProductService().findProductsById(idProd);
       return produto
   }
    
    public render() {
        console.log(this.FindProduct(this.props.match.params));
        
        return (            
            <div className="card">
                <div className="row no-gutters">
                    <aside className="col-sm-5 border-right">
                        <article className="gallery-wrap">
                            <div className="img-big-wrap">
                                <div> <a href={product.foto} data-fancybox=""><img src={product.foto} /></a></div>
                            </div>
                            <div className="img-small-wrap">
                                <div className="item-gallery"> <img src="images/items/1.jpg" /></div>
                                <div className="item-gallery"> <img src="images/items/2.jpg" /></div>
                                <div className="item-gallery"> <img src="images/items/3.jpg" /></div>
                                <div className="item-gallery"> <img src="images/items/4.jpg" /></div>
                            </div>
                        </article>
                    </aside>
                    <aside className="col-sm-7">
                        <article className="p-5">
                            <h3 className="title mb-3">{product.nome}</h3>

                            <div className="mb-3">
                                <var className="price h3 text-warning">
                                    <span className="currency">BRL $</span><span className="num">{product.valor}</span>
                                </var>                                
                            </div>
                            <dl>
                                <dt>Descrição</dt>
                                <dd><p>{product.descricao}</p></dd>
                            </dl>
                            <dl className="row">
                                <dt className="col-sm-3">Conteudo</dt>
                                <dd className="col-sm-9">{product.conteudo}</dd>

                                <dt className="col-sm-3">Embalagem</dt>
                                <dd className="col-sm-9">{product.embalagem}</dd>

                                <dt className="col-sm-3">Ingredientes</dt>
                                <dd className="col-sm-9">{product.ingredientes}</dd>

                                <dt className="col-sm-3">Origem</dt>
                                <dd className="col-sm-9">{product.origem}</dd>

                                <dt className="col-sm-3">Sabor</dt>
                                <dd className="col-sm-9">{product.sabor}</dd>

                                <dt className="col-sm-3">Versão</dt>
                                <dd className="col-sm-9">{product.versao}</dd>
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
                            <hr/>
                                <div className="row">
                                    <div className="col-sm-5">
                                        <dl className="dlist-inline">
                                            <dt>Quantidade: </dt>
                                            <dd>
                                                <select className="form-control form-control-sm" style={{ width: '70px' }}>
                                                    <option> 1 </option>
                                                    <option> 2 </option>
                                                    <option> 3 </option>
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
                                <hr/>
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