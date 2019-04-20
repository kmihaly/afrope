import React, { Component } from 'react';

class SectionTitle extends Component {
    render() {
        return (
            <div className="section-title">
                <div className="section-title__graybox">
                    <h1 className="section-title__graybox--font">{this.props.text}</h1>
                </div>
            </div>
        );
    }
}

export default SectionTitle;