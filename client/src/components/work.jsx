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
                                <a href="https://open.spotify.com/user/1232303350/playlist/43M59KE4JAAAV349MDVcPq?si=Bn31GrngSDmIzcqQaob7gQ" target="_blank" className="btn btn-dark">
                                    Listen
                                </a>
                            </div>
                            <div className="col-md-8">
                                <div className="row">
                                    <div className="col-xs-5 col-sm-4 work-discography">
                                        <img src="../../img/Misery_2.jpg" />
                                    </div>
                                    <div className="col-xs-5 col-sm-4 work-discography">
                                        <img src="../../img/cityoftheweak.jpg" />
                                    </div>
                                    <div className="col-xs-5 col-sm-4 work-discography">
                                        <img src="../../img/marinacity.jpg" />
                                    </div>
                                    <div className="col-xs-5 col-sm-4 work-discography">
                                        <img src="../../img/dependence.jpeg" />
                                    </div>
                                    <div className="col-xs-5 col-sm-4 work-discography">
                                        <img src="../../img/sylvn.jpg" />
                                    </div>
                                    <div className="col-xs-5 col-sm-4 work-discography">
                                        <img src="../../img/inyourmemory.jpeg" />
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