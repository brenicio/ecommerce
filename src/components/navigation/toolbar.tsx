import * as React from 'react';
import { faShoppingCart } from 'node_modules/@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from 'node_modules/@fortawesome/react-fontawesome';
import logo from '../../logo.svg';
import { NavLink } from 'react-router-dom';

class Toolbar extends React.Component {

    constructor(props: any) {
        super(props);
    }

    public render() {
        return (
            <div>
                <header id="header">
                    <div className="container clearfix">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="logo clearfix">
                                    <img src={logo} className="logo-img" alt="logo" />
                                    <h1 className="logo-title">CHOPPingue</h1>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <nav className="nav nav-pills justify-content-center">
                                    <li className="nav-item">
                                        <NavLink to="/" className="nav-link" activeClassName="active">Loja</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to="/products" className="nav-link" activeClassName="active">Produtos</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to="/cart" className="nav-link" activeClassName="active">Carrinho</NavLink>
                                    </li>
                                </nav>
                            </div>

                            <div className="col-md-4">
                                <div className="header-toolbar">
                                    <a className="toolbar-frame">
                                        <span className="toolbar-helper">5</span>
                                        <FontAwesomeIcon className='toolbar-img' icon={faShoppingCart} />
                                    </a>
                                </div>
                            </div>

                        </div>


                    </div>
                </header>
            </div>
        );
    }

}

export default Toolbar;