import React, { Component } from 'react'
import ScheduleButton from '../components/ScheduleButton'
import LogoBox from '../components/LogoBox'

class Header extends Component {
    render() {
        return (<>
            <div className="cover">
            </div>
            <div className="header">
                <div className="heading">
                    <h1 className="heading__primary">AfRope Consultancy</h1>
                    <LogoBox style={"logo-box--white"}>
                    </LogoBox>
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