import * as React from 'react';
import Cart from './components/cart/Cart';

import './App.css';

import logo from './logo.svg';

class App extends React.Component {
  public render() {
    return (
      <div>
        <header id="header">
          <div className="container clearfix">
            <div className="logo clearfix">
              <img src={logo} className="logo-img" alt="logo" />
              <h1 className="logo-title">e-commerce</h1>
            </div>

            <div className="header-toolbar">
              Toolbar
            </div>
          </div>
        </header>
        <main id="main">
          <div className="container">
            <Cart />
          </div>
        </main>
      </div>
    );
  }
}

export default App;
