import * as React from 'react';
import CartStore from 'src/stores/CartStore';
import { Link } from 'react-router-dom';

class OrderCheckout extends React.Component {
  constructor(props: any) {
    super(props);
  }

  render() {
    const products = CartStore.getProducts();

    return (
    <>
    <h2>Finalizar Compra</h2>
    <div className="card">
      <table className="table table-hover shopping-cart-wrap">
        <thead className="text-muted">
          <tr>
            <th scope="col">Produto</th>
            <th scope="col" className="text-center w-150-px">Quantidade</th>
            <th scope="col" className="text-center w-150-px">Preço</th>
            <th scope="col" className="text-center w-120-px">&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p:any) =>
          <tr key={p.id.toString()}>
            <td>
              <figure className="media">
                <div className="img-wrap">
                  <img src={p.foto} alt={p.nome} className="img-thumbnail img-sm" />
                </div>
                <figcaption className="media-body">
                  <h6 className="title text-truncate">
                    <Link to={`/productdetails/${p.id}`}>{p.nome}</Link>
                  </h6>
                </figcaption>
              </figure>
            </td>
            <td className="text-center">1</td>
            <td className="text-center">{p.valor}</td>
            <td className="text-center">
              <button type="button" className="btn btn-sm btn-danger">Remover</button>
            </td>
          </tr>
          )}
        </tbody>
      </table>
    </div>
    <div className="clearfix mt-3">
      <div className="float-right">
        <Link to="/" className="btn btn-primary">Continuar comprando</Link>
        <Link to="/" className="btn btn-primary ml-1">Finalizar</Link>
      </div>
    </div>
    </>
    );
  }
}

export default OrderCheckout;
