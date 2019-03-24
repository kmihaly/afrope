import React, { Component } from 'react';

class Logo extends Component {

    render() {
        return <img src={require('../images/afrope.svg')} alt="Logo" className={this.props.style} />
    }
}

export default Logo;