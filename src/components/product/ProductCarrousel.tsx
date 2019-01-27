import * as React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import ProductService from './../../services/ProductService';
import {NavLink} from 'react-router-dom';


const produtos = new ProductService().findProductsBySale();
const items = produtos.map((p)=>{
 return {
    src: `${p.foto}`,
    altText: ``,
    caption: `$ ${p.valor}`,
    header: <NavLink to={`/productdetails/${p.id}`}>{p.nome}</NavLink>
  }
});


const Carousel = () => <UncontrolledCarousel items={items} />;

export default Carousel;