import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';

class Work extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment>
                <a name="artists"></a>
                <div className="work-container">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <h1>Our Artists</h1>
                                <p>These are our some of our featured artists. You can check out more of our work by hitting the button below.</p>
                                <button type="button" className="btn btn-dark">
                                    Listen
                                </button>
                            </div>
                            <div className="col-md-8">
                                <div className="row">
                                    <div className="col-xs-5 col-sm-4 work-discography">
                                        <img src="../../img/Misery_2.jpg" />
                                    </div>
                                    <div className="col-xs-5 col-sm-4 work-discography">
                                        <img src="../../img/Misery_2.jpg" />
                                    </div>
                                    <div className="col-xs-5 col-sm-4 work-discography">
                                        <img src="../../img/Misery_2.jpg" />
                                    </div>
                                    <div className="col-xs-5 col-sm-4 work-discography">
                                        <img src="../../img/Misery_2.jpg" />
                                    </div>
                                    <div className="col-xs-5 col-sm-4 work-discography">
                                        <img src="../../img/Misery_2.jpg" />
                                    </div>
                                    <div className="col-xs-5 col-sm-4 work-discography">
                                        <img src="../../img/Misery_2.jpg" />
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

export default Work;