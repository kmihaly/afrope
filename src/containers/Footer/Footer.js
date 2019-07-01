import React, { Component } from 'react';
import LogoBox from '../../components/LogoBox/LogoBox';

class Footer extends Component {
    render() {
        return (
            <footer className="footer-section">
                <div className="footer-section__row">
                    <div className="footer-section__navigation">
                            <a href="#home" className="footer-section__link">Home</a>
                            <a href="#about" className="footer-section__link">About</a>
                            <a href="#services" className="footer-section__link">Services</a>
                            <a href="#clients" className="footer-section__link">Clients</a>
                            <a href="#publications" className="footer-section__link">Publications</a>
                            <a href="#contact" className="footer-section__link">Contact</a>
                    </div>
                    <div className="col-1-3 footer-section__logo-box">
                        <LogoBox color="white" logoWidthPercent="20" />
                    </div>
                    <div className="footer-section__copyright-box">
                        <p>
                            Built by <a href="mailto:kaloczy.mihaly@gmail.com" className="footer-section__link">Mihaly Kaloczy</a>.
                            Copyright &copy; by <a href="mailto:consulting@afrope.org" className="footer-section__link">Zsuzsa Molnar</a>. You are not allowed to use any part of this webpage for neither personal nor commercial use, especially to claim the brand AfRope or the logo as yours. A credit to the author, Mihaly Kaloczy, is of course highly appreciated. A big thanks to Jonas Schmedtmann for his online courses.
                        </p>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;