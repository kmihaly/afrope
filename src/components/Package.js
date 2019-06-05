import React, { Component } from 'react'

class Package extends Component {

    state = {
        transform_scale: 1,
        blur: 0,
        brightness: 100,
        opacity: .5
    }
    
    showCaption = () => {
        this.setState({
            transform_scale: 1.2,
            blur: 5,
            brightness: 60,
            opacity: 1
        })
    }
    
    hideCaption = () => {
        this.setState({
            transform_scale: 1,
            blur: 0,
            brightness: 100,
            opacity: .5
        })
    }

    render() {
        return (
            <>
                <div className={"package " + this.props.sizeClasses} onMouseEnter={this.showCaption} onMouseLeave={this.hideCaption}>
                    <div
                        style={{ transform: 'scale(' + this.state.transform_scale + ')', filter: 'blur(' + this.state.blur + 'px) brightness(' + this.state.brightness + '%)' }}
                        className={this.props.pictureClass}
                    >
                    </div>
                    <span className="package-caption" style={{ opacity: this.state.opacity }}>
                        {this.props.caption}
                    </span>
                </div> 
            </>
        );
    }
}

export default Package;