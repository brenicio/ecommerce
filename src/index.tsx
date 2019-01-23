import 'bootstrap/dist/css/bootstrap.css';
import './css/ui.css';
import './index.css';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './pages/App';
import Cart from './components/cart/Cart'
import ProductList from './components/product/ProductList'
// import registerServiceWorker from './registerServiceWorker';

const exact: boolean = true
ReactDOM.render((
  <Router>
    <div>
    <Route path="/" component={App} exact={exact}/>
    <Route path="/cart" component={Cart} />
    <Route path="/products" component={ProductList} />
    </div>    
  </Router>
),
  document.getElementById('root') as HTMLElement
);
// registerServiceWorker();