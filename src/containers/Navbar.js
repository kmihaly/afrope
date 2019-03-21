import React, { Component } from 'react';
import ScheduleButton from '../components/ScheduleButton';

class Navbar extends Component {

        render() {

        return (
            <div className="navbar">
                <div className="navbar-items">
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#services">Services</a>
                    <a href="#clients">Clients</a>
                    <a href="https://zsuzsaafrika.blog.hus">Publications</a>
                    <a href="#contact">Contact</a>
                    <ScheduleButton>
                    </ScheduleButton>
                </div>
            </div>
        );
    }
}

export default Navbar;