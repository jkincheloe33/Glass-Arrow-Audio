import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';
import About from './about';
import Services from './services';

class Home extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment>
                <About />
                <Services />
            </Fragment>
        );
    }
}

export default Home;