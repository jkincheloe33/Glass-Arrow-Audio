import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';

class Services extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            // <div className="services-container">
            <div className="row services-row">
                <div className="col-sm-6 col-md-3 col-xl-3">
                    <div className="">
                        <img className="" src="../../img/vinyl.png" width="125" height="125" alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-md-3 col-xl-3">
                    <div className="">
                        <img className="" src="../../img/vinyl.png" width="125" height="125" alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-md-3 col-xl-3">
                    <div className="">
                        <img className="" src="../../img/vinyl.png" width="125" height="125" alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-md-3 col-xl-3">
                    <div className="">
                        <img className="" src="../../img/vinyl.png" width="125" height="125" alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                        </div>
                    </div>
                </div>
            </div>
            // </div>
        );
    }
}

export default Services;