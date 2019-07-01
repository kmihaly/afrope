import React, { Component } from 'react'
import Calendar from '../Calendar/Calendar'




class ScheduleButton extends Component {

    state = {
        animationClass: "",
        displayCalendar: false
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

    toggleCalendar = () => {
        this.setState(prevState => ({
            displayCalendar: !prevState.displayCalendar
          }));
    }

    render() {
        return (
            <>
                <a 
                    className={"schedule-button schedule-button--animated " + this.state.animationClass}
                    onMouseEnter={this.startScale}
                    onMouseLeave={this.endScale}
                    onClick={this.toggleCalendar}
                    href="https://fb.com/book/2094599147503954/"
                >
                    SCHEDULE A CALL
                </a>
                <Calendar display={this.state.displayCalendar} toggleForm={this.toggleCalendar}/>
            </>
        );
    }
}

export default ScheduleButton;