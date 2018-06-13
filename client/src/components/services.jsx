import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';

class Services extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let scroll = 0;
        window.addEventListener('scroll', () => {
            let scrollY = window.scrollY;
            if (scroll > 855 && scrollY > 855) {
                return;
            } else if (scroll <= 855 && scrollY <= 855) {
                return;
            }

            scroll = scrollY;
            if (scroll > 855) {
                this.services.classList.add("slideInUp", "load");
                this.servicesTwo.classList.add("slideInUp", "load");
                this.servicesThree.classList.add("slideInUp", "load");
                this.servicesFour.classList.add("slideInUp", "load");
            } else {
                this.services.classList.remove("slideInUp", "load");
                this.servicesTwo.classList.remove("slideInUp", "load");
                this.servicesThree.classList.remove("slideInUp", "load");
                this.servicesFour.classList.remove("slideInUp", "load");
            }
        });
    }

    render() {
        return (
            <Fragment>
                <a name="services"></a>
                <div className="services-container">
                    <div className="services-title">
                        <h1 className="display-4">Studio Services We Provide</h1>
                    </div>
                    <div className="container">
                        <div className="row services-row">
                            <div className="col-sm-6 col-md-3 col-xl-3">
                                <div
                                    ref={(services) => { this.services = services; }}
                                    className="services-item animatedTwo">
                                    <img className="" src="../../img/mic.png" width="125" height="125" alt="Card image cap" />
                                    <div className="card-body">
                                        <h3 className="card-title">Tracking</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-3 col-xl-3">
                                <div
                                    ref={(servicesTwo) => { this.servicesTwo = servicesTwo; }}
                                    className="services-item animated">
                                    <img className="" src="../../img/mixing2.png" width="125" height="125" alt="Card image cap" />
                                    <div className="card-body">
                                        <h3 className="card-title">Mixing</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-3 col-xl-3">
                                <div
                                    ref={(servicesThree) => { this.servicesThree = servicesThree; }}
                                    className="services-item animatedThree">
                                    <img className="" src="../../img/vinyl.png" width="125" height="125" alt="Card image cap" />
                                    <div className="card-body">
                                        <h3 className="card-title">Mastering</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-3 col-xl-3">
                                <div
                                    ref={(servicesFour) => { this.servicesFour = servicesFour; }}
                                    className="services-item animatedFour">
                                    <img className="" src="../../img/speaker.png" width="125" height="125" alt="Card image cap" />
                                    <div className="card-body">
                                        <h3 className="card-title">Production</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Services;