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
                                <p>These are our some of our featured artists. You can check out more of our work on our Spotify playlist.</p>
                                <a href="https://open.spotify.com/user/1232303350/playlist/43M59KE4JAAAV349MDVcPq?si=Bn31GrngSDmIzcqQaob7gQ" target="_blank" className="btn btn-dark">
                                    Spotify
                                </a>
                            </div>
                            <div className="col-md-8">
                                <div className="row">
                                    <div className="col-xs-5 col-sm-4 work-discography">
                                        <a href="http://glasslands.co" target="_blank">
                                            <img src="../../img/Misery_2.jpg" />
                                            <div className="work-text-wrapper">
                                                <div className="work-text">Glasslands</div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="col-xs-5 col-sm-4 work-discography">
                                        <a href="http://facebook.com/cityoftheweak" target="_blank">
                                            <img src="../../img/cityoftheweak.jpg" />
                                            <div className="work-text-wrapper">
                                                <div className="work-text">City Of The Weak</div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="col-xs-5 col-sm-4 work-discography">
                                        <a href="http://http://www.marinacityband.com/" target="_blank">
                                            <img src="../../img/marinacity.jpg" />
                                            <div className="work-text-wrapper">
                                                <div className="work-text">Marina City</div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="col-xs-5 col-sm-4 work-discography">
                                        <a href="http://facebook.com/dependenceband" target="_blank">
                                            <img src="../../img/dependence.jpeg" />
                                            <div className="work-text-wrapper">
                                                <div className="work-text">Dependence</div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="col-xs-5 col-sm-4 work-discography">
                                        <a href="http://www.sylvnnoise.com/" target="_blank">
                                            <img src="../../img/sylvn.jpg" />
                                            <div className="work-text-wrapper">
                                                <div className="work-text">Sylvn</div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="col-xs-5 col-sm-4 work-discography">
                                        <a href="http://http://www.iymofficial.com/" target="_blank">
                                            <img src="../../img/inyourmemory.jpeg" />
                                            <div className="work-text-wrapper">
                                                <div className="work-text">In Your Memory</div>
                                            </div>
                                        </a>
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