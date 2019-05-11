import React, { Component } from 'react'
import ScheduleButton from '../../components/ScheduleButton/ScheduleButton'
import LogoBox from '../../components/LogoBox/LogoBox'

class Header extends Component {
    render() {
        return (<>
            <div className="cover" id="home">
            </div>
            <header className="header-section">
                <div className="heading">
                    <h1 className="heading__primary">AfRope Consultancy</h1>
                    <LogoBox color="white" logoWidthPercent="20" />
                    <h1 className="heading__secondary">From Africa to Europe</h1>
                    <ScheduleButton />
                </div>
                <a href="#about" className="jump-to-content-button">
                </a>
            </header>
            </>
        );
    }
}

export default Header;