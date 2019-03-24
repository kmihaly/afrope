import React, { Component } from 'react'
import Logo from './Logo';

class LogoBox extends Component {
    render() {
        return (
            <div className={this.props.style}>
                <div className={this.props.style + "__line"}></div>
                    <Logo style={this.props.style + "__logo"}></Logo>
                <div className={this.props.style + "__line"}></div>
            </div>
        );
    }
}

export default LogoBox;