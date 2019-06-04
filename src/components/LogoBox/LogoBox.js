import React, { Component } from 'react'
import Logo from '../Logo';

class LogoBox extends Component {

    render() {

        const { color, logoWidthPercent } = this.props;
        
        return (
            <div className={color}>
                <div className={color + "__line"}></div>
                    <Logo 
                        color={color} 
                        style={{
                            width: logoWidthPercent + "%",
                            minWidth: "40px",
                            maxWidth: "120px" 
                        }}
                    />
                <div className={color + "__line"}></div>
            </div>
        );
    }
}

export default LogoBox;