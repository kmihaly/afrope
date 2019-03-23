import React, { Component } from 'react';
import ScheduleButton from '../components/ScheduleButton';

class Header extends Component {
    render() {
        return (<>
            <div className="cover">
            </div>
            <div className="header">
                <div className="heading">
                    <h1 className="heading__primary">AfRope Consultancy</h1>
                    <div className="logo-box">
                        <div className="logo-box__line"></div>
                        <img src={require('../images/afrope.svg')} alt="Logo" className="logo-box__logo" />
                        <div className="logo-box__line"></div>
                    </div>
                    <h1 className="heading__secondary">From Africa to Europe</h1>
                    <ScheduleButton>
                    </ScheduleButton>
                </div>
                <div className="jump-to-content-button">
                </div>
            </div>
            </>
        );
    }
}

export default Header;