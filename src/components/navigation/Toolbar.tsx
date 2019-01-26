import * as React from 'react';
import logo from '../../logo.svg';
import Cart from '../cart/Cart';
import { Link } from 'react-router-dom';

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
                            <div className="col-md-8">
                                <div className="logo clearfix">
                                    <Link to="/">
                                        <img src={logo} className="logo-img" alt="logo" />
                                        <h1 className="logo-title">CHOPPingue</h1>
                                    </Link>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="header-toolbar">
                                    <Cart />
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