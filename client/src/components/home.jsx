import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';
import About from './about';

class Home extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment>
                <h1>Hello World!</h1>;
                <About />
            </Fragment>
        );
    }
}

export default Home;