import React, { Component } from 'react';

class AboutSection extends Component {
    render() {
        return (
            <div className="about-section">
                <div className={'about-section__picture-'+ (picture_number)}></div>
                <div className="about-section__text">{card_text}</div>
            </div>
        );
    }
}

export default AboutSection;