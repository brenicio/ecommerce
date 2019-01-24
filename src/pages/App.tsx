import './App.css';
import * as React from 'react';
import ProductCarrousel from '../components/product/ProductCarrousel';
import ProductList from '../components/product/ProductList';

class App extends React.Component {

  constructor(props: any){
    super(props);
  }

  public render() {
    return (
      <div>
        <main id="main">
          <div className="container">
            <ProductCarrousel/>
            <br/>
            <br/>
            <ProductList />
          </div>
        </main>
      </div>
    );
  }
}

export default App;
