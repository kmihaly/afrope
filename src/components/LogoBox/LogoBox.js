import React, { Component } from 'react'
import Logo from '../Logo';

class LogoBox extends Component {
    render() {
        return (
            <div className={this.props.boxStyle}>
                <div className={this.props.boxStyle + "__line"}></div>
                    <Logo logoStyle={this.props.boxStyle + "__logo"}></Logo>
                <div className={this.props.boxStyle + "__line"}></div>
            </div>
        );
    }
}

export default LogoBox;