import React, { Component } from 'react';
import LogoBox from '../../components/LogoBox/LogoBox';

class Footer extends Component {
    render() {
        return (
            <footer className="footer-section">
                <div className="row footer-section__row">
                    <div className="col-1-3 footer-section__navigation">
                        <ul className="footer-section__list">
                            <li><a href="#home" className="footer-section__link">Home</a></li>
                            <li><a href="#about" className="footer-section__link">About</a></li>
                            <li><a href="#services" className="footer-section__link">Services</a></li>
                            <li><a href="#clients" className="footer-section__link">Clients</a></li>
                            <li><a href="https://egyszerblog.com" className="footer-section__link">Publications</a></li>
                            <li><a href="#contact" className="footer-section__link">Contact</a></li>
                        </ul>
                    </div>
                    <div className="col-1-3 footer-section__logo-box">
                        <LogoBox color="white" logoWidthPercent="20" />
                    </div>
                    <div className="col-1-3 footer-section__copyright-box">
                        <p>
                            Built by <a href="mailto:kaloczy.mihaly@gmail.com" className="footer-section__link">Mihaly Kaloczy</a>.
                            Copyright &copy; by <a href="mailto:molnarzseee@gmail.com" className="footer-section__link">Zsuzsa Molnar</a>. You are not allowed to use any part of this webpage for neither personal nor commercial use, especially to claim the logo as yours. A credit to the author, Mihaly Kaloczy, is of course highly appreciated. A big thanks to Jonas Schmedtmann for his online courses.
                        </p>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;