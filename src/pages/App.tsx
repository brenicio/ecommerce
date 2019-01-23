import './App.css';
import * as React from 'react';

import { faShoppingCart } from 'node_modules/@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from 'node_modules/@fortawesome/react-fontawesome';

import Product from '../components/product/ProductDetails';
import ProductCarrousel from '../components/product/ProductCarrousel';
import ProductList from '../components/product/ProductList';


import logo from './logo.svg';



class App extends React.Component {
  constructor(props: any){
    super(props);
  }

  public render() {
    return (
      <div>
        <header id="header">
          <div className="container clearfix">
            <div className="logo clearfix">
              <img src={logo} className="logo-img" alt="logo" />
              <h1 className="logo-title">CHOPPingue</h1>
            </div>
            <div className="header-toolbar">
              <a className="toolbar-frame">
                <span className="toolbar-helper">5</span>
                <FontAwesomeIcon className='toolbar-img' icon={faShoppingCart} />
              </a>
            </div>
          </div>
        </header>
        <main id="main">
          <div className="container">
            <ProductCarrousel/>
            <br/>
            <br/>
            <ProductList />

            <Product /> 

            {this.props.children}
          </div>
        </main>
      </div>
    );
  }
}

export default App;
