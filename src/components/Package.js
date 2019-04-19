import React, { Component } from 'react'

class Package extends Component {

    state = {
        transform_scale: 1,
        blur: 0,
        brightness: 100,
        opacity: 0
    }
    
    showCapture = () => {
        this.setState({
            transform_scale: 1.2,
            blur: 5,
            brightness: 60,
            opacity: 100
        })
    }
    
    hideCapture = () => {
        this.setState({
            transform_scale: 1,
            blur: 0,
            brightness: 100,
            opacity: 0
        })
    }

    render() {
        return (
            <>
                <div className={"package " + this.props.sizeClasses} onMouseEnter={this.showCapture} onMouseLeave={this.hideCapture}>
                    <div
                        style={{ transform: 'scale(' + this.state.transform_scale + ')', filter: 'blur(' + this.state.blur + 'px) brightness(' + this.state.brightness + '%)' }}
                        className={this.props.pictureClass}
                    >
                    </div>
                    <span className="package-caption" style={{ opacity: this.state.opacity }}>
                        {this.props.capture}
                    </span>
                </div> 
            </>
        );
    }
}

export default Package;