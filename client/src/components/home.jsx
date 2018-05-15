import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';
import About from './about';
import Services from './services';
import Work from './work';
import Contact from './contact';

class Home extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment>
                <About />
                <Services />
                <Work />
                <Contact />
            </Fragment>
        );
    }
}

export default Home;