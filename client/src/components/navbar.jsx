import React, { Component, Fragment } from 'react';

class Navbar extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let scroll = 0;
        window.addEventListener('scroll', () => {
            let scrollY = window.scrollY;
            if (scroll > 100 && scrollY > 100) {
                return;
            } else if (scroll <= 100 && scrollY <= 100) {
                return;
            }

            scroll = scrollY;
            if (scroll > 100) {
                this.nav.classList.add("show");
            } else {
                this.nav.classList.remove("show");
            }
        });
    }

    render() {
        return (
            <nav ref={(nav) => { this.nav = nav; }} className="animated slideInDown nav-container transition navbar navbar-expand-md navbar-light fixed-top">
                <a className="navbar-brand" href="/">
                    <img src="../../img/logo.png" width="33" height="30" className="d-inline-block align-top pr-1" alt="" />
                    Glass Arrow Audio
                    </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">

                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link animated custom-nav-link" href="#about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link animated custom-nav-link" href="#services">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link animated custom-nav-link" href="#artists">Artists</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link animated custom-nav-link" href="#contact">Contact</a>
                        </li>
                    </ul>

                </div>
            </nav>

        );
    }
}

export default Navbar;






