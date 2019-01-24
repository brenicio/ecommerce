import 'bootstrap/dist/css/bootstrap.css';
import './css/ui.css';
import './index.css';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './pages/App';
import Cart from './components/cart/Cart';
import ProductList from './components/product/ProductList';
import Product from './components/product/ProductDetails';
import Toolbar from './components/navigation/toolbar';

const exact: boolean = true
ReactDOM.render((
  <Router>
    <div>
      <Toolbar/>
      <Switch>
        <Route path="/" component={App} exact={exact} />
        <Route path="/cart" component={Cart} />
        <Route path="/products" component={ProductList} />
        <Route path="/productdetails/:id" component={Product} />
      </Switch>
    </div>

  </Router>
),
  document.getElementById('root') as HTMLElement
);
// registerServiceWorker();