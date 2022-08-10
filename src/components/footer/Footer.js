import React from 'react';
import "./footer.css";
import { Link, withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faLinkedin, faDribbble } from '@fortawesome/free-brands-svg-icons'
function Footer() {
    return (
        <div>
                 <footer>
                    <footer className="footer">
                        <div className="container">
                            <div className="row">
                                

                                <div className="col-lg-3 mb-4 mb-lg-0">
                                    <h4 className="mb-4">FOLLOW US</h4>
                                    <div to='#' className="btn btn-outline-light btn-social mx-1">
                                        <FontAwesomeIcon icon={faFacebook} />
                                    </div>
                                    <div to='#' className="btn btn-outline-light btn-social mx-1">
                                        <FontAwesomeIcon icon={faTwitter} />
                                    </div >
                                    <div  to='#' className="btn btn-outline-light btn-social mx-1">
                                        <FontAwesomeIcon icon={faLinkedin} />
                                    </div >
                                    <div  to='#' className="btn btn-outline-light btn-social mx-1">
                                        <FontAwesomeIcon icon={faDribbble} />
                                    </div >
                                </div>
                                

                                <div className="col-lg-2 mb-4 mb-lg-0">
                                    <div className="footer-menu">
                                        <ul>
                                            <li><div  to='#'><b><h4>Watch</h4></b></div ></li>
                                            <li><div  onClick={e => this.linkTo("#")}>Spotligh</div ></li>
                                            <li><div  onClick={e => this.linkTo("#")}>Movies</div ></li>
                                            <li><div  onClick={e => this.linkTo("#")}>TV</div ></li>
                                            <li><div  onClick={e => this.linkTo("#")}>Free</div ></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-2 mb-4 mb-lg-0">
                                <div className="footer-menu">
                                        <ul>
                                            <li><div  to='#'><b><h4>My Account</h4></b></div ></li>
                                            <li><div  onClick={e => this.linkTo("#")}>My Alt</div ></li>
                                            <li><div  onClick={e => this.linkTo("#")}>Account</div ></li>
                                            <li><div  onClick={e => this.linkTo("#")}>Setting</div ></li>
                                            <li><div  onClick={e => this.linkTo("#")}>Manage Devices</div ></li>
                                           
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-2 mb-4 mb-lg-0">
                                <div className="footer-menu">
                                        <ul>
                                            <li><div  to='#'><b><h4>Features</h4></b></div ></li>
                                            <li><div  onClick={e => this.linkTo("#")}>Lists</div ></li>
                                            <li><div  onClick={e => this.linkTo("#")}>Family</div ></li>
                                            <li><div  onClick={e => this.linkTo("#")}>Disc to digital</div ></li>
                                            <li><div  onClick={e => this.linkTo("#")}>Insta Watch</div ></li>
                                            <li><div  onClick={e => this.linkTo("#")}>Movies Anywhere</div ></li>
                                           
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-2 mb-4 mb-lg-0">
                                <div className="footer-menu">
                                        <ul>
                                            <li><div  to='#'><b><h4>Help</h4></b></div ></li>
                                            <li><div  onClick={e => this.linkTo("#")}>About Us</div ></li>
                                            <li><div  onClick={e => this.linkTo("#")}>Devices</div ></li>
                                            <li><div  onClick={e => this.linkTo("#")}>Support</div ></li>
                                            <li><div  onClick={e => this.linkTo("#")}>Forum</div ></li>
                                            <li><div  onClick={e => this.linkTo("#")}>Contact Us</div ></li>
                                            <li><div  onClick={e => this.linkTo("#")}>Jobs</div ></li>
                                           
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </footer>
                    <footer className="after-footer">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-3 mb-5 mb-lg-0">
                                    <h4 className="mb-4">Download the App</h4>
                                    <div className="footer-img"><img src="../../assets/img/image.png" alt="" />
                                    </div>
                                    <div className="footer-img"><img src="../../assets/img/Download_on_the_App_Store_Badge.svg.png" alt="" />
                                    </div>
                                    <div className="footer-img"><img src="../../assets/img/Google_Play_Store_badge_EN.svg.png" alt="" />
                                    </div>
                                   
                                </div>
                                <div className="col-lg-9 mb-5 mb-lg-0">
                                    <h4 className="mb-4">POPULAR SEARCHES</h4>
                                    <div className="row">
                                        <div className="col-6 p-1 col-sm-auto">
                                            <ul className="popular-search-links">
                                                <li><div  to="#">Movie of the month</div ></li>
                                                <li><div  onClick={e => this.linkTo("#")}>Most watched Tv series</div ></li>
                                                <li><div  onClick={e => this.linkTo("#")}>Top ten movies</div ></li>
                                                <li><div  to="#">All time favorite</div ></li>
                                                <li><div nk to="#">Classic</div ></li>
                                            </ul>
                                        </div>
                                        <div className="col-6 p-1 col-sm-auto">
                                        <ul className="popular-search-links">
                                                <li><div  to="#">Suspense</div ></li>
                                                <li><div  onClick={e => this.linkTo("#")}>Drama</div ></li>
                                                <li><div  onClick={e => this.linkTo("#")}>Romance</div ></li>
                                                <li><div  to="#">Musical </div ></li>
                                                <li><div  to="#">Block Buster</div ></li>
                                            </ul>
                                        </div>
                                        <div className="col-6 p-1 col-sm-auto">
                                        <ul className="popular-search-links">
                                                <li><div  to="#">All time hit</div ></li>
                                                <li><div  onClick={e => this.linkTo("#")}>Free shows</div ></li>
                                                <li><div  onClick={e => this.linkTo("#")}>Free Movies</div ></li>
                                                <li><div  to="#">Fairy tell</div ></li>
                                                <li><div  to="#">Thriller</div ></li>
                                            </ul>
                                        </div>
                                        <div className="col-6 p-1 col-sm-auto">
                                        <ul className="popular-search-links">
                                                <li><div  to="#">80's</div ></li>
                                                <li><div  onClick={e => this.linkTo("#")}>Cinema</div ></li>
                                                <li><div  onClick={e => this.linkTo("#")}>Horror</div ></li>
                                                <li><div  to="#">Mystery</div ></li>
                                                <li><div  to="#">Documentoty</div ></li>
                                            </ul>
                                        </div>
                                        <div className="col-6 p-1 col-sm-auto">
                                        <ul className="popular-search-links">
                                                <li><div  to="#">History</div ></li>
                                                <li><div  onClick={e => this.linkTo("#")}>Hit shows</div ></li>
                                                <li><div  onClick={e => this.linkTo("#")}>Hit Movies</div ></li>
                                                <li><div  to="#">New Releases</div ></li>
                                                <li><div  to="#">old is gold</div ></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </footer>
                    <section className="copyright py-4 text-white">
                        <div className="container">
                            <small className="pre-wrap">
                                <p>
                                    ©2014 - 2018, LLC. All Rights Reserved,
                                    
                        </p>
                            </small>
                        </div>
                    </section>
                </footer>
                </div>

        );
}

export default Footer;