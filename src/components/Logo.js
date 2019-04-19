import React, { Component } from 'react';

class Logo extends Component {

    render() {
        return <img src={require('../images/logo/afrope.svg')} alt="Logo" className={this.props.logoStyle} />
    }
}

export default Logo;