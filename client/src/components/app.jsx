import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Navbar from './navbar';
import Header from './header';
import Home from './home';
import GoodbyeWorld from './goodbye';

class Navigation extends Component {

    render() {
        return (
            <Router>
                <Fragment>
                    <Navbar />
                    <Header />
                    <Link to="/goodbye">Goodbye</Link>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        {/* <Route path="/goodbye" component={GoodbyeWorld} /> */}
                    </Switch>
                </Fragment>
            </Router>
        )
    }
}

export default Navigation;