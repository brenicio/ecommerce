import * as React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import ProductService from './../../services/ProductService';
const produtos = new ProductService().findProducts();


const items = produtos.map((p)=>{
 return {
    src: `${p.foto}`,
    altText: ``,
    caption: `R$ ${p.valor}`,
    header: `${p.nome}`
    
  }
});

console.log(items);
const Carousel = () => <UncontrolledCarousel items={items} />;

export default Carousel;