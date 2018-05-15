import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';
import About from './about';
import Services from './services';
import Work from './work';
import Contact from './contact';
import Footer from './footer';

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
                <Footer />
            </Fragment>
        );
    }
}

export default Home;