import React, { Component } from 'react';

class Logo extends Component {

    state={
        logoWidthPercent: "10%"
    }

    componentDidMount() {
        
        this.setState({
            logoWidthPercent: this.props.logoWidthPercent
        })
    }

    render() {
        const {color} = this.props

        return (
            <img 
                src={require('../images/logo/afrope.svg')} 
                alt="Logo" 
                className={color + "__logo " + this.props.className}
                style={this.props.style}  
            />
        )
    }
}

export default Logo;