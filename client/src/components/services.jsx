import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';

class Services extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="services-container">
                <div className="services-title">
                    <h1 className="display-4">Studio Services We Provide</h1>
                </div>
                <div className="container">
                    <div className="row services-row">
                        <div className="col-sm-6 col-md-3 col-xl-3">
                            <div className="">
                                <img className="" src="../../img/mic.png" width="125" height="125" alt="Card image cap" />
                                <div className="card-body">
                                    <h3 className="card-title">Tracking</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-3 col-xl-3">
                            <div className="">
                                <img className="" src="../../img/mixing2.png" width="125" height="125" alt="Card image cap" />
                                <div className="card-body">
                                    <h3 className="card-title">Mixing</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-3 col-xl-3">
                            <div className="">
                                <img className="" src="../../img/vinyl.png" width="125" height="125" alt="Card image cap" />
                                <div className="card-body">
                                    <h3 className="card-title">Mastering</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-3 col-xl-3">
                            <div className="">
                                <img className="" src="../../img/speaker.png" width="125" height="125" alt="Card image cap" />
                                <div className="card-body">
                                    <h3 className="card-title">Production</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Services;