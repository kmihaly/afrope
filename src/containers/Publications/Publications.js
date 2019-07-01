import React, { Component } from 'react'
import SectionTitle from '../../components/SectionTitle/SectionTitle'


class Publications extends Component {
    render() {
        return (
            <div className="publications-section" id="publications">
                <SectionTitle text="Publications" />
                <div className="graybox">
					<div className="graybox__description">
                    <p>There are several useful and trustworthy information we'd like to share with you. Feel free to read, ask about, or comment them. <br />
                    <a href="#majdlesz"><h3>--> AfRope Publications</h3></a>
                    </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Publications;