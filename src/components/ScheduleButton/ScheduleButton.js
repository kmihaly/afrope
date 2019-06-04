import React, { Component } from 'react';




class ScheduleButton extends Component {

    state = {
        animationClass: ""
    }

    startScale = () => {
        this.setState({
            animationClass: "schedule-button-hover"
        })
    }
    
    endScale = () => {
        this.setState({
            animationClass: ""
        })
    }

    render() {
        return (
            <a 
                className={"schedule-button schedule-button--animated " + this.state.animationClass}
                onMouseEnter={this.startScale}
                onMouseLeave={this.endScale}
                href="mailto:consulting@afrope.org"
            >
                SCHEDULE A CALL
            </a>
        );
    }
}

export default ScheduleButton;