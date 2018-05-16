import React, { Component, Fragment } from 'react';

class Contact extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <Fragment>
                <a name="contact"></a>
                <div className="jumbotron jumbotron-fluid bg-dark text-white mb-0 jumbotron-contact">
                    <div className="contact-container pl-4 pr-4">
                        <h1 className="display-3">Hit us up!</h1>
                        <p className="">Interested in learning more? Shoot us an email and we can chat about your ideas and vision.
                        </p>
                        <a className="btn btn-outline-light" href="mailto:glassarrowaudio@gmail.com" role="button">Email Us!</a>
                        <div className="container">
                            <div className="row d-flex justify-content-center mt-3">
                                <div className="col-xs-3 social-icons">
                                    <a className="btn btn-social-icon btn-facebook p-2 animated custom-nav-link" href="http://facebook.com/GlassArrowAudio">
                                        <i className="fab fa-facebook fa-3x"></i>
                                    </a>
                                </div>
                                <div className="col-xs-3 social-icons">
                                    <a className="btn btn-social-icon btn-instagram p-2 animated custom-nav-link" href="http://instagram.com/glassarrowaudio">
                                        <i className="fas fa-camera-retro fa-3x"></i>
                                    </a>
                                </div>
                                <div className="col-xs-3 social-icons">
                                    <a className="btn btn-social-icon btn-twitter p-2 animated custom-nav-link" href="http://twitter.com/jmochabear">
                                        <i className="fab fa-twitter-square fa-3x"></i>
                                    </a>
                                </div>
                                <div className="col-xs-3 social-icons">
                                    <a className="btn btn-social-icon btn-twitter p-2 animated custom-nav-link" href="http://twitch.tv/detune">
                                        <i className="fab fa-twitch fa-3x"></i>
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </Fragment>
        );
    }

}

export default Contact;